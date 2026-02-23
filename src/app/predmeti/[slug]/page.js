// src/app/predmeti/[slug]/page.js
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';

// 1. UVOZIMO SVE NAŠE KOMPONENTE
import TableOfContents from '@/components/TableOfContents';
import SqlEditor from '@/components/SqlEditor';
import ZadatakZaVezbu from '@/components/ZadatakZaVezbu';
import Pagination from '@/components/Pagination';
import HtmlPreviewer from '@/components/HtmlPreviewer'; // Ovde uvozimo Previewer
import Quiz from '@/components/Quiz';
import { navItems } from '@/config/navigation';
import CodePlayground from '@/components/CodePlayground';

export default async function PredmetPage({ params }) {
  const { slug } = await params; 
  
  // Logika za Paginaciju
  const currentPath = `/predmeti/${slug}`;
  const currentIndex = navItems.findIndex(item => item.path === currentPath);
  
  let prevPage = null;
  let nextPage = null;
  
  if (currentIndex !== -1) {
    prevPage = currentIndex > 0 ? navItems[currentIndex - 1] : null;
    nextPage = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;
  }

  // Čitanje MDX-a
  const filePath = path.join(process.cwd(), 'sadrzaj', `${slug}.mdx`);
  let fileContent;
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    notFound();
  }

  const mdxOptions = { mdxOptions: { rehypePlugins: [rehypeHighlight] } };

  // 2. KREIRAMO MAPU (REČNIK) KOMPONENTI
  // Ovo govori MDX-u: "Kada u tekstu vidiš <HtmlPreviewer />, pozovi ovu JavaScript funkciju"
  const customComponents = { 
    SqlEditor, 
    ZadatakZaVezbu,
    HtmlPreviewer,
    Quiz,
    CodePlayground,
  };

  return (
    <div className="flex flex-col xl:flex-row gap-10 max-w-7xl mx-auto relative animate-fadeIn">
      
      <div className="flex-1 w-full min-w-0 pb-20">
        <article className="prose prose-stone lg:prose-lg max-w-none dark:prose-invert 
                            prose-headings:text-[#795548] dark:prose-headings:text-[#D2C4B3]
                            prose-a:text-[#9F8170] hover:prose-a:text-[#795548] dark:hover:prose-a:text-white
                            prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
          {/* 3. PROSLEĐUJEMO MAPU U MOTOR (Ovo je rešilo tvoju grešku!) */}
          <MDXRemote 
            source={fileContent} 
            options={mdxOptions} 
            components={customComponents} 
          />
        </article>

        <Pagination prev={prevPage} next={nextPage} />
      </div>

      <TableOfContents />
    </div>
  );
}