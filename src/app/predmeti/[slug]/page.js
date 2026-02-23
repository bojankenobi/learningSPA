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
import HtmlPreviewer from '@/components/HtmlPreviewer';
import Quiz from '@/components/Quiz';
import CodePlayground from '@/components/CodePlayground';

// UVOZIMO POMOĆNU FUNKCIJU ZA PAGINACIJU
import { getAdjacentLessons } from '@/config/navigation';

export default async function PredmetPage({ params }) {
  // Await-ujemo params jer je to u novijim verzijama Next.js-a asinhrono
  const { slug } = await params; 
  
  // LOGIKA ZA PAGINACIJU (Sada koristi našu helper funkciju)
  const { prev, next } = getAdjacentLessons(slug);

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
          {/* 3. PROSLEĐUJEMO MAPU U MOTOR */}
          <MDXRemote 
            source={fileContent} 
            options={mdxOptions} 
            components={customComponents} 
          />
        </article>

        {/* 4. PAGINACIJA DOBIJA TAČNE PODATKE */}
        <Pagination prev={prev} next={next} />
      </div>

      <TableOfContents />
    </div>
  );
}