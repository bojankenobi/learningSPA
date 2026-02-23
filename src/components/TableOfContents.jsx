'use client'; // Neophodno jer pratimo skrolovanje prozora

import React, { useEffect, useState } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // 1. Pronalazimo sve naslove unutar glavnog 'article' taga
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    
    const headingData = elements.map((elem) => {
      // 2. Ako naslov nema ID (potreban za linkovanje), mi ga dinamički pravimo
      if (!elem.id) {
        elem.id = elem.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      return {
        id: elem.id,
        text: elem.innerText,
        level: elem.nodeName, // Prepoznajemo da li je H2 ili H3
      };
    });
    
    setHeadings(headingData);

    // 3. Postavljamo Intersection Observer (moderan način praćenja skrolovanja)
    // Ovo je drastično brže i optimizovanije od klasičnog 'window.addEventListener("scroll")'
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -80% 0px' } // Okidač se pali pri vrhu ekrana
    );

    elements.forEach((elem) => observer.observe(elem));
    
    return () => observer.disconnect(); // Čišćenje memorije kada korisnik napusti stranicu
  }, []);

  // Ako nema naslova u lekciji, ne prikazujemo ništa
  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden xl:block w-64 pl-6 border-l-2 border-[#EAE3D9] self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h4 className="text-sm font-bold text-[#9F8170] uppercase tracking-wider mb-4">
        U ovoj lekciji
      </h4>
      <ul className="space-y-3 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 'H3' ? 'ml-4' : ''}>
            <a
              href={`#${heading.id}`}
              className={`block transition-all duration-200 ${
                activeId === heading.id
                  ? 'text-[#795548] font-bold scale-105 origin-left'
                  : 'text-gray-500 hover:text-[#795548]'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}