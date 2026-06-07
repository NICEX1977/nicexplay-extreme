'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Solicitud = {
  id: string
  nombre: string
  email: string
  tipo: string
  juego_principal: string
  plataforma: string
  url_canal: string
  seguidores: string
  descripcion: string
  estado: string
  created_at: string
}

type Article = {
  id: string
  title: string
  excerpt: string
  cover_url: string
  category: string
}

export default function AdminPanel() {
  const router = useRouter()
  const [tab, setTab] = useState<'solicitudes' | 'instagram'>('solicitudes')
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [filtro, setFiltro] = useState('todos')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  

  useEffect(() => {
    if (localStorage.getItem('nicexplay_admin') !== 'true') {
      router.push('/admin/login')
      return
    }
    cargarSolicitudes()
    cargarArticles()
  }, [])

  const cargarSolicitudes = async () => {
    const { data } = await supabase
      .from('solicitudes')
      .select('*')
      .order('created_at', { ascending: false })
    setSolicitudes(data || [])
    setLoading(false)
  }

  const cargarArticles = async () => {
    const { data } = await supabase
      .from('articles')
      .select('id, title, excerpt, cover_url, category')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
    setArticles(data || [])
  }

  const cambiarEstado = async (id: string, estado: string) => {
    await supabase.from('solicitudes').update({ estado }).eq('id', id)
    cargarSolicitudes()
  }

  const salir = () => {
    localStorage.removeItem('nicexplay_admin')
    router.push('/')
  }

  const filtradas = filtro === 'todos'
    ? solicitudes
    : solicitudes.filter(s => s.estado === filtro)

  const conteo = {
    todos: solicitudes.length,
    pendiente: solicitudes.filter(s => s.estado === 'pendiente').length,
    aprobado: solicitudes.filter(s => s.estado === 'aprobado').length,
    rechazado: solicitudes.filter(s => s.estado === 'rechazado').length,
  }
const [imagenUrl, setImagenUrl] = useState<string | null>(null)
  const [generando, setGenerando] = useState(false)

  const generarImagen = async () => {
    if (!selectedArticle) return
    setGenerando(true)
    try {
      const res = await fetch('/api/generar-imagen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: selectedArticle.title,
          excerpt: selectedArticle.excerpt,
          category: selectedArticle.category,
          cover_url: selectedArticle.cover_url
        })
      })
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      setImagenUrl(url)
    } catch (e) {
      console.error('Error:', e)
    }
    setGenerando(false)
  }

  const descargarImagen = () => {
    if (!imagenUrl) return
    const link = document.createElement('a')
    link.download = `nicexplay-instagram.png`
    link.href = imagenUrl
    link.click()
  }
  

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-purple-400">🎮 NICEXPLAY Admin</h1>
          <p className="text-gray-400">Panel de administración</p>
        </div>
        <button onClick={salir} className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition">
          Cerrar sesión
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setTab('solicitudes')}
          className={`px-6 py-2 rounded-lg font-bold text-sm transition ${tab === 'solicitudes' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          📋 Solicitudes
        </button>
        <button
          onClick={() => setTab('instagram')}
          className={`px-6 py-2 rounded-lg font-bold text-sm transition ${tab === 'instagram' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          📸 Generador Instagram
        </button>
      </div>

      {/* Tab Solicitudes */}
      {tab === 'solicitudes' && (
        <>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total', key: 'todos', color: 'border-gray-600' },
              { label: 'Pendientes', key: 'pendiente', color: 'border-yellow-500' },
              { label: 'Aprobados', key: 'aprobado', color: 'border-green-500' },
              { label: 'Rechazados', key: 'rechazado', color: 'border-red-500' },
            ].map(({ label, key, color }) => (
              <button
                key={key}
                onClick={() => setFiltro(key)}
                className={`bg-gray-900 border ${color} ${filtro === key ? 'ring-2 ring-purple-500' : ''} rounded-xl p-4 text-center transition hover:opacity-80`}
              >
                <p className="text-2xl font-bold">{conteo[key as keyof typeof conteo]}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </button>
            ))}
          </div>

          {loading ? (
            <p className="text-center text-gray-400 mt-20">Cargando solicitudes...</p>
          ) : filtradas.length === 0 ? (
            <p className="text-center text-gray-400 mt-20">No hay solicitudes {filtro !== 'todos' ? filtro + 's' : ''}</p>
          ) : (
            <div className="space-y-4">
              {filtradas.map(s => (
                <div key={s.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">{s.nombre}</h2>
                      <p className="text-gray-400 text-sm">{s.email} · {s.tipo} · {new Date(s.created_at).toLocaleDateString('es-PE')}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      s.estado === 'pendiente' ? 'bg-yellow-500/20 text-yellow-400' :
                      s.estado === 'aprobado' ? 'bg-green-500/20 text-green-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {s.estado.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    {s.juego_principal && <p><span className="text-gray-500">Juego:</span> {s.juego_principal}</p>}
                    {s.plataforma && <p><span className="text-gray-500">Plataforma:</span> {s.plataforma}</p>}
                    {s.seguidores && <p><span className="text-gray-500">Seguidores:</span> {s.seguidores}</p>}
                    {s.url_canal && <p><span className="text-gray-500">Canal:</span> <a href={s.url_canal} target="_blank" className="text-purple-400 hover:underline">{s.url_canal}</a></p>}
                  </div>
                  {s.descripcion && <p className="text-gray-300 text-sm mb-4 bg-gray-800 p-3 rounded-lg">{s.descripcion}</p>}
                  {s.estado === 'pendiente' && (
                    <div className="flex gap-3">
                      <button onClick={() => cambiarEstado(s.id, 'aprobado')} className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-sm font-bold transition">✅ Aprobar</button>
                      <button onClick={() => cambiarEstado(s.id, 'rechazado')} className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-sm font-bold transition">❌ Rechazar</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Tab Instagram */}
      {tab === 'instagram' && (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Selecciona un artículo</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {articles.map(a => (
                <div
                  key={a.id}
                  onClick={() => setSelectedArticle(a)}
                  className={`bg-gray-900 border rounded-xl p-4 cursor-pointer transition ${selectedArticle?.id === a.id ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-800 hover:border-gray-600'}`}
                >
                  <p className="text-purple-400 text-xs font-bold mb-1">{a.category.toUpperCase()}</p>
                  <p className="text-white font-bold text-sm">{a.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Vista previa</h2>
            {imagenUrl ? (
  <img src={imagenUrl} alt="Preview Instagram" style={{ width: '100%', borderRadius: '12px', border: '1px solid #374151' }} />
) : (
  <div style={{ width: '100%', aspectRatio: '1', borderRadius: '12px', border: '1px solid #374151', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p className="text-gray-500">Selecciona un artículo y genera la imagen</p>
  </div>
)}
<div className="flex gap-3 mt-4">
  <button
    onClick={generarImagen}
    disabled={!selectedArticle || generando}
    className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-3 rounded-lg font-bold transition"
  >
    {generando ? '⏳ Generando...' : '🎨 Generar imagen'}
  </button>
  <button
    onClick={descargarImagen}
    disabled={!imagenUrl}
    className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-3 rounded-lg font-bold transition"
  >
    ⬇️ Descargar PNG
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  )
}