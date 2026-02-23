'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/config/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-[#1E1E1E] border-r border-[#EAE3D9] dark:border-gray-800 min-h-screen p-4 hidden md:block shrink-0">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-black text-[#795548] dark:text-[#D2C4B3] tracking-tight">
          Moja Škola
        </h2>
      </div>

      <nav className="space-y-6">
        {navItems.map((kategorija) => (
          <div key={kategorija.id} className="animate-fadeIn">
            
            {/* GLAVNI NASLOV KATEGORIJE (npr. OOP Java) */}
            <div className="flex items-center gap-2 mb-2 px-2 text-gray-400 dark:text-gray-500">
              {/* Ikonica */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={kategorija.icon} />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider">
                {kategorija.title}
              </span>
            </div>

            {/* POD-LEKCIJE (Samo ako kategorija ima subItems) */}
            {kategorija.subItems && (
              <ul className="space-y-1 border-l-2 border-[#EAE3D9] dark:border-gray-800 ml-4 pl-2">
                {kategorija.subItems.map((lekcija) => {
                  const isActive = pathname === lekcija.path;
                  
                  return (
                    <li key={lekcija.id}>
                      <Link 
                        href={lekcija.path}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive 
                            ? 'bg-[#795548] text-white font-medium shadow-sm' 
                            : 'text-gray-600 dark:text-gray-400 hover:bg-[#EAE3D9]/50 dark:hover:bg-gray-800 hover:text-[#795548] dark:hover:text-white'
                        }`}
                      >
                        {lekcija.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* OBIČAN LINK (Ako neka kategorija nema subItems, već je samo običan link) */}
            {!kategorija.subItems && kategorija.path && (
               <Link 
                 href={kategorija.path}
                 className={`flex items-center gap-2 px-2 py-2 rounded-lg text-sm transition-all duration-200 ${
                   pathname === kategorija.path
                     ? 'bg-[#795548] text-white font-medium shadow-sm' 
                     : 'text-gray-600 dark:text-gray-400 hover:bg-[#EAE3D9]/50 hover:text-[#795548]'
                 }`}
               >
                 {kategorija.title}
               </Link>
            )}

          </div>
        ))}
      </nav>
    </aside>
  );
}