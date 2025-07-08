import { createClient } from "@/lib/supabase/client"

export interface HabitCategory {
  id: string
  name: string
  description: string
  icon: string
}

export interface Habit {
  id: string
  category_id: string
  name: string
  description: string
  difficulty_level: string
  category?: HabitCategory
}

export interface UserHabitProgress {
  id: string
  user_id: string
  habit_id: string
  completed: boolean
  completed_at?: string
  habit?: Habit
}

export interface DailyHabitTracking {
  id: string
  user_id: string
  habit_id: string
  date: string
  completed: boolean
  habit?: Habit
}

export class HabitsService {
  private supabase = createClient()

  async getHabitCategories(): Promise<HabitCategory[]> {
    const { data, error } = await this.supabase.from("habit_categories").select("*").order("name")

    if (error) {
      console.error("Error fetching habit categories:", error)
      return []
    }

    return data || []
  }

  async getHabitsByCategory(categoryName: string): Promise<Habit[]> {
    const { data, error } = await this.supabase
      .from("habits")
      .select(`
      *,
      category:habit_categories!inner(*)
    `)
      .eq("habit_categories.name", categoryName)

    if (error) {
      console.error("Error fetching habits by category:", error)
      return []
    }

    return data || []
  }

  async getAllHabits(): Promise<Habit[]> {
    const { data, error } = await this.supabase
      .from("habits")
      .select(`
        *,
        category:habit_categories(*)
      `)
      .order("name")

    if (error) {
      console.error("Error fetching all habits:", error)
      return []
    }

    return data || []
  }

  async getUserHabitProgress(userId: string): Promise<UserHabitProgress[]> {
    const { data, error } = await this.supabase
      .from("user_habit_progress")
      .select(`
        *,
        habit:habits(
          *,
          category:habit_categories(*)
        )
      `)
      .eq("user_id", userId)

    if (error) {
      console.error("Error fetching user habit progress:", error)
      return []
    }

    return data || []
  }

  async updateHabitProgress(userId: string, habitId: string, completed: boolean): Promise<boolean> {
    const { error } = await this.supabase.from("user_habit_progress").upsert({
      user_id: userId,
      habit_id: habitId,
      completed,
      completed_at: completed ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    })

    if (error) {
      console.error("Error updating habit progress:", error)
      return false
    }

    return true
  }

  async getDailyTracking(userId: string, date: string): Promise<DailyHabitTracking[]> {
    const { data, error } = await this.supabase
      .from("daily_habit_tracking")
      .select(`
        *,
        habit:habits(
          *,
          category:habit_categories(*)
        )
      `)
      .eq("user_id", userId)
      .eq("date", date)

    if (error) {
      console.error("Error fetching daily tracking:", error)
      return []
    }

    return data || []
  }

  async updateDailyTracking(userId: string, habitId: string, date: string, completed: boolean): Promise<boolean> {
    const { error } = await this.supabase.from("daily_habit_tracking").upsert({
      user_id: userId,
      habit_id: habitId,
      date,
      completed,
    })

    if (error) {
      console.error("Error updating daily tracking:", error)
      return false
    }

    return true
  }

  async getMonthlyTracking(userId: string, year: number, month: number): Promise<DailyHabitTracking[]> {
    const startDate = `${year}-${month.toString().padStart(2, "0")}-01`
    const endDate = `${year}-${month.toString().padStart(2, "0")}-31`

    const { data, error } = await this.supabase
      .from("daily_habit_tracking")
      .select(`
        *,
        habit:habits(
          *,
          category:habit_categories(*)
        )
      `)
      .eq("user_id", userId)
      .gte("date", startDate)
      .lte("date", endDate)
      .order("date")

    if (error) {
      console.error("Error fetching monthly tracking:", error)
      return []
    }

    return data || []
  }

  async getHabitStats(userId: string): Promise<{
    totalHabits: number
    completedHabits: number
    completionRate: number
    streakDays: number
  }> {
    try {
      // Obtener progreso total de hábitos
      const { data: progressData } = await this.supabase
        .from("user_habit_progress")
        .select("completed")
        .eq("user_id", userId)

      const totalHabits = progressData?.length || 0
      const completedHabits = progressData?.filter((p) => p.completed).length || 0
      const completionRate = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0

      // Calcular racha de días (simplificado)
      const today = new Date().toISOString().split("T")[0]
      const { data: recentTracking } = await this.supabase
        .from("daily_habit_tracking")
        .select("date, completed")
        .eq("user_id", userId)
        .gte("date", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0])
        .order("date", { ascending: false })

      let streakDays = 0
      // Lógica simplificada para calcular racha
      if (recentTracking) {
        const dailyCompletions = new Map()
        recentTracking.forEach((track) => {
          if (!dailyCompletions.has(track.date)) {
            dailyCompletions.set(track.date, 0)
          }
          if (track.completed) {
            dailyCompletions.set(track.date, dailyCompletions.get(track.date) + 1)
          }
        })

        // Contar días consecutivos con al menos un hábito completado
        const sortedDates = Array.from(dailyCompletions.keys()).sort().reverse()
        for (const date of sortedDates) {
          if (dailyCompletions.get(date) > 0) {
            streakDays++
          } else {
            break
          }
        }
      }

      return {
        totalHabits,
        completedHabits,
        completionRate,
        streakDays,
      }
    } catch (error) {
      console.error("Error getting habit stats:", error)
      return {
        totalHabits: 0,
        completedHabits: 0,
        completionRate: 0,
        streakDays: 0,
      }
    }
  }
}

export const habitsService = new HabitsService()
