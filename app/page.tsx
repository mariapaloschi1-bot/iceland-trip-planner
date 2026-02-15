'use client';

import { useState, useMemo } from 'react';
import { Calendar, MapPin, DollarSign, Info, AlertTriangle, Car, Package, Mountain, Utensils } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { itineraryData, budgetData, practicalInfo, experiencesDatabase, attractions, foodAndCulture } from '@/lib/data';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'experiences' | 'budget' | 'food' | 'info'>('itinerary');
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
      <div className="relative bg-gradient-to-b from-black via-ice-purple-dark/20 to-black py-8 md:py-12 px-4 border-b-2 border-ice-blue/30">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated Puffin */}
          <div className="flex justify-center mb-4">
            <div className="animate-bounce-slow">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-ice-purple/60 overflow-hidden bg-gradient-to-br from-ice-blue/20 to-ice-purple/20 shadow-lg shadow-ice-purple/50">
                <img 
                  src="https://gti.images.tshiftcdn.com/151608/x/0/il-pulcinella-di-mare-%C3%A8-considerato-da-molti-l'uccello-nazionale-dell'islanda?crop=1.91%3A1&fit=crop&width=1200" 
                  alt="Puffin islandese"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-ice-blue via-ice-purple-light to-ice-blue bg-clip-text text-transparent">
            Viaggio in Islanda
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-ice-light mb-2">11-17 Agosto 2026 • 7 Giorni</p>
          <p className="text-sm md:text-base lg:text-lg text-ice-blue/80 max-w-2xl mx-auto px-4">
            Itinerario completo anti-vertigini per esplorare le meraviglie dell'Islanda in sicurezza
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b-2 border-ice-blue/30">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex overflow-x-auto py-3 md:py-4 gap-2 no-scrollbar">
            <TabButton 
              active={activeTab === 'itinerary'} 
              onClick={() => setActiveTab('itinerary')}
              icon={<Calendar className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Itinerario
            </TabButton>
            <TabButton 
              active={activeTab === 'experiences'} 
              onClick={() => setActiveTab('experiences')}
              icon={<Mountain className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Esperienze
            </TabButton>
            <TabButton 
              active={activeTab === 'budget'} 
              onClick={() => setActiveTab('budget')}
              icon={<DollarSign className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Budget
            </TabButton>
            <TabButton 
              active={activeTab === 'food'} 
              onClick={() => setActiveTab('food')}
              icon={<Utensils className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Cibo & Usanze
            </TabButton>
            <TabButton 
              active={activeTab === 'info'} 
              onClick={() => setActiveTab('info')}
              icon={<Info className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Info
            </TabButton>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6 py-6 md:py-8">
        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="space-y-6 md:space-y-8">
            {/* Map Section */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                Mappa del Percorso
              </h2>
              <div className="mb-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDay(null)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-sm md:text-base ${
                    selectedDay === null
                      ? 'bg-gradient-to-r from-ice-blue to-ice-purple text-black font-bold'
                      : 'bg-gray-800 text-ice-blue border border-ice-blue/30'
                  }`}
                >
                  Tutti
                </button>
                {itineraryData.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(day.day)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-sm md:text-base ${
                      selectedDay === day.day
                        ? 'bg-gradient-to-r from-ice-blue to-ice-purple text-black font-bold'
                        : 'bg-gray-800 text-ice-blue border border-ice-blue/30'
                    }`}
                  >
                    G{day.day}
                  </button>
                ))}
              </div>
              <MapView locations={mapLocations} selectedDay={selectedDay} />
            </section>

            {/* Daily Itinerary */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                Itinerario Dettagliato
              </h2>
              <div className="space-y-4 md:space-y-6">
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-3">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Mountain className="w-6 h-6 md:w-8 md:h-8" />
                Esperienze & Attrazioni
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all capitalize text-sm md:text-base ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-ice-blue to-ice-purple text-black font-bold'
                      : 'bg-gray-800 text-ice-blue border border-ice-blue/30'
                  }`}
                >
                  {cat === 'all' ? 'Tutte' : cat}
                </button>
              ))}
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {filteredExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>

            {/* Attractions List */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Attrazioni Principali</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {attractions.map((attr, idx) => (
                  <AttractionCard key={idx} attraction={attr} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8" />
              Stima Budget (per persona)
            </h2>
            
            <div className="flex justify-center">
              <BudgetCard budget={budgetData.realistico} highlighted />
            </div>

            {/* Budget Breakdown */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 md:p-6 border-2 border-ice-purple/30">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Dettaglio Costi (per persona)</h3>
              <div className="space-y-3 md:space-y-4">
                {Object.entries(budgetData.realistico.items).map(([key, item]: [string, any]) => (
                  <div key={key} className="border-b border-ice-blue/20 pb-2 md:pb-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                      <span className="font-bold capitalize text-base md:text-lg">{key}</span>
                      <span className="text-ice-light font-bold text-base md:text-lg">
                        €{item.value}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-ice-blue/70">{item.note}</p>
                  </div>
                ))}
                <div className="border-t-2 border-ice-purple pt-3 mt-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-bold text-lg md:text-xl text-ice-purple-light">TOTALE</span>
                    <span className="font-bold text-xl md:text-2xl text-ice-purple-light">
                      €{budgetData.realistico.total.value}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-ice-blue/70 mt-1">{budgetData.realistico.total.note}</p>
                </div>
              </div>
            </div>

            {/* Currency Converter */}
            <div className="bg-gradient-to-br from-ice-purple-dark/20 to-black rounded-xl p-4 md:p-6 border-2 border-ice-purple/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">💱 Conversione Valuta</h3>
              <div className="space-y-3">
                <p className="text-base md:text-lg">
                  <span className="font-bold">Regola veloce:</span> ISK ÷ 150 ≈ EUR
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mt-4">
                  {[5000, 10000, 15000, 20000, 25000, 30000].map(isk => (
                    <div key={isk} className="bg-black rounded-lg p-2 md:p-3 text-center border border-ice-purple/30">
                      <div className="text-xs md:text-sm text-ice-blue/70">{isk.toLocaleString()} ISK</div>
                      <div className="text-base md:text-lg font-bold text-ice-purple-light">≈ €{Math.round(isk/150)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Food & Culture Tab */}
        {activeTab === 'food' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span className="text-3xl">🍽️</span>
              Cibo & Usanze Islandesi
            </h2>

            {/* Food Section */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-2xl">🍴</span>
                Cibi e Bevande da Provare
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {foodAndCulture.food.map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-gray-900 via-ice-purple-dark/10 to-black rounded-xl p-4 border-2 ${
                    item.mustTry ? 'border-ice-purple' : 'border-ice-blue/30'
                  } hover:border-ice-purple/60 transition-all`}>
                    {item.mustTry && (
                      <div className="mb-2">
                        <span className="bg-gradient-to-r from-ice-blue to-ice-purple text-black px-2 py-1 rounded-full text-xs font-bold">
                          ⭐ DA PROVARE
                        </span>
                      </div>
                    )}
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-3xl md:text-4xl flex-shrink-0">{item.emoji}</span>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-bold text-ice-light">{item.name}</h4>
                        <p className="text-xs text-ice-purple-light">{item.category}</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-ice-blue/80 mb-3">{item.description}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-xs md:text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-ice-purple-light">📍</span>
                        <span className="text-ice-blue/70">{item.where}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-ice-purple-light">💰</span>
                        <span className="font-bold text-ice-light">{item.price}</span>
                      </div>
                    </div>
                    {item.warning && (
                      <div className="mt-2 p-2 bg-orange-900/20 border border-orange-500/50 rounded">
                        <p className="text-xs text-orange-300">⚠️ {item.warning}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Customs Section */}
            <section className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-2xl">🇮🇸</span>
                Usanze e Curiosità Islandesi
              </h3>
              <div className="space-y-3 md:space-y-4">
                {foodAndCulture.customs.map((custom, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-gray-900 via-ice-purple-dark/10 to-black rounded-lg p-4 border-l-4 border-ice-purple">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl md:text-3xl flex-shrink-0">{custom.emoji}</span>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-bold text-ice-light mb-2">{custom.title}</h4>
                        <p className="text-sm md:text-base text-ice-blue/80">{custom.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Info Tab */}
        {activeTab === 'info' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 md:w-8 md:h-8" />
              Informazioni Pratiche
            </h2>

            {/* Car Rental */}
            <InfoSection icon={<Car className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.car.title}>
              <ul className="space-y-2">
                {practicalInfo.car.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-ice-purple-light mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 md:p-4 bg-black rounded-lg border border-ice-purple/30">
                <p className="font-bold mb-2 text-sm md:text-base">Compagnie consigliate:</p>
                <p className="text-ice-blue/80 text-xs md:text-sm">{practicalInfo.car.companies.join(' • ')}</p>
              </div>
            </InfoSection>

            {/* Safety */}
            <InfoSection 
              icon={<AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />} 
              title={practicalInfo.safety.title}
              warning
            >
              <ul className="space-y-2">
                {practicalInfo.safety.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-lg md:text-xl flex-shrink-0">{tip.startsWith('✓') ? '✓' : '⚠️'}</span>
                    <span>{tip.replace(/^[✓⚠️]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>

            {/* Packing List */}
            <InfoSection icon={<Package className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.packing.title}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {practicalInfo.packing.essential.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-black p-2 md:p-3 rounded-lg border border-ice-blue/30">
                    <span className="text-ice-purple-light flex-shrink-0">✓</span>
                    <span className="text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* Apps */}
            <InfoSection icon={<Info className="w-5 h-5 md:w-6 md:h-6" />} title={practicalInfo.apps.title}>
              <div className="space-y-2 md:space-y-3">
                {practicalInfo.apps.list.map((app, idx) => (
                  <div key={idx} className="bg-black p-3 md:p-4 rounded-lg border border-ice-purple/30">
                    <h4 className="font-bold text-base md:text-lg text-ice-purple-light">{app.name}</h4>
                    <p className="text-xs md:text-sm text-ice-blue/80 mt-1">{app.description}</p>
                  </div>
                ))}
              </div>
            </InfoSection>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-ice-purple-dark/20 to-black border-t-2 border-ice-blue/30 mt-12 md:mt-16 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-ice-blue/70 text-sm md:text-base">
            🧊 Viaggio in Islanda! • Planning creato con ❤️ per un'avventura sicura e indimenticabile
          </p>
          <p className="text-ice-blue/50 text-xs md:text-sm mt-2">
            Memo: prenotare tutto con anticipo, controllare sempre meteo su vedur.is, e mai girare le spalle al mare! 
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
      className={`flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg whitespace-nowrap transition-all text-sm md:text-base ${
        active
          ? 'bg-gradient-to-r from-ice-blue to-ice-purple text-black font-bold'
          : 'bg-gray-800 text-ice-blue border border-ice-blue/30 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

function DayCard({ day }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-ice-purple-dark/10 to-black rounded-xl p-4 md:p-6 border-2 border-ice-blue/30 hover:border-ice-purple/60 transition-all">
      {/* Header */}
      <div className="mb-3 md:mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-ice-light">
            Giorno {day.day} • {day.title}
          </h3>
          <span className="text-xs md:text-sm bg-ice-purple/20 px-3 py-1 rounded-full border border-ice-purple/50 w-fit">
            {day.distance}
          </span>
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-3 md:space-y-4 mb-3 md:mb-4">
        {day.activities.map((activity: any, idx: number) => (
          <div key={idx} className="bg-black/50 rounded-lg p-3 md:p-4 border border-ice-blue/20">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
              <div className="flex-1">
                <h5 className="font-bold text-base md:text-lg text-ice-light">{activity.name}</h5>
                {activity.time && <span className="text-xs md:text-sm text-ice-blue/70">{activity.time}</span>}
              </div>
              {activity.price && (
                <div className="text-xs md:text-sm bg-ice-purple/10 px-2 py-1 rounded border border-ice-purple/30 w-fit">
                  <span className="break-words">💰 {activity.price}</span>
                </div>
              )}
            </div>
            <p className="text-sm md:text-base text-ice-blue/80 mb-2">{activity.description}</p>
            {activity.highlights && (
              <ul className="space-y-1 mt-2">
                {activity.highlights.map((h: string, i: number) => (
                  <li key={i} className="text-xs md:text-sm text-ice-blue/70 flex items-start gap-2">
                    <span className="text-ice-purple-light flex-shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            {activity.notes && (
              <p className="text-xs md:text-sm text-ice-purple-light mt-2 italic">💡 {activity.notes}</p>
            )}
            {activity.warning && (
              <div className="mt-2 p-2 bg-red-900/20 border border-red-500/50 rounded">
                <p className="text-xs md:text-sm text-red-300">⚠️ {activity.warning}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="space-y-2 text-xs md:text-sm">
        <div className="flex items-start gap-2 bg-black/30 p-2 md:p-3 rounded-lg">
          <span className="font-bold text-ice-light flex-shrink-0">🏨</span>
          <div>
            <span className="font-bold text-ice-light">Pernottamento: </span>
            <span className="text-ice-blue/80">{day.accommodation}</span>
          </div>
        </div>
        
        {day.antiVertigoNotes && (
          <div className="flex items-start gap-2 bg-green-900/20 p-2 md:p-3 rounded-lg border border-green-500/30">
            <span className="text-base md:text-lg flex-shrink-0">✓</span>
            <div>
              <span className="font-bold text-green-300">Anti-Vertigini: </span>
              <span className="text-green-200/80">{day.antiVertigoNotes}</span>
            </div>
          </div>
        )}

        {day.tips && (
          <div className="bg-blue-900/20 p-2 md:p-3 rounded-lg border border-blue-500/30">
            <p className="font-bold text-blue-300 mb-1 md:mb-2">💡 Consigli del giorno:</p>
            <ul className="space-y-1">
              {day.tips.map((tip: string, i: number) => (
                <li key={i} className="text-xs md:text-sm text-blue-200/80 flex items-start gap-2">
                  <span className="flex-shrink-0">•</span>
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
    <div className="bg-gradient-to-br from-gray-900 via-ice-purple-dark/10 to-black rounded-xl overflow-hidden border-2 border-ice-blue/30 hover:border-ice-purple/60 transition-all">
      {/* Image */}
      {experience.image && (
        <div className="relative w-full h-40 md:h-48 overflow-hidden">
          <img 
            src={experience.image} 
            alt={experience.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur px-2 py-1 rounded-full border border-ice-blue/50">
            <span className="text-xs font-bold text-ice-light">{experience.category}</span>
          </div>
        </div>
      )}
      
      <div className="p-4 md:p-6">
        <div className="mb-3">
          <h3 className="text-lg md:text-xl font-bold text-ice-light mb-1">{experience.name}</h3>
        </div>

        <p className="text-sm md:text-base text-ice-blue/80 mb-3 md:mb-4">{experience.description}</p>

        {/* Prices */}
        <div className="space-y-2 mb-3 md:mb-4">
          {experience.prices.map((price: any, idx: number) => (
            <div key={idx} className="flex flex-col xs:flex-row xs:justify-between xs:items-center bg-black/50 p-2 rounded border border-ice-purple/20 gap-1">
              <span className="text-xs md:text-sm">{price.type}</span>
              <span className="font-bold text-ice-purple-light text-sm md:text-base">
                {price.price.toLocaleString()} ISK <span className="text-xs text-ice-blue/70">(≈€{price.eur})</span>
              </span>
            </div>
          ))}
        </div>

        {/* Pros/Cons */}
        {experience.pros && (
          <div className="space-y-2 mb-3 md:mb-4">
            <div className="space-y-1">
              {experience.pros.map((pro: string, i: number) => (
                <p key={i} className="text-xs md:text-sm text-green-300 flex items-start gap-2">
                  <span className="flex-shrink-0">✓</span>
                  <span>{pro}</span>
                </p>
              ))}
            </div>
            {experience.cons && (
              <div className="space-y-1">
                {experience.cons.map((con: string, i: number) => (
                  <p key={i} className="text-xs md:text-sm text-orange-300 flex items-start gap-2">
                    <span className="flex-shrink-0">−</span>
                    <span>{con}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Additional Info */}
        <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
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
              className="inline-block mt-2 px-3 py-1.5 bg-gradient-to-r from-ice-blue/20 to-ice-purple/20 rounded-lg border border-ice-blue/50 hover:from-ice-blue/30 hover:to-ice-purple/30 transition-all text-xs md:text-sm"
            >
              🔗 Sito ufficiale
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function AttractionCard({ attraction }: any) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-ice-purple-dark/10 to-black rounded-xl overflow-hidden border-2 border-ice-blue/30 hover:border-ice-purple/60 transition-all">
      {/* Attraction Image */}
      {attraction.image && (
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <img 
            src={attraction.image} 
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur px-2 py-1 rounded-full border border-ice-blue/50">
            <span className="text-xs font-bold text-ice-light">{attraction.type}</span>
          </div>
        </div>
      )}
      
      <div className="p-3 md:p-4">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex-1">
            <h4 className="text-base md:text-lg font-bold text-ice-light mb-2">{attraction.name}</h4>
            <p className="text-sm md:text-base text-ice-blue/80 mb-3">{attraction.description}</p>
            
            {attraction.highlights && (
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                {attraction.highlights.map((h: string, i: number) => (
                  <span key={i} className="text-xs bg-ice-purple/10 px-2 py-1 rounded border border-ice-purple/30">
                    {h}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm mt-2 md:mt-3">
              <span className="text-ice-blue/70">⏱️ {attraction.time}</span>
              <span className="text-green-300">✓ {attraction.accessibility}</span>
            </div>

            {attraction.warning && (
              <div className="mt-2 p-2 bg-red-900/20 border border-red-500/50 rounded">
                <p className="text-xs md:text-sm text-red-300">{attraction.warning}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetCard({ budget, highlighted = false }: any) {
  return (
    <div className={`rounded-xl p-4 md:p-6 ${
      highlighted 
        ? 'bg-gradient-to-br from-ice-purple/20 via-ice-blue/20 to-ice-purple-dark/20 border-4 border-ice-purple' 
        : 'bg-gradient-to-br from-gray-900 to-black border-2 border-ice-blue/30'
    }`}>
      {highlighted && (
        <div className="text-center mb-3">
          <span className="bg-gradient-to-r from-ice-blue to-ice-purple text-black px-3 py-1 rounded-full text-xs md:text-sm font-bold">
            ⭐ CONSIGLIATO
          </span>
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-ice-light">{budget.name}</h3>
      <p className="text-center text-xs md:text-sm text-ice-blue/70 mb-3 md:mb-4">{budget.description}</p>
      
      <div className="text-center py-3 md:py-4 bg-black/50 rounded-lg border border-ice-purple/30">
        <div className="text-xl md:text-3xl font-bold text-ice-purple-light">
          €{budget.total.value}
        </div>
        <div className="text-xs md:text-sm text-ice-blue/70 mt-1">per persona</div>
      </div>
    </div>
  );
}

function InfoSection({ icon, title, children, warning = false }: any) {
  return (
    <div className={`rounded-xl p-4 md:p-6 border-2 ${
      warning 
        ? 'bg-gradient-to-br from-red-900/20 to-black border-red-500/50' 
        : 'bg-gradient-to-br from-gray-900 via-ice-purple-dark/10 to-black border-ice-purple/30'
    }`}>
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}
