"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { habitsService, type Habit, type UserHabitProgress } from "@/lib/habits"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { Recycle, Zap, Leaf } from "lucide-react"

interface HabitChecklistDBProps {
  user?: User | null
}

export function HabitChecklistDB({ user }: HabitChecklistDBProps) {
  const [habitsByCategory, setHabitsByCategory] = useState<{ [key: string]: Habit[] }>({})
  const [progress, setProgress] = useState<Map<string, boolean>>(new Map())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [supabaseAvailable, setSupabaseAvailable] = useState(false)

  const categories = [
    { key: "plasticos", name: "Reducción de Plásticos", icon: Recycle },
    { key: "energia", name: "Ahorro Energético", icon: Zap },
    { key: "compostaje", name: "Compostaje", icon: Leaf },
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

      // Cargar hábitos por categoría de forma individual
      const habitsData: { [key: string]: Habit[] } = {}

      for (const category of categories) {
        try {
          const categoryHabits = await habitsService.getHabitsByCategory(category.key)
          habitsData[category.key] = categoryHabits
          console.log(
            `Loaded ${categoryHabits.length} habits for category ${category.key}:`,
            categoryHabits.map((h) => h.name),
          )
        } catch (err) {
          console.error(`Error loading habits for category ${category.key}:`, err)
          habitsData[category.key] = []
        }
      }

      setHabitsByCategory(habitsData)

      // Cargar progreso del usuario
      const userProgress = await habitsService.getUserHabitProgress(user.id)
      const progressMap = new Map<string, boolean>()
      userProgress.forEach((progress: UserHabitProgress) => {
        progressMap.set(progress.habit_id, progress.completed)
      })
      setProgress(progressMap)
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
    const mockHabits = {
      plasticos: [
        { id: "p1", category_id: "c1", name: "Usar botella reutilizable", description: "", difficulty_level: "easy" },
        {
          id: "p2",
          category_id: "c1",
          name: "Llevar bolsas de tela para compras",
          description: "",
          difficulty_level: "easy",
        },
        {
          id: "p3",
          category_id: "c1",
          name: "Evitar productos con microplásticos",
          description: "",
          difficulty_level: "medium",
        },
        {
          id: "p4",
          category_id: "c1",
          name: "Rechazar pajitas/popotes de plástico",
          description: "",
          difficulty_level: "easy",
        },
        {
          id: "p5",
          category_id: "c1",
          name: "Comprar a granel para evitar envases",
          description: "",
          difficulty_level: "medium",
        },
      ],
      energia: [
        {
          id: "e1",
          category_id: "c2",
          name: "Apagar luces al salir de habitaciones",
          description: "",
          difficulty_level: "easy",
        },
        {
          id: "e2",
          category_id: "c2",
          name: "Desconectar cargadores sin uso",
          description: "",
          difficulty_level: "easy",
        },
        {
          id: "e3",
          category_id: "c2",
          name: "Usar bombillas LED de bajo consumo",
          description: "",
          difficulty_level: "easy",
        },
        { id: "e4", category_id: "c2", name: "Aprovechar la luz natural", description: "", difficulty_level: "easy" },
        {
          id: "e5",
          category_id: "c2",
          name: "Regular la temperatura de calefacción/aire acondicionado",
          description: "",
          difficulty_level: "medium",
        },
      ],
      compostaje: [
        { id: "c1", category_id: "c3", name: "Separar residuos orgánicos", description: "", difficulty_level: "easy" },
        { id: "c2", category_id: "c3", name: "Crear compostador casero", description: "", difficulty_level: "medium" },
        {
          id: "c3",
          category_id: "c3",
          name: "Mantener equilibrio de materiales secos/húmedos",
          description: "",
          difficulty_level: "medium",
        },
        {
          id: "c4",
          category_id: "c3",
          name: "Remover el compost regularmente",
          description: "",
          difficulty_level: "medium",
        },
        {
          id: "c5",
          category_id: "c3",
          name: "Utilizar el compost en plantas",
          description: "",
          difficulty_level: "easy",
        },
      ],
    }

    setHabitsByCategory(mockHabits)

    // Generar progreso de ejemplo
    const mockProgress = new Map<string, boolean>()
    Object.values(mockHabits)
      .flat()
      .forEach((habit) => {
        mockProgress.set(habit.id, Math.random() > 0.5)
      })
    setProgress(mockProgress)
    setLoading(false)
  }

  const toggleHabit = async (habitId: string) => {
    const currentValue = progress.get(habitId) || false
    const newValue = !currentValue

    // Actualizar estado local inmediatamente
    const newProgress = new Map(progress)
    newProgress.set(habitId, newValue)
    setProgress(newProgress)

    // Si hay usuario y Supabase está disponible, guardar en BD
    if (user && supabaseAvailable) {
      try {
        await habitsService.updateHabitProgress(user.id, habitId, newValue)
      } catch (err) {
        console.error("Error updating habit progress:", err)
        // Revertir cambio local si falla
        setProgress(progress)
        setError("Error al guardar el progreso")
      }
    }
  }

  const getProgressForCategory = (categoryKey: string) => {
    const categoryHabits = habitsByCategory[categoryKey] || []
    const completed = categoryHabits.filter((habit) => progress.get(habit.id)).length
    return {
      completed,
      total: categoryHabits.length,
      percentage: categoryHabits.length > 0 ? (completed / categoryHabits.length) * 100 : 0,
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando hábitos...</p>
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
            Modo de demostración: Los cambios no se guardarán. Inicia sesión para sincronizar tu progreso.
          </AlertDescription>
        </Alert>
      )}

      {categories.map((category) => {
        const categoryHabits = habitsByCategory[category.key] || []
        const categoryProgress = getProgressForCategory(category.key)
        const IconComponent = category.icon

        return (
          <div key={category.key} className="border border-green-100 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <IconComponent className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-medium">{category.name}</h3>
            </div>

            <div className="space-y-4">
              {categoryHabits.map((habit) => (
                <div key={habit.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={habit.id}
                    checked={progress.get(habit.id) || false}
                    onCheckedChange={() => toggleHabit(habit.id)}
                  />
                  <label
                    htmlFor={habit.id}
                    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer ${
                      progress.get(habit.id) ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {habit.name}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progreso</span>
                <span className="text-sm text-gray-500">
                  {categoryProgress.completed}/{categoryProgress.total} completados
                </span>
              </div>
              <Progress
                value={categoryProgress.percentage}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-green-600"
              />
            </div>
          </div>
        )
      })}

      {user && supabaseAvailable && (
        <div className="text-xs text-gray-500 text-center">
          ✅ Tu progreso se guarda automáticamente y se sincroniza entre dispositivos
        </div>
      )}
    </div>
  )
}
