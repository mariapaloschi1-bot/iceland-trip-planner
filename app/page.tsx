'use client';

import { useState, useMemo } from 'react';
import { Calendar, MapPin, DollarSign, Info, AlertTriangle, Car, Package, Mountain } from 'lucide-react';
import dynamic from 'next/dynamic';
import { itineraryData, budgetData, practicalInfo, experiencesDatabase, attractions } from '@/lib/data';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'experiences' | 'budget' | 'info'>('itinerary');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Prepare map locations
  const mapLocations = useMemo(() => {
    const locs: any[] = [];
    
    itineraryData.forEach((day) => {
      locs.push({
        lat: day.coordinates[0],
        lng: day.coordinates[1],
        name: `Giorno ${day.day}: ${day.title}`,
        type: `day-${day.day}`,
        description: day.locations.join(', ')
      });
    });

    return locs;
  }, []);

  const filteredExperiences = selectedCategory === 'all' 
    ? experiencesDatabase 
    : experiencesDatabase.filter(exp => exp.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(experiencesDatabase.map(e => e.category)))];

  return (
    <main className="min-h-screen bg-black text-ice-blue">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 border-b-2 border-ice-blue/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-ice-blue to-ice-light bg-clip-text text-transparent">
            🇮🇸 Viaggio in Islanda
          </h1>
          <p className="text-xl md:text-2xl text-ice-light mb-2">11-17 Agosto 2026 • 7 Giorni</p>
          <p className="text-lg text-ice-blue/80 max-w-2xl mx-auto">
            Itinerario completo anti-vertigini per esplorare le meraviglie dell'Islanda in sicurezza
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b-2 border-ice-blue/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 md:gap-4 no-scrollbar">
            <TabButton 
              active={activeTab === 'itinerary'} 
              onClick={() => setActiveTab('itinerary')}
              icon={<Calendar className="w-5 h-5" />}
            >
              Itinerario
            </TabButton>
            <TabButton 
              active={activeTab === 'experiences'} 
              onClick={() => setActiveTab('experiences')}
              icon={<Mountain className="w-5 h-5" />}
            >
              Esperienze
            </TabButton>
            <TabButton 
              active={activeTab === 'budget'} 
              onClick={() => setActiveTab('budget')}
              icon={<DollarSign className="w-5 h-5" />}
            >
              Budget
            </TabButton>
            <TabButton 
              active={activeTab === 'info'} 
              onClick={() => setActiveTab('info')}
              icon={<Info className="w-5 h-5" />}
            >
              Info Pratiche
            </TabButton>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="space-y-8">
            {/* Map Section */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-8 h-8" />
                Mappa del Percorso
              </h2>
              <div className="mb-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDay(null)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDay === null
                      ? 'bg-ice-blue text-black font-bold'
                      : 'bg-gray-800 text-ice-blue border border-ice-blue/30'
                  }`}
                >
                  Tutti i giorni
                </button>
                {itineraryData.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedDay === day.day
                        ? 'bg-ice-blue text-black font-bold'
                        : 'bg-gray-800 text-ice-blue border border-ice-blue/30'
                    }`}
                  >
                    Giorno {day.day}
                  </button>
                ))}
              </div>
              <MapView locations={mapLocations} selectedDay={selectedDay} />
            </section>

            {/* Daily Itinerary */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-8 h-8" />
                Itinerario Dettagliato
              </h2>
              <div className="space-y-6">
                {itineraryData
                  .filter(day => selectedDay === null || day.day === selectedDay)
                  .map((day) => (
                    <DayCard key={day.day} day={day} />
                  ))}
              </div>
            </section>
          </div>
        )}

        {/* Experiences Tab */}
        {activeTab === 'experiences' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Mountain className="w-8 h-8" />
                Esperienze & Attrazioni
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize ${
                    selectedCategory === cat
                      ? 'bg-ice-blue text-black font-bold'
                      : 'bg-gray-800 text-ice-blue border border-ice-blue/30'
                  }`}
                >
                  {cat === 'all' ? 'Tutte' : cat}
                </button>
              ))}
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>

            {/* Attractions List */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Attrazioni Principali</h3>
              <div className="space-y-4">
                {attractions.map((attr, idx) => (
                  <AttractionCard key={idx} attraction={attr} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8" />
              Stima Budget (Coppia)
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <BudgetCard budget={budgetData.comfortFurbo} />
              <BudgetCard budget={budgetData.piuComodo} highlighted />
              <BudgetCard budget={budgetData.coccola} />
            </div>

            {/* Budget Breakdown */}
            <div className="bg-gray-900 rounded-xl p-6 border-2 border-ice-blue/30">
              <h3 className="text-2xl font-bold mb-4">Dettaglio Costi</h3>
              <div className="space-y-4">
                {Object.entries(budgetData.comfortFurbo.items).map(([key, item]) => (
                  <div key={key} className="border-b border-ice-blue/20 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold capitalize text-lg">{key}</span>
                      <span className="text-ice-light font-bold">
                        €{item.min} - €{item.max}
                      </span>
                    </div>
                    <p className="text-sm text-ice-blue/70">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currency Converter */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border-2 border-ice-blue/50">
              <h3 className="text-2xl font-bold mb-4">💱 Conversione Valuta</h3>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="font-bold">Regola veloce:</span> ISK ÷ 150 ≈ EUR
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {[5000, 10000, 15000, 20000, 25000, 30000].map(isk => (
                    <div key={isk} className="bg-black rounded-lg p-3 text-center border border-ice-blue/30">
                      <div className="text-sm text-ice-blue/70">{isk.toLocaleString()} ISK</div>
                      <div className="text-lg font-bold text-ice-light">≈ €{Math.round(isk/150)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Tab */}
        {activeTab === 'info' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-8 h-8" />
              Informazioni Pratiche
            </h2>

            {/* Car Rental */}
            <InfoSection icon={<Car className="w-6 h-6" />} title={practicalInfo.car.title}>
              <ul className="space-y-2">
                {practicalInfo.car.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-ice-light mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-black rounded-lg border border-ice-blue/30">
                <p className="font-bold mb-2">Compagnie consigliate:</p>
                <p className="text-ice-blue/80">{practicalInfo.car.companies.join(' • ')}</p>
              </div>
            </InfoSection>

            {/* Safety */}
            <InfoSection 
              icon={<AlertTriangle className="w-6 h-6" />} 
              title={practicalInfo.safety.title}
              warning
            >
              <ul className="space-y-2">
                {practicalInfo.safety.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-xl">{tip.startsWith('✓') ? '✓' : '⚠️'}</span>
                    <span>{tip.replace(/^[✓⚠️]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>

            {/* Packing List */}
            <InfoSection icon={<Package className="w-6 h-6" />} title={practicalInfo.packing.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {practicalInfo.packing.essential.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black p-3 rounded-lg border border-ice-blue/30">
                    <span className="text-ice-light">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* Apps */}
            <InfoSection icon={<Info className="w-6 h-6" />} title={practicalInfo.apps.title}>
              <div className="space-y-3">
                {practicalInfo.apps.list.map((app, idx) => (
                  <div key={idx} className="bg-black p-4 rounded-lg border border-ice-blue/30">
                    <h4 className="font-bold text-lg text-ice-light">{app.name}</h4>
                    <p className="text-sm text-ice-blue/80 mt-1">{app.description}</p>
                  </div>
                ))}
              </div>
            </InfoSection>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t-2 border-ice-blue/30 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-ice-blue/70">
            🧊 Buon viaggio in Islanda! • Planning creato con ❤️ per un'avventura sicura e indimenticabile
          </p>
          <p className="text-ice-blue/50 text-sm mt-2">
            Ricorda: prenota con anticipo, controlla meteo su vedur.is, e mai girare le spalle al mare! 
          </p>
        </div>
      </footer>
    </main>
  );
}

// Component definitions
function TabButton({ active, onClick, icon, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
        active
          ? 'bg-ice-blue text-black font-bold'
          : 'bg-gray-800 text-ice-blue border border-ice-blue/30 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="hidden md:inline">{children}</span>
    </button>
  );
}

function DayCard({ day }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border-2 border-ice-blue/30 hover:border-ice-blue/60 transition-all">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-ice-light">
            Giorno {day.day} • {day.date}
          </h3>
          <span className="text-sm bg-ice-blue/20 px-3 py-1 rounded-full border border-ice-blue/50">
            {day.distance}
          </span>
        </div>
        <h4 className="text-xl text-ice-blue">{day.title}</h4>
      </div>

      {/* Activities */}
      <div className="space-y-4 mb-4">
        {day.activities.map((activity: any, idx: number) => (
          <div key={idx} className="bg-black/50 rounded-lg p-4 border border-ice-blue/20">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h5 className="font-bold text-lg text-ice-light">{activity.name}</h5>
                {activity.time && <span className="text-sm text-ice-blue/70">{activity.time}</span>}
              </div>
              {activity.price && (
                <span className="text-sm bg-ice-blue/10 px-2 py-1 rounded border border-ice-blue/30 whitespace-nowrap ml-2">
                  💰 {activity.price}
                </span>
              )}
            </div>
            <p className="text-ice-blue/80 mb-2">{activity.description}</p>
            {activity.highlights && (
              <ul className="space-y-1 mt-2">
                {activity.highlights.map((h: string, i: number) => (
                  <li key={i} className="text-sm text-ice-blue/70 flex items-start gap-2">
                    <span className="text-ice-light">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {activity.notes && (
              <p className="text-sm text-ice-light mt-2 italic">💡 {activity.notes}</p>
            )}
            {activity.warning && (
              <div className="mt-2 p-2 bg-red-900/20 border border-red-500/50 rounded">
                <p className="text-sm text-red-300">⚠️ {activity.warning}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2 bg-black/30 p-3 rounded-lg">
          <span className="font-bold text-ice-light">🏨 Pernottamento:</span>
          <span className="text-ice-blue/80">{day.accommodation}</span>
        </div>
        
        {day.antiVertigoNotes && (
          <div className="flex items-start gap-2 bg-green-900/20 p-3 rounded-lg border border-green-500/30">
            <span className="text-lg">✓</span>
            <div>
              <span className="font-bold text-green-300">Anti-Vertigini: </span>
              <span className="text-green-200/80">{day.antiVertigoNotes}</span>
            </div>
          </div>
        )}

        {day.tips && (
          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
            <p className="font-bold text-blue-300 mb-2">💡 Consigli del giorno:</p>
            <ul className="space-y-1">
              {day.tips.map((tip: string, i: number) => (
                <li key={i} className="text-sm text-blue-200/80 flex items-start gap-2">
                  <span>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border-2 border-ice-blue/30 hover:border-ice-blue/60 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-ice-light">{experience.name}</h3>
          <p className="text-sm text-ice-blue/70">{experience.category}</p>
        </div>
      </div>

      <p className="text-ice-blue/80 mb-4">{experience.description}</p>

      {/* Prices */}
      <div className="space-y-2 mb-4">
        {experience.prices.map((price: any, idx: number) => (
          <div key={idx} className="flex justify-between items-center bg-black/50 p-2 rounded border border-ice-blue/20">
            <span className="text-sm">{price.type}</span>
            <span className="font-bold text-ice-light">
              {price.price.toLocaleString()} ISK <span className="text-sm text-ice-blue/70">(≈€{price.eur})</span>
            </span>
          </div>
        ))}
      </div>

      {/* Pros/Cons */}
      {experience.pros && (
        <div className="space-y-2 mb-4">
          <div className="space-y-1">
            {experience.pros.map((pro: string, i: number) => (
              <p key={i} className="text-sm text-green-300 flex items-start gap-2">
                <span>✓</span>
                <span>{pro}</span>
              </p>
            ))}
          </div>
          {experience.cons && (
            <div className="space-y-1">
              {experience.cons.map((con: string, i: number) => (
                <p key={i} className="text-sm text-orange-300 flex items-start gap-2">
                  <span>−</span>
                  <span>{con}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Additional Info */}
      <div className="space-y-2 text-sm">
        {experience.duration && (
          <p className="text-ice-blue/70">⏱️ Durata: {experience.duration}</p>
        )}
        {experience.seasonal && (
          <p className="text-orange-300">📅 Stagionale: {experience.seasonal}</p>
        )}
        {experience.successRate && (
          <p className="text-green-300">🎯 {experience.successRate}</p>
        )}
        <p className="text-ice-blue/70">📝 {experience.booking}</p>
        {experience.website && (
          <a 
            href={experience.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 px-3 py-1 bg-ice-blue/20 rounded border border-ice-blue/50 hover:bg-ice-blue/30 transition-all"
          >
            🔗 Sito ufficiale
          </a>
        )}
      </div>
    </div>
  );
}

function AttractionCard({ attraction }: any) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-4 border-l-4 border-ice-blue">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-ice-light mb-1">{attraction.name}</h4>
          <p className="text-sm text-ice-blue/70 mb-2">{attraction.type}</p>
          <p className="text-ice-blue/80 mb-2">{attraction.description}</p>
          
          {attraction.highlights && (
            <div className="flex flex-wrap gap-2 mb-2">
              {attraction.highlights.map((h: string, i: number) => (
                <span key={i} className="text-xs bg-ice-blue/10 px-2 py-1 rounded border border-ice-blue/30">
                  {h}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 text-sm mt-3">
            <span className="text-ice-blue/70">⏱️ {attraction.time}</span>
            <span className="text-green-300">✓ {attraction.accessibility}</span>
          </div>

          {attraction.warning && (
            <div className="mt-2 p-2 bg-red-900/20 border border-red-500/50 rounded">
              <p className="text-sm text-red-300">{attraction.warning}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BudgetCard({ budget, highlighted = false }: any) {
  return (
    <div className={`rounded-xl p-6 ${
      highlighted 
        ? 'bg-gradient-to-br from-ice-blue/20 to-ice-dark/20 border-4 border-ice-blue' 
        : 'bg-gradient-to-br from-gray-900 to-black border-2 border-ice-blue/30'
    }`}>
      {highlighted && (
        <div className="text-center mb-3">
          <span className="bg-ice-blue text-black px-3 py-1 rounded-full text-sm font-bold">
            ⭐ CONSIGLIATO
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-center mb-2 text-ice-light">{budget.name}</h3>
      <p className="text-center text-sm text-ice-blue/70 mb-4">{budget.description}</p>
      
      <div className="text-center py-4 bg-black/50 rounded-lg border border-ice-blue/30">
        <div className="text-3xl font-bold text-ice-light">
          €{budget.total.min.toLocaleString()} - €{budget.total.max.toLocaleString()}
        </div>
        <div className="text-sm text-ice-blue/70 mt-1">per coppia</div>
      </div>

      {budget.items && (
        <div className="mt-4 space-y-2">
          {Object.entries(budget.items).map(([key, item]: [string, any]) => (
            <div key={key} className="flex justify-between text-sm border-b border-ice-blue/10 pb-1">
              <span className="capitalize text-ice-blue/80">{key}</span>
              <span className="font-bold text-ice-light">€{item.min}-€{item.max}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoSection({ icon, title, children, warning = false }: any) {
  return (
    <div className={`rounded-xl p-6 border-2 ${
      warning 
        ? 'bg-gradient-to-br from-red-900/20 to-black border-red-500/50' 
        : 'bg-gradient-to-br from-gray-900 to-black border-ice-blue/30'
    }`}>
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}
