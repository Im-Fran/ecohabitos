import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="inline-block rounded-full bg-red-100 p-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-red-600">Error de Autenticación</CardTitle>
          <CardDescription>
            Hubo un problema al confirmar tu cuenta. El enlace puede haber expirado o ser inválido.
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
