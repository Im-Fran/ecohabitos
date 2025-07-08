"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { habitsService, type Habit, type DailyHabitTracking } from "@/lib/habits"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import confetti from "canvas-confetti"

interface HabitTrackerDBProps {
  user?: User | null
}

export function HabitTrackerDB({ user }: HabitTrackerDBProps) {
  const [currentMonth] = useState(new Date().getMonth())
  const [currentYear] = useState(new Date().getFullYear())
  const [habits, setHabits] = useState<Habit[]>([])
  const [tracking, setTracking] = useState<Map<string, boolean>>(new Map())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [supabaseAvailable, setSupabaseAvailable] = useState(false)

  // Get days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
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
        loadUserData()
      } else {
        loadMockData()
      }
    } catch (err) {
      console.error("Supabase not available:", err)
      setSupabaseAvailable(false)
      loadMockData()
    }
  }, [user])

  const loadUserData = async () => {
    if (!user) return

    try {
      setLoading(true)
      setError(null)

      // Cargar hábitos
      const habitsData = await habitsService.getAllHabits()
      setHabits(habitsData)

      // Cargar seguimiento del mes actual
      const trackingData = await habitsService.getMonthlyTracking(user.id, currentYear, currentMonth + 1)

      // Convertir a Map para fácil acceso
      const trackingMap = new Map<string, boolean>()
      trackingData.forEach((track: DailyHabitTracking) => {
        const key = `${track.habit_id}-${track.date}`
        trackingMap.set(key, track.completed)
      })
      setTracking(trackingMap)
    } catch (err) {
      console.error("Error loading user data:", err)
      setError("Error al cargar los datos. Usando datos de ejemplo.")
      loadMockData()
    } finally {
      setLoading(false)
    }
  }

  const loadMockData = () => {
    // Datos de ejemplo cuando no hay autenticación
    const mockHabits: Habit[] = [
      { id: "h1", category_id: "c1", name: "Botella reutilizable", description: "", difficulty_level: "easy" },
      { id: "h2", category_id: "c1", name: "Bolsas de tela", description: "", difficulty_level: "easy" },
      { id: "h3", category_id: "c2", name: "Apagar luces", description: "", difficulty_level: "easy" },
      { id: "h4", category_id: "c1", name: "Separar residuos", description: "", difficulty_level: "easy" },
      { id: "h5", category_id: "c2", name: "Ducha corta", description: "", difficulty_level: "easy" },
    ]

    setHabits(mockHabits)

    // Generar datos de ejemplo
    const mockTracking = new Map<string, boolean>()
    mockHabits.forEach((habit) => {
      days.forEach((day) => {
        const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
        const key = `${habit.id}-${date}`
        mockTracking.set(key, Math.random() > 0.6)
      })
    })
    setTracking(mockTracking)
    setLoading(false)
  }

  const triggerMiniConfetti = () => {
    // Confetti más pequeño para el tracker diario
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.7 },
      colors: ["#22c55e", "#16a34a", "#dcfce7"],
      scalar: 0.8,
    })
  }

  const toggleHabit = async (habitId: string, day: number) => {
    const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
    const key = `${habitId}-${date}`
    const currentValue = tracking.get(key) || false
    const newValue = !currentValue

    // Actualizar estado local inmediatamente
    const newTracking = new Map(tracking)
    newTracking.set(key, newValue)
    setTracking(newTracking)

    // Si se está completando un hábito (no descompletando), mostrar confetti
    if (newValue) {
      triggerMiniConfetti()
    }

    // Si hay usuario y Supabase está disponible, guardar en BD
    if (user && supabaseAvailable) {
      try {
        await habitsService.updateDailyTracking(user.id, habitId, date, newValue)
      } catch (err) {
        console.error("Error updating tracking:", err)
        // Revertir cambio local si falla
        setTracking(tracking)
        setError("Error al guardar el progreso")
      }
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando seguimiento de hábitos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert className="border-yellow-200 bg-yellow-50">
          <AlertDescription className="text-yellow-800">{error}</AlertDescription>
        </Alert>
      )}

      {!supabaseAvailable && (
        <Alert className="border-blue-200 bg-blue-50">
          <AlertDescription className="text-blue-800">
            Modo de demostración: Los cambios no se guardarán. Inicia sesión para sincronizar tu progreso.
          </AlertDescription>
        </Alert>
      )}

      <div className="overflow-x-auto">
        <h3 className="font-medium mb-4">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border-b text-left">Hábito</th>
              {days.map((day) => (
                <th key={day} className="p-2 border-b text-center w-10">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit.id}>
                <td className="p-2 border-b text-left font-medium">{habit.name}</td>
                {days.map((day) => {
                  const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
                  const key = `${habit.id}-${date}`
                  return (
                    <td key={day} className="p-2 border-b text-center">
                      <Checkbox
                        checked={tracking.get(key) || false}
                        onCheckedChange={() => toggleHabit(habit.id, day)}
                        className="mx-auto"
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {user && supabaseAvailable && (
        <div className="text-xs text-gray-500 text-center">
          ✅ Tu progreso se guarda automáticamente y se sincroniza entre dispositivos
        </div>
      )}
    </div>
  )
}
