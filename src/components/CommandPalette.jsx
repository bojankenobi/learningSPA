// src/components/CommandPalette.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { searchIndex } from '../config/searchIndex';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const router = useRouter();

  // 1. Slušamo Ctrl+K, Escape, ALI I NAŠ CUSTOM EVENT ZA MOBILNI
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    // Ovo je tajni signal koji sluša dugme iz menija
    const handleOpenSearch = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('openSearch', handleOpenSearch); // Slušamo mobilni

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('openSearch', handleOpenSearch);
    };
  }, []);

  // 2. Fokusiranje inputa i čišćenje linter grešaka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      // Čistimo pretragu tek kada se prozor zatvori (rešava ESLint grešku)
      setTimeout(() => setQuery(''), 200);
    }
  }, [isOpen]);

  const filteredResults = query === '' 
    ? [] 
    : searchIndex.filter((item) => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  if (!isOpen) return null;

  return (
    // Popravljen z-index po ESLint preporuci (z-100 umesto z-[100])
    <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4 animate-fadeIn">
      
      <div 
        className="w-full max-w-2xl bg-[#FDFBF8] dark:bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-gray-200 dark:border-gray-800">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent border-none p-4 text-lg text-[#795548] dark:text-gray-200 focus:outline-none focus:ring-0 placeholder-gray-400"
            placeholder="Pretraži lekcije, pojmove, vežbe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => setIsOpen(false)} className="text-xs font-bold bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-2 py-1 rounded">
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query === '' ? (
            // Popravljeni navodnici koristeći &quot; za ESLint
            <div className="p-8 text-center text-gray-500 text-sm">
              Ukucaj pojam za pretragu (npr. &quot;Java&quot;, &quot;SQL&quot;).
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm">
              Nema rezultata za pojam <span className="font-bold">&quot;{query}&quot;</span>.
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredResults.map((result) => (
                <li key={result.id}>
                  <button
                    onClick={() => handleSelect(result.path)}
                    className="w-full flex flex-col text-left px-4 py-3 hover:bg-[#EAE3D9] dark:hover:bg-[#2C2C2C] rounded-xl transition-colors group"
                  >
                    <span className="text-xs font-bold text-[#9F8170] uppercase mb-1 tracking-wider">
                      {result.category}
                    </span>
                    <span className="text-[#795548] dark:text-gray-200 font-medium group-hover:text-[#795548] dark:group-hover:text-white">
                      {result.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}