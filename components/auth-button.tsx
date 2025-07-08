"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function AuthButton() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabaseAvailable, setSupabaseAvailable] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if Supabase environment variables are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn("Supabase environment variables not configured - authentication disabled")
      setSupabaseAvailable(false)
      setLoading(false)
      return
    }

    try {
      const supabase = createClient()
      setSupabaseAvailable(true)

      const getUser = async () => {
        try {
          const {
            data: { user },
          } = await supabase.auth.getUser()
          setUser(user)
        } catch (err) {
          console.error("Error getting user:", err)
        } finally {
          setLoading(false)
        }
      }

      getUser()

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      })

      return () => subscription.unsubscribe()
    } catch (err) {
      console.error("Error creating Supabase client:", err)
      setSupabaseAvailable(false)
      setLoading(false)
    }
  }, [])

  const handleSignOut = async () => {
    if (!supabaseAvailable) return

    try {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push("/")
      router.refresh()
    } catch (err) {
      console.error("Error signing out:", err)
    }
  }

  if (loading) {
    return <div className="w-24 h-10 bg-gray-200 animate-pulse rounded"></div>
  }

  // If Supabase is not available, show a disabled login button
  if (!supabaseAvailable) {
    return (
      <Button variant="outline" className="bg-transparent" disabled>
        Autenticación no disponible
      </Button>
    )
  }

  if (!user) {
    return (
      <Link href="/auth/login">
        <Button className="bg-green-600 hover:bg-green-700">Iniciar Sesión</Button>
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <User className="h-4 w-4" />
          {user.user_metadata?.full_name || user.email?.split("@")[0]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium">{user.user_metadata?.full_name || "Usuario"}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/seguimiento" className="flex items-center gap-2 cursor-pointer">
            <BarChart3 className="h-4 w-4" />
            Mi Progreso
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/perfil" className="flex items-center gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            Mi Perfil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 cursor-pointer text-red-600">
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
