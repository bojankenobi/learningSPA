// src/config/navigation.js

export const navItems = [
  {
    id: 'oop-kategorija', // Ovo je sada samo naslov kategorije
    title: 'OOP (Java)',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    category: 'Java',
    // Ovde smeštamo tvoja 4 fajla kao pod-lekcije!
    subItems: [
      {
        id: 'oop-1',
        title: '1. Uvod i Klase',
        path: '/predmeti/oop-1'
      },
      {
        id: 'oop-2',
        title: '2. Enkapsulacija i Nasleđivanje',
        path: '/predmeti/oop-2'
      },
      {
        id: 'oop-3',
        title: '3. Polimorfizam i UML',
        path: '/predmeti/oop-3'
      },
      {
        id: 'oop-4',
        title: '4. Praktični Primeri i Zadaci',
        path: '/predmeti/oop-4'
      }
    ]
  },
  {
    id: 'baze-kategorija',
    title: 'Baze Podataka',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v10M12 21v-8M20 7v10',
    category: 'SQL',
    subItems: [
      {
         id: 'baze-podataka',
         title: 'Uvod u SQL',
         path: '/predmeti/baze-podataka'
      }
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
  }
];