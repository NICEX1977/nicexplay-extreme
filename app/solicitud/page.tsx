'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SolicitudPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    tipo: 'streamer',
    juego_principal: '',
    plataforma: '',
    url_canal: '',
    seguidores: '',
    descripcion: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const handle = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  async function enviar() {
    if (!form.nombre || !form.email || !form.descripcion) {
      setError('Por favor completa los campos obligatorios.')
      return
    }
    setEnviando(true)
    setError('')
    const { error: err } = await supabase.from('solicitudes').insert([form])
    if (err) {
      setError('Error al enviar. Intenta de nuevo.')
    } else {
      try {
        await fetch('/api/notificar-solicitud', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        })
      } catch (e) {
        console.error('Error enviando notificación:', e)
      }
      setEnviado(true)
    }
    setEnviando(false)
  }

  const input = { width: '100%', background: '#1a2235', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '12px 14px', fontSize: '14px', color: '#F0F4FF', outline: 'none', boxSizing: 'border-box' as 'border-box', marginBottom: '14px', fontFamily: 'Inter, sans-serif' }
  const label = { fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#7A8AB8', marginBottom: '6px', display: 'block' }

  if (enviado) return (
    <div style={{ minHeight: '100vh', background: '#0B0F1A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px', padding: '24px' }}>
      <div style={{ fontSize: '48px' }}>🎮</div>
      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '18px', fontWeight: 700, color: '#00FF9C', textAlign: 'center' }}>¡SOLICITUD ENVIADA!</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#7A8AB8', textAlign: 'center', maxWidth: '400px', lineHeight: 1.7 }}>
        Revisaremos tu solicitud y te contactaremos a <strong style={{ color: '#F0F4FF' }}>{form.email}</strong> en los próximos días.
      </div>
      <a href="/" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '10px', letterSpacing: '2px', color: '#00CFFF', textDecoration: 'none', padding: '12px 24px', border: '0.5px solid #00CFFF', borderRadius: '4px' }}>
        ← VOLVER A NICEXPLAY
      </a>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0B0F1A', color: '#F0F4FF', fontFamily: 'Inter, sans-serif' }}>
      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '60px', background: 'rgba(11,15,26,0.95)', backdropFilter: 'blur(16px)', borderBottom: '0.5px solid rgba(255,32,32,0.2)', display: 'flex', alignItems: 'center', padding: '0 24px', gap: '16px' }}>
        <a href="/" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '16px', textDecoration: 'none' }}>
          <span style={{ color: '#FF2020' }}>NICE</span><span style={{ color: '#00CFFF' }}>X</span><span style={{ color: '#F0F4FF' }}>PLAY</span>
        </a>
        <span style={{ color: '#3A4568' }}>›</span>
        <span style={{ color: '#7A8AB8', fontSize: '13px' }}>Solicitud de Creador</span>
      </nav>

      <div style={{ paddingTop: '80px', maxWidth: '640px', margin: '0 auto', padding: '80px 24px 40px' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>⭐</div>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
            SÉ PARTE DE <span style={{ color: '#FF2020' }}>NICEXPLAY</span>
          </div>
          <div style={{ fontSize: '14px', color: '#7A8AB8', lineHeight: 1.7 }}>
            ¿Eres streamer, podcaster o creador de contenido gaming? Únete a la comunidad gaming más grande de LatAm.
          </div>
        </div>

        {/* FORM */}
        <div style={{ background: '#111827', borderRadius: '12px', padding: '32px', border: '0.5px solid rgba(255,255,255,0.06)' }}>
          <label style={label}>TIPO DE SOLICITUD *</label>
          <select value={form.tipo} onChange={e => handle('tipo', e.target.value)}
            style={{ ...input, marginBottom: '20px' }}>
            <option value="streamer">🎮 Streamer</option>
            <option value="podcaster">🎙 Podcaster</option>
            <option value="creador">⭐ Creador de Contenido</option>
          </select>

          <label style={label}>NOMBRE O NICK *</label>
          <input value={form.nombre} onChange={e => handle('nombre', e.target.value)}
            placeholder="Tu nombre o nombre de canal" style={input} />

          <label style={label}>CORREO ELECTRÓNICO *</label>
          <input value={form.email} onChange={e => handle('email', e.target.value)}
            type="email" placeholder="tu@correo.com" style={input} />

          <label style={label}>JUEGO PRINCIPAL</label>
          <input value={form.juego_principal} onChange={e => handle('juego_principal', e.target.value)}
            placeholder="DOTA 2, VALORANT, Free Fire..." style={input} />

          <label style={label}>PLATAFORMA</label>
          <select value={form.plataforma} onChange={e => handle('plataforma', e.target.value)}
            style={{ ...input, marginBottom: '20px' }}>
            <option value="">Selecciona una plataforma</option>
            <option value="Twitch">Twitch</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Spotify">Spotify (Podcast)</option>
            <option value="Otra">Otra</option>
          </select>

          <label style={label}>URL DE TU CANAL</label>
          <input value={form.url_canal} onChange={e => handle('url_canal', e.target.value)}
            placeholder="https://twitch.tv/tucanal" style={input} />

          <label style={label}>SEGUIDORES APROXIMADOS</label>
          <select value={form.seguidores} onChange={e => handle('seguidores', e.target.value)}
            style={{ ...input, marginBottom: '20px' }}>
            <option value="">Selecciona un rango</option>
            <option value="0-100">0 - 100</option>
            <option value="100-500">100 - 500</option>
            <option value="500-1000">500 - 1,000</option>
            <option value="1000-5000">1,000 - 5,000</option>
            <option value="5000-10000">5,000 - 10,000</option>
            <option value="10000+">10,000+</option>
          </select>

          <label style={label}>CUÉNTANOS SOBRE TI *</label>
          <textarea value={form.descripcion} onChange={e => handle('descripcion', e.target.value)}
            placeholder="¿Qué tipo de contenido haces? ¿Por qué quieres ser parte de NICEXPLAY?"
            rows={4}
            style={{ ...input, resize: 'vertical' as 'vertical', marginBottom: '20px' }} />

          {error && (
            <div style={{ background: 'rgba(255,32,32,0.1)', border: '0.5px solid rgba(255,32,32,0.3)', borderRadius: '6px', padding: '12px', marginBottom: '16px', fontSize: '13px', color: '#FF4444' }}>
              {error}
            </div>
          )}

          <button onClick={enviar} disabled={enviando}
            style={{ width: '100%', padding: '14px', background: enviando ? '#3A4568' : 'linear-gradient(90deg,#FF2020,#BF5FFF)', color: '#fff', border: 'none', borderRadius: '6px', fontFamily: 'Orbitron, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', cursor: enviando ? 'not-allowed' : 'pointer' }}>
            {enviando ? 'ENVIANDO...' : '🚀 ENVIAR SOLICITUD'}
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '12px', color: '#3A4568' }}>
          Al enviar tu solicitud aceptas nuestros términos y condiciones. Revisamos todas las solicitudes manualmente.
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&display=swap');
        select option { background: #1a2235; color: #F0F4FF; }
      `}</style>
    </div>
  )
}