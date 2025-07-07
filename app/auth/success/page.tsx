import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AuthSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="inline-block rounded-full bg-green-100 p-3 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-green-600">¡Cuenta confirmada!</CardTitle>
          <CardDescription>
            Tu correo electrónico ha sido verificado exitosamente. Ya puedes acceder a todas las funciones de la
            plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Comienza a explorar nuestros ecohábitos y únete a la comunidad sostenible.
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/seguimiento">
              <Button className="w-full bg-green-600 hover:bg-green-700">Ir a Mi Progreso</Button>
            </Link>
            <Link href="/ecohabitos">
              <Button variant="outline" className="w-full bg-transparent">
                Explorar Ecohábitos
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
