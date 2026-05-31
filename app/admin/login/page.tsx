 'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem('nicexplay_admin', 'true')
      router.push('/admin')
    } else {
      setError('Contraseña incorrecta')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl border border-purple-500 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-2 text-center">🎮 NICEXPLAY</h1>
        <p className="text-gray-400 text-center mb-6">Panel de Administración</p>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-3 border border-gray-700 focus:border-purple-500 outline-none"
        />
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold transition"
        >
          ENTRAR
        </button>
      </div>
    </div>
  )
}
