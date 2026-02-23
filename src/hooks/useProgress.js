// src/hooks/useProgress.js
'use client';
import { useState, useEffect } from 'react';

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState([]);

  // Učitavamo sačuvani napredak čim se aplikacija pokrene
  useEffect(() => {
    const saved = localStorage.getItem('skola_progres');
    if (saved) setCompletedLessons(JSON.parse(saved));
  }, []);

  const toggleLesson = (slug) => {
    const newProgress = completedLessons.includes(slug)
      ? completedLessons.filter(s => s !== slug) // Izbaci ako je već bilo
      : [...completedLessons, slug]; // Dodaj ako nije bilo
    
    setCompletedLessons(newProgress);
    localStorage.setItem('skola_progres', JSON.stringify(newProgress));
  };

  return { completedLessons, toggleLesson };
}