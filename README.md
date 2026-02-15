# 🇮🇸 Iceland Trip Planner

Un'app web moderna e interattiva per pianificare il tuo viaggio in Islanda di 7 giorni (11-17 Agosto 2026).

## ✨ Features

- 🗺️ **Mappa interattiva** con percorso completo e marker per ogni giorno
- 📅 **Itinerario dettagliato** giorno per giorno con attività, prezzi e consigli
- 🏔️ **Database esperienze** con prezzi, pro/contro e link prenotazioni
- 💰 **Calcolo budget** con 3 fasce di prezzo e conversione ISK/EUR
- 📱 **100% Responsive** ottimizzato per mobile
- 🎨 **Design elegante** dark mode con colori celeste/blu ghiaccio
- ⚠️ **Info sicurezza** specifiche per itinerario anti-vertigini

## 🚀 Deploy su Vercel

### Opzione 1: Deploy con GitHub

1. Crea un nuovo repository su GitHub
2. Carica tutti i file di questo progetto
3. Vai su [vercel.com](https://vercel.com)
4. Clicca "New Project"
5. Importa il repository GitHub
6. Vercel rileva automaticamente Next.js
7. Clicca "Deploy"

### Opzione 2: Deploy con Vercel CLI

```bash
npm install -g vercel
cd iceland-trip-planner
vercel
```

## 💻 Sviluppo Locale

```bash
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev

# Apri http://localhost:3000
```

## 📦 Build per Produzione

```bash
npm run build
npm start
```

## 🛠️ Stack Tecnologico

- **Next.js 14** - Framework React con export statico
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling responsive
- **Leaflet** - Mappe interattive
- **Lucide React** - Icone moderne

## 📱 Ottimizzazione Mobile

- Layout responsive con breakpoint mobile-first
- Tab navigation ottimizzata per touch
- Mappe con zoom e pan fluidi
- Testo leggibile su schermi piccoli

## 🎨 Design

- **Sfondo**: Nero puro (#000000)
- **Testo primario**: Celeste (#00D9FF)
- **Accenti**: Blu ghiaccio chiaro (#64E9FF)
- **Cards**: Gradienti dark con bordi luminosi
- **Font**: System fonts per performance ottimali

## 📄 Struttura Dati

Tutti i dati dell'itinerario sono in `/lib/data.ts`:
- `itineraryData` - 7 giorni completi
- `budgetData` - 3 fasce di budget
- `experiencesDatabase` - Tutte le esperienze
- `practicalInfo` - Info pratiche

## 🗺️ Mappa

La mappa usa OpenStreetMap via Leaflet con:
- Marker per ogni giorno
- Polyline che connette le tappe
- Popup informativi
- Filtro per giorno singolo

## 📝 License

MIT

## 👨‍💻 Creato con ❤️

Planning completo per un viaggio sicuro e indimenticabile in Islanda!
