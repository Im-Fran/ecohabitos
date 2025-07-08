"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { habitsService } from "@/lib/habits"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { Calendar, TrendingUp, Target, Award } from "lucide-react"

interface HabitStatsDBProps {
  user?: User | null
}

export function HabitStatsDB({ user }: HabitStatsDBProps) {
  const [stats, setStats] = useState({
    totalHabits: 0,
    completedHabits: 0,
    completionRate: 0,
    streakDays: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [supabaseAvailable, setSupabaseAvailable] = useState(false)

  const weeklyProgress = [
    { week: "Semana 1", completed: 5, total: 15 },
    { week: "Semana 2", completed: 8, total: 15 },
    { week: "Semana 3", completed: 10, total: 15 },
    { week: "Semana 4", completed: 12, total: 15 },
  ]

  useEffect(() => {
    // Check if Supabase is available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      setSupabaseAvailable(false)
      loadMockData()
      return
    }

    try {
      createClient()
      setSupabaseAvailable(true)
      if (user) {
        loadUserStats()
      } else {
        loadMockData()
      }
    } catch (err) {
      console.error("Supabase not available:", err)
      setSupabaseAvailable(false)
      loadMockData()
    }
  }, [user])

  const loadUserStats = async () => {
    if (!user) return

    try {
      setLoading(true)
      setError(null)

      const userStats = await habitsService.getHabitStats(user.id)
      setStats(userStats)
    } catch (err) {
      console.error("Error loading user stats:", err)
      setError("Error al cargar las estadísticas. Usando datos de ejemplo.")
      loadMockData()
    } finally {
      setLoading(false)
    }
  }

  const loadMockData = () => {
    // Datos de ejemplo cuando no hay autenticación
    setStats({
      totalHabits: 15,
      completedHabits: 9,
      completionRate: 60,
      streakDays: 7,
    })
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando estadísticas...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert className="border-yellow-200 bg-yellow-50">
          <AlertDescription className="text-yellow-800">{error}</AlertDescription>
        </Alert>
      )}

      {!supabaseAvailable && (
        <Alert className="border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-800">
            Modo de demostración: Datos de ejemplo. Inicia sesión para ver tus estadísticas reales.
          </AlertDescription>
        </Alert>
      )}

      {/* Estadísticas principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">{stats.completedHabits}</div>
          <div className="text-sm text-gray-500">Hábitos adoptados</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">{Math.round(stats.completionRate)}%</div>
          <div className="text-sm text-gray-500">Progreso general</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">{stats.streakDays}</div>
          <div className="text-sm text-gray-500">Días de racha</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">{stats.totalHabits}</div>
          <div className="text-sm text-gray-500">Total hábitos</div>
        </div>
      </div>

      {/* Progreso semanal */}
      <div className="space-y-6">
        <h3 className="font-medium">Progreso Semanal</h3>
        {weeklyProgress.map((week, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">{week.week}</span>
              </div>
              <span className="text-sm text-gray-500">
                {week.completed}/{week.total} hábitos
              </span>
            </div>
            <Progress
              value={(week.completed / week.total) * 100}
              className="h-2 bg-gray-100"
              indicatorClassName="bg-green-600"
            />
          </div>
        ))}
      </div>

      {/* Resumen del mes */}
      <div className="p-4 bg-green-50 rounded-lg">
        <h3 className="font-bold mb-4">Resumen del mes</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Mejor categoría</p>
            <p className="text-md font-medium">Ahorro Energético</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Área de mejora</p>
            <p className="text-md font-medium">Compostaje</p>
          </div>
        </div>
      </div>

      {user && supabaseAvailable && (
        <div className="text-xs text-gray-500 text-center">
          📊 Estadísticas actualizadas en tiempo real basadas en tu progreso
        </div>
      )}
    </div>
  )
}
