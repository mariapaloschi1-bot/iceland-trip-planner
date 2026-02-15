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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJrx0Xf4HuSdodB5z_bRnrQ8TdmXBZ0Gv6A&s",
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
