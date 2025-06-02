import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ImageIcon, Calculator, ArrowRight, Download } from "lucide-react"

export default function Recursos() {
  const resources = {
    guides: [
      {
        title: "Guía de compostaje casero",
        description:
          "Aprende a crear y mantener tu propio sistema de compostaje en casa, incluso en espacios pequeños.",
        icon: <FileText className="h-5 w-5" />,
        link: "/recursos/compostaje",
        image: "/images/composting.jpg",
      },
      {
        title: "Manual de reciclaje correcto",
        description: "Todo lo que necesitas saber para separar y reciclar correctamente diferentes materiales.",
        icon: <FileText className="h-5 w-5" />,
        link: "/recursos/reciclaje",
        image: "/images/recycling-guide.jpg",
      },
      {
        title: "Recetas con aprovechamiento total",
        description:
          "Cocina sostenible: aprende a utilizar todas las partes de los alimentos y reducir el desperdicio.",
        icon: <FileText className="h-5 w-5" />,
        link: "/recursos/recetas",
        image: "/images/sustainable-recipes.jpg",
      },
      {
        title: "Guía para un hogar eco-friendly",
        description:
          "Consejos prácticos para transformar tu hogar en un espacio más sostenible y respetuoso con el medio ambiente.",
        icon: <FileText className="h-5 w-5" />,
        link: "/recursos/hogar-eco",
        image: "/images/eco-home-guide.jpg",
      },
    ],
    infographics: [
      {
        title: "Alternativas al plástico",
        description: "Infografía con alternativas sostenibles para reemplazar productos plásticos de un solo uso.",
        icon: <ImageIcon className="h-5 w-5" />,
        link: "/recursos/alternativas-plastico",
        image: "/images/plastic-alternatives.jpg",
      },
      {
        title: "Consejos para ahorrar agua",
        description: "Visualización de técnicas efectivas para reducir el consumo de agua en el hogar.",
        icon: <ImageIcon className="h-5 w-5" />,
        link: "/recursos/ahorro-agua",
        image: "/images/water-saving-tips.jpg",
      },
      {
        title: "Impacto de los microplásticos",
        description: "Datos visuales sobre el impacto de los microplásticos en los ecosistemas y la salud humana.",
        icon: <ImageIcon className="h-5 w-5" />,
        link: "/recursos/microplasticos",
        image: "/images/microplastics.jpg",
      },
      {
        title: "Ciclo de vida de los productos",
        description: "Comprende el impacto ambiental de los productos desde su fabricación hasta su disposición final.",
        icon: <ImageIcon className="h-5 w-5" />,
        link: "/recursos/ciclo-vida",
        image: "/images/product-lifecycle.jpg",
      },
    ],
    tools: [
      {
        title: "Calculadora de huella ecológica",
        description: "Herramienta interactiva para medir tu impacto ambiental personal y recibir recomendaciones.",
        icon: <Calculator className="h-5 w-5" />,
        link: "/recursos/calculadora",
        image: "/images/carbon-footprint-calculator.jpg",
      },
      {
        title: "Mapa de puntos de reciclaje",
        description: "Localiza los puntos de reciclaje más cercanos a tu ubicación para diferentes materiales.",
        icon: <Calculator className="h-5 w-5" />,
        link: "/recursos/mapa-reciclaje",
        image: "/images/recycling-guide.jpg",
      },
      {
        title: "Planificador de huerto urbano",
        description: "Diseña tu propio huerto urbano según tu espacio disponible y las condiciones climáticas.",
        icon: <Calculator className="h-5 w-5" />,
        link: "/recursos/planificador-huerto",
        image: "/images/urban-garden.jpg",
      },
      {
        title: "Rastreador de hábitos sostenibles",
        description: "Lleva un registro de tus ecohábitos diarios y visualiza tu progreso a lo largo del tiempo.",
        icon: <Calculator className="h-5 w-5" />,
        link: "/seguimiento",
        image: "/images/habit-tracking.jpg",
      },
    ],
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos Prácticos</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Guías, infografías y herramientas para ayudarte a implementar ecohábitos en tu vida diaria. Todos nuestros
            recursos son gratuitos y de fácil aplicación.
          </p>
        </div>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="guides">Guías</TabsTrigger>
          <TabsTrigger value="infographics">Infografías</TabsTrigger>
          <TabsTrigger value="tools">Herramientas</TabsTrigger>
        </TabsList>
        <TabsContent value="guides">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {resources.guides.map((resource, index) => (
              <Card key={index} className="overflow-hidden border-green-100 hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={resource.link}>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="infographics">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {resources.infographics.map((resource, index) => (
              <Card key={index} className="overflow-hidden border-green-100 hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={resource.link}>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar infografía
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tools">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {resources.tools.map((resource, index) => (
              <Card key={index} className="overflow-hidden border-green-100 hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={resource.link}>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Acceder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 p-8 bg-green-50 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-500">
              Estamos constantemente creando nuevos recursos. Si necesitas información sobre un tema específico,
              háznoslo saber.
            </p>
          </div>
          <Link href="/contacto">
            <Button className="bg-green-600 hover:bg-green-700">Solicitar recurso</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
