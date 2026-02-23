// src/components/CodePlayground.jsx
'use client';

import { useState, useEffect, useRef } from 'react';

export default function CodePlayground({ 
  mode = 'web', // 'web' za HTML/CSS/JS, ili 'console' za samo JS
  initialHtml = '<h1>Pozdrav svete!</h1>\n<p>Ovo je moj prvi kod.</p>', 
  initialCss = 'h1 { color: #795548; }', 
  initialJs = 'console.log("Sistem spreman!");' 
}) {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [srcDoc, setSrcDoc] = useState('');
  const [logs, setLogs] = useState([]);
  
  const iframeRef = useRef(null);

  // KLJUČNA IZMENA: Kada stigne novi zadatak (promene se props-i), resetuj editor!
  useEffect(() => {
    const timer = setTimeout(() => {
      setHtml(initialHtml);
      setCss(initialCss);
      setJs(initialJs);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [initialHtml, initialCss, initialJs]);

  // Generisanje koda koji se ubacuje u Iframe
  useEffect(() => {
    // Odlaganje izvršavanja (Debounce) da ne bi kočilo dok korisnik kuca
    const timeout = setTimeout(() => {
      if (mode === 'web') {
        // WEB MOD: Spaja HTML, CSS i JS i renderuje pravu stranicu
        setSrcDoc(`
          <html>
            <head>
              <style>${css}</style>
            </head>
            <body>
              ${html}
              <script>${js}<\/script>
            </body>
          </html>
        `);
      } else if (mode === 'console') {
        // CONSOLE MOD: Presreće console.log i šalje ga nazad u našu React komponentu
        setLogs([]); // Čisti stare logove pri svakoj promeni
        setSrcDoc(`
          <html>
            <body>
              <script>
                // Presretanje console.log
                const originalLog = console.log;
                const originalError = console.error;
                
                console.log = function(...args) {
                  window.parent.postMessage({ source: 'playground', type: 'log', message: args.join(' ') }, '*');
                  originalLog.apply(console, args);
                };
                
                console.error = function(...args) {
                  window.parent.postMessage({ source: 'playground', type: 'error', message: args.join(' ') }, '*');
                  originalError.apply(console, args);
                };
                
                window.onerror = function(msg) {
                  window.parent.postMessage({ source: 'playground', type: 'error', message: msg }, '*');
                };

                try {
                  ${js}
                } catch (err) {
                  console.error(err.toString());
                }
              <\/script>
            </body>
          </html>
        `);
      }
    }, 500); // Čeka pola sekunde nakon što korisnik prestane da kuca

    return () => clearTimeout(timeout);
  }, [html, css, js, mode]);

  // Slušač poruka iz Iframe-a (za Console mod)
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.source === 'playground') {
        setLogs((prev) => [...prev, { type: event.data.type, msg: event.data.message }]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    // Uklonjen my-8 da bi u vežbaonici komponenta zauzela celu raspoloživu visinu
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm h-full">
      
      {/* GORNJI DEO: Editori (sada zauzimaju više prostora po vertikali) */}
      <div className={`grid ${mode === 'web' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} bg-[#1E1E1E] border-b border-gray-700 h-1/2`}>
        
        {/* HTML Editor */}
        {mode === 'web' && (
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700 h-full">
            <div className="bg-[#2D2D2D] text-gray-300 text-xs font-bold px-3 py-1.5 uppercase tracking-wider shrink-0">HTML</div>
            <textarea
              className="w-full h-full p-3 bg-[#1E1E1E] text-[#D4D4D4] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#9F8170]"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck="false"
            />
          </div>
        )}

        {/* CSS Editor */}
        {mode === 'web' && (
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700 h-full">
            <div className="bg-[#2D2D2D] text-gray-300 text-xs font-bold px-3 py-1.5 uppercase tracking-wider shrink-0">CSS</div>
            <textarea
              className="w-full h-full p-3 bg-[#1E1E1E] text-[#D4D4D4] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#9F8170]"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck="false"
            />
          </div>
        )}

        {/* JS Editor */}
        <div className="flex flex-col h-full">
          <div className="bg-[#2D2D2D] text-gray-300 text-xs font-bold px-3 py-1.5 uppercase tracking-wider shrink-0">JavaScript</div>
          <textarea
            className={`w-full h-full p-3 bg-[#1E1E1E] text-[#DCDCAA] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#9F8170]`}
            value={js}
            onChange={(e) => setJs(e.target.value)}
            spellCheck="false"
          />
        </div>
      </div>

      {/* DONJI DEO: Rezultat ili Konzola (zauzima ostatak prostora) */}
      <div className="bg-white dark:bg-black relative h-1/2 flex flex-col">
        <div className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-800 text-gray-500 text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg z-10 shrink-0">
          {mode === 'web' ? 'Prikaz (Live Preview)' : 'Konzola (Console)'}
        </div>

        {mode === 'web' ? (
          // WEB PREVIEW: Iframe sada zauzima celu visinu kontejnera
          <iframe
            ref={iframeRef}
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="w-full flex-1 bg-white"
            frameBorder="0"
          />
        ) : (
          // CONSOLE PREVIEW: Crni prozor za logove
          <div className="w-full flex-1 bg-[#0C0C0C] text-[#CCCCCC] font-mono text-sm p-4 overflow-y-auto">
            {/* Skriveni iframe koji samo izvršava JS i šalje poruke */}
            <iframe ref={iframeRef} srcDoc={srcDoc} className="hidden" sandbox="allow-scripts" />
            
            {logs.length === 0 ? (
              <span className="text-gray-600 italic">Nema ispisa u konzoli...</span>
            ) : (
              logs.map((log, index) => (
                <div key={index} className={`border-b border-gray-800 pb-1 mb-1 ${log.type === 'error' ? 'text-red-400' : ''}`}>
                  <span className="text-gray-500 select-none mr-2">{'>'}</span> 
                  {log.msg}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}