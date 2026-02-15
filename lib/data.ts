export const itineraryData = [
  {
    day: 1,
    date: "Giorno 1",
    title: "Arrivo & Relax Termale",
    locations: ["Keflavík Airport", "Blue Lagoon/Sky Lagoon", "Reykjavík"],
    coordinates: [64.1355, -21.8954],
    activities: [
      {
        name: "Ritiro auto a KEF",
        time: "Arrivo",
        description: "Noleggio auto 2WD automatico (prenotare in anticipo)"
      },
      {
        name: "Blue Lagoon o Sky Lagoon",
        time: "Pomeriggio",
        description: "Relax nelle acque termali geotermiche",
        price: "Blue Lagoon Comfort: €40/persona | Sky Lagoon Saman: €47/persona",
        notes: "Sky Lagoon più vicino a Reykjavík, meno affollato e ottimo rapporto qualità/prezzo"
      }
    ],
    accommodation: "Reykjavík (3★ ~€86/persona/notte, 4★ ~€142/persona/notte)",
    distance: "50 km da KEF",
    antiVertigoNotes: "✓ Entrambe le lagune sono completamente sicure, nessun problema di vertigini",
    tips: [
      "Prenota Blue Lagoon/Sky Lagoon CON ANTICIPO (si riempiono velocemente)",
      "Sky Lagoon è più tranquilla e ha vista oceano spettacolare",
      "Porta costume, ciabatte e asciugamano (noleggio disponibile a pagamento)"
    ]
  },
  {
    day: 2,
    date: "Giorno 2",
    title: "Golden Circle Classico",
    locations: ["Þingvellir", "Geysir", "Gullfoss"],
    coordinates: [64.2558, -20.7289],
    activities: [
      {
        name: "Þingvellir National Park",
        time: "Mattina",
        description: "Parco nazionale UNESCO, punto di incontro delle placche tettoniche. Punti panoramici ampi e sentieri larghi.",
        highlights: ["Faglia tra Europa e America", "Lago Þingvallavatn", "Sito del primo parlamento islandese (930 d.C.)"]
      },
      {
        name: "Geysir e Strokkur",
        time: "Metà giornata",
        description: "Area geotermale con geyser Strokkur che erutta ogni 5-10 minuti fino a 30 metri",
        price: "Gratuito",
        highlights: ["Strokkur (erutta regolarmente)", "Geysir (originale, ora dormiente)", "Piscine termali colorate"]
      },
      {
        name: "Gullfoss (Cascata d'Oro)",
        time: "Pomeriggio",
        description: "Cascata a doppio salto spettacolare con 32 metri di altezza",
        highlights: ["Due livelli di cascata", "Arcobaleni con il sole", "Piattaforme panoramiche sicure"]
      }
    ],
    accommodation: "Selfoss/Flúðir (più economico di Reykjavík)",
    distance: "~230 km totali",
    antiVertigoNotes: "✓ Tutti i viewpoint hanno protezioni. A Gullfoss restare sulle piattaforme superiori se preferisci",
    tips: [
      "Il Golden Circle si fa comodamente in una giornata",
      "Partenza presto per evitare le folle (8:00-9:00)",
      "Pranzo al sacco o nella zona di Geysir (ristoranti costosi)",
      "Optional: Secret Lagoon a Flúðir per serata relax (~4.000 ISK)"
    ]
  },
  {
    day: 3,
    date: "Giorno 3",
    title: "Costa Sud - Cascate & Spiagge Nere",
    locations: ["Seljalandsfoss", "Skógafoss", "Reynisfjara"],
    coordinates: [63.4182, -19.5111],
    activities: [
      {
        name: "Seljalandsfoss",
        time: "Mattina",
        description: "Cascata alta 60m dietro cui si può camminare (sentiero bagnato!)",
        highlights: ["Vista da dietro la cascata", "Fotografie spettacolari", "Gljúfrabúi (cascata nascosta vicina)"]
      },
      {
        name: "Skógafoss",
        time: "Metà giornata",
        description: "Una delle cascate più iconiche d'Islanda (60m di larghezza, 25m di altezza)",
        highlights: ["Arcobaleni frequenti", "Scala laterale per vista dall'alto (facoltativa)", "Sentiero verso altre cascate"]
      },
      {
        name: "Reynisfjara - Spiaggia Nera",
        time: "Pomeriggio",
        description: "Famosa spiaggia di sabbia nera vulcanica con colonne di basalto",
        price: "Gratuito",
        highlights: ["Colonne di basalto esagonali", "Faraglioni Reynisdrangar", "Grotta di basalto"],
        warning: "⚠️ PERICOLO SNEAKER WAVES - Onde improvvise e mortali"
      }
    ],
    accommodation: "Vík í Mýrdal",
    distance: "~180 km da Selfoss",
    antiVertigoNotes: "✓ Cascate: piattaforme sicure in basso. Skógafoss: scala per vista dall'alto OPZIONALE. ⚠️ Evitare Dyrhólaey se c'è vento forte",
    tips: [
      "Giacca impermeabile per Seljalandsfoss (spray della cascata)",
      "⚠️ REYNISFJARA SICUREZZA: Mai girare le spalle al mare, stare LONTANI dall'acqua, onde improvvise possono uccidere",
      "Resto sulla spiaggia, non avvicinarsi al mare",
      "Luci di traffico sulla spiaggia: rispettare i segnali"
    ]
  },
  {
    day: 4,
    date: "Giorno 4",
    title: "Jökulsárlón & Diamond Beach",
    locations: ["Jökulsárlón", "Diamond Beach"],
    coordinates: [64.0784, -16.2306],
    activities: [
      {
        name: "Jökulsárlón Glacier Lagoon",
        time: "Tutto il giorno",
        description: "Lago glaciale con iceberg galleggianti dal ghiacciaio Breiðamerkurjökull. Uno dei luoghi più spettacolari d'Islanda",
        price: "Ingresso gratuito | Boat tour amphibian: €20/persona | Zodiac tour: €33/persona",
        highlights: [
          "Iceberg blu elettrico e bianchi",
          "Foche che nuotano tra gli iceberg",
          "Boat tour tra gli iceberg (altamente raccomandato)",
          "Vista del ghiacciaio Vatnajökull"
        ]
      },
      {
        name: "Diamond Beach",
        time: "Incluso",
        description: "Spiaggia nera dove gli iceberg si arenano e brillano come diamanti",
        highlights: [
          "Iceberg sulla sabbia nera - fotografie incredibili",
          "Contrasto tra ghiaccio trasparente e sabbia scura",
          "Onde dell'oceano che lambiscono il ghiaccio"
        ]
      }
    ],
    accommodation: "Höfn (cittadina di pescatori, ottimi ristoranti di aragosta)",
    distance: "~260 km da Vík (3h di guida)",
    antiVertigoNotes: "✓✓✓ PERFETTO: zero strapiombi, tutto pianeggiante. Uno dei luoghi più accessibili e spettacolari",
    tips: [
      "Giornata lunga ma ne vale la pena al 100%",
      "Prenotare boat tour in anticipo se possibile",
      "Miglior momento fotografico: mattina presto o sera",
      "Estate = alta stagione, arrivare presto per evitare folle",
      "A Höfn: cena con aragosta locale (Humarhöfnin ristorante famoso)"
    ]
  },
  {
    day: 5,
    date: "Giorno 5",
    title: "Rientro Tranquillo",
    locations: ["Varie soste lungo la costa sud"],
    coordinates: [63.8333, -20.0000],
    activities: [
      {
        name: "Rientro con soste panoramiche",
        time: "Tutto il giorno",
        description: "Giornata flessibile per recuperare soste saltate o rilassarsi",
        highlights: [
          "Fermate a piacere per foto",
          "Campi di lava e paesaggi vulcanici",
          "Cascate minori lungo la Route 1",
          "Shopping in piccoli paesi"
        ]
      }
    ],
    accommodation: "Selfoss/Hella o rientro diretto a Reykjavík",
    distance: "~260 km fino a Reykjavík",
    antiVertigoNotes: "✓ Soste tutte sicure e accessibili",
    tips: [
      "Giornata relax - nessuna fretta",
      "Possibile deviazione per Secret Lagoon se non fatto prima",
      "Oppure visita museo/attrazioni locali",
      "Se stanchi: guidare direttamente a Reykjavík per 2 notti finali"
    ]
  },
  {
    day: 6,
    date: "Giorno 6",
    title: "Esperienze da Reykjavík",
    locations: ["Reykjavík - Old Harbour"],
    coordinates: [64.1466, -21.9426],
    activities: [
      {
        name: "Whale Watching con Elding",
        time: "Mattina (3 ore)",
        description: "Tour in barca per avvistare balene (minke, megattere), delfini e uccelli marini",
        price: "€48/persona",
        highlights: [
          "Alta probabilità di avvistamenti ad agosto",
          "Minke whales e megattere comuni",
          "Guide esperte a bordo",
          "Tute termiche fornite"
        ]
      },
      {
        name: "Puffin Watching",
        time: "Pomeriggio",
        description: "Tour per vedere i pulcinella di mare (stagionale fino ~20 agosto)",
        price: "€28/persona",
        highlights: [
          "Isole Akurey e Lundey",
          "Colonie di puffin",
          "Ottima fotografia"
        ]
      },
      {
        name: "Lava Tunnel (Raufarhólshellir)",
        time: "Alternativa pomeriggio",
        description: "Esplorazione di tunnel lavico naturale lungo 1.360m",
        price: "€30/persona",
        highlights: [
          "Tunnel formato 5.200 anni fa",
          "Formazioni laviche colorate",
          "Tour guidato sicuro"
        ]
      }
    ],
    accommodation: "Reykjavík",
    distance: "Tours partono dal centro città",
    antiVertigoNotes: "✓ Tutte esperienze sicure e adatte a tutti",
    tips: [
      "Prenotare whale watching con anticipo (popolare)",
      "Puffin season: fino metà/fine agosto - verificare disponibilità",
      "Se maltempo: lava tunnel ottima alternativa indoor",
      "Sera libera per esplorare Reykjavík"
    ]
  },
  {
    day: 7,
    date: "Giorno 7",
    title: "Reykjavík & Partenza",
    locations: ["Reykjavík centro", "Keflavík Airport"],
    coordinates: [64.1466, -21.9426],
    activities: [
      {
        name: "Visita città Reykjavík",
        time: "Mattina",
        description: "Esplorazione della capitale islandese",
        highlights: [
          "Hallgrímskirkja (chiesa iconica)",
          "Harpa Concert Hall (architettura moderna)",
          "Laugavegur (via dello shopping)",
          "Old Harbour e porto",
          "Sun Voyager (scultura)",
          "Perlan Museum (opzionale)"
        ]
      },
      {
        name: "Partenza per KEF",
        time: "Pomeriggio",
        description: "Restituzione auto e volo di ritorno",
        tips: [
          "Arrivare in aeroporto 2.5-3 ore prima per voli internazionali",
          "Duty free: alcol e cioccolato islandese",
          "Fare pieno benzina prima di restituire auto"
        ]
      }
    ],
    accommodation: "Volo di ritorno",
    distance: "~50 km a KEF",
    antiVertigoNotes: "✓ Città completamente accessibile",
    tips: [
      "Check-out hotel di solito 11:00",
      "Tempo per ultimo shopping souvenir",
      "Calcolare 45 min guida fino a KEF + tempo restituzione auto"
    ]
  }
];

