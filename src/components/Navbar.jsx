// src/components/Navbar.jsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) setMounted(true);
    }, 0);
    return () => { isMounted = false; };
  }, []);

  const handleOpenSearch = () => {
    window.dispatchEvent(new Event('otvori-pretragu'));
  };

  // NOVA FUNKCIJA: Emituje signal za otvaranje/zatvaranje menija
  const handleToggleSidebar = () => {
    window.dispatchEvent(new Event('toggle-sidebar'));
  };

  return (
    <header className="w-full h-16 border-b border-[#EAE3D9] dark:border-gray-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-[#FDFBF8]/80 dark:bg-[#121212]/80 backdrop-blur-md z-40">
      
      {/* LEVI DEO: Hamburger dugme */}
      <button 
        onClick={handleToggleSidebar}
        className="p-2 text-gray-500 hover:text-[#795548] dark:text-gray-400 dark:hover:text-[#D2C4B3] rounded-lg transition-colors bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700"
        title="Otvori/Zatvori meni"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* DESNI DEO: Lupa i Tema */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          onClick={handleOpenSearch} 
          className="p-2 text-gray-500 hover:text-[#795548] dark:text-gray-400 dark:hover:text-[#D2C4B3] rounded-full transition-colors"
          title="Pretraga (Ctrl+K)"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-gray-500 hover:text-[#795548] dark:text-gray-400 dark:hover:text-[#D2C4B3] rounded-full transition-colors"
            title="Promeni temu"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        )}
      </div>
    </header>
  );
}