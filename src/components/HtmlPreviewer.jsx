// src/components/HtmlPreviewer.jsx
'use client';

import React, { useState } from 'react';

export default function HtmlPreviewer({ pocetniKod }) {
  // Podrazumevani kod koji dočekuje učenika ako ne prosledimo ništa
  const defaultCode = `<style>
  body { font-family: sans-serif; text-align: center; padding: 20px; }
  .dugme { background: #795548; color: white; padding: 10px 20px; border-radius: 8px; border: none; }
</style>

<h2>Zdravo, svete! 🌍</h2>
<p>Ovo je tvoj prvi veb sajt.</p>
<button class="dugme">Klikni me</button>`;

  const [code, setCode] = useState(pocetniKod || defaultCode);

  return (
    // 'not-prose' štiti našu interaktivnu komponentu od Tailwind Typography stilova
    <div className="not-prose my-8 p-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* --- LEVA STRANA: Editor Koda --- */}
        <div className="flex flex-col h-87.5 shadow-sm rounded-xl overflow-hidden border border-gray-700">
          <div className="bg-[#2D2D2D] px-4 py-2 flex justify-between items-center border-b border-gray-900">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">index.html (Editor)</span>
            <div className="flex space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 w-full bg-[#1E1E1E] text-[#D4D4D4] font-mono text-sm p-4 focus:outline-none resize-none"
            spellCheck="false"
            placeholder="Kucaj HTML kod ovde..."
          />
        </div>

        {/* --- DESNA STRANA: Prikaz Uživo --- */}
        <div className="flex flex-col h-87.5 shadow-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white">
          <div className="bg-[#EAE3D9] dark:bg-[#2C2C2C] px-4 py-2 flex items-center">
            <span className="text-xs font-bold text-[#795548] dark:text-[#D2C4B3] uppercase tracking-wider">Rezultat Uživo</span>
          </div>
          <div className="flex-1 w-full relative bg-white">
            {/* srcDoc automatski renderuje string kao HTML dokument u izolovanom okruženju */}
            <iframe
              srcDoc={code}
              title="HTML Prikaz"
              className="absolute inset-0 w-full h-full border-none"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>

      </div>
    </div>
  );
}