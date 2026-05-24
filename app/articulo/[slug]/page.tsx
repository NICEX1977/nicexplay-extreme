'use client' 
'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '../../../lib/supabase'
import { gameImages } from '../../../lib/cloudinary'

export default function ArticuloPage() {
  const params = useParams()
  const slug = params.slug as string
  const [articulo, setArticulo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    supabase
      .from('articles')
      .select('*, games(name, color, slug)')
      .eq('slug', slug)
      .single()
      .then(({ data, error }) => {
        console.log('Articulo:', data, error)
        setArticulo(data)
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0B0F1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Orbitron, sans-serif', color: '#FF2020', fontSize: '14px', letterSpacing: '3px' }}>CARGANDO...</div>
    </div>
  )

  if (!articulo) return (
    <div style={{ minHeight: '100vh', background: '#0B0F1A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
      <div style={{ fontFamily: 'Orbitron, sans-serif', color: '#7A8AB8', fontSize: '14px' }}>Artículo no encontrado</div>
      <a href="/" style={{ color: '#00CFFF', fontFamily: 'Orbitron, sans-serif', fontSize: '10px' }}>← VOLVER</a>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F1A', color: '#F0F4FF', fontFamily: 'Inter, sans-serif' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '60px', background: 'rgba(11,15,26,0.95)', backdropFilter: 'blur(16px)', borderBottom: '0.5px solid rgba(255,32,32,0.2)', display: 'flex', alignItems: 'center', padding: '0 24px', gap: '16px' }}>
        <a href="/" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '16px', textDecoration: 'none' }}>
          <span style={{ color: '#FF2020' }}>NICE</span><span style={{ color: '#00CFFF' }}>X</span><span style={{ color: '#F0F4FF' }}>PLAY</span>
        </a>
        <span style={{ color: '#3A4568' }}>›</span>
        <span style={{ color: '#7A8AB8', fontSize: '13px' }}>{articulo.games?.name || articulo.category}</span>
      </nav>

      <div style={{ paddingTop: '60px' }}>
        <div style={{ position: 'relative', height: '300px', overflow: 'hidden', background: 'linear-gradient(135deg,#1a0a0a,#0a1a2d)' }}>
          {articulo.games?.name && gameImages[articulo.games.name] && (
            <img src={gameImages[articulo.games.name]} alt={articulo.games.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,15,26,1) 0%, rgba(11,15,26,0.4) 60%, transparent 100%)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              {articulo.tags?.map((tag: string) => (
                <span key={tag} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', padding: '3px 10px', borderRadius: '3px', background: 'rgba(255,32,32,0.15)', color: '#FF4444', border: '0.5px solid rgba(255,32,32,0.3)' }}>{tag}</span>
              ))}
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '12px', maxWidth: '800px' }}>{articulo.title}</h1>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '12px', color: '#7A8AB8', fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px' }}>
              <span>📊 {articulo.views?.toLocaleString()} VISTAS</span>
              <span>🎮 {articulo.games?.name || articulo.category?.toUpperCase()}</span>
              <span>📅 {new Date(articulo.created_at).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
        {articulo.excerpt && (
          <div style={{ fontSize: '18px', color: '#7A8AB8', lineHeight: 1.7, marginBottom: '32px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #FF2020' }}>
            {articulo.excerpt}
          </div>
        )}
        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#C8D0E0', marginBottom: '16px' }}>
          {articulo.content || 'Contenido completo próximamente. Suscríbete a NICEXPLAY PLUS para acceso anticipado.'}
        </div>
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', letterSpacing: '2px', color: '#00CFFF', textDecoration: 'none', padding: '10px 20px', border: '0.5px solid #00CFFF', borderRadius: '4px' }}>
            ← VOLVER A NICEXPLAY
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
    </div>
  )
}