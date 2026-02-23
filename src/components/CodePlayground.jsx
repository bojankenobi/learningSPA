'use client';

import { useState, useEffect, useRef } from 'react';

export default function CodePlayground({ 
  mode = 'web', // 'web' za HTML/CSS/JS, ili 'console' za samo JS
  defaultHtml = '<h1>Pozdrav svete!</h1>\n<p>Ovo je moj prvi kod.</p>', 
  defaultCss = 'h1 { color: #795548; }', 
  defaultJs = 'console.log("Sistem spreman!");' 
}) {
  const [html, setHtml] = useState(defaultHtml);
  const [css, setCss] = useState(defaultCss);
  const [js, setJs] = useState(defaultJs);
  const [srcDoc, setSrcDoc] = useState('');
  const [logs, setLogs] = useState([]);
  
  const iframeRef = useRef(null);

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
    <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden my-8 shadow-sm">
      
      {/* GORNJI DEO: Editori */}
      <div className={`grid ${mode === 'web' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} bg-[#1E1E1E] border-b border-gray-700`}>
        
        {/* HTML Editor (Samo u web modu) */}
        {mode === 'web' && (
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700">
            <div className="bg-[#2D2D2D] text-gray-300 text-xs font-bold px-3 py-1.5 uppercase tracking-wider">HTML</div>
            <textarea
              className="w-full h-40 p-3 bg-[#1E1E1E] text-[#D4D4D4] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#9F8170]"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck="false"
            />
          </div>
        )}

        {/* CSS Editor (Samo u web modu) */}
        {mode === 'web' && (
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-700">
            <div className="bg-[#2D2D2D] text-gray-300 text-xs font-bold px-3 py-1.5 uppercase tracking-wider">CSS</div>
            <textarea
              className="w-full h-40 p-3 bg-[#1E1E1E] text-[#D4D4D4] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#9F8170]"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck="false"
            />
          </div>
        )}

        {/* JS Editor (Uvek prisutan) */}
        <div className="flex flex-col">
          <div className="bg-[#2D2D2D] text-gray-300 text-xs font-bold px-3 py-1.5 uppercase tracking-wider">JavaScript</div>
          <textarea
            className={`w-full ${mode === 'console' ? 'h-48' : 'h-40'} p-3 bg-[#1E1E1E] text-[#DCDCAA] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#9F8170]`}
            value={js}
            onChange={(e) => setJs(e.target.value)}
            spellCheck="false"
          />
        </div>
      </div>

      {/* DONJI DEO: Rezultat ili Konzola */}
      <div className="bg-white dark:bg-black relative">
        <div className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-800 text-gray-500 text-[10px] font-bold px-2 py-1 uppercase rounded-bl-lg z-10">
          {mode === 'web' ? 'Prikaz (Live Preview)' : 'Konzola (Console)'}
        </div>

        {mode === 'web' ? (
          // WEB PREVIEW: Renderuje iframe sa kodom
          <iframe
            ref={iframeRef}
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="w-full h-64 bg-white"
            frameBorder="0"
          />
        ) : (
          // CONSOLE PREVIEW: Crni prozor za logove
          <div className="w-full h-64 bg-[#0C0C0C] text-[#CCCCCC] font-mono text-sm p-4 overflow-y-auto">
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