"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function ProgressChart() {
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
          type: "bar",
          data: {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
            datasets: [
              {
                label: "Participantes en retos",
                data: [65, 78, 92, 110, 125, 142],
                backgroundColor: "rgba(34, 197, 94, 0.6)",
                borderColor: "rgba(34, 197, 94, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Número de participantes",
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
                text: "Evolución de participación en retos ecológicos",
                font: {
                  size: 16,
                },
                padding: {
                  top: 10,
                  bottom: 20,
                },
              },
              legend: {
                display: false,
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
