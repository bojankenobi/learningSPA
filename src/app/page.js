// src/app/page.js
'use client'; // Neophodno za korišćenje useProgress kuke

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';

export default function Home() {
  const { completedLessons } = useProgress();

  /**
   * Logika za grupni progres (OOP)
   * Pošto se OOP sada sastoji iz 4 dela, računamo procenat završenosti niza
   */
  const getOopProgress = () => {
    const oopSlugs = ['oop-1', 'oop-2', 'oop-3', 'oop-4'];
    const completed = oopSlugs.filter(slug => completedLessons.includes(slug)).length;
    return (completed / oopSlugs.length) * 100;
  };

  /**
   * Logika za pojedinačne lekcije
   */
  const getProgress = (slug) => {
    return completedLessons.includes(slug) ? 100 : 0;
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 animate-fadeIn">
      
      {/* --- 1. HERO SEKCIJA --- */}
      <div className="w-full max-w-4xl text-center mb-16 px-4">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#EAE3D9] text-[#795548] text-sm font-bold tracking-wide uppercase shadow-sm">
          Platforma za učenje v2.0
        </div>
        
        
      </div>

      {/* --- 2. STATISTIKA / METRIKA --- */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 px-4">
        <div className="bg-white dark:bg-[#1E1E1E] border border-[#EAE3D9] dark:border-gray-800 rounded-2xl p-6 text-center shadow-sm">
          <div className="text-3xl font-black text-[#795548] dark:text-[#D2C4B3] mb-1">3</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Glavne Oblasti</div>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] border border-[#EAE3D9] dark:border-gray-800 rounded-2xl p-6 text-center shadow-sm">
          <div className="text-3xl font-black text-[#795548] dark:text-[#D2C4B3] mb-1">∞</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Linija Koda</div>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] border border-[#EAE3D9] dark:border-gray-800 rounded-2xl p-6 text-center shadow-sm">
          <div className="text-3xl font-black text-[#795548] dark:text-[#D2C4B3] mb-1">100%</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Interaktivno</div>
        </div>
      </div>

      {/* --- 3. KARTICE PREDMETA (CURRICULUM) --- */}
      <div className="w-full max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-[#795548] dark:text-[#D2C4B3] mb-8 text-center sm:text-left border-b border-[#EAE3D9] dark:border-gray-800 pb-2">
          Izaberi svoj put učenja
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kartica 1: OOP (Sa grupnim progresom) */}
          <Link href="/predmeti/oop-1" className="group flex flex-col bg-white dark:bg-[#1E1E1E] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#D2C4B3] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="h-32 bg-linear-to-br from-[#EAE3D9] to-[#D2C4B3] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <svg className="w-16 h-16 text-[#795548] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white bg-[#9F8170] px-2 py-1 rounded">Java</span>
                <span className="text-xs font-semibold text-gray-500">Težina: Srednja</span>
              </div>
              <h3 className="text-xl font-bold text-[#795548] dark:text-[#D2C4B3] mb-2">Objektno Orijentisano Programiranje</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                Nauči kako da modeluješ stvarni svet kroz klase, objekte, nasleđivanje i polimorfizam.
              </p>
              
              {/* Progress Bar za OOP (Sada računa oop-1 do oop-4) */}
              <div className="mt-auto mb-4">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-tighter">
                  <span>Napredak</span>
                  <span>{Math.round(getOopProgress())}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#9F8170] transition-all duration-1000" 
                    style={{ width: `${getOopProgress()}%` }}
                  ></div>
                </div>
              </div>

              <div className="font-bold text-[#9F8170] group-hover:text-[#795548] dark:group-hover:text-white flex items-center gap-2">
                Započni kurs <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Kartica 2: Baze Podataka */}
          <Link href="/predmeti/baze-podataka" className="group flex flex-col bg-white dark:bg-[#1E1E1E] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#D2C4B3] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="h-32 bg-linear-to-br from-[#EAE3D9] to-[#D2C4B3] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <svg className="w-16 h-16 text-[#795548] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v10M12 21v-8M20 7v10" />
              </svg>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white bg-[#9F8170] px-2 py-1 rounded">SQL</span>
                <span className="text-xs font-semibold text-gray-500">Težina: Laka</span>
              </div>
              <h3 className="text-xl font-bold text-[#795548] dark:text-[#D2C4B3] mb-2">Baze Podataka i Informacioni Sistemi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                Savladaj relacioni model podataka. Vežbaj upite uživo u našem integrisanom SQL simulatoru.
              </p>

              {/* Progress Bar za Baze Podataka */}
              <div className="mt-auto mb-4">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-tighter">
                  <span>Napredak</span>
                  <span>{getProgress('baze-podataka')}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#9F8170] transition-all duration-1000" 
                    style={{ width: `${getProgress('baze-podataka')}%` }}
                  ></div>
                </div>
              </div>

              <div className="font-bold text-[#9F8170] group-hover:text-[#795548] dark:group-hover:text-white flex items-center gap-2">
                Započni lekciju <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Kartica 3: Veb Razvoj */}
          <Link href="/predmeti/veb-razvoj" className="group flex flex-col bg-white dark:bg-[#1E1E1E] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#D2C4B3] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="h-32 bg-linear-to-br from-[#EAE3D9] to-[#D2C4B3] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <svg className="w-16 h-16 text-[#795548] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17.25l4.5-4.5-4.5-4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white bg-[#9F8170] px-2 py-1 rounded">HTML/CSS</span>
                <span className="text-xs font-semibold text-gray-500">Težina: Srednja</span>
              </div>
              <h3 className="text-xl font-bold text-[#795548] dark:text-[#D2C4B3] mb-2">Moderni Veb Razvoj</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                Od osnovnih struktura do naprednih vizuelnih identiteta i interaktivnosti na klijentskoj strani.
              </p>

              {/* Progress Bar za Veb Razvoj */}
              <div className="mt-auto mb-4">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-tighter">
                  <span>Napredak</span>
                  <span>{getProgress('veb-razvoj')}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#9F8170] transition-all duration-1000" 
                    style={{ width: `${getProgress('veb-razvoj')}%` }}
                  ></div>
                </div>
              </div>

              <div className="font-bold text-[#9F8170] group-hover:text-[#795548] dark:group-hover:text-white flex items-center gap-2">
                Započni lekciju <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}