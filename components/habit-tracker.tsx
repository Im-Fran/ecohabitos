"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export function HabitTracker() {
  const [currentMonth] = useState(new Date().getMonth())
  const [currentYear] = useState(new Date().getFullYear())

  const habits = [
    { id: "h1", name: "Botella reutilizable" },
    { id: "h2", name: "Bolsas de tela" },
    { id: "h3", name: "Apagar luces" },
    { id: "h4", name: "Separar residuos" },
    { id: "h5", name: "Ducha corta" },
  ]

  // Get days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Mock data for habit tracking
  const [habitData, setHabitData] = useState(() => {
    const initialData = {}
    habits.forEach((habit) => {
      initialData[habit.id] = {}
      days.forEach((day) => {
        // Randomly set some habits as completed for demo purposes
        initialData[habit.id][day] = Math.random() > 0.6
      })
    })
    return initialData
  })

  const toggleHabit = (habitId, day) => {
    setHabitData((prev) => ({
      ...prev,
      [habitId]: {
        ...prev[habitId],
        [day]: !prev[habitId][day],
      },
    }))
  }

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

  return (
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
              {days.map((day) => (
                <td key={day} className="p-2 border-b text-center">
                  <Checkbox
                    checked={habitData[habit.id][day]}
                    onCheckedChange={() => toggleHabit(habit.id, day)}
                    className="mx-auto"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
