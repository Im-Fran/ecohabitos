import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Calendar, Users, Trophy } from "lucide-react"

export default function Retos() {
  const currentChallenge = {
    title: "Cero plásticos",
    period: "6 - 12 de mayo",
    description:
      "Intenta pasar una semana sin utilizar plásticos de un solo uso. Reemplaza bolsas, botellas y envases por alternativas reutilizables.",
    participants: 125,
    progress: 66,
    image: "/images/zero-waste-challenge.jpg",
    link: "/retos/cero-plasticos",
  }

  const upcomingChallenges = [
    {
      title: "Semana sin coche",
      period: "13 - 19 de mayo",
      description:
        "Utiliza transporte público, bicicleta o camina para tus desplazamientos diarios durante una semana.",
      image: "/images/car-free-week.jpg",
      link: "/retos/sin-coche",
    },
    {
      title: "Ahorro energético",
      period: "20 - 26 de mayo",
      description:
        "Reduce tu consumo de energía implementando medidas de ahorro en tu hogar y midiendo los resultados.",
      image: "/images/energy-saving.jpg",
      link: "/retos/ahorro-energetico",
    },
    {
      title: "Alimentación local",
      period: "27 de mayo - 2 de junio",
      description:
        "Consume solo alimentos producidos localmente, reduciendo la huella de carbono asociada al transporte.",
      image: "/images/local-food.jpg",
      link: "/retos/alimentacion-local",
    },
  ]

  const pastChallenges = [
    {
      title: "Día sin residuos",
      period: "22 - 28 de abril",
      description: "Intenta generar cero residuos durante un día completo, planificando bien tus actividades.",
      participants: 98,
      image: "/images/zero-waste-challenge.jpg",
      link: "/retos/dia-sin-residuos",
    },
    {
      title: "Limpieza natural",
      period: "15 - 21 de abril",
      description: "Utiliza solo productos de limpieza naturales y caseros durante una semana.",
      participants: 112,
      image: "/images/natural-cleaning.jpg",
      link: "/retos/limpieza-natural",
    },
    {
      title: "Duchas cortas",
      period: "8 - 14 de abril",
      description: "Reduce el tiempo de tus duchas a un máximo de 5 minutos para ahorrar agua.",
      participants: 145,
      image: "/images/short-showers.jpg",
      link: "/retos/duchas-cortas",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Retos Ecológicos</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Únete a nuestros desafíos semanales y forma parte de una comunidad comprometida con el medio ambiente. Cada
            pequeña acción cuenta.
          </p>
        </div>
      </div>

      {/* Current Challenge */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-green-600">Reto Actual</Badge>
          <h2 className="text-2xl font-bold">{currentChallenge.title}</h2>
        </div>
        <Card className="overflow-hidden border-green-100">
          <div className="relative h-64 sm:h-80">
            <Image
              src={currentChallenge.image || "/placeholder.svg"}
              alt={currentChallenge.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-500">{currentChallenge.period}</span>
            </div>
            <CardTitle className="text-2xl">{currentChallenge.title}</CardTitle>
            <CardDescription className="text-base">{currentChallenge.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">{currentChallenge.participants} participantes</span>
                </div>
                <span className="text-sm text-gray-500">{currentChallenge.progress}% completado</span>
              </div>
              <Progress
                value={currentChallenge.progress}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-green-600"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={currentChallenge.link}>
              <Button className="bg-green-600 hover:bg-green-700">
                Participar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={`${currentChallenge.link}/leaderboard`}>
              <Button variant="outline" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Ver clasificación
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Upcoming Challenges */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Próximos Retos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingChallenges.map((challenge, index) => (
            <Card key={index} className="overflow-hidden border-green-100 hover:shadow-md transition-all">
              <div className="relative h-40">
                <Image
                  src={challenge.image || "/placeholder.svg"}
                  alt={challenge.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-gray-500">{challenge.period}</span>
                </div>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <CardDescription className="text-sm">{challenge.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={challenge.link}>
                  <Button variant="outline" size="sm">
                    Recordármelo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Past Challenges */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Retos Anteriores</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pastChallenges.map((challenge, index) => (
            <Card key={index} className="overflow-hidden border-gray-100 hover:shadow-sm transition-all">
              <div className="flex">
                <div className="relative h-full w-1/3">
                  <Image
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-bold mb-1">{challenge.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{challenge.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>{challenge.participants} participantes</span>
                  </div>
                  <Link
                    href={challenge.link}
                    className="text-green-600 text-xs font-medium mt-2 inline-block hover:underline"
                  >
                    Ver resultados
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 p-8 bg-green-50 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">¿Tienes una idea para un reto?</h2>
            <p className="text-gray-500">
              Nos encantaría escuchar tus propuestas para futuros retos ecológicos. ¡Comparte tus ideas con nosotros!
            </p>
          </div>
          <Link href="/contacto">
            <Button className="bg-green-600 hover:bg-green-700">Proponer un reto</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
