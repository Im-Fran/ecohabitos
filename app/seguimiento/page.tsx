import { requireAuth } from "@/lib/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, BarChart3 } from "lucide-react"
import { HabitChecklistDB } from "@/components/habit-checklist-db"
import { HabitTrackerDB } from "@/components/habit-tracker-db"
import { HabitStatsDB } from "@/components/habit-stats-db"

export default async function Seguimiento() {
  let user = null

  try {
    user = await requireAuth()
  } catch (error) {
    // Si no hay autenticación disponible, continuar sin usuario
    console.log("Authentication not available, continuing without user")
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mi Progreso en Ecohábitos</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {user
              ? `Hola ${user.user_metadata?.full_name || user.email?.split("@")[0]}, aquí puedes llevar un registro de tus hábitos sostenibles y visualizar tu progreso personal.`
              : "Lleva un registro de tus hábitos sostenibles y visualiza tu progreso personal. Inicia sesión para sincronizar tu progreso entre dispositivos."}
          </p>
        </div>
      </div>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="checklist">Checklist de Hábitos</TabsTrigger>
          <TabsTrigger value="tracker">Seguimiento Diario</TabsTrigger>
          <TabsTrigger value="progress">Progreso Semanal</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Hábitos Sostenibles</CardTitle>
              <CardDescription>Marca los hábitos que ya has incorporado a tu rutina diaria.</CardDescription>
            </CardHeader>
            <CardContent>
              <HabitChecklistDB user={user} />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/recursos">
                <Button className="bg-green-600 hover:bg-green-700">
                  Ver guías para implementar más hábitos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tracker">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Seguimiento Diario de Hábitos</CardTitle>
              <CardDescription>
                Marca los días en que has cumplido con cada ecohábito para visualizar tu constancia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <HabitTrackerDB user={user} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Mes anterior</Button>
              <Button variant="outline">Mes siguiente</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                <CardTitle>Estadísticas de Progreso</CardTitle>
              </div>
              <CardDescription>Visualiza tu avance en la adopción de ecohábitos.</CardDescription>
            </CardHeader>
            <CardContent>
              <HabitStatsDB user={user} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/comunidad">
                <Button className="bg-green-600 hover:bg-green-700">
                  Compartir mi progreso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/encuestas">
                <Button variant="outline">Evaluar mi cambio</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {!user && (
        <div className="mt-16 p-8 bg-green-50 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4">¿Quieres guardar tu progreso?</h3>
          <p className="text-gray-600 mb-6">
            Crea una cuenta para sincronizar tu progreso entre todos tus dispositivos y acceder a funciones adicionales.
          </p>
          <Link href="/auth/login">
            <Button className="bg-green-600 hover:bg-green-700">
              Crear cuenta gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
