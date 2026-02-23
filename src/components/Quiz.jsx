// src/components/Quiz.jsx
'use client';

import React, { useState } from 'react';

export default function Quiz({ pitanje = "Pitanje nije definisano", opcije = "", tacanOdgovorIndex = "0" }) {
  // MAGIJA: Uzimamo običan tekst i cepamo ga po znaku | da bismo dobili pravi niz!
  const parsiraneOpcije = typeof opcije === 'string' ? opcije.split('|') : [];
  
  // Osiguravamo da je indeks uvek broj, a ne tekst
  const tacanIndex = parseInt(tacanOdgovorIndex, 10);

  const [izabrano, setIzabrano] = useState(null);
  const [potvrdjeno, setPotvrdjeno] = useState(false);

  // Defanziva: Ako je tekst bio prazan, izbacujemo grešku
  if (parsiraneOpcije.length === 0 || parsiraneOpcije[0] === "") {
    return (
      <div className="not-prose my-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 font-medium">
        ⚠️ Greška: Opcije nisu ubačene. Koristite znak | da odvojite odgovore.
      </div>
    );
  }

  const proveriOdgovor = () => {
    if (izabrano !== null) setPotvrdjeno(true);
  };

  return (
    <div className="not-prose my-8 p-6 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm animate-fadeIn">
      <h3 className="text-lg font-bold text-[#795548] dark:text-[#D2C4B3] mb-4 leading-relaxed">
        🧠 Provera znanja: {pitanje}
      </h3>
      
      <div className="space-y-3 mb-6">
        {parsiraneOpcije.map((opcija, index) => {
          let stilovi = "border-gray-200 dark:border-gray-700 hover:border-[#D2C4B3] dark:hover:border-gray-500";
          
          if (potvrdjeno) {
            if (index === tacanIndex) {
              stilovi = "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400"; // Tačan
            } else if (izabrano === index) {
              stilovi = "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400"; // Pogrešno
            } else {
              stilovi = "opacity-50 border-gray-200 dark:border-gray-800"; // Ostali
            }
          } else if (izabrano === index) {
            stilovi = "border-[#795548] bg-[#F4F1ED] dark:bg-[#2C2C2C]"; // Selektovan
          }

          return (
            <button
              key={index}
              onClick={() => !potvrdjeno && setIzabrano(index)}
              disabled={potvrdjeno}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ${stilovi}`}
            >
              {opcija.trim()}
            </button>
          );
        })}
      </div>

      {!potvrdjeno ? (
        <button
          onClick={proveriOdgovor}
          disabled={izabrano === null}
          className="w-full bg-[#795548] disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed hover:bg-[#9F8170] text-white py-3 rounded-xl font-bold transition-colors shadow-sm"
        >
          Potvrdi odgovor
        </button>
      ) : (
        <div className={`p-4 rounded-xl font-bold text-center animate-fadeIn shadow-sm ${
          izabrano === tacanIndex 
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800' 
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800'
        }`}>
          {izabrano === tacanIndex ? '🎉 Briljantno! Tačan odgovor.' : '❌ Nije tačno. Pokušaj ponovo u sledećem čitanju.'}
        </div>
      )}
    </div>
  );
}