"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function SurveyResultsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
            datasets: [
              {
                label: "Conciencia Ambiental (Antes)",
                data: [2.8, 2.9, 3.0, 3.1, 3.2, 3.2],
                borderColor: "rgba(156, 163, 175, 1)",
                backgroundColor: "rgba(156, 163, 175, 0.1)",
                tension: 0.4,
              },
              {
                label: "Conciencia Ambiental (Después)",
                data: [3.5, 3.8, 4.0, 4.1, 4.2, 4.3],
                borderColor: "rgba(34, 197, 94, 1)",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 5,
                title: {
                  display: true,
                  text: "Puntuación (1-5)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Mes",
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Evolución de la Conciencia Ambiental",
                font: {
                  size: 16,
                },
                padding: {
                  top: 10,
                  bottom: 20,
                },
              },
              legend: {
                display: true,
                position: "top",
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
