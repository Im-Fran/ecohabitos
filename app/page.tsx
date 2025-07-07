import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Zap, Recycle, ArrowRight, Users } from "lucide-react"
import { ProgressChart } from "@/components/progress-chart"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Proyecto Código ágil
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Ecohábitos para un <span className="text-green-600">futuro mejor</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aprende a implementar hábitos sostenibles en tu vida diaria de forma práctica y sencilla. Pequeñas
                acciones, grandes cambios.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/ecohabitos">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Comenzar ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/acerca">
                  <Button variant="outline">Conoce más sobre el proyecto</Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Jóvenes practicando ecohábitos"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Ecohábitos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre cómo pequeñas acciones diarias pueden tener un gran impacto en nuestro planeta.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="border-green-100 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Reducción de Plásticos</CardTitle>
                <CardDescription>
                  Alternativas y consejos para disminuir el uso de plásticos en tu vida diaria.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                Aprende a identificar plásticos innecesarios y descubre alternativas sostenibles.
              </CardContent>
              <CardFooter>
                <Link href="/ecohabitos/plasticos">
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-green-100 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Compostaje</CardTitle>
                <CardDescription>
                  Guía práctica para comenzar a compostar en casa, incluso en espacios pequeños.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                Transforma tus residuos orgánicos en abono y reduce tu huella de carbono.
              </CardContent>
              <CardFooter>
                <Link href="/ecohabitos/compostaje">
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-green-100 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Ahorro Energético</CardTitle>
                <CardDescription>
                  Consejos prácticos para reducir tu consumo de energía y ahorrar dinero.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                Pequeños cambios en tus hábitos diarios que tienen un gran impacto en el planeta.
              </CardContent>
              <CardFooter>
                <Link href="/ecohabitos/energia">
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Indicators Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestro Impacto</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seguimiento de nuestro progreso colectivo en la adopción de ecohábitos.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>Participación en Retos Semanales</CardTitle>
                <CardDescription>Evolución de usuarios activos en los últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ProgressChart />
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>Hábitos Más Adoptados</CardTitle>
                <CardDescription>Basado en las encuestas de nuestra comunidad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Uso de botellas reutilizables</span>
                      <span className="text-sm text-gray-500">78%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "78%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Separación de residuos</span>
                      <span className="text-sm text-gray-500">65%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "65%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Reducción de bolsas plásticas</span>
                      <span className="text-sm text-gray-500">82%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "82%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Apagar luces innecesarias</span>
                      <span className="text-sm text-gray-500">71%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "71%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Compostaje casero</span>
                      <span className="text-sm text-gray-500">42%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Survey Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Evaluación de Impacto
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mide tu progreso</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participa en nuestras encuestas para evaluar cómo han cambiado tus hábitos y conciencia ambiental.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/encuestas">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Realizar encuesta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/encuestas/resultados">
                  <Button variant="outline">Ver resultados</Button>
                </Link>
              </div>
            </div>
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>Impacto Medido</CardTitle>
                <CardDescription>Resultados de nuestras encuestas de seguimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Mejora en conciencia ambiental</span>
                      <span className="text-sm text-gray-500">+73%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "73%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Adopción de nuevos hábitos</span>
                      <span className="text-sm text-gray-500">+89%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "89%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Recomendación a otros</span>
                      <span className="text-sm text-gray-500">4.2/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-green-600" style={{ width: "84%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-gray-500">Basado en 342 respuestas de usuarios activos</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Challenge Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Reto Semanal</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¡Únete al desafío!</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cada semana proponemos un nuevo reto ecológico. Participa y comparte tus resultados con la comunidad.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/retos">
                  <Button className="bg-green-600 hover:bg-green-700">Ver reto actual</Button>
                </Link>
              </div>
            </div>
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>Reto de la semana: Cero plásticos</CardTitle>
                <CardDescription>Del 6 al 12 de mayo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Intenta pasar una semana sin utilizar plásticos de un solo uso. Reemplaza bolsas, botellas y envases
                  por alternativas reutilizables.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-2 flex-1 rounded-full bg-gray-100">
                    <div className="h-2 w-2/3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-sm font-medium">125 participantes</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/retos/cero-plasticos">
                  <Button variant="outline">Participar</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-green-100 p-2">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestra Comunidad</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a otros jóvenes comprometidos con el medio ambiente y comparte tus experiencias.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Laura M.",
                avatar: "/images/community-user-laura.jpg",
                habit: "Compostaje casero",
                testimonial:
                  "Empecé a compostar hace 3 meses y ya he reducido mi basura en un 40%. ¡Es más fácil de lo que pensaba!",
              },
              {
                name: "Carlos P.",
                avatar: "/images/community-user-2.jpg",
                habit: "Cero plásticos",
                testimonial:
                  "Cambié todas mis botellas por alternativas reutilizables. El reto semanal me motivó a dar el paso.",
              },
              {
                name: "Daniela S.",
                avatar: "/images/community-user-3.jpg",
                habit: "Ahorro energético",
                testimonial:
                  "Siguiendo los consejos de la web, reduje mi consumo eléctrico en un 25%. Mi familia también se ha sumado.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800 my-2">
                      {testimonial.habit}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">"{testimonial.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/comunidad">
              <Button className="bg-green-600 hover:bg-green-700">
                Unirme a la comunidad
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos Prácticos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Guías, infografías y herramientas para ayudarte a implementar ecohábitos en tu vida diaria.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Guía de compostaje casero", type: "Guía PDF", link: "/recursos/compostaje" },
              { title: "Alternativas al plástico", type: "Infografía", link: "/recursos/alternativas-plastico" },
              { title: "Calculadora de huella ecológica", type: "Herramienta", link: "/recursos/calculadora" },
              { title: "Recetas con aprovechamiento total", type: "Guía PDF", link: "/recursos/recetas" },
              { title: "Mapa de puntos de reciclaje", type: "Herramienta", link: "/recursos/mapa-reciclaje" },
              { title: "Consejos para ahorrar agua", type: "Infografía", link: "/recursos/ahorro-agua" },
            ].map((resource, index) => (
              <Link key={index} href={resource.link}>
                <Card className="border-green-100 hover:border-green-200 hover:shadow-md transition-all h-full">
                  <CardHeader className="pb-2">
                    <div className="text-xs font-medium text-green-600">{resource.type}</div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                      Descargar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/recursos">
              <Button variant="outline">Ver todos los recursos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Únete al movimiento</h2>
              <p className="max-w-[900px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cada pequeña acción cuenta. Juntos podemos hacer la diferencia.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/ecohabitos">
                <Button className="bg-white text-green-600 hover:bg-green-50">Comenzar mi viaje eco</Button>
              </Link>
              <Link href="/comunidad">
                <Button variant="outline" className="text-white border-white hover:bg-green-700">
                  Unirme a la comunidad
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
