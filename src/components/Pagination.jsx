// src/components/Pagination.jsx
import Link from 'next/link';
import React from 'react';

export default function Pagination({ prev, next }) {
  // Ako nemamo ni prethodni ni sledeći (npr. samo jedna lekcija postoji), ne prikazujemo ništa
  if (!prev && !next) return null;

  return (
    <div className="not-prose mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4 animate-fadeIn">
      
      {/* Dugme za Prethodni Predmet */}
      {prev ? (
        <Link href={prev.path} className="group flex flex-col items-start p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2C4B3] hover:shadow-sm hover:-translate-y-1 transition-all duration-300 w-full sm:w-1/2">
          <span className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prethodno
          </span>
          <span className="font-bold text-[#795548] group-hover:text-[#9F8170] transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block w-1/2"></div> // Prazan prostor ako smo na prvoj lekciji
      )}

      {/* Dugme za Sledeći Predmet */}
      {next ? (
        <Link href={next.path} className="group flex flex-col items-end text-right p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2C4B3] hover:shadow-sm hover:-translate-y-1 transition-all duration-300 w-full sm:w-1/2">
          <span className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
            Sledeće
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <span className="font-bold text-[#795548] group-hover:text-[#9F8170] transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block w-1/2"></div> // Prazan prostor ako smo na poslednjoj lekciji
      )}
      
    </div>
  );
}