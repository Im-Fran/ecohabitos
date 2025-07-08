import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, MessageSquare, Award, ArrowRight } from "lucide-react"

export default function Comunidad() {
  const testimonials = [
    {
      name: "Laura M.",
      avatar: "/images/community-user-laura.jpg",
      habit: "Compostaje casero",
      testimonial:
        "Empecé a compostar hace 3 meses y ya he reducido mi basura en un 40%. ¡Es más fácil de lo que pensaba!",
      date: "2 días atrás",
      likes: 24,
    },
    {
      name: "Carlos P.",
      avatar: "/placeholder.svg?height=80&width=80",
      habit: "Cero plásticos",
      testimonial: "Cambié todas mis botellas por alternativas reutilizables. El reto semanal me motivó a dar el paso.",
      date: "1 semana atrás",
      likes: 18,
    },
    {
      name: "Daniela S.",
      avatar: "/placeholder.svg?height=80&width=80",
      habit: "Ahorro energético",
      testimonial:
        "Siguiendo los consejos de la web, reduje mi consumo eléctrico en un 25%. Mi familia también se ha sumado.",
      date: "2 semanas atrás",
      likes: 32,
    },
    {
      name: "Martín R.",
      avatar: "/images/community-user-4.jpg",
      habit: "Transporte sostenible",
      testimonial:
        "Llevo un mes usando la bicicleta para ir a la universidad. He ahorrado dinero y me siento con más energía.",
      date: "3 semanas atrás",
      likes: 27,
    },
    {
      name: "Valentina G.",
      avatar: "/images/community-user-5.jpg",
      habit: "Huerto urbano",
      testimonial:
        "Creé un pequeño huerto en mi balcón siguiendo la guía del sitio. Ya coseché mis primeras lechugas y tomates.",
      date: "1 mes atrás",
      likes: 41,
    },
    {
      name: "Alejandro T.",
      avatar: "/images/community-user-6.jpg",
      habit: "Consumo responsable",
      testimonial:
        "He reducido mis compras impulsivas y ahora investigo el origen de los productos. Mi armario es más pequeño pero más consciente.",
      date: "1 mes atrás",
      likes: 15,
    },
  ]

  const topContributors = [
    {
      name: "Valentina G.",
      avatar: "/images/community-user-5.jpg",
      points: 1250,
      badge: "Eco Líder",
    },
    {
      name: "Carlos P.",
      avatar: "/images/community-user-2.jpg",
      points: 980,
      badge: "Activista Verde",
    },
    {
      name: "Laura M.",
      avatar: "/images/community-user-laura.jpg",
      points: 875,
      badge: "Innovador Sostenible",
    },
    {
      name: "Martín R.",
      avatar: "/images/community-user-4.jpg",
      points: 720,
      badge: "Guardián del Planeta",
    },
    {
      name: "Daniela S.",
      avatar: "/images/community-user-3.jpg",
      points: 650,
      badge: "Eco Entusiasta",
    },
  ]

  const upcomingEvents = [
    {
      title: "Taller de Compostaje Urbano",
      date: "15 de mayo, 17:00",
      location: "Online (Zoom)",
      description: "Aprende a crear y mantener tu propio sistema de compostaje en casa, incluso en espacios pequeños.",
      participants: 28,
    },
    {
      title: "Limpieza de Playa Colectiva",
      date: "22 de mayo, 10:00",
      location: "Playa Central",
      description:
        "Únete a nuestra jornada de limpieza y ayúdanos a recolectar plásticos y otros residuos de la costa.",
      participants: 45,
    },
    {
      title: "Webinar: Moda Sostenible",
      date: "30 de mayo, 19:00",
      location: "Online (YouTube)",
      description:
        "Descubre cómo crear un armario más consciente y el impacto de la industria textil en el medio ambiente.",
      participants: 62,
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <Users className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comunidad Ecohábitos</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comparte tus experiencias, aprende de otros y forma parte de una comunidad comprometida con el medio
            ambiente.
          </p>
        </div>
      </div>

      <Tabs defaultValue="testimonios" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="testimonios">Testimonios</TabsTrigger>
          <TabsTrigger value="eventos">Eventos</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
        </TabsList>

        <TabsContent value="testimonios" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800 my-1">
                        {testimonial.habit}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">"{testimonial.testimonial}"</p>
                      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                        <span>{testimonial.date}</span>
                        <div className="flex items-center gap-1">
                          <button className="text-green-600 hover:text-green-700">❤️ {testimonial.likes}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-green-100 mt-8">
            <CardHeader>
              <CardTitle>Comparte tu experiencia</CardTitle>
              <CardDescription>
                Cuéntanos cómo has implementado ecohábitos en tu vida diaria y qué resultados has obtenido.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="habit" className="text-sm font-medium">
                      Ecohábito
                    </label>
                    <Input id="habit" placeholder="Ej: Compostaje, Reciclaje, etc." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="testimonial" className="text-sm font-medium">
                    Tu experiencia
                  </label>
                  <Textarea id="testimonial" placeholder="Comparte tu experiencia con este ecohábito..." rows={4} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">
                Compartir experiencia
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="eventos" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-green-100">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} - {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{event.participants} participantes</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Inscribirme
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="border-green-100 mt-8">
            <CardHeader>
              <CardTitle>Proponer un evento</CardTitle>
              <CardDescription>
                ¿Tienes una idea para un evento relacionado con ecohábitos? Compártela con la comunidad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="event-title" className="text-sm font-medium">
                    Título del evento
                  </label>
                  <Input id="event-title" placeholder="Ej: Taller de reciclaje creativo" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="event-date" className="text-sm font-medium">
                      Fecha y hora
                    </label>
                    <Input id="event-date" type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-location" className="text-sm font-medium">
                      Ubicación
                    </label>
                    <Input id="event-location" placeholder="Online o ubicación física" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="event-description" className="text-sm font-medium">
                    Descripción
                  </label>
                  <Textarea id="event-description" placeholder="Describe brevemente el evento..." rows={4} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600 hover:bg-green-700">Proponer evento</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ranking" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Top Contribuyentes</CardTitle>
              <CardDescription>
                Los miembros más activos de nuestra comunidad, basado en participación y ecohábitos adoptados.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-800 font-bold">
                        {index + 1}
                      </div>
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={contributor.avatar || "/placeholder.svg"}
                          alt={contributor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{contributor.name}</h3>
                        <div className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-green-600" />
                          <span className="text-xs text-gray-500">{contributor.badge}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{contributor.points}</div>
                      <div className="text-xs text-gray-500">puntos</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="font-bold text-xl mb-4">¿Cómo ganar puntos?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-sm text-gray-500">
                  Participar en retos semanales: 50 puntos por reto completado
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-sm text-gray-500">
                  Compartir testimonios: 20 puntos por cada experiencia compartida
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-sm text-gray-500">Asistir a eventos: 30 puntos por cada evento</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-sm text-gray-500">Organizar eventos: 100 puntos por evento organizado</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                <span className="text-sm text-gray-500">
                  Completar encuestas de seguimiento: 15 puntos por encuesta
                </span>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
