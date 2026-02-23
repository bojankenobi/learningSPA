// src/components/SqlEditor.jsx
'use client';

import React, { useState } from 'react';

export default function SqlEditor({ ocekivaniUpit, porukaUspesno }) {
  const [query, setQuery] = useState('');
  const [rezultat, setRezultat] = useState(null);
  const [greska, setGreska] = useState(false);

  const izvrsiUpit = () => {
    if (!query.trim()) return;
    const cistUpit = query.trim().toLowerCase().replace(/\s+/g, ' ');
    const tacanUpit = ocekivaniUpit.toLowerCase().replace(/\s+/g, ' ');

    if (cistUpit === tacanUpit || cistUpit === tacanUpit + ';') {
      setRezultat(porukaUspesno || 'Upit je uspešno izvršen!');
      setGreska(false);
    } else {
      setRezultat('Greška u sintaksi ili netačan upit.');
      setGreska(true);
    }
  };

  return (
    <div className="not-prose my-8 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden animate-fadeIn">
      <div className="bg-[#F4F1ED] dark:bg-[#2D2D2D] px-4 py-2 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <span className="text-sm font-bold text-[#795548] dark:text-[#D2C4B3] uppercase tracking-wider">SQL Simulator</span>
      </div>
      <div className="p-4 bg-[#1e1e1e]">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Unesite SELECT upit..."
          className="w-full bg-transparent text-gray-100 font-mono text-sm outline-none min-h-[100px] resize-none"
          spellCheck="false"
        />
      </div>
      <div className="p-4 bg-gray-50 dark:bg-[#252525] flex flex-col sm:flex-row items-center gap-4">
        <button onClick={izvrsiUpit} className="bg-[#795548] hover:bg-[#9F8170] text-white px-6 py-2 rounded-lg font-bold transition-all">Izvrši Upit</button>
        {rezultat && (
          <div className={`flex-1 p-3 rounded-lg text-sm font-medium ${greska ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800' : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'}`}>
            {rezultat}
          </div>
        )}
      </div>
    </div>
  );
}