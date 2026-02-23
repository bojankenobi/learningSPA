// src/config/navigation.js

export const navItems = [
  {
    id: 'oop-kategorija',
    title: 'OOP (Java)',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    category: 'Java',
    subItems: [
      { id: 'oop-1', title: '1. Uvod i Klase', path: '/predmeti/oop-1' },
      { id: 'oop-2', title: '2. Enkapsulacija i Nasleđivanje', path: '/predmeti/oop-2' },
      { id: 'oop-3', title: '3. Polimorfizam i UML', path: '/predmeti/oop-3' },
      { id: 'oop-4', title: '4. Praktični Primeri i Zadaci', path: '/predmeti/oop-4' }
    ]
  },
  {
    id: 'baze-kategorija',
    title: 'Baze Podataka',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v10M12 21v-8M20 7v10',
    category: 'SQL',
    subItems: [
      { id: 'baze-podataka', title: 'Uvod u SQL', path: '/predmeti/baze-podataka' }
    ]
  },
  {
    id: 'veb-kategorija',
    title: 'Veb Razvoj',
    icon: 'M9.75 17.25l4.5-4.5-4.5-4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    category: 'Frontend',
    subItems: [
      { id: 'veb-1', title: '1. Osnove HTML-a', path: '/predmeti/veb-1' },
      { id: 'veb-2', title: '2. Stilizovanje uz CSS', path: '/predmeti/veb-2' },
      { id: 'veb-3', title: '3. JS: Temelji i logika', path: '/predmeti/veb-3' },
      { id: 'veb-4', title: '4. JS: Organizacija podataka', path: '/predmeti/veb-4' },
      { id: 'veb-5', title: '5. JS: DOM i Interfejs', path: '/predmeti/veb-5' },
      { id: 'veb-6', title: '6. JS: Validacija i API', path: '/predmeti/veb-6' },
    ]
  },
  {
    id: 'laboratorija',
    title: 'Laboratorija koda',
    // Ikonica epruvete/bočice za laboratoriju
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    path: '/vezbaonica' // Direktna putanja ka novoj stranici
  },
];

// --- POMOĆNE FUNKCIJE ZA PAGINACIJU ---

/**
 * Pretvara sve grupisane pod-lekcije u jedan ravni niz.
 * Na ovaj način dobijamo redoslijed svih lekcija u aplikaciji.
 */
export const getAllLessons = () => {
  return navItems.flatMap(kategorija => kategorija.subItems || []);
};

/**
 * Pronalazi prethodnu i sljedeću lekciju na osnovu ID-ja trenutne lekcije.
 * @param {string} currentSlug - ID trenutne lekcije (npr. 'oop-2')
 * @returns {Object} Objekat koji sadrži { prev, next }
 */
export const getAdjacentLessons = (currentSlug) => {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentSlug);

  // Ako lekcija nije pronađena
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  // Ako je indeks veći od 0, postoji prethodna lekcija
  const prev = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  
  // Ako indeks nije posljednji u nizu, postoji sljedeća lekcija
  const next = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return { prev, next };
};