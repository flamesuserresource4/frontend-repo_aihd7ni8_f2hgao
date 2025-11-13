import { useEffect, useRef, useState } from 'react'

// Simple Mapbox GL JS embed via iframe alternative to avoid new deps
const MAP_BASE = 'https://www.openstreetmap.org/export/embed.html'

function MapView() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.006 })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude })
          setReady(true)
        },
        () => setReady(true),
        { enableHighAccuracy: true, timeout: 5000 }
      )
    } else {
      setReady(true)
    }
  }, [])

  const bbox = [coords.lon - 0.02, coords.lat - 0.02, coords.lon + 0.02, coords.lat + 0.02]
  const src = `${MAP_BASE}?bbox=${bbox.join('%2C')}&layer=mapnik&marker=${coords.lat}%2C${coords.lon}`

  return (
    <section id="map" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Live Map</h2>
          <span className="text-sm text-gray-500">{ready ? 'Your location set' : 'Detecting location...'}</span>
        </div>
        <div className="w-full h-[400px] md:h-[520px] rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
          <iframe title="map" className="w-full h-full" src={src} />
        </div>
      </div>
    </section>
  )}

export default MapView
