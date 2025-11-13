import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Feed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/posts`)
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        setError('Failed to load posts')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Trending Near You</h2>
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p._id} className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              {p.images && p.images[0] && (
                <img src={p.images[0]} alt="post" className="w-full h-44 object-cover" />
              )}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{p.author}</h3>
                  {p.rating && (
                    <span className="text-sm px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">★ {p.rating}</span>
                  )}
                </div>
                <p className="text-gray-600 mt-2 line-clamp-3">{p.content}</p>
                {p.restaurant_id && (
                  <a href="#map" className="text-blue-600 text-sm mt-3 inline-block">View on map</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feed
