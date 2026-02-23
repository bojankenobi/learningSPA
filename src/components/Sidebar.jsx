// src/components/Sidebar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/config/navigation';

// Pomoćna komponenta za svaku kategoriju
function NavCategory({ kategorija, pathname, onLinkClick }) {
  const hasActiveChild = kategorija.subItems?.some(lekcija => lekcija.path === pathname);
  const [isOpen, setIsOpen] = useState(hasActiveChild || false);

  useEffect(() => {
    if (hasActiveChild) {
      const timer = setTimeout(() => setIsOpen(true), 0);
      return () => clearTimeout(timer);
    }
  }, [hasActiveChild]);

  return (
    <div className="animate-fadeIn">
      {kategorija.subItems ? (
        <>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between mb-1 px-2 py-2 text-gray-400 hover:text-[#795548] dark:text-gray-500 dark:hover:text-[#D2C4B3] transition-colors rounded-lg group outline-none"
          >
            <div className="flex items-center gap-2">
              {kategorija.icon && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={kategorija.icon} />
                </svg>
              )}
              <span className="text-xs font-bold uppercase tracking-wider group-hover:text-[#795548] dark:group-hover:text-[#D2C4B3]">
                {kategorija.title}
              </span>
            </div>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div 
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-1 border-l-2 border-[#EAE3D9] dark:border-gray-800 ml-4 pl-2 mt-1">
                {kategorija.subItems.map((lekcija) => {
                  const isActive = pathname === lekcija.path;
                  return (
                    <li key={lekcija.id}>
                      <Link 
                        href={lekcija.path}
                        onClick={onLinkClick} 
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
            </div>
          </div>
        </>
      ) : (
        kategorija.path && (
           <Link 
             href={kategorija.path}
             onClick={onLinkClick} 
             className={`flex items-center gap-2 px-2 py-2 mb-2 rounded-lg text-sm transition-all duration-200 ${
               pathname === kategorija.path
                 ? 'bg-[#795548] text-white font-medium shadow-sm' 
                 : 'text-gray-600 dark:text-gray-400 hover:bg-[#EAE3D9]/50 hover:text-[#795548] dark:hover:text-white'
             }`}
           >
             {kategorija.icon && (
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={kategorija.icon} />
               </svg>
             )}
             <span className="font-medium text-xs uppercase tracking-wider">{kategorija.title}</span>
           </Link>
        )
      )}
    </div>
  );
}

// Glavna komponenta Sidebar
export default function Sidebar() {
  const pathname = usePathname();
  
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  useEffect(() => {
    const handleToggle = () => {
      if (window.innerWidth < 768) {
        setIsMobileOpen(prev => !prev);
      } else {
        setIsDesktopOpen(prev => !prev);
      }
    };

    window.addEventListener('toggle-sidebar', handleToggle);
    return () => window.removeEventListener('toggle-sidebar', handleToggle);
  }, []);

  const closeMobileSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm animate-fadeIn"
          onClick={closeMobileSidebar}
        />
      )}

      {/* OVDE JE IZMENA: zamenjen md:relative sa md:sticky md:top-0 */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-screen bg-white dark:bg-[#1E1E1E] border-r border-[#EAE3D9] dark:border-gray-800 shrink-0 overflow-y-auto 
          transition-all duration-300 ease-in-out w-64
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:sticky md:top-0
          ${isDesktopOpen ? 'md:translate-x-0 md:mr-0' : 'md:-translate-x-full md:-ml-64 md:border-none'}
        `}
      >
        <div className="flex items-center justify-between mb-8 px-6 pt-6">
          <Link 
            href="/" 
            onClick={closeMobileSidebar}
            className="hover:opacity-80 transition-opacity outline-none"
          >
            <h2 className="text-xl font-black text-[#795548] dark:text-[#D2C4B3] tracking-tight">
              Moja Škola
            </h2>
          </Link>

          <button 
            onClick={closeMobileSidebar}
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="space-y-2 px-4 pb-10">
          {navItems.map((kategorija) => (
            <NavCategory 
              key={kategorija.id} 
              kategorija={kategorija} 
              pathname={pathname} 
              onLinkClick={closeMobileSidebar}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}