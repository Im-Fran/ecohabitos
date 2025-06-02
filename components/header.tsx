"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu, BarChart3 } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Actualizar las rutas eliminando "Seguimiento" ya que "Mi Progreso" cumple esa función
  const routes = [
    { href: "/", label: "Inicio" },
    { href: "/ecohabitos", label: "Ecohábitos" },
    { href: "/recursos", label: "Recursos" },
    { href: "/retos", label: "Retos" },
    { href: "/comunidad", label: "Comunidad" },
    { href: "/encuestas", label: "Encuestas" },
    { href: "/acerca", label: "Acerca de" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl hidden sm:inline-block">Ecohábitos</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/seguimiento">
            <Button variant="outline" className="hidden md:flex gap-2">
              <BarChart3 className="h-4 w-4" />
              Mi Progreso
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-medium transition-colors hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <Link href="/seguimiento" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Mi Progreso</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
