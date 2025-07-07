"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Mail, Save } from "lucide-react"
import type { User as SupabaseUser } from "@supabase/supabase-js"

interface ProfileFormProps {
  user: SupabaseUser
}

export function ProfileForm({ user }: ProfileFormProps) {
  const [name, setName] = useState(user.user_metadata?.full_name || "")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const supabase = createClient()

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setMessage("")

    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: name,
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage("¡Perfil actualizado exitosamente!")
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleUpdateProfile} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input id="email" type="email" value={user.email} className="pl-10 bg-gray-50" disabled />
          </div>
          <p className="text-xs text-gray-500">El correo electrónico no se puede modificar por motivos de seguridad.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      {message && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">{message}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
        {loading ? "Guardando..." : "Guardar Cambios"}
        <Save className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
