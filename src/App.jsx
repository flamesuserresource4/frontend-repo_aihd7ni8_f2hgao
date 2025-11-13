import Hero from './components/Hero'
import Feed from './components/Feed'
import MapView from './components/MapView'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-extrabold text-xl">Additive</a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#map" className="hover:text-blue-600">Map</a>
            <a href="/test" className="hover:text-blue-600">Check</a>
            <a href="#feed" className="hover:text-blue-600">Feed</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <MapView />
        <div id="feed">
          <Feed />
        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Additive. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
