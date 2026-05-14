'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeGame, setActiveGame] = useState('DOTA 2')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('login')
  const [notif, setNotif] = useState('')
  const [showNotif, setShowNotif] = useState(false)
  const [heroIdx, setHeroIdx] = useState(0)

  function showNotification(msg: string) {
    setNotif(msg)
    setShowNotif(true)
    setTimeout(() => setShowNotif(false), 2800)
  }

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % 4), 4000)
    return () => clearInterval(t)
  }, [])

  const games = [
    { name: 'DOTA 2', icon: '⚔', players: '120K', color: '#C45B14', live: true },
    { name: 'League of Legends', icon: '⚔', players: '98K', color: '#C89B3C', live: false },
    { name: 'Counter-Strike 2', icon: '🔫', players: '88K', color: '#FF6B35', live: true },
    { name: 'VALORANT', icon: '🎯', players: '75K', color: '#FF4655', live: false },
    { name: 'Fortnite', icon: '🏗', players: '64K', color: '#00D4FF', live: false },
    { name: 'Free Fire', icon: '📱', players: '64K', color: '#FFB800', live: true },
  ]

  const navGames = ['DOTA 2','LoL','CS2','VALORANT','FORTNITE','FREE FIRE','ESPORTS','NOTICIAS','STREAMING','PODCASTS','CREADORES','EVENTOS','TIENDA']

  const creators = [
    { name: 'Dark Mago', game: 'DOTA 2 🇵🇪', icon: '🎮', live: true, color: 'rgba(196,91,20,0.15)' },
    { name: 'NiceXStreamer', game: 'VALORANT 🇵🇪', icon: '🎯', live: true, color: 'rgba(255,70,85,0.12)' },
    { name: 'GamingLatam', game: 'CS2 🇦🇷', icon: '🔫', live: false, color: 'rgba(255,107,53,0.12)' },
    { name: 'FreeFire_PE', game: 'FREE FIRE 🇵🇪', icon: '📱', live: true, color: 'rgba(255,184,0,0.12)' },
    { name: 'LolMaster', game: 'LOL 🇨🇱', icon: '⚔', live: false, color: 'rgba(200,155,60,0.12)' },
    { name: 'ProGamerGG', game: 'DOTA 2 🇧🇷', icon: '🏆', live: true, color: 'rgba(0,207,255,0.1)' },
  ]

  const tickers = [
    { color: '#FF2020', text: 'paiN Gaming 🇵🇪 clasifica a DreamLeague S29 · ¡Perú en el mundo!' },
    { color: '#FFB800', text: 'GTA VI · 19 Nov 2026 · PS5/Xbox · Hype máximo LatAm' },
    { color: '#00CFFF', text: 'NAVI vs FaZe · IEM Cologne · MAPA 3 EN VIVO · 7:6' },
    { color: '#00FF9C', text: 'Free Fire World Series LatAm · 14–21 Jun 2026' },
    { color: '#BF5FFF', text: 'Nuevo parche DOTA 2 · 7.36c · Cambios importantes en héroes' },
    { color: '#FF2020', text: 'The International 2026 · Shanghai · 13–23 Agosto · $1.6M' },
  ]

  const s: { [key: string]: React.CSSProperties } = {
    body: { minHeight: '100vh', background: '#0B0F1A', color: '#F0F4FF', fontFamily: 'Inter, sans-serif', overflowX: 'hidden' },
    nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '60px', background: 'rgba(11,15,26,0.95)', backdropFilter: 'blur(16px)', borderBottom: '0.5px solid rgba(255,32,32,0.2)', display: 'flex', alignItems: 'center', gap: '0', padding: '0 16px' },
    logoWrap: { display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0, marginRight: '16px' },
    logoIcon: { width: '36px', height: '36px', flexShrink: 0 },
    logoText: { fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '16px', letterSpacing: '1px', lineHeight: 1 },
    logoSub: { fontFamily: 'Orbitron, sans-serif', fontSize: '8px', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', display: 'block', marginTop: '2px' },
    navGames: { display: 'flex', gap: '2px', flex: 1, overflow: 'hidden' },
    navRight: { display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginLeft: '10px' },
    btnLogin: { background: 'transparent', color: '#00CFFF', border: '1px solid #00CFFF', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', padding: '7px 12px', borderRadius: '4px', cursor: 'pointer' },
    btnReg: { background: '#FF2020', color: '#fff', border: 'none', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', padding: '7px 12px', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 0 14px rgba(255,32,32,0.4)' },
    main: { paddingTop: '60px', display: 'grid', gridTemplateColumns: '180px 1fr 280px', minHeight: '100vh' },
    sideL: { background: '#111827', borderRight: '0.5px solid rgba(255,255,255,0.06)', padding: '16px 0', position: 'sticky', top: '60px', height: 'calc(100vh - 60px)', overflowY: 'auto' as 'auto' },
    sideR: { background: '#111827', borderLeft: '0.5px solid rgba(255,255,255,0.06)', padding: '14px', position: 'sticky', top: '60px', height: 'calc(100vh - 60px)', overflowY: 'auto' as 'auto', display: 'flex', flexDirection: 'column', gap: '14px' },
    content: { padding: '14px', overflowY: 'auto' as 'auto' },
    secHdr: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' },
    secTitle: { fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '8px' },
    card: { background: '#111827', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)', cursor: 'pointer', transition: 'all 0.2s' },
    footer: { background: '#111827', borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '24px', gridColumn: '1 / -1' },
  }

  return (
    <div style={s.body}>
      {/* NOTIF */}
      {showNotif && (
        <div style={{ position: 'fixed', top: '70px', right: '16px', zIndex: 400, background: '#111827', border: '0.5px solid #FF2020', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', boxShadow: '0 4px 20px rgba(255,32,32,0.3)', maxWidth: '300px' }}>
          {notif}
        </div>
      )}

      {/* MODAL */}
      {modalOpen && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#111827', borderRadius: '12px', padding: '28px', width: '340px', border: '0.5px solid rgba(255,32,32,0.3)', position: 'relative' }}>
            <span onClick={() => setModalOpen(false)} style={{ position: 'absolute', top: '12px', right: '14px', cursor: 'pointer', fontSize: '18px', color: '#3A4568' }}>✕</span>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '16px', fontWeight: 700, textAlign: 'center', marginBottom: '6px' }}>{modalMode === 'login' ? 'INICIAR SESIÓN' : 'CREAR CUENTA'}</div>
            <div style={{ fontSize: '12px', color: '#7A8AB8', textAlign: 'center', marginBottom: '20px' }}>{modalMode === 'login' ? 'Accede a tu cuenta NICEXPLAY' : 'Únete a la comunidad NICEXPLAY'}</div>
            <input placeholder="Correo electrónico" style={{ width: '100%', background: '#1a2235', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', color: '#F0F4FF', outline: 'none', marginBottom: '10px', boxSizing: 'border-box' }} />
            <input type="password" placeholder="Contraseña" style={{ width: '100%', background: '#1a2235', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', color: '#F0F4FF', outline: 'none', marginBottom: '10px', boxSizing: 'border-box' }} />
            <button onClick={() => { showNotification(modalMode === 'login' ? '✅ Iniciando sesión...' : '🎉 ¡Bienvenido a NICEXPLAY!'); setTimeout(() => setModalOpen(false), 1200) }}
              style={{ width: '100%', padding: '11px', background: '#FF2020', color: '#fff', border: 'none', borderRadius: '6px', fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', cursor: 'pointer', marginBottom: '8px' }}>
              {modalMode === 'login' ? 'ENTRAR' : 'CREAR CUENTA GRATIS'}
            </button>
            <button onClick={() => showNotification('🔵 Google OAuth próximamente')}
              style={{ width: '100%', padding: '11px', background: '#1a2235', color: '#F0F4FF', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '6px', fontFamily: 'Orbitron, sans-serif', fontSize: '11px', cursor: 'pointer', marginBottom: '10px' }}>
              🔵 Continuar con Google
            </button>
            <div onClick={() => setModalMode(modalMode === 'login' ? 'register' : 'login')}
              style={{ textAlign: 'center', fontSize: '11px', color: '#7A8AB8', cursor: 'pointer' }}>
              {modalMode === 'login' ? <>¿No tienes cuenta? <span style={{ color: '#00CFFF' }}>Regístrate gratis</span></> : <>¿Ya tienes cuenta? <span style={{ color: '#00CFFF' }}>Iniciar sesión</span></>}
            </div>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav style={s.nav}>
        <div style={s.logoWrap}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 2L4 8V20C4 27 10 32 18 34C26 32 32 27 32 20V8L18 2Z" fill="rgba(255,32,32,0.15)" stroke="#FF2020" strokeWidth="1.5"/>
            <text x="9" y="23" fontFamily="Orbitron" fontSize="11" fontWeight="900" fill="#FF2020">NX</text>
          </svg>
          <div>
            <div style={s.logoText}><span style={{ color: '#FF2020' }}>NICE</span><span style={{ color: '#00CFFF' }}>X</span><span>PLAY</span></div>
            <span style={s.logoSub}>EXTREME</span>
          </div>
        </div>
        <div style={s.navGames}>
          {navGames.map(g => (
            <button key={g} onClick={() => { setActiveGame(g); showNotification('🎮 Cargando: ' + g) }}
              style={{ padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', fontWeight: 600, border: '0.5px solid', transition: 'all 0.18s', whiteSpace: 'nowrap', background: activeGame === g ? 'rgba(255,32,32,0.1)' : 'transparent', color: activeGame === g ? '#FF4444' : '#7A8AB8', borderColor: activeGame === g ? 'rgba(255,32,32,0.4)' : 'transparent' }}>
              {g}
            </button>
          ))}
        </div>
        <div style={s.navRight}>
          <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '10px', color: '#7A8AB8', cursor: 'pointer', padding: '4px 8px', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '4px' }}>🌐 ES</span>
          <button style={s.btnLogin} onClick={() => { setModalMode('login'); setModalOpen(true) }}>INICIAR SESIÓN</button>
          <button style={s.btnReg} onClick={() => { setModalMode('register'); setModalOpen(true) }}>REGÍSTRATE</button>
        </div>
      </nav>

      {/* MAIN GRID */}
      <div style={s.main}>

        {/* SIDEBAR LEFT */}
        <aside style={s.sideL}>
          <div style={{ padding: '8px 14px 4px', fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '3px', color: '#3A4568' }}>JUEGOS PRINCIPALES</div>
          {[
            { name: 'DOTA 2', icon: '⚔', color: 'rgba(196,91,20,0.15)', live: true },
            { name: 'League of Legends', icon: '⚔', color: 'rgba(200,155,60,0.15)', live: false, num: '98K' },
            { name: 'Counter-Strike 2', icon: '🔫', color: 'rgba(255,107,53,0.15)', live: true },
            { name: 'VALORANT', icon: '🎯', color: 'rgba(255,70,85,0.15)', live: false, num: '75K' },
            { name: 'Fortnite', icon: '🏗', color: 'rgba(0,212,255,0.12)', live: false, num: '64K' },
            { name: 'Free Fire', icon: '📱', color: 'rgba(255,184,0,0.15)', live: true },
            { name: 'PUBG Mobile', icon: '🎮', color: 'rgba(0,255,156,0.1)', live: false, num: '53K' },
            { name: 'Call of Duty', icon: '🕹', color: 'rgba(145,71,255,0.12)', live: false, num: '41K' },
            { name: 'Mobile Legends', icon: '🏆', color: 'rgba(0,207,255,0.1)', live: false, num: '38K' },
          ].map(g => (
            <div key={g.name} onClick={() => showNotification('🎮 Cargando ' + g.name)}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 14px', cursor: 'pointer', borderLeft: '3px solid transparent', transition: 'all 0.18s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: g.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>{g.icon}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', fontWeight: 600, flex: 1 }}>{g.name}</div>
              {g.live ? <span style={{ fontSize: '8px', fontFamily: 'Orbitron, sans-serif', padding: '1px 5px', borderRadius: '3px', background: 'rgba(255,32,32,0.2)', color: '#FF4444' }}>VIVO</span>
                : <span style={{ fontSize: '10px', color: '#3A4568', fontFamily: 'Orbitron, sans-serif' }}>{(g as any).num}</span>}
            </div>
          ))}
          <div style={{ padding: '12px 14px 4px', fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '3px', color: '#3A4568', marginTop: '8px' }}>RANKINGS IA</div>
          <div style={{ padding: '0 14px 10px' }}>
            {[['🥇 paiN Gaming', '9,840', '#FFB800'], ['🥈 NAVI', '9,210', '#7A8AB8'], ['🥉 Team Spirit', '8,990', '#7A8AB8'], ['4. Liquid', '8,780', '#3A4568']].map(([t, p, c]) => (
              <div key={t as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '0.5px solid rgba(255,255,255,0.06)', fontSize: '11px', color: '#7A8AB8' }}>
                <span>{t}</span><span style={{ color: c as string, fontFamily: 'Orbitron, sans-serif', fontSize: '10px' }}>{p}</span>
              </div>
            ))}
            <button onClick={() => showNotification('📊 Cargando rankings completos...')}
              style={{ width: '100%', marginTop: '8px', padding: '6px', borderRadius: '4px', border: '0.5px solid rgba(0,207,255,0.3)', background: 'transparent', color: '#00CFFF', fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', cursor: 'pointer' }}>
              VER RANKINGS
            </button>
          </div>
        </aside>

        {/* CENTER */}
        <main style={s.content}>

          {/* TICKER */}
          <div style={{ background: 'rgba(255,32,32,0.06)', border: '0.5px solid rgba(255,32,32,0.15)', borderRadius: '6px', padding: '8px 0', marginBottom: '14px', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', fontWeight: 900, letterSpacing: '2px', color: '#FF2020', padding: '0 14px', whiteSpace: 'nowrap', flexShrink: 0 }}>⚡ LIVE</span>
            <div style={{ display: 'flex', gap: '32px', animation: 'tick 30s linear infinite', whiteSpace: 'nowrap' }}>
              {[...tickers, ...tickers].map((t, i) => (
                <span key={i} style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', fontWeight: 600, color: '#7A8AB8', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: t.color, display: 'inline-block', flexShrink: 0 }}></span>
                  {t.text}
                </span>
              ))}
            </div>
          </div>

          {/* HERO */}
          <div onClick={() => showNotification('🎮 Abriendo cobertura DreamLeague S29...')}
            style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', marginBottom: '14px', height: '300px', cursor: 'pointer', background: 'linear-gradient(135deg,#1a0a0a 0%,#2d0808 30%,#0a1a2d 70%,#060e1a 100%)' }}>
            <div style={{ position: 'absolute', top: '20%', left: '30%', width: '300px', height: '200px', background: 'radial-gradient(ellipse,rgba(255,32,32,0.3) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '100px', opacity: 0.12 }}>🏆</div>
            <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textAlign: 'right' }}>13–24 MAYO 2026<br />ESL GAMING</div>
            <div style={{ position: 'absolute', inset: 0, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top,rgba(11,15,26,0.95) 0%,rgba(11,15,26,0.3) 60%,transparent 100%)' }}>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '3px', color: '#FF4444', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF2020', display: 'inline-block' }}></span>
                TORNEO EN VIVO · NOTICIA DESTACADA
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '26px', fontWeight: 700, lineHeight: 1.1, marginBottom: '8px' }}>
                DREAMLEAGUE S29<br />DOTA 2 <span style={{ color: '#FF2020', fontStyle: 'italic' }}>REGRESA AL ESCENARIO</span><br />MÁS GRANDE DEL MUNDO
              </div>
              <div style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', marginBottom: '14px' }}>$1,000,000 en premios · 16 equipos · paiN Gaming 🇵🇪 clasifica por SA</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={(e) => { e.stopPropagation(); showNotification('▶ Abriendo stream en vivo...') }}
                  style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', padding: '10px 22px', background: '#FF2020', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 0 20px rgba(255,32,32,0.5)' }}>
                  VER EN VIVO
                </button>
                <button onClick={(e) => { e.stopPropagation(); showNotification('📰 Cargando noticias...') }}
                  style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', padding: '10px 22px', background: 'transparent', color: '#F0F4FF', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '4px', cursor: 'pointer' }}>
                  MÁS NOTICIAS
                </button>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', gap: '5px' }}>
              {[0,1,2,3].map(i => (
                <div key={i} onClick={(e) => { e.stopPropagation(); setHeroIdx(i) }}
                  style={{ height: '6px', borderRadius: '3px', cursor: 'pointer', transition: 'all 0.3s', background: i === heroIdx ? '#FF2020' : 'rgba(255,255,255,0.2)', width: i === heroIdx ? '20px' : '6px' }}></div>
              ))}
            </div>
          </div>

          {/* JUEGOS */}
          <div style={s.secHdr}>
            <div style={s.secTitle}><span style={{ width: '3px', height: '14px', borderRadius: '2px', background: '#FF2020', display: 'inline-block', boxShadow: '0 0 8px #FF2020' }}></span>JUEGOS PRINCIPALES</div>
            <span onClick={() => showNotification('🎮 Cargando todos los juegos...')} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#00CFFF', cursor: 'pointer' }}>VER TODOS →</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '8px', marginBottom: '14px' }}>
            {games.map(g => (
              <div key={g.name} onClick={() => showNotification('🎮 Abriendo ' + g.name)}
                style={{ ...s.card, padding: '10px 8px', textAlign: 'center', position: 'relative' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FF2020'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                {g.live && <span style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '7px', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, padding: '1px 5px', borderRadius: '2px', background: '#FF2020', color: '#fff' }}>EN VIVO</span>}
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>{g.icon}</div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '11px', fontWeight: 700, marginBottom: '2px', lineHeight: 1.1 }}>{g.name}</div>
                <div style={{ fontSize: '9px', color: '#3A4568', fontFamily: 'Orbitron, sans-serif' }}>{g.players}</div>
                <div style={{ fontSize: '8px', fontFamily: 'Orbitron, sans-serif', padding: '1px 6px', borderRadius: '2px', marginTop: '4px', display: 'inline-block', background: g.live ? 'rgba(255,32,32,0.15)' : 'rgba(0,207,255,0.1)', color: g.live ? '#FF4444' : '#00CFFF' }}>
                  {g.live ? 'EN VIVO' : 'PRÓXIMO'}
                </div>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '8px', marginBottom: '14px' }}>
            {[
              { icon: '📊', title: 'RANKINGS IA', sub: 'Los mejores jugadores actualizados por IA', color: '#00CFFF', action: 'VER RANKINGS' },
              { icon: '🎬', title: 'CLIPS & HIGHLIGHTS', sub: 'Las mejores jugadas seleccionadas por IA', color: '#FF4444', action: 'VER CLIPS' },
              { icon: '🎙', title: 'PODCASTS DIARIOS', sub: 'Noticias con voz IA en español latino', color: '#BF5FFF', action: 'ESCUCHAR' },
              { icon: '📺', title: 'STREAMERS EN VIVO', sub: 'Descubre quién está en vivo ahora', color: '#FF6B35', action: 'VER DIRECTORIO' },
              { icon: '⭐', title: 'CREADORES', sub: 'Apoya a tus creadores favoritos', color: '#FFB800', action: 'VER CREADORES' },
            ].map(f => (
              <div key={f.title} onClick={() => showNotification('Cargando ' + f.title + '...')}
                style={{ ...s.card, padding: '12px', textAlign: 'center' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,207,255,0.3)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'}>
                <div style={{ fontSize: '22px', marginBottom: '6px' }}>{f.icon}</div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '1px', color: f.color, marginBottom: '3px' }}>{f.title}</div>
                <div style={{ fontSize: '10px', color: '#7A8AB8', lineHeight: 1.4, marginBottom: '6px' }}>{f.sub}</div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', letterSpacing: '1px', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer', border: `0.5px solid ${f.color}`, color: f.color, display: 'inline-block' }}>{f.action}</div>
              </div>
            ))}
          </div>

          {/* NOTICIAS */}
          <div style={s.secHdr}>
            <div style={s.secTitle}><span style={{ width: '3px', height: '14px', borderRadius: '2px', background: '#FF2020', display: 'inline-block', boxShadow: '0 0 8px #FF2020' }}></span>NOTICIAS DESTACADAS</div>
            <span onClick={() => showNotification('📰 Cargando noticias...')} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#00CFFF', cursor: 'pointer' }}>VER TODAS →</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
            {[
              { icon: '🎯', color: 'rgba(255,70,85,0.12)', tag: 'VALORANT', tagColor: '#FF4655', title: 'Nuevos agentes filtrados · Temporada 9 trae cambios masivos', time: 'HACE 1 HORA · 2 MIN' },
              { icon: '🔫', color: 'rgba(255,107,53,0.12)', tag: 'CS2', tagColor: '#FF6B35', title: 'Actualización de mapas · Nuke renovado y Dust2 con cambios', time: 'HACE 3 HORAS · 3 MIN' },
              { icon: '⚔', color: 'rgba(196,91,20,0.12)', tag: 'DOTA 2', tagColor: '#C45B14', title: 'Cambios importantes en héroes · Parche 7.36c y nuevo meta', time: 'HACE 5 HORAS · 4 MIN' },
              { icon: '📱', color: 'rgba(255,184,0,0.12)', tag: 'FREE FIRE', tagColor: '#FFB800', title: 'Copa LATAM 2026 · Los mejores equipos peruanos buscan el cupo', time: 'HACE 6 HORAS · 3 MIN' },
            ].map(n => (
              <div key={n.title} onClick={() => showNotification('📰 Leyendo noticia...')}
                style={{ ...s.card, padding: '14px', display: 'flex', gap: '12px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,32,32,0.3)'; (e.currentTarget as HTMLElement).style.background = '#1a2235' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = '#111827' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>{n.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', letterSpacing: '2px', color: n.tagColor, marginBottom: '4px' }}>{n.tag}</div>
                  <div style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.3, marginBottom: '4px' }}>{n.title}</div>
                  <div style={{ fontSize: '10px', color: '#3A4568', fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px' }}>{n.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CREADORES */}
          <div style={s.secHdr}>
            <div style={s.secTitle}><span style={{ width: '3px', height: '14px', borderRadius: '2px', background: '#FF2020', display: 'inline-block', boxShadow: '0 0 8px #FF2020' }}></span>CREADORES DESTACADOS</div>
            <span onClick={() => showNotification('⭐ Ver directorio de creadores...')} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#00CFFF', cursor: 'pointer' }}>VER TODOS →</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '14px' }}>
            {creators.map(c => (
              <div key={c.name} onClick={() => showNotification('📺 Abriendo perfil de ' + c.name)}
                style={{ ...s.card, padding: '10px', flexShrink: 0, width: '100px', textAlign: 'center' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00CFFF'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', margin: '0 auto 6px', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '2px solid rgba(255,255,255,0.06)' }}>{c.icon}</div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '11px', fontWeight: 600, marginBottom: '2px' }}>{c.name}</div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', color: '#3A4568', letterSpacing: '1px' }}>{c.game}</div>
                {c.live
                  ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '9px', color: '#FF4444', fontFamily: 'Orbitron, sans-serif', marginTop: '4px' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FF2020', display: 'inline-block' }}></span>EN VIVO</div>
                  : <div style={{ fontSize: '9px', color: '#3A4568', fontFamily: 'Orbitron, sans-serif', marginTop: '4px' }}>OFFLINE</div>}
              </div>
            ))}
            <div onClick={() => { setModalMode('register'); setModalOpen(true) }}
              style={{ ...s.card, padding: '10px', flexShrink: 0, width: '100px', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', margin: '0 auto 6px', background: 'rgba(255,32,32,0.1)', border: '2px solid rgba(255,32,32,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>➕</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '11px', fontWeight: 600, color: '#FF4444', marginBottom: '2px' }}>SER CREADOR</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', color: '#3A4568' }}>APLICA AHORA</div>
            </div>
          </div>

          {/* PODCASTS */}
          <div style={s.secHdr}>
            <div style={s.secTitle}><span style={{ width: '3px', height: '14px', borderRadius: '2px', background: '#FF2020', display: 'inline-block', boxShadow: '0 0 8px #FF2020' }}></span>PODCASTS DIARIOS</div>
            <span onClick={() => showNotification('🎙 Cargando podcasts...')} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#00CFFF', cursor: 'pointer' }}>VER TODOS →</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '14px' }}>
            {[
              { icon: '⚔', ep: 'DOTA 2 · EP.12', epColor: '#FF4444', title: 'paiN Gaming y el sueño peruano en DreamLeague S29', meta: '38 MIN · MAYO 2026', live: true, btnColor: '#FF2020', btnTextColor: '#fff' },
              { icon: '🎙', ep: 'NEXUS · EP.127', epColor: '#00CFFF', title: 'Resumen semanal de esports y gaming LatAm', meta: '45 MIN · 110K VIEWS', live: false, btnColor: '#00CFFF', btnTextColor: '#000' },
              { icon: '🎮', ep: 'ESPECIAL', epColor: '#FFB800', title: 'GTA VI — Todo lo que LatAm espera del lanzamiento', meta: '55 MIN · 88K VIEWS', live: false, btnColor: '#FFB800', btnTextColor: '#000' },
            ].map(p => (
              <div key={p.title} style={{ ...s.card, padding: '12px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,207,255,0.3)'; (e.currentTarget as HTMLElement).style.background = '#1a2235' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = '#111827' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'rgba(255,32,32,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{p.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', letterSpacing: '2px', color: p.epColor, marginBottom: '2px' }}>{p.ep}</div>
                  </div>
                  <button onClick={() => showNotification('▶ Reproduciendo podcast...')}
                    style={{ width: '26px', height: '26px', borderRadius: '50%', border: 'none', background: p.btnColor, color: p.btnTextColor, cursor: 'pointer', fontSize: '10px', flexShrink: 0 }}>▶</button>
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', fontWeight: 700, lineHeight: 1.1, marginBottom: '6px' }}>{p.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#3A4568', letterSpacing: '1px' }}>
                  <span>{p.meta}</span>
                  {p.live && <span style={{ color: '#FF4444' }}>● EN VIVO</span>}
                </div>
              </div>
            ))}
          </div>

          {/* RANKING TABLE */}
          <div style={s.secHdr}>
            <div style={s.secTitle}><span style={{ width: '3px', height: '14px', borderRadius: '2px', background: '#FF2020', display: 'inline-block', boxShadow: '0 0 8px #FF2020' }}></span>RANKING ESPORTS MUNDIAL</div>
            <span onClick={() => showNotification('📊 Cargando ranking...')} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#00CFFF', cursor: 'pointer' }}>VER COMPLETO →</span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '14px' }}>
            <thead>
              <tr>
                {['#', 'EQUIPO', 'JUEGO', 'REGIÓN', 'PUNTOS', 'TENDENCIA'].map(h => (
                  <th key={h} style={{ background: '#1a2235', padding: '8px 10px', textAlign: 'left', fontSize: '9px', fontFamily: 'Orbitron, sans-serif', letterSpacing: '2px', color: '#3A4568', fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { n: '1', nc: '#FFB800', team: 'paiN Gaming', flag: '🇧🇷', game: 'DOTA 2', gc: '#C45B14', region: 'SA', pts: '9,840', pc: '#FFB800', trend: '↑ +240', tc: '#00FF9C', tb: 'rgba(0,255,156,0.12)' },
                { n: '2', nc: 'rgba(192,192,192,0.9)', team: 'NAVI', flag: '🇺🇦', game: 'CS2', gc: '#FF6B35', region: 'EU', pts: '9,210', pc: '#7A8AB8', trend: '↓ -120', tc: '#FF4444', tb: 'rgba(255,32,32,0.1)' },
                { n: '3', nc: 'rgba(205,127,50,0.9)', team: 'Team Spirit', flag: '🇷🇺', game: 'DOTA 2', gc: '#C45B14', region: 'CIS', pts: '8,990', pc: 'rgba(205,127,50,0.9)', trend: '↑ +80', tc: '#00FF9C', tb: 'rgba(0,255,156,0.12)' },
                { n: '4', nc: '#3A4568', team: 'HEROIC', flag: '🇩🇰', game: 'DOTA 2', gc: '#C45B14', region: 'SA/EU', pts: '8,780', pc: '#7A8AB8', trend: '↑ +340', tc: '#00FF9C', tb: 'rgba(0,255,156,0.12)' },
                { n: '5', nc: '#3A4568', team: 'LOUD', flag: '🇧🇷', game: 'VALORANT', gc: '#FF4655', region: 'SA', pts: '8,540', pc: '#7A8AB8', trend: '↓ -60', tc: '#FF4444', tb: 'rgba(255,32,32,0.1)' },
              ].map(r => (
                <tr key={r.team} onClick={() => showNotification('🏆 Abriendo perfil de ' + r.team)}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={e => Array.from((e.currentTarget as HTMLElement).cells).forEach(c => (c as HTMLElement).style.background = 'rgba(255,255,255,0.02)')}
                  onMouseLeave={e => Array.from((e.currentTarget as HTMLElement).cells).forEach(c => (c as HTMLElement).style.background = 'transparent')}>
                  <td style={{ padding: '8px 10px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '14px', fontWeight: 900, color: r.nc }}>{r.n}</span>
                  </td>
                  <td style={{ padding: '8px 10px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontWeight: 600, fontFamily: 'Rajdhani, sans-serif', fontSize: '14px' }}>{r.flag} {r.team}</div>
                  </td>
                  <td style={{ padding: '8px 10px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '3px', background: 'rgba(196,91,20,0.15)', color: r.gc, fontFamily: 'Orbitron, sans-serif' }}>{r.game}</span>
                  </td>
                  <td style={{ padding: '8px 10px', borderBottom: '0.5px solid rgba(255,255,255,0.06)', fontSize: '11px', color: '#7A8AB8' }}>{r.region}</td>
                  <td style={{ padding: '8px 10px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '12px', fontWeight: 700, color: r.pc }}>{r.pts}</span>
                  </td>
                  <td style={{ padding: '8px 10px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '3px', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, background: r.tb, color: r.tc }}>{r.trend}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </main>

        {/* SIDEBAR RIGHT */}
        <aside style={s.sideR}>

          {/* LIVE MATCHES */}
          <div style={{ background: '#1a2235', borderRadius: '8px', padding: '12px', border: '0.5px solid rgba(255,32,32,0.2)' }}>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#FF4444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF2020', display: 'inline-block' }}></span>
              TORNEOS EN VIVO
            </div>
            {[
              { game: 'COUNTER-STRIKE 2 · IEM COLOGNE', t1: 'N', t1n: 'NAVI', t1c: '#FFC800', score: '7 : 6', t2: 'F', t2n: 'FaZe', t2c: '#FF6B35', meta: 'MAPA 3 · INFERNO', live: true },
              { game: 'VALORANT · VCT AMERICAS STAGE 2', t1: 'L', t1n: 'LOUD', t1c: '#00FF9C', score: '1 : 0', t2: 'S', t2n: 'Sentinels', t2c: '#00CFFF', meta: 'MAPA 2 · HAVEN', live: true },
              { game: 'FREE FIRE · WORLD SERIES LATAM', t1: 'P', t1n: 'PERU 🇵🇪', t1c: '#FFB800', score: '— —', t2: 'B', t2n: 'BRZ 🇧🇷', t2c: '#FF2020', meta: 'EN 30 MIN', live: false },
            ].map(m => (
              <div key={m.game} onClick={() => showNotification('📺 Abriendo stream...')}
                style={{ background: '#0d1525', borderRadius: '6px', padding: '10px', marginBottom: '6px', cursor: 'pointer', border: '0.5px solid transparent', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,32,32,0.3)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'transparent'}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', letterSpacing: '2px', color: '#3A4568', marginBottom: '6px' }}>{m.game}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: `rgba(${m.t1c},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, fontFamily: 'Orbitron, sans-serif', color: m.t1c, flexShrink: 0 }}>{m.t1}</div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', fontWeight: 700 }}>{m.t1n}</span>
                  </div>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '15px', fontWeight: 900 }}>{m.score}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row-reverse' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: `rgba(${m.t2c},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, fontFamily: 'Orbitron, sans-serif', color: m.t2c, flexShrink: 0 }}>{m.t2}</div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '13px', fontWeight: 700 }}>{m.t2n}</span>
                  </div>
                </div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '8px', color: '#3A4568', letterSpacing: '1px', marginTop: '5px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{m.meta}</span>
                  <span style={{ fontSize: '8px', fontFamily: 'Orbitron, sans-serif', padding: '1px 6px', borderRadius: '3px', background: m.live ? 'rgba(255,32,32,0.2)' : 'rgba(255,184,0,0.12)', color: m.live ? '#FF4444' : '#FFB800' }}>
                    {m.live ? 'EN VIVO' : 'PRÓXIMO'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* EVENTOS */}
          <div style={{ background: '#1a2235', borderRadius: '8px', padding: '12px', border: '0.5px solid rgba(0,207,255,0.15)' }}>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#00CFFF', marginBottom: '10px' }}>📅 PRÓXIMOS EVENTOS</div>
            {[
              { time: 'HOY 12:00', icon: '🎯', name: 'VALORANT VCT Americas Stage 2', meta: 'LOUD vs Sentinels', badge: 'EN VIVO', bc: 'rgba(255,32,32,0.15)', tc: '#FF4444' },
              { time: 'HOY 15:00', icon: '⚔', name: 'DOTA 2 DreamLeague Season 29', meta: 'paiN Gaming vs HEROIC', badge: 'EN VIVO', bc: 'rgba(255,32,32,0.15)', tc: '#FF4444' },
              { time: 'HOY 18:00', icon: '🔫', name: 'CS2 · BLAST Premier Spring Final', meta: 'Cuartos de final', badge: 'PRÓXIMO', bc: 'rgba(255,184,0,0.12)', tc: '#FFB800' },
              { time: '07 JUN', icon: '🏆', name: 'VALORANT Masters Toronto', meta: '7 Jun – 22 Jun 2026', badge: 'PRÓXIMO', bc: 'rgba(0,207,255,0.1)', tc: '#00CFFF' },
              { time: '14 JUN', icon: '📱', name: 'Free Fire World Series LatAm', meta: '14 Jun – 21 Jun 2026', badge: 'PRÓXIMO', bc: 'rgba(255,184,0,0.1)', tc: '#FFB800' },
            ].map(e => (
              <div key={e.name} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#3A4568', whiteSpace: 'nowrap', flexShrink: 0, marginTop: '2px' }}>{e.time}</div>
                <div style={{ fontSize: '16px', flexShrink: 0 }}>{e.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.2, marginBottom: '2px' }}>{e.name}</div>
                  <div style={{ fontSize: '10px', color: '#3A4568' }}>{e.meta}</div>
                  <div style={{ fontSize: '8px', fontFamily: 'Orbitron, sans-serif', padding: '1px 6px', borderRadius: '2px', marginTop: '2px', display: 'inline-block', background: e.bc, color: e.tc }}>{e.badge}</div>
                </div>
              </div>
            ))}
            <button onClick={() => showNotification('📅 Sincronizando calendario...')}
              style={{ width: '100%', marginTop: '8px', padding: '7px', borderRadius: '4px', border: '0.5px solid rgba(0,207,255,0.3)', background: 'rgba(0,207,255,0.05)', color: '#00CFFF', fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', cursor: 'pointer' }}>
              SINCRONIZAR CON MI CALENDARIO
            </button>
          </div>

          {/* PREMIUM */}
          <div style={{ background: 'linear-gradient(135deg,rgba(191,95,255,0.1),rgba(255,32,32,0.08))', borderRadius: '8px', padding: '12px', border: '0.5px solid rgba(191,95,255,0.3)' }}>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: 700, color: '#BF5FFF', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>👑 NICEXPLAY PREMIUM</div>
            <div style={{ fontSize: '11px', color: '#7A8AB8', lineHeight: 2 }}>
              <div>✦ Contenido exclusivo</div><div>✦ Sin anuncios</div><div>✦ Recompensas mensuales</div><div>✦ Acceso anticipado</div>
            </div>
            <button onClick={() => { setModalMode('register'); setModalOpen(true) }}
              style={{ width: '100%', background: 'linear-gradient(90deg,#BF5FFF,#FF2020)', color: '#fff', border: 'none', borderRadius: '4px', padding: '9px', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', cursor: 'pointer', marginTop: '8px' }}>
              OBTENER PREMIUM
            </button>
          </div>

          {/* NEWSLETTER */}
          <div style={{ background: 'linear-gradient(135deg,rgba(255,32,32,0.08),rgba(0,207,255,0.05))', borderRadius: '8px', padding: '12px', border: '0.5px solid rgba(255,32,32,0.2)' }}>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: 700, marginBottom: '4px' }}>📧 SUSCRÍBETE</div>
            <div style={{ fontSize: '11px', color: '#7A8AB8', marginBottom: '10px', lineHeight: 1.4 }}>Recibe noticias, torneos y novedades cada semana</div>
            <input placeholder="tu@correo.com" style={{ width: '100%', background: '#0d1525', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '4px', padding: '8px 10px', fontSize: '12px', color: '#F0F4FF', outline: 'none', marginBottom: '6px', boxSizing: 'border-box' }} />
            <button onClick={() => showNotification('✅ ¡Suscripción confirmada!')}
              style={{ width: '100%', background: '#FF2020', color: '#fff', border: 'none', borderRadius: '4px', padding: '9px', fontFamily: 'Orbitron, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', cursor: 'pointer' }}>
              SUSCRIBIRME →
            </button>
          </div>

        </aside>
      </div>

      {/* FOOTER */}
      <div style={s.footer}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '18px' }}>
              <span style={{ color: '#FF2020' }}>NICE</span><span style={{ color: '#00CFFF' }}>X</span><span>PLAY</span> <span style={{ color: '#FFB800', fontSize: '12px' }}>EXTREME</span>
            </div>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#3A4568', letterSpacing: '2px', marginTop: '4px' }}>TU UNIVERSO · TUS JUEGOS · TU COMUNIDAD</div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Gaming', 'eSports', 'Noticias', 'Streaming', 'Podcasts', 'Creadores', 'Eventos', 'Discord', 'Privacidad'].map(l => (
              <span key={l} onClick={() => showNotification('Cargando ' + l + '...')} style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '2px', color: '#3A4568', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', letterSpacing: '1px', color: '#3A4568' }}>© 2026 NICEXPLAY EXTREME</div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #0B0F1A; }
        ::-webkit-scrollbar-thumb { background: rgba(255,32,32,0.3); border-radius: 3px; }
        @keyframes tick { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
