'use client';

import { useState } from 'react';

export default function ZadatakZaVezbu({ naslov, kod, analiza }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-8 border border-gray-800 rounded-xl overflow-hidden bg-[#1A1A1A] shadow-2xl transition-all duration-300">
      {/* Dugme koje kontroliše otvaranje rešenja */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left transition-all hover:bg-[#252525] group"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-[#795548] text-white' : 'bg-gray-800 text-[#795548]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17H4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="font-semibold text-[#D2C4B3] group-hover:text-white transition-colors">
            {isOpen ? 'Sakrij rešenje' : naslov}
          </span>
        </div>
        
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Sadržaj rešenja koji se animirano pojavljuje */}
      {isOpen && (
        <div className="border-t border-gray-800 bg-[#121212] p-6 animate-in fade-in slide-in-from-top-2 duration-300">
          
          {/* Blok za KOD */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-[#795548]">
              <span className="text-xs font-black uppercase tracking-widest">KOD REŠENJA</span>
              <div className="h-px flex-1 bg-gray-800"></div>
            </div>
            <div className="relative group">
              <pre className="p-5 rounded-lg bg-black/40 text-[#DCDCAA] font-mono text-sm overflow-x-auto border border-white/5 scrollbar-thin scrollbar-thumb-gray-800">
                <code>{kod}</code>
              </pre>
            </div>
          </div>

          {/* Blok za ANALIZU */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#795548]">
              <span className="text-xs font-black uppercase tracking-widest">OBJAŠNJENJE</span>
              <div className="h-px flex-1 bg-gray-800"></div>
            </div>
            <p className="text-[#D2C4B3] leading-relaxed text-sm bg-[#1A1A1A] p-4 rounded-lg border-l-4 border-[#795548]">
              {analiza}
            </p>
          </div>
          
        </div>
      )}
    </div>
  );
}