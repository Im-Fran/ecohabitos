import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Droplet, Zap, Recycle, ArrowRight } from "lucide-react"

export default function EcoHabitos() {
  const categories = [
    {
      title: "Reducción de Plásticos",
      description: "Alternativas y consejos para disminuir el uso de plásticos en tu vida diaria.",
      icon: <Recycle className="h-6 w-6 text-green-600" />,
      link: "/ecohabitos/plasticos",
      image: "/images/plastic-reduction.jpg",
      habits: [
        "Lleva siempre una bolsa reutilizable",
        "Usa botellas de agua recargables",
        "Evita productos con microplásticos",
        "Compra a granel para reducir envases",
      ],
    },
    {
      title: "Compostaje",
      description: "Guía práctica para comenzar a compostar en casa, incluso en espacios pequeños.",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      link: "/ecohabitos/compostaje",
      image: "/images/composting.jpg",
      habits: [
        "Separa residuos orgánicos",
        "Crea tu compostador casero",
        "Aprende qué se puede compostar",
        "Utiliza el compost en tus plantas",
      ],
    },
    {
      title: "Ahorro Energético",
      description: "Consejos prácticos para reducir tu consumo de energía y ahorrar dinero.",
      icon: <Zap className="h-6 w-6 text-green-600" />,
      link: "/ecohabitos/energia",
      image: "/images/energy-saving.jpg",
      habits: [
        "Apaga luces y aparatos en standby",
        "Usa bombillas LED de bajo consumo",
        "Aprovecha la luz natural",
        "Desconecta cargadores sin uso",
      ],
    },
    {
      title: "Consumo de Agua",
      description: "Aprende a reducir tu consumo de agua y a utilizarla de manera más eficiente.",
      icon: <Droplet className="h-6 w-6 text-green-600" />,
      link: "/ecohabitos/agua",
      image: "/images/water-conservation.jpg",
      habits: [
        "Cierra el grifo mientras te cepillas",
        "Recoge agua de lluvia para plantas",
        "Repara fugas rápidamente",
        "Ducharse en vez de bañarse",
      ],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ecohábitos Diarios</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descubre cómo pequeñas acciones diarias pueden tener un gran impacto en nuestro planeta. Estos hábitos son
            fáciles de implementar y marcan una gran diferencia.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category, index) => (
          <Card key={index} className="overflow-hidden border-green-100 hover:shadow-md transition-all">
            <div className="relative h-48">
              <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">Hábitos recomendados:</h3>
              <ul className="space-y-1">
                {category.habits.map((habit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                    <span className="text-sm text-gray-500">{habit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={category.link}>
                <Button className="bg-green-600 hover:bg-green-700">
                  Aprender más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">¿Por qué adoptar ecohábitos?</h2>
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Impacto Ambiental</h3>
            <p className="text-gray-500 text-center">
              Reducir tu huella ecológica ayuda a conservar recursos naturales y proteger ecosistemas.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Ahorro Económico</h3>
            <p className="text-gray-500 text-center">
              Muchos ecohábitos te permiten ahorrar dinero al reducir el consumo y aprovechar mejor los recursos.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Droplet className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Bienestar Personal</h3>
            <p className="text-gray-500 text-center">
              Vivir de forma más sostenible mejora tu calidad de vida y contribuye a un futuro más saludable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
