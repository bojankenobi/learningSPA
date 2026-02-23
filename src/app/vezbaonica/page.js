// src/app/vezbaonica/page.js
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { codingTasks } from '@/config/tasks';
import CodePlayground from '@/components/CodePlayground'; 
import Link from 'next/link';

function VezbaonicaSadrzaj() {
  const searchParams = useSearchParams();
  const taskIdFromUrl = searchParams.get('task');

  const activeTask = codingTasks.find(t => t.id === taskIdFromUrl) || codingTasks[0];

  const [showSolution, setShowSolution] = useState(false);
  const [showTaskListMobile, setShowTaskListMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSolution(false);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [activeTask.id]);

  return (
    <div className="flex flex-col lg:flex-row h-screen lg:h-[calc(100vh-64px)] w-full bg-[#FDFBF8] dark:bg-[#121212] overflow-hidden">
      
      {/* LEVA KOLONA: Lista zadataka i instrukcije */}
      <div className={`
        w-full lg:w-1/3 xl:w-1/4 border-[#EAE3D9] dark:border-gray-800 flex flex-col bg-white dark:bg-[#1E1E1E]
        ${showTaskListMobile ? 'h-full fixed inset-0 z-50' : 'h-auto lg:h-full border-r'}
      `}>
        
        {/* Header leve kolone */}
        <div className="p-4 border-b border-[#EAE3D9] dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white dark:bg-[#1E1E1E] z-10 shrink-0">
          <div>
            <Link href="/" className="text-[10px] uppercase font-bold text-gray-400 hover:text-[#795548] mb-1 inline-block transition-colors outline-none">
              &larr; Nazad na lekcije
            </Link>
            <h1 className="text-sm lg:text-xl font-black text-[#795548] dark:text-[#D2C4B3]">Laboratorija koda</h1>
          </div>

          <button 
            onClick={() => setShowTaskListMobile(!showTaskListMobile)}
            className="lg:hidden p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-[#795548] dark:text-[#D2C4B3] shadow-sm"
          >
            {showTaskListMobile ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex items-center gap-2 px-1">
                <span className="text-xs font-bold uppercase tracking-wider">Zadaci</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* LISTA ZADATAKA - Desktop limitirana na 40% visine da ne guši uputstvo */}
        <div className={`
          ${showTaskListMobile ? 'flex' : 'hidden lg:flex'} 
          flex-col p-4 border-b border-[#EAE3D9] dark:border-gray-800 bg-gray-50/50 dark:bg-black/10 overflow-y-auto 
          lg:max-h-[40%] shrink-0
        `}>
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Dostupni zadaci</h2>
          <div className="space-y-1">
            {codingTasks.map((task) => (
              <Link
                key={task.id}
                href={`/vezbaonica?task=${task.id}`}
                onClick={() => setShowTaskListMobile(false)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 outline-none ${
                  activeTask.id === task.id
                    ? 'bg-[#795548] text-white font-medium shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-[#EAE3D9]/50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="font-bold">{task.title}</div>
                <div className="text-[10px] opacity-70 uppercase tracking-tighter">{task.category}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* UPUTSTVO ZA RAD - Uvek vidljivo na desktopu u preostalom prostoru */}
        <div className={`p-4 flex-1 overflow-y-auto pb-10 ${showTaskListMobile ? 'hidden' : 'block'}`}>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[10px] font-black uppercase text-gray-400 tracking-widest italic">Uputstvo za rad</h2>
            <span className="text-[10px] px-2 py-0.5 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 rounded-full font-bold">
                {activeTask.difficulty}
            </span>
          </div>
          <div className="prose prose-sm prose-stone dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            {activeTask.description}
          </div>

          {/* DUGME I SEKCIJA ZA REŠENJE */}
          {activeTask.solution ? (
            <div className="mt-8 pt-6 border-t border-[#EAE3D9] dark:border-gray-800">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-2 text-xs font-bold text-[#795548] dark:text-[#D2C4B3] hover:opacity-80 transition-opacity outline-none"
              >
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 ${showSolution ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {showSolution ? 'Sakrij rešenje' : 'Zablokirao si? Pogledaj rešenje'}
              </button>

              {showSolution && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  {activeTask.solution.html && (
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">HTML kod:</div>
                      <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-3 rounded-lg text-[10px] font-mono overflow-x-auto shadow-inner">
                        {activeTask.solution.html}
                      </pre>
                    </div>
                  )}
                  {activeTask.solution.css && (
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">CSS kod:</div>
                      <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-3 rounded-lg text-[10px] font-mono overflow-x-auto shadow-inner">
                        {activeTask.solution.css}
                      </pre>
                    </div>
                  )}
                  {activeTask.solution.js && (
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">JavaScript kod:</div>
                      <pre className="bg-[#1E1E1E] text-[#DCDCAA] p-3 rounded-lg text-[10px] font-mono overflow-x-auto shadow-inner">
                        {activeTask.solution.js}
                      </pre>
                    </div>
                  )}
                  {activeTask.solution.explanation && (
                    <div className="mt-4 p-3 bg-[#EAE3D9]/30 dark:bg-gray-800/50 border-l-2 border-[#795548] rounded-r-lg text-xs text-gray-700 dark:text-gray-300">
                      <span className="font-bold text-[#795548] dark:text-[#D2C4B3] flex items-center gap-2 mb-1">
                        Objašnjenje
                      </span>
                      {activeTask.solution.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="mt-8 pt-6 border-t border-[#EAE3D9] dark:border-gray-800 text-[10px] text-gray-400 italic">
              Rešenje za ovaj zadatak još uvek nije uneto u bazu.
            </div>
          )}
        </div>
      </div>

      {/* DESNA KOLONA: Code Playground */}
      <div className={`flex-1 flex flex-col bg-gray-50 dark:bg-black/20 ${showTaskListMobile ? 'hidden lg:flex' : 'flex'}`}>
        <div className="flex-1 overflow-hidden" key={activeTask.id}>
          <CodePlayground 
            mode={activeTask.mode || 'web'} 
            initialHtml={activeTask.initialHtml}
            initialCss={activeTask.initialCss}
            initialJs={activeTask.initialJs}
          />
        </div>
      </div>

    </div>
  );
}

export default function VezbaonicaPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Učitavanje laboratorije...</div>}>
      <VezbaonicaSadrzaj />
    </Suspense>
  );
}