export const budgetData = {
  comfortFurbo: {
    name: "Comfort Furbo",
    description: "Guesthouse + qualche cena fuori",
    items: {
      voli: { min: 250, max: 350, note: "A/R per persona, prenotare con anticipo" },
      auto: { min: 175, max: 250, note: "2WD automatico + assicurazioni (€350-500 totale diviso 2)" },
      carburante: { min: 100, max: 175, note: "1.200-1.600 km totali, ~€1.35/litro (diviso 2)" },
      alloggi: { min: 350, max: 600, note: "7 notti - guesthouse e 3★ per persona" },
      pasti: { min: 300, max: 500, note: "Mix supermercato + ristoranti per persona" },
      esperienze: { min: 175, max: 275, note: "Blue/Sky + whale + lava tunnel per persona" },
    },
    total: { min: 1350, max: 2150 }
  },
  piuComodo: {
    name: "Più Comodo",
    description: "Hotel medi + più ristoranti + tour extra",
    items: {
      voli: { min: 300, max: 400, note: "A/R per persona" },
      auto: { min: 200, max: 300, note: "Auto categoria superiore (diviso 2)" },
      carburante: { min: 125, max: 175, note: "Stesso consumo (diviso 2)" },
      alloggi: { min: 500, max: 875, note: "Hotel 4★ per persona" },
      pasti: { min: 450, max: 700, note: "Più ristoranti per persona" },
      esperienze: { min: 250, max: 400, note: "Più tour e premium packages per persona" },
    },
    total: { min: 1825, max: 2850 }
  },
  coccola: {
    name: "Coccola",
    description: "Hotel top + spa premium + tour privati",
    total: { min: 3000, max: 5000 }
  }
};

export const practicalInfo = {
  car: {
    title: "Auto a Noleggio",
    recommendations: [
      "2WD sufficiente per questo itinerario (no F-roads)",
      "Automatico consigliato per rilassarsi",
      "Prenotare con MOLTO anticipo (agosto = alta stagione)",
      "Budget realistico: €350-€500 totale per 7 giorni (€175-250/persona)",
      "Assicurazione: minimo CDW, consigliato SCDW per ghiaia/sabbia",
      "Benzina: ~203 ISK/litro (€1.35)",
      "Consumo totale: €200-€350 per 1.200-1.600 km (€100-175/persona)"
    ],
    companies: ["Blue Car Rental", "Geysir", "Northbound", "SADcars"]
  },
  safety: {
    title: "Sicurezza Anti-Vertigini",
    tips: [
      "✓ Preferire viewpoint larghi con staccionate",
      "✓ Evitare con vento forte: promontori e bordi scogliere",
      "✓ Dyrhólaey: evitare se meteo avverso",
      "✓ Bastoncini da trekking aiutano sicurezza mentale",
      "✓ Scarpe con buon grip essenziali",
      "⚠️ REYNISFJARA: MAI girare spalle al mare, stare lontani dall'acqua"
    ]
  },
  packing: {
    title: "Cosa Portare",
    essential: [
      "Giacca impermeabile e antivento (essenziale!)",
      "Strati termici (fleece, down jacket)",
      "Scarpe trekking impermeabili",
      "Costume da bagno (lagune termali)",
      "Crema solare (50+) - sole di mezzanotte",
      "Occhiali da sole",
      "Powerbank e caricabatterie",
      "Borraccia riutilizzabile"
    ]
  },
  apps: {
    title: "App Utili",
    list: [
      { name: "Vedur.is", description: "Meteo ufficiale islandese - ESSENZIALE" },
      { name: "Road.is", description: "Condizioni strade in tempo reale" },
      { name: "SafeTravel", description: "Alert sicurezza e emergenze" },
      { name: "112 Iceland", description: "App emergenze ufficiale" },
      { name: "Maps.me", description: "Mappe offline" }
    ]
  },
  conversion: {
    title: "Conversione Valuta",
    rate: "ISK ÷ 150 ≈ EUR (approssimazione veloce)",
    examples: [
      "10.000 ISK ≈ €67",
      "15.000 ISK ≈ €100",
      "20.000 ISK ≈ €133"
    ]
  }
};

export const experiencesDatabase = [
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    category: "Laguna Termale",
    location: { lat: 63.8804, lng: -22.4495 },
    image: "data:image/jpeg;base64,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
    prices: [
      { type: "Comfort", price: 11990, currency: "ISK", eur: 80 },
      { type: "Premium", price: 15990, currency: "ISK", eur: 107 },
      { type: "Retreat Spa", price: 95000, currency: "ISK", eur: 633 }
    ],
    description: "La più famosa laguna geotermale d'Islanda, con acque ricche di minerali a 37-39°C. Esperienza iconica ma molto turistica.",
    pros: ["Iconico e famoso", "Facilities eccellenti", "Ampia area da esplorare"],
    cons: ["Molto affollato", "Costoso", "Più lontano da Reykjavík"],
    booking: "Prenotazione obbligatoria con anticipo",
    website: "https://www.bluelagoon.com"
  },
  {
    id: "sky-lagoon",
    name: "Sky Lagoon",
    category: "Laguna Termale",
    location: { lat: 64.1418, lng: -22.0246 },
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/20/f2/2e/fall-sunsets-are-divine.jpg?w=400&h=300",
    prices: [
      { type: "Saman Pass", price: 13990, currency: "ISK", eur: 93 },
      { type: "Sér Pass", price: 19990, currency: "ISK", eur: 133 }
    ],
    description: "Laguna moderna con vista oceano panoramica. Include rituale a 7 step con sauna, scrub e cold plunge. Meno affollata e miglior rapporto qualità/prezzo.",
    pros: ["Vista oceano spettacolare", "Meno turisti", "Più vicino a Reykjavík", "Rituale incluso"],
    cons: ["Più piccola", "Meno famosa"],
    booking: "Prenotazione consigliata",
    website: "https://www.skylagoon.com"
  },
  {
    id: "whale-watching",
    name: "Whale Watching - Elding",
    category: "Wildlife",
    location: { lat: 64.1508, lng: -21.9395 },
    image: "https://elding.is/sites/default/files/styles/landscape_small/public/2026-01/2026_01_27_1300_eldy_emily_131.jpg?h=bba936a2&itok=89kgsqd5",
    prices: [
      { type: "Classic Tour", price: 14500, currency: "ISK", eur: 97 }
    ],
    description: "Tour di 3 ore per avvistare balene (minke, megattere comuni ad agosto), delfini e uccelli marini. Tute termiche fornite.",
    duration: "3 ore",
    successRate: "Alta in estate (85-95%)",
    booking: "Prenotazione anticipata consigliata",
    website: "https://elding.is"
  },
  {
    id: "puffin-watching",
    name: "Puffin Watching",
    category: "Wildlife",
    location: { lat: 64.1508, lng: -21.9395 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotGgRUkUykfFLi7JkldfymAkuFlqoBe8OwA&s",
    prices: [
      { type: "Tour", price: 8300, currency: "ISK", eur: 55 }
    ],
    description: "Tour alle isole Akurey e Lundey per vedere colonie di pulcinella di mare. Stagionale: disponibile fino a metà/fine agosto.",
    duration: "1 ora",
    seasonal: "Fino a ~20 agosto",
    booking: "Verificare disponibilità",
    website: "https://elding.is"
  },
  {
    id: "lava-tunnel",
    name: "Lava Tunnel (Raufarhólshellir)",
    category: "Geologico",
    location: { lat: 63.9614, lng: -21.2489 },
    image: "https://icelandtravelguide.is/wp-content/uploads/2020/11/Raufarholshellir-lava-cave-4-scaled.jpg",
    prices: [
      { type: "Standard Tour", price: 8900, currency: "ISK", eur: 59 }
    ],
    description: "Esplorazione guidata di tunnel lavico lungo 1.360m formato 5.200 anni fa. Formazioni laviche colorate e sicuro per tutti.",
    duration: "1 ora",
    booking: "Prenotazione online",
    website: "https://www.thelavatunnel.is"
  },
  {
    id: "jokulsarlon-boat",
    name: "Jökulsárlón Boat Tour",
    category: "Natura & Ghiacciai",
    location: { lat: 64.0784, lng: -16.2306 },
    image: "https://cdn.sanity.io/images/lf2d8f6r/production/dc0bb0a159070d5168094a89c0b2b690dfe5d81b-2500x1698.jpg?q=75&fit=max&auto=format&w=400",
    prices: [
      { type: "Amphibian Boat", price: 6000, currency: "ISK", eur: 40 },
      { type: "Zodiac Tour", price: 10000, currency: "ISK", eur: 67 }
    ],
    description: "Tour in barca tra iceberg galleggianti nel lago glaciale. Zodiac si avvicina di più agli iceberg, amphibian più stabile.",
    duration: "30-45 min",
    booking: "Prenotazione online consigliata",
    website: "https://icelagoon.is"
  }
];

export const attractions = [
  {
    name: "Þingvellir National Park",
    coordinates: { lat: 64.2558, lng: -21.1292 },
    type: "UNESCO World Heritage",
    description: "Parco nazionale dove si incontrano le placche tettoniche nordamericana ed eurasiatica. Sito del primo parlamento al mondo (930 d.C.).",
    highlights: ["Faglia di Almannagjá", "Lago Þingvallavatn", "Storia vichinga"],
    accessibility: "Ottima - sentieri larghi e piattaforme sicure",
    time: "2-3 ore",
    image: "https://iceland24blog.com/wp-content/uploads/2015/01/4380305289_4e91d5afdb.jpg"
  },
  {
    name: "Geysir & Strokkur",
    coordinates: { lat: 64.3107, lng: -20.3023 },
    type: "Area Geotermale",
    description: "Geysir (originale, ora dormiente) e Strokkur che erutta ogni 5-10 minuti fino a 30 metri.",
    highlights: ["Eruzioni Strokkur", "Piscine termali colorate", "Centro visitatori"],
    accessibility: "Perfetta - tutto pianeggiante",
    time: "1-1.5 ore",
    image: "https://gti.images.tshiftcdn.com/3598989/x/0/geysir-strokkur-hot-spring-golden-circle-southwest-winter-wm-1.jpg"
  },
  {
    name: "Gullfoss",
    coordinates: { lat: 64.3271, lng: -20.1211 },
    type: "Cascata",
    description: "Cascata dorata a doppio salto con 32 metri di altezza totale. Una delle cascate più iconiche d'Islanda.",
    highlights: ["Due livelli cascata", "Arcobaleni", "Potenza dell'acqua"],
    accessibility: "Buona - piattaforme superiori sicure, sentiero in basso opzionale",
    time: "45-60 minuti",
    image: "https://www.civitatis.com/f/islandia/islandia/guia/gullfoss-m.jpg"
  },
  {
    name: "Seljalandsfoss",
    coordinates: { lat: 63.6156, lng: -19.9886 },
    type: "Cascata",
    description: "Cascata di 60m dietro cui si può camminare. Sentiero bagnato ma esperienza unica.",
    highlights: ["Camminata dietro cascata", "Gljúfrabúi vicina", "Foto spettacolari"],
    accessibility: "Buona - sentiero dietro cascata facoltativo",
    time: "45-60 minuti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F77TubdHdpRGCG_75QvnJWbcIdthxmegDQ&s"
  },
  {
    name: "Skógafoss",
    coordinates: { lat: 63.5319, lng: -19.5111 },
    type: "Cascata",
    description: "Cascata iconica di 60m larghezza e 25m altezza. Scala laterale per vista dall'alto (400+ scalini).",
    highlights: ["Arcobaleni frequenti", "Vista dall'alto (opzionale)", "Sentiero verso altre cascate"],
    accessibility: "Ottima in basso, scala ripida per vista alta (opzionale)",
    time: "1-2 ore",
    image: "https://skogafoss.org/wp-content/uploads/2025/03/skogafoss-waterfall-iceland-sunset-skies-11.jpeg"
  },
  {
    name: "Reynisfjara",
    coordinates: { lat: 63.4042, lng: -19.0445 },
    type: "Spiaggia",
    description: "Famosa spiaggia di sabbia nera con colonne di basalto e faraglioni. PERICOLOSE sneaker waves.",
    highlights: ["Colonne basalto", "Reynisdrangar", "Grotta basalto"],
    accessibility: "Accessibile MA pericoloso - mai avvicinarsi al mare",
    time: "45-60 minuti",
    warning: "⚠️ PERICOLO SNEAKER WAVES MORTALI - Mai girare spalle al mare, stare LONTANI dall'acqua",
    image: "https://t3.ftcdn.net/jpg/05/52/45/28/360_F_552452804_zLO7nua2zGLK4bEImzE7JVHzX8MPYKIw.jpg"
  },
  {
    name: "Jökulsárlón",
    coordinates: { lat: 64.0784, lng: -16.2306 },
    type: "Lago Glaciale",
    description: "Lago con iceberg galleggianti dal ghiacciaio. Uno dei luoghi più spettacolari d'Islanda.",
    highlights: ["Iceberg blu", "Foche", "Boat tour", "Diamond Beach adiacente"],
    accessibility: "Perfetta - tutto pianeggiante, zero vertigini",
    time: "2-3 ore con boat tour",
    image: "https://media2.holiplus.com/3840x2880/uploads/excursion/70679/jokulsarlon-glacier-lagoon-south-coast-private-tour-141.jpeg"
  },
  {
    name: "Diamond Beach",
    coordinates: { lat: 64.0426, lng: -16.1794 },
    type: "Spiaggia",
    description: "Iceberg arenati su spiaggia nera che brillano come diamanti. Fotograficamente incredibile.",
    highlights: ["Iceberg su sabbia", "Contrasti colori", "Onde oceano"],
    accessibility: "Perfetta - pianeggiante",
    time: "30-45 minuti",
    image: "https://media.posterlounge.com/img/products/750000/743781/743781_poster.jpg"
  }
];
