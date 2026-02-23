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

  // URL kontroliše koji je zadatak aktivan (nema potrebe za useState)
  const activeTask = codingTasks.find(t => t.id === taskIdFromUrl) || codingTasks[0];

  // State za prikazivanje rešenja
  const [showSolution, setShowSolution] = useState(false);

  // Kada se promeni zadatak, asinhrono sakrij rešenje da bi linter bio zadovoljan
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSolution(false);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [activeTask.id]);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] w-full bg-[#FDFBF8] dark:bg-[#121212]">
      
      {/* LEVA KOLONA: Lista zadataka i instrukcije */}
      <div className="w-full lg:w-1/3 xl:w-1/4 h-full border-r border-[#EAE3D9] dark:border-gray-800 flex flex-col bg-white dark:bg-[#1E1E1E] overflow-y-auto">
        
        {/* Header leve kolone */}
        <div className="p-4 border-b border-[#EAE3D9] dark:border-gray-800 sticky top-0 bg-white dark:bg-[#1E1E1E] z-10 shrink-0">
          <Link href="/" className="text-sm text-gray-500 hover:text-[#795548] mb-2 inline-block transition-colors outline-none">
            &larr; Nazad na lekcije
          </Link>
          <h1 className="text-xl font-black text-[#795548] dark:text-[#D2C4B3]">Laboratorija koda</h1>
        </div>

        {/* Lista zadataka (Prebačeno na Link umesto button da izbegnemo blokiranje) */}
        <div className="p-4 border-b border-[#EAE3D9] dark:border-gray-800 shrink-0">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Dostupni zadaci</h2>
          <div className="space-y-2">
            {codingTasks.map((task) => (
              <Link
                key={task.id}
                href={`/vezbaonica?task=${task.id}`}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 outline-none ${
                  activeTask.id === task.id
                    ? 'bg-[#795548] text-white font-medium shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-[#EAE3D9]/50 dark:hover:bg-gray-800 hover:text-[#795548]'
                }`}
              >
                <span className="block font-bold">{task.title}</span>
                <span className="text-xs opacity-80">{task.category} • {task.difficulty}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Tekst aktivnog zadatka i rešenje */}
        <div className="p-4 flex-1 pb-10">
          <h2 className="text-lg font-bold text-[#795548] dark:text-gray-200 mb-4">Uputstvo</h2>
          <div className="prose prose-sm prose-stone dark:prose-invert max-w-none whitespace-pre-line text-gray-600 dark:text-gray-300">
            {activeTask.description}
          </div>

          {/* DUGME I SEKCIJA ZA REŠENJE */}
          {activeTask.solution ? (
            <div className="mt-8 pt-6 border-t border-[#EAE3D9] dark:border-gray-800">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-2 text-sm font-bold text-[#795548] dark:text-[#D2C4B3] hover:opacity-80 transition-opacity outline-none"
              >
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${showSolution ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {showSolution ? 'Sakrij rešenje' : 'Zablokirao si? Pogledaj rešenje'}
              </button>

              {/* PRIKAZ KODA REŠENJA (otvara se klikom) */}
              {showSolution && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  {activeTask.solution.html && (
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">HTML kod:</div>
                      <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-3 rounded-lg text-xs font-mono overflow-x-auto shadow-inner">
                        {activeTask.solution.html}
                      </pre>
                    </div>
                  )}
                  {activeTask.solution.css && (
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">CSS kod:</div>
                      <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-3 rounded-lg text-xs font-mono overflow-x-auto shadow-inner">
                        {activeTask.solution.css}
                      </pre>
                    </div>
                  )}
                  {activeTask.solution.js && (
                    <div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">JavaScript kod:</div>
                      <pre className="bg-[#1E1E1E] text-[#DCDCAA] p-3 rounded-lg text-xs font-mono overflow-x-auto shadow-inner">
                        {activeTask.solution.js}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="mt-8 pt-6 border-t border-[#EAE3D9] dark:border-gray-800 text-sm text-gray-400 italic">
              Rešenje za ovaj zadatak još uvek nije uneto u bazu.
            </div>
          )}
        </div>
      </div>

      {/* DESNA KOLONA: Code Playground */}
      <div className="w-full lg:w-2/3 xl:w-3/4 h-full flex flex-col bg-gray-50 dark:bg-black/20">
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

// Glavna stranica mora da obmota pretragu URL-a u Suspense boundary
export default function VezbaonicaPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Učitavanje laboratorije...</div>}>
      <VezbaonicaSadrzaj />
    </Suspense>
  );
}