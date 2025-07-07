"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

function ConfirmContent() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const supabase = createClient()

        // Get the hash from the URL (this will be present when coming from email link)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const access_token = hashParams.get("access_token")
        const refresh_token = hashParams.get("refresh_token")

        if (access_token && refresh_token) {
          const { error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          })

          if (error) {
            setError(error.message)
          } else {
            setSuccess(true)
            // Redirect to seguimiento after a short delay
            setTimeout(() => {
              router.push("/seguimiento")
            }, 2000)
          }
        } else {
          setError("Enlace de confirmación inválido o expirado")
        }
      } catch (err) {
        setError("Error al confirmar la cuenta")
      } finally {
        setLoading(false)
      }
    }

    handleEmailConfirmation()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="inline-block rounded-full bg-green-100 p-3 mb-4">
              <Loader2 className="h-8 w-8 text-green-600 animate-spin" />
            </div>
            <CardTitle>Confirmando tu cuenta</CardTitle>
            <CardDescription>Por favor espera mientras verificamos tu correo electrónico...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="inline-block rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-green-600">¡Cuenta confirmada!</CardTitle>
            <CardDescription>
              Tu correo electrónico ha sido verificado exitosamente. Serás redirigido a tu panel de progreso en unos
              segundos.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/seguimiento">
              <Button className="w-full bg-green-600 hover:bg-green-700">Ir a Mi Progreso</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="inline-block rounded-full bg-red-100 p-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-red-600">Error de Confirmación</CardTitle>
          <CardDescription>
            {error || "Hubo un problema al confirmar tu cuenta. El enlace puede haber expirado o ser inválido."}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Por favor, intenta registrarte nuevamente o contacta con soporte si el problema persiste.
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/auth/login">
              <Button className="w-full bg-green-600 hover:bg-green-700">Volver al inicio de sesión</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Ir al inicio
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function ConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white py-12 px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="inline-block rounded-full bg-green-100 p-3 mb-4">
                <Loader2 className="h-8 w-8 text-green-600 animate-spin" />
              </div>
              <CardTitle>Cargando...</CardTitle>
            </CardHeader>
          </Card>
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  )
}
