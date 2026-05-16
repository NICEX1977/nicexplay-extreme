import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      Authorization: `Bearer ${supabaseAnonKey}`
    }
  }
})

export type Game = {
  id: string
  name: string
  slug: string
  icon_url: string | null
  banner_url: string | null
  active_players: number
  is_live: boolean
  color: string | null
}

export type Article = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  cover_url: string | null
  category: string
  tags: string[]
  views: number
  created_at: string
}

export type Event = {
  id: string
  name: string
  description: string | null
  banner_url: string | null
  prize_pool: string | null
  start_date: string
  end_date: string
  status: 'live' | 'upcoming' | 'completed'
  stream_url: string | null
}

export type Match = {
  id: string
  team1_name: string
  team1_score: number
  team2_name: string
  team2_score: number
  status: 'live' | 'upcoming' | 'completed'
  map_name: string | null
  stream_url: string | null
}