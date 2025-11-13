import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-white to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Additive: Food meets Social, on the Map
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Discover trending dishes, follow foodie friends, and see restaurants live on the map.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#map" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Explore Nearby</a>
          <a href="/test" className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-black/80 transition-colors">System Check</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,128,0.06),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(0,128,255,0.06),transparent_40%)]" />
    </section>
  )
}

export default Hero
