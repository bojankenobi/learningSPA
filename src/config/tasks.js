// src/config/tasks.js

export const codingTasks = [
  {
    id: 'html-osnove-1',
    title: '1. Kreiranje osnovne strukture',
    category: 'HTML',
    difficulty: 'Lako',
    mode: 'web',
    description: `
      Vaš zadatak je da napravite jednostavnu vizitkartu koristeći HTML.
      
      **Zahtevi:**
      1. Dodajte naslov prvog nivoa (h1) sa vašim imenom.
      2. Dodajte paragraf (p) koji opisuje vašu profesiju.
      3. Dodajte jedan link (a) koji vodi ka 'https://google.com' sa tekstom 'Moj portfolio'.
    `,
    initialHtml: `\n\n<div class="vizitkarta">\n  \n</div>`,
    initialCss: `.vizitkarta {\n  border: 1px solid #ccc;\n  padding: 20px;\n  border-radius: 8px;\n}`,
    initialJs: `// Ovde ide JS kod (nije potreban za ovaj zadatak)`,
    // DODATO REŠENJE
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
    description: `
      Pretvorite običan link u atraktivno dugme koristeći CSS.
      
      **Zahtevi:**
      1. Klasa '.moje-dugme' treba da ima pozadinsku boju '#795548'.
      2. Boja teksta treba da bude bela.
      3. Dodajte unutrašnji razmak (padding) od 10px gore/dole i 20px levo/desno.
      4. Uklonite podvlačenje teksta (text-decoration).
      5. Zaoblite ivice za 5px.
    `,
    initialHtml: `<a href="#" class="moje-dugme">Klikni me</a>`,
    initialCss: `/* Pišite vaš CSS kod ispod ove linije */\n\n.moje-dugme {\n  \n}`,
    initialJs: ``,
    solution: {
      css: `.moje-dugme {\n  background-color: #795548;\n  color: white;\n  padding: 10px 20px;\n  text-decoration: none;\n  border-radius: 5px;\n}`
    },
  },
  {
    id: 'js-osnove',
    title: '3. Rad sa promenljivama',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console', // <-- OVO AKTIVIRA KONZOLU
    description: `
      Vreme je za JavaScript logiku! 
      
      **Zahtevi:**
      1. Deklarišite promenljivu 'ime' i dodelite joj vaše ime (string).
      2. Deklarišite promenljivu 'godine' i dodelite joj broj vaših godina.
      3. Koristeći 'console.log()', ispišite rečenicu: "Zovem se [ime] i imam [godine] godina."
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `// Deklarišite promenljive ispod:\n\n\n\n// Ispišite rezultat u konzolu:\n`,
    solution: {
      js: `let ime = "Bojan";\nlet godine = 35;\n\nconsole.log("Zovem se " + ime + " i imam " + godine + " godina.");`
    },
  },
  {
    id: 'js-osnove-1',
    title: '3. Rad sa promenljivama (Predstavljanje)',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console',
    description: `
      Vreme je za JavaScript logiku! 
      
      **Zahtevi:**
      1. Deklarišite promenljivu 'ime' i dodelite joj vaše ime (tekst/string pod navodnicima).
      2. Deklarišite promenljivu 'godine' i dodelite joj broj vaših godina (bez navodnika).
      3. Koristeći 'console.log()', ispišite rečenicu: "Zovem se [ime] i imam [godine] godina."
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `// Deklarišite promenljive ispod:\n\n\n\n// Ispišite rezultat u konzolu:\n`,
    solution: {
      js: `let ime = "Marko";\nlet godine = 15;\n\nconsole.log("Zovem se " + ime + " i imam " + godine + " godina.");`
    }
  },
  {
    id: 'js-matematika-1',
    title: '4. Kalkulator za džeparac',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console',
    description: `
      Programiranje je super za rešavanje svakodnevnih problema. Hajde da izračunamo tvoj džeparac!
      
      **Zahtevi:**
      1. Napravi promenljivu 'ustedjevina' i stavi da je 1500.
      2. Napravi promenljivu 'noviDzeparac' i stavi da je 500.
      3. Napravi promenljivu 'trosakZaIgru' i stavi da je 800.
      4. Izračunaj 'ukupnoStanje' tako što ćeš sabrati ušteđevinu i džeparac, a zatim oduzeti trošak za igru.
      5. Ispiši 'ukupnoStanje' u konzolu.
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `let ustedjevina = 1500;\nlet noviDzeparac = 500;\nlet trosakZaIgru = 800;\n\n// Izračunaj ukupno stanje ispod:\n\n\n// Ispiši rezultat u konzolu:\n`,
    solution: {
      js: `let ustedjevina = 1500;\nlet noviDzeparac = 500;\nlet trosakZaIgru = 800;\n\nlet ukupnoStanje = ustedjevina + noviDzeparac - trosakZaIgru;\n\nconsole.log("Moje trenutno stanje je: " + ukupnoStanje);`
    }
  },
  {
    id: 'js-logika-1',
    title: '5. Da li možeš na rolerkoster? (If/Else)',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'console',
    description: `
      Kompjuteri stalno donose odluke. U JavaScriptu to radimo pomoću 'if' i 'else' komandi.
      Zabavni park ima pravilo: moraš biti viši od 140cm da bi išao na brzi rolerkoster.
      
      **Zahtevi:**
      1. Koristeći 'if', proveri da li je promenljiva 'visina' veća ili jednaka 140.
      2. Ako jeste, ispiši: "Možeš na rolerkoster!"
      3. Koristeći 'else', ako nije, ispiši: "Žao mi je, moraš još malo da porasteš."
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `let visina = 135; // Probaj da menjaš ovaj broj!\n\n// Napiši if/else logiku ispod:\n\n`,
    solution: {
      js: `let visina = 135;\n\nif (visina >= 140) {\n  console.log("Možeš na rolerkoster!");\n} else {\n  console.log("Žao mi je, moraš još malo da porasteš.");\n}`
    }
  },
  {
    id: 'js-nizovi-1',
    title: '6. Ranac za preživljavanje (Nizovi)',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'console',
    description: `
      Ponekad moramo da čuvamo više stvari na jednom mestu. Za to služe nizovi (Arrays), koji se pišu u uglastim zagradama [].
      
      **Zahtevi:**
      1. Napravi niz 'ranac' koji sadrži tri reči: "voda", "lampa", "kompas".
      2. Ispiši ceo ranac u konzolu.
      3. Dodaj novu stvar u ranac koristeći komandu 'ranac.push("mapa")'.
      4. Ponovo ispiši ranac da vidiš promenu!
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `// Napravi svoj niz ispod:\n\n\n// Ispiši ranac:\n\n\n// Dodaj "mapa" u ranac:\n\n\n// Ponovo ispiši ranac:\n`,
    solution: {
      js: `let ranac = ["voda", "lampa", "kompas"];\n\nconsole.log("Početni ranac:", ranac);\n\nranac.push("mapa");\n\nconsole.log("Ranac nakon dodavanja:", ranac);`
    }
  },
  {
    id: 'js-funkcije-1',
    title: '11. Konverzija valuta (Funkcije)',
    category: 'JavaScript',
    difficulty: 'Srednje',
    mode: 'console',
    description: `
      Funkcije su mali "aparati" kojima damo neke podatke, oni obave račun i vrate nam rezultat.
      
      **Zahtevi:**
      1. Napišite funkciju 'konvertujUDinare' koja prima jedan parametar (iznos u evrima).
      2. Funkcija treba da pomnoži taj iznos sa 117.2 (kurs) i vrati (koristeći 'return') iznos u dinarima.
      3. U glavnom kodu pozovite funkciju za 50 evra i ispišite rezultat u konzolu.
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `function konvertujUDinare(evri) {\n  // Napiši kod za konverziju ovde:\n  \n}\n\n// Pozovi funkciju za 50 evra i ispiši rezultat:\n`,
    solution: {
      js: `function konvertujUDinare(evri) {\n  return evri * 117.2;\n}\n\nlet dinari = konvertujUDinare(50);\nconsole.log("50 evra je " + dinari + " dinara.");`,
      explanation: `Funkcija uzima 'evri' kao ulazni parametar, vrši operaciju i koristi reč 'return' da izbaci vrednost napolje. Ovo nam omogućava da funkciju kasnije iskoristimo za bilo koji drugi iznos bez ponovnog pisanja formule.`
    }
  },
  {
    id: 'js-nizovi-2',
    title: '12. Manipulacija spiskom (Metode)',
    category: 'JavaScript',
    difficulty: 'Lako',
    mode: 'console',
    description: `
      Nizovi nisu fiksni – možemo im dodavati i oduzimati elemente kada god želimo!
      
      **Zahtevi:**
      1. Napravite niz sa 3 imena gradova po izboru.
      2. Dodajte novi grad na kraj niza koristeći odgovarajuću metodu.
      3. Ispišite koliko gradova ukupno ima u nizu.
      4. Ispišite ime prvog grada iz niza.
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `let gradovi = ["Beograd", "Novi Sad", "Niš"];\n\n// 1. Dodaj novi grad na kraj niza:\n\n\n// 2. Ispiši koliko gradova ukupno ima:\n\n\n// 3. Ispiši ime prvog grada:\n`,
    solution: {
      js: `let gradovi = ["Beograd", "Novi Sad", "Niš"];\n\ngradovi.push("Kragujevac");\n\nconsole.log("Ukupan broj gradova: " + gradovi.length);\nconsole.log("Prvi grad je: " + gradovi[0]);`,
      explanation: `Metoda push() je najbolji način za bezbedno dodavanje elementa na kraj niza. Iako u nizu imamo 4 grada, poslednji grad se nalazi na indeksu 3, jer brojanje u programiranju uvek kreće od 0 (zato je prvi grad gradovi[0]).`
    }
  },
  {
    id: 'js-petlje-1',
    title: '13. Pretraga korisnika (Petlje i Objekti)',
    category: 'JavaScript',
    difficulty: 'Teško',
    mode: 'console',
    description: `
      Ovo je pravi programerski zadatak! Imamo bazu korisnika i moramo da pronađemo specifične ljude.
      
      **Zahtevi:**
      Dati ste niz objekata 'korisnici' gde svaki ima 'ime' i status 'aktivan'. 
      Koristeći 'for' petlju i 'if' iskaz, prođite kroz niz i ispišite u konzolu samo imena onih korisnika koji NISU aktivni (aktivan === false).
    `,
    initialHtml: ``,
    initialCss: ``,
    initialJs: `let korisnici = [\n  { ime: "Ana", aktivan: true },\n  { ime: "Marko", aktivan: false },\n  { ime: "Jovan", aktivan: true },\n  { ime: "Milica", aktivan: false }\n];\n\nconsole.log("Neaktivni korisnici su:");\n\n// Napiši for petlju ispod:\n`,
    solution: {
      js: `let korisnici = [\n  { ime: "Ana", aktivan: true },\n  { ime: "Marko", aktivan: false },\n  { ime: "Jovan", aktivan: true },\n  { ime: "Milica", aktivan: false }\n];\n\nconsole.log("Neaktivni korisnici su:");\n\nfor (let i = 0; i < korisnici.length; i++) {\n  if (korisnici[i].aktivan === false) {\n    console.log(korisnici[i].ime);\n  }\n}`,
      explanation: `Petlja ide od 0 do kraja niza (korisnici.length). Za svaki prolaz, if naredba proverava da li je osobina 'aktivan' na tom trenutnom objektu jednaka false. Ako jeste, ispisujemo samo njegovo ime koristeći 'korisnici[i].ime'.`
    }
  },
  {
    id: 'web-osnove-1',
    title: '7. Magično dugme (HTML + JS)',
    category: 'Veb Razvoj',
    difficulty: 'Lako',
    mode: 'web',
    description: `
      Sada spajamo HTML i JavaScript! Naučićemo kako da JavaScriptom promenimo ono što piše na ekranu.
      
      **Zahtevi:**
      1. U HTML-u, daj naslovu (h1) neki 'id', na primer 'naslov'.
      2. U JavaScriptu, unutar funkcije 'promeniTekst', koristi 'document.getElementById("naslov").innerText' i dodeli mu neki novi tekst (npr. "Magija radi!").
      3. Klikni na dugme u prikazu i gledaj šta se dešava!
    `,
    initialHtml: `<h1 id="naslov">Ovo je stari tekst</h1>\n\n<button onclick="promeniTekst()">Klikni za magiju</button>`,
    initialCss: `button {\n  padding: 10px 20px;\n  background-color: #795548;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}`,
    initialJs: `function promeniTekst() {\n  // Napiši JS kod ovde:\n  \n}`,
    solution: {
      html: `<h1 id="naslov">Ovo je stari tekst</h1>\n\n<button onclick="promeniTekst()">Klikni za magiju</button>`,
      css: `button {\n  padding: 10px 20px;\n  background-color: #795548;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}`,
      js: `function promeniTekst() {\n  document.getElementById("naslov").innerText = "Magija radi!";\n}`
    }
  },
  {
    id: 'web-dark-mode',
    title: '8. Svetlo i Mrak (Dark Mode)',
    category: 'Veb Razvoj',
    difficulty: 'Srednje',
    mode: 'web',
    description: `
      Skoro svaka aplikacija danas ima "Dark mode". Hajde da ga napravimo pomoću CSS-a i JS-a!
      
      **Zahtevi:**
      1. U CSS-u postoji klasa '.tamna-tema' koja boji pozadinu u crno, a tekst u belo.
      2. U JS-u, unutar funkcije, selektuj celo telo stranice koristeći 'document.body'.
      3. Iskoristi komandu '.classList.toggle("tamna-tema")' da pališ i gasiš ovu klasu na klik dugmeta.
    `,
    initialHtml: `<h1>Moja Dnevna Soba</h1>\n<p>Ovde je trenutno jako svetlo.</p>\n\n<button onclick="ugasiSvetlo()">Upali / Ugasi svetlo</button>`,
    initialCss: `body {\n  transition: 0.5s; /* Za lepšu animaciju */\n  padding: 20px;\n}\n\n/* Ova klasa menja boje */\n.tamna-tema {\n  background-color: #121212;\n  color: white;\n}\n\nbutton {\n  padding: 10px;\n  cursor: pointer;\n}`,
    initialJs: `function ugasiSvetlo() {\n  // Napiši kod za dodavanje/skidanje klase:\n  \n}`,
    solution: {
      html: `<h1>Moja Dnevna Soba</h1>\n<p>Ovde je trenutno jako svetlo.</p>\n\n<button onclick="ugasiSvetlo()">Upali / Ugasi svetlo</button>`,
      css: `body {\n  transition: 0.5s;\n  padding: 20px;\n}\n\n.tamna-tema {\n  background-color: #121212;\n  color: white;\n}\n\nbutton {\n  padding: 10px;\n  cursor: pointer;\n}`,
      js: `function ugasiSvetlo() {\n  document.body.classList.toggle("tamna-tema");\n}`
    }
  },
  {
    id: 'web-igrica-brojac',
    title: '9. Kliker Igrice (Brojač)',
    category: 'Veb Razvoj',
    difficulty: 'Srednje',
    mode: 'web',
    description: `
      Da li voliš igre gde moraš brzo da klikaš da bi skupio novčiće? Pravimo jednu takvu!
      
      **Zahtevi:**
      1. U JS-u, deklariši promenljivu 'poeni' na samom vrhu (izvan funkcije) i postavi je na 0.
      2. U HTML-u obrati pažnju na 'span' tag koji ima id 'rezultat'.
      3. U JS funkciji 'dodajPoen()', prvo povećaj 'poeni' za 1.
      4. Zatim, prikaži taj novi broj na ekranu koristeći 'document.getElementById("rezultat").innerText'.
    `,
    initialHtml: `<div class="igra">\n  <h1>Novčići: <span id="rezultat">0</span></h1>\n  <button onclick="dodajPoen()">Klikni za novčić! 🪙</button>\n</div>`,
    initialCss: `.igra {\n  text-align: center;\n  padding-top: 50px;\n  font-family: sans-serif;\n}\n\nbutton {\n  font-size: 20px;\n  padding: 15px 30px;\n  background-color: gold;\n  border: 2px solid orange;\n  border-radius: 10px;\n  cursor: pointer;\n}`,
    initialJs: `// Deklariši promenljivu 'poeni' ovde:\n\n\nfunction dodajPoen() {\n  // Povećaj poene i prikaži ih na ekranu:\n  \n}`,
    solution: {
      html: `<div class="igra">\n  <h1>Novčići: <span id="rezultat">0</span></h1>\n  <button onclick="dodajPoen()">Klikni za novčić! 🪙</button>\n</div>`,
      css: `.igra {\n  text-align: center;\n  padding-top: 50px;\n  font-family: sans-serif;\n}\n\nbutton {\n  font-size: 20px;\n  padding: 15px 30px;\n  background-color: gold;\n  border: 2px solid orange;\n  border-radius: 10px;\n  cursor: pointer;\n}`,
      js: `let poeni = 0;\n\nfunction dodajPoen() {\n  poeni = poeni + 1;\n  document.getElementById("rezultat").innerText = poeni;\n}`
    }
  },
  {
    id: 'web-todo-lista',
    title: '10. Lista za kupovinu (Napredno)',
    category: 'Veb Razvoj',
    difficulty: 'Teško',
    mode: 'web',
    description: `
      Ovo je prava mini-aplikacija! Naučićemo kako da čitamo šta je korisnik ukucao i da to dodamo na stranicu.
      
      **Zahtevi:**
      1. U JS funkciji 'dodajNaListu', iskoristi 'document.getElementById("unos").value' da pročitaš šta je ukucano.
      2. Ako tekst nije prazan ('!== ""'), selektuj našu listu (ul) preko njenog ID-a 'lista'.
      3. Iskoristi komandu '.innerHTML += "<li>" + unetiTekst + "</li>"' da dodaš novu stavku.
      4. Očisti polje za unos tako što ćeš njegovu 'value' postaviti na prazan string "".
    `,
    initialHtml: `<h2>Moja lista za kupovinu</h2>\n\n<input type="text" id="unos" placeholder="Šta kupujemo?">\n<button onclick="dodajNaListu()">Dodaj</button>\n\n<ul id="lista">\n  <li>Mleko</li>\n</ul>`,
    initialCss: `body { font-family: sans-serif; padding: 20px; }\ninput { padding: 8px; font-size: 16px; }\nbutton { padding: 8px 15px; font-size: 16px; background: #9F8170; color: white; border: none; cursor: pointer; }\nul { background: #eee; padding: 20px; border-radius: 5px; }\nli { margin-bottom: 5px; font-weight: bold; }`,
    initialJs: `function dodajNaListu() {\n  // Napiši logiku za dodavanje stavki:\n  \n}`,
    solution: {
      html: `<h2>Moja lista za kupovinu</h2>\n\n<input type="text" id="unos" placeholder="Šta kupujemo?">\n<button onclick="dodajNaListu()">Dodaj</button>\n\n<ul id="lista">\n  <li>Mleko</li>\n</ul>`,
      css: `body { font-family: sans-serif; padding: 20px; }\ninput { padding: 8px; font-size: 16px; }\nbutton { padding: 8px 15px; font-size: 16px; background: #9F8170; color: white; border: none; cursor: pointer; }\nul { background: #eee; padding: 20px; border-radius: 5px; }\nli { margin-bottom: 5px; font-weight: bold; }`,
      js: `function dodajNaListu() {\n  let tekst = document.getElementById("unos").value;\n  \n  if (tekst !== "") {\n    document.getElementById("lista").innerHTML += "<li>" + tekst + "</li>";\n    document.getElementById("unos").value = "";\n  }\n}`
    }
  },
];