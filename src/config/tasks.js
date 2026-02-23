// src/config/tasks.js

export const codingTasks = [
  // --- MODUL 1: HTML & CSS (Vizuelni deo) ---
  {
    id: 'html-osnove-1',
    title: '1. Kreiranje osnovne strukture',
    category: 'HTML',
    difficulty: 'Lako',
    mode: 'web',
    description: `Vaš zadatak je da napravite jednostavnu vizitkartu koristeći HTML.
      
      **Zahtevi:**
      1. Dodajte naslov prvog nivoa (h1) sa vašim imenom.
      2. Dodajte paragraf (p) koji opisuje vašu profesiju.
      3. Dodajte jedan link (a) koji vodi ka 'https://google.com' sa tekstom 'Moj portfolio'.`,
    initialHtml: `<div class="vizitkarta">\n  \n</div>`,
    initialCss: `.vizitkarta {\n  border: 1px solid #ccc;\n  padding: 20px;\n  border-radius: 8px;\n}`,
    initialJs: ``,
    solution: {
      html: `<div class="vizitkarta">\n  <h1>Petar Petrović</h1>\n  <p>Web Developer</p>\n  <a href="https://google.com">Moj portfolio</a>\n</div>`,
    },
  },
  {
    id: 'css-stilizovanje-1',
    title: '2. Stilizovanje dugmeta',
    category: 'CSS',
    difficulty: 'Srednje',
    mode: 'web',
    description: `Pretvorite običan link u atraktivno dugme koristeći CSS.
      
      **Zahtevi:**
      1. Klasa '.moje-dugme' treba da ima pozadinsku boju '#795548'.
      2. Boja teksta treba da bude bela.
      3. Dodajte unutrašnji razmak (padding) od 10px gore/dole i 20px levo/desno.
      4. Uklonite podvlačenje teksta (text-decoration).
      5. Zaoblite ivice za 5px.`,
    initialHtml: `<a href="#" class="moje-dugme">Klikni me</a>`,
    initialCss: `.moje-dugme {\n  \n}`,
    initialJs: ``,
    solution: {
      css: `.moje-dugme {\n  background-color: #795548;\n  color: white;\n  padding: 10px 20px;\n  text-decoration: none;\n  border-radius: 5px;\n}`
    },
  },

  // --- MODUL 2: JAVASCRIPT OSNOVE (Logika i Konzola) ---
  {
    id: 'js-osnove-vars',
    title: '3. Rad sa promenljivama',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console',
    description: `Naučimo kako kompjuter pamti podatke!
      
      **Zahtevi:**
      1. Deklarišite promenljivu 'ime' i dodelite joj vaše ime (string).
      2. Deklarišite promenljivu 'godine' i dodelite joj broj vaših godina.
      3. Koristeći 'console.log()', ispišite: "Zovem se [ime] i imam [godine] godina."`,
    initialJs: `// Deklarišite promenljive ispod:\n\n\n// Ispišite rezultat:`,
    solution: {
      js: `let ime = "Bojan";\nlet godine = 35;\nconsole.log("Zovem se " + ime + " i imam " + godine + " godina.");`
    },
  },
  {
    id: 'js-matematika-1',
    title: '4. Kalkulator za džeparac',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console',
    description: `Programiranje je super za matematiku!
      
      **Zahtevi:**
      1. Napravi promenljivu 'ustedjevina' (1500).
      2. Napravi promenljivu 'noviDzeparac' (500).
      3. Napravi promenljivu 'trosakZaIgru' (800).
      4. Izračunaj 'ukupnoStanje' (saberi ušteđevinu i džeparac, oduzmi trošak).
      5. Ispiši 'ukupnoStanje' u konzolu.`,
    initialJs: `let ustedjevina = 1500;\nlet noviDzeparac = 500;\nlet trosakZaIgru = 800;\n\n// Izračunaj ukupno stanje:`,
    solution: {
      js: `let ukupnoStanje = ustedjevina + noviDzeparac - trosakZaIgru;\nconsole.log(ukupnoStanje);`
    }
  },
  {
    id: 'js-logika-1',
    title: '5. Rolerkoster (If/Else)',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'console',
    description: `Kompjuteri donose odluke pomoću 'if' i 'else'.
      
      **Zahtevi:**
      1. Ako je 'visina' veća ili jednaka 140, ispiši: "Možeš na rolerkoster!"
      2. U suprotnom, ispiši: "Žao mi je, moraš još malo da porasteš."`,
    initialJs: `let visina = 135;\n\n// Napiši if/else logiku:`,
    solution: {
      js: `if (visina >= 140) {\n  console.log("Možeš na rolerkoster!");\n} else {\n  console.log("Žao mi je, moraš još malo da porasteš.");\n}`
    }
  },
  {
    id: 'js-nizovi-1',
    title: '6. Ranac za preživljavanje (Nizovi)',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'console',
    description: `Nizovi (Arrays) čuvaju liste stvari.
      
      **Zahtevi:**
      1. Napravi niz 'ranac' sa: "voda", "lampa", "kompas".
      2. Ispiši ceo ranac.
      3. Dodaj "mapa" pomoću 'ranac.push("mapa")'.
      4. Ponovo ispiši ranac.`,
    initialJs: `// Napravi niz i koristi push:`,
    solution: {
      js: `let ranac = ["voda", "lampa", "kompas"];\nconsole.log(ranac);\nranac.push("mapa");\nconsole.log(ranac);`
    }
  },

  // --- MODUL 3: WEB RAZVOJ (Interakcija) ---
  {
    id: 'web-osnove-1',
    title: '7. Magično dugme (HTML + JS)',
    category: 'Veb Razvoj',
    difficulty: 'Lako',
    mode: 'web',
    description: `Spojimo HTML i JS!
      
      **Zahtevi:**
      1. Naslovu (h1) daj id 'naslov'.
      2. U JS funkciji 'promeniTekst', promeni 'innerText' naslova u "Magija radi!".`,
    initialHtml: `<h1 id="naslov">Stari tekst</h1>\n<button onclick="promeniTekst()">Klikni me</button>`,
    initialJs: `function promeniTekst() {\n  \n}`,
    solution: {
      js: `function promeniTekst() {\n  document.getElementById("naslov").innerText = "Magija radi!";\n}`
    }
  },
  {
    id: 'web-dark-mode',
    title: '8. Svetlo i Mrak (Dark Mode)',
    category: 'Veb Razvoj',
    difficulty: 'Srednje',
    mode: 'web',
    description: `Napravi Dark Mode prekidač.
      
      **Zahtevi:**
      1. Koristi 'document.body.classList.toggle("tamna-tema")' unutar funkcije.`,
    initialHtml: `<button onclick="ugasiSvetlo()">Promeni temu</button>`,
    initialCss: `body { transition: 0.5s; }\n.tamna-tema { background: #121212; color: white; }`,
    initialJs: `function ugasiSvetlo() {\n  \n}`,
    solution: {
      js: `function ugasiSvetlo() {\n  document.body.classList.toggle("tamna-tema");\n}`
    }
  },
  {
    id: 'web-igrica-brojac',
    title: '9. Kliker Igrice (Brojač)',
    category: 'Veb Razvoj',
    difficulty: 'Srednje',
    mode: 'web',
    description: `Napravi igru skupljanja novčića.
      
      **Zahtevi:**
      1. Povećaj promenljivu 'poeni' za 1 na svaki klik.
      2. Prikaži rezultat u elementu sa id 'rezultat'.`,
    initialHtml: `<h1>Novčići: <span id="rezultat">0</span></h1>\n<button onclick="dodajPoen()">🪙</button>`,
    initialJs: `let poeni = 0;\nfunction dodajPoen() {\n  \n}`,
    solution: {
      js: `let poeni = 0;\nfunction dodajPoen() {\n  poeni++;\n  document.getElementById("rezultat").innerText = poeni;\n}`
    }
  },
  {
    id: 'web-todo-lista',
    title: '10. Lista za kupovinu (Napredno)',
    category: 'Veb Razvoj',
    difficulty: 'Teško',
    mode: 'web',
    description: `Čitaj unos korisnika i dodaj ga na listu.
      
      **Zahtevi:**
      1. Uzmi '.value' iz inputa.
      2. Dodaj novi '<li>' u 'ul' koristeći '.innerHTML += '.`,
    initialHtml: `<input id="unos"><button onclick="dodaj()">Dodaj</button>\n<ul id="lista"></ul>`,
    initialJs: `function dodaj() {\n  \n}`,
    solution: {
      js: `function dodaj() {\n  let t = document.getElementById("unos").value;\n  if(t) {\n    document.getElementById("lista").innerHTML += "<li>"+t+"</li>";\n    document.getElementById("unos").value = "";\n  }\n}`
    }
  },

  // --- MODUL 4: JAVASCRIPT MASTER (Napredne funkcije) ---
  {
    id: 'js-funkcije-1',
    title: '11. Konverzija valuta (Funkcije)',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'console',
    description: `Napravi funkciju 'konvertujUDinare' (kurs 117.2).`,
    initialJs: `function konvertujUDinare(evri) {\n  \n}`,
    solution: {
      js: `function konvertujUDinare(evri) {\n  return evri * 117.2;\n}\nconsole.log(konvertujUDinare(50));`
    }
  },
  {
    id: 'js-nizovi-2',
    title: '12. Manipulacija gradovima',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console',
    description: `Ispiši broj gradova i prvi grad iz niza.`,
    initialJs: `let gradovi = ["Beograd", "Novi Sad", "Niš"];`,
    solution: {
      js: `gradovi.push("Kragujevac");\nconsole.log(gradovi.length);\nconsole.log(gradovi[0]);`
    }
  },
  {
    id: 'js-petlje-1',
    title: '13. Pretraga neaktivnih korisnika',
    category: 'JavaScript',
    difficulty: 'Teško',
    mode: 'console',
    description: `Ispiši imena korisnika koji imaju 'aktivan: false'.`,
    initialJs: `let korisnici = [\n  { ime: "Ana", aktivan: true },\n  { ime: "Marko", aktivan: false }\n];`,
    solution: {
      js: `for(let i=0; i<korisnici.length; i++) {\n  if(!korisnici[i].aktivan) console.log(korisnici[i].ime);\n}`
    }
  },

  // --- MODUL 5: DOM I DOGAĐAJI (Ekspert) ---
  {
    id: 'js-dom-1',
    title: '14. Otvaranje radnje (Events)',
    category: 'Veb Razvoj',
    difficulty: 'Lako',
    mode: 'web',
    description: `Na klik dugmeta promeni naslov u "Otvoreno!".`,
    initialHtml: `<h2 id="poruka">Zatvoreno</h2>\n<button id="otvori">Klik</button>`,
    initialJs: `let n = document.getElementById("poruka");\nlet d = document.getElementById("otvori");\n// Dodaj listener:`,
    solution: {
      js: `d.addEventListener("click", () => {\n  n.textContent = "Otvoreno!";\n});`
    }
  },
  {
    id: 'js-dom-2-pro',
    title: '15. Napredni Toggle',
    category: 'Veb Razvoj',
    difficulty: 'Srednje',
    mode: 'web',
    description: `Koristi classList.toggle za promenu teme.`,
    initialHtml: `<button id="tema-dugme">Tema</button>`,
    initialJs: `document.getElementById("tema-dugme").addEventListener("click", () => {\n  \n});`,
    solution: {
      js: `document.getElementById("tema-dugme").addEventListener("click", () => {\n  document.body.classList.toggle("tamna-tema");\n});`
    }
  },
  {
    id: 'js-dom-3',
    title: '16. Dinamički Elementi',
    category: 'Veb Razvoj',
    difficulty: 'Teško',
    mode: 'web',
    description: `Kreiraj 'li' element pomoću 'document.createElement'.`,
    initialHtml: `<ul id="moja-lista"></ul>`,
    initialJs: `function dodajStavku(tekst) {\n  \n}`,
    solution: {
      js: `function dodajStavku(tekst) {\n  let li = document.createElement("li");\n  li.textContent = tekst;\n  document.getElementById("moja-lista").appendChild(li);\n}`
    }
  },

  // --- MODUL 6: MODERNI WEB (API & Storage) ---
  {
    id: 'js-validacija-1',
    title: '17. Validacija lozinke',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'web',
    description: `Proveri da li je lozinka duža od 8 i ne sadrži "password".`,
    initialHtml: `<input id="pass"><button onclick="proveri()">Proveri</button>`,
    initialJs: `function proveri() {\n  \n}`,
    solution: {
      js: `function proveri() {\n  let v = document.getElementById("pass").value;\n  if(v.length >= 8 && !v.includes("password")) alert("Lozinka OK");\n}`
    }
  },
  {
    id: 'js-storage-1',
    title: '18. Local Storage pamćenje',
    category: 'JavaScript',
    difficulty: 'Teško',
    mode: 'console',
    description: `Sačuvaj temu u memoriju brauzera.`,
    initialJs: `function sacuvajTemu(boja) {\n  \n}`,
    solution: {
      js: `function sacuvajTemu(boja) {\n  localStorage.setItem("odabranaTema", boja);\n}`
    }
  },
  {
    id: 'js-fetch-1',
    title: '19. Fetch API (Podaci sa neta)',
    category: 'JavaScript',
    difficulty: 'Teško',
    mode: 'console',
    description: `Preuzmi email korisnika sa eksternog API-ja.`,
    initialJs: `async function preuzmi() {\n  \n}`,
    solution: {
      js: `async function preuzmi() {\n  let r = await fetch("https://jsonplaceholder.typicode.com/users/1");\n  let d = await r.json();\n  console.log(d.email);\n}`
    }
  }
];