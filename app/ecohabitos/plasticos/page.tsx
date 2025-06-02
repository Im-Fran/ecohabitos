import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Info, AlertTriangle, CheckCircle, Recycle } from "lucide-react"

export default function ReduccionPlasticos() {
  const alternatives = [
    {
      plastic: "Bolsas de plástico",
      alternative: "Bolsas de tela reutilizables",
      impact: "Una bolsa de tela puede reemplazar cientos de bolsas plásticas a lo largo de su vida útil.",
      image: "/images/cloth-bags.jpg",
    },
    {
      plastic: "Botellas de agua",
      alternative: "Botella reutilizable de acero inoxidable",
      impact: "Evita el consumo de cientos de botellas plásticas al año y mantiene tu bebida a la temperatura ideal.",
      image: "/images/reusable-bottles.jpg",
    },
    {
      plastic: "Pajitas/popotes",
      alternative: "Pajitas de bambú, acero o vidrio",
      impact:
        "Las pajitas plásticas tardan hasta 200 años en degradarse y son uno de los residuos más comunes en playas.",
      image: "/images/bamboo-straws.jpg",
    },
    {
      plastic: "Envases de alimentos",
      alternative: "Recipientes de vidrio o acero",
      impact: "Son más duraderos, no liberan sustancias tóxicas y pueden usarse en el microondas (vidrio) o el horno.",
      image: "/images/glass-containers.jpg",
    },
    {
      plastic: "Film transparente",
      alternative: "Envoltorios de cera de abeja",
      impact: "Son reutilizables, biodegradables y tienen propiedades antibacterianas naturales.",
      image: "/images/beeswax-wraps.jpg",
    },
    {
      plastic: "Cepillos de dientes",
      alternative: "Cepillos de bambú con cerdas vegetales",
      impact: "El mango es 100% biodegradable y las cerdas pueden ser compostables según el tipo.",
      image: "/images/bamboo-toothbrush.jpg",
    },
  ]

  const tips = [
    {
      title: "Compra a granel",
      description: "Lleva tus propios recipientes para comprar productos a granel y evitar envases innecesarios.",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Rechaza lo innecesario",
      description: "Aprende a decir 'no' a productos con exceso de embalaje o plásticos de un solo uso.",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Planifica tus compras",
      description: "Haz una lista antes de ir al supermercado para evitar compras impulsivas con exceso de plástico.",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Repara en lugar de reemplazar",
      description: "Muchos productos plásticos pueden repararse en lugar de ser desechados y reemplazados.",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Reutiliza creativamente",
      description: "Antes de reciclar, piensa si puedes darle un nuevo uso a ese envase o producto plástico.",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
    {
      title: "Aprende a identificar plásticos",
      description: "Conoce los diferentes tipos de plásticos y cuáles son más fáciles de reciclar en tu localidad.",
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <Recycle className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Reducción de Plásticos</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Aprende a disminuir el uso de plásticos en tu vida diaria con alternativas sostenibles y consejos prácticos.
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 mb-4">
              <AlertTriangle className="mr-1 h-4 w-4" />
              El problema
            </div>
            <h2 className="text-2xl font-bold mb-4">¿Por qué reducir el plástico?</h2>
            <p className="text-gray-500 mb-4">
              El plástico tarda cientos de años en degradarse y solo el 9% de todo el plástico producido ha sido
              reciclado. Cada año, 8 millones de toneladas de plástico terminan en nuestros océanos, afectando a más de
              700 especies marinas.
            </p>
            <p className="text-gray-500 mb-4">
              Los microplásticos ya están presentes en el agua que bebemos, los alimentos que consumimos e incluso en el
              aire que respiramos, con consecuencias para la salud humana aún en estudio.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Link href="/recursos/microplasticos">
                <Button variant="outline" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Más información
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/environmental-pollution.jpg"
              alt="Contaminación por plásticos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Alternatives Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Alternativas sostenibles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alternatives.map((item, index) => (
            <Card key={index} className="overflow-hidden border-green-100">
              <div className="flex p-4">
                <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.alternative} fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-red-500 line-through mb-1">{item.plastic}</h3>
                  <h3 className="font-bold text-green-600 mb-2">{item.alternative}</h3>
                  <p className="text-xs text-gray-500">{item.impact}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Consejos prácticos</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <Card key={index} className="border-green-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{tip.icon}</div>
                  <div>
                    <h3 className="font-bold mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-500">{tip.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Guía de implementación</h2>
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner">Principiante</TabsTrigger>
            <TabsTrigger value="intermediate">Intermedio</TabsTrigger>
            <TabsTrigger value="advanced">Avanzado</TabsTrigger>
          </TabsList>
          <TabsContent value="beginner" className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Primeros pasos (1-2 semanas)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Adquiere una botella de agua reutilizable y úsala diariamente.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Lleva siempre contigo una bolsa de tela para compras imprevistas.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Rechaza pajitas/popotes plásticos en restaurantes y cafeterías.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              Comienza con estos pequeños cambios y observa cuánto plástico puedes evitar en solo dos semanas. Lleva un
              registro para mantenerte motivado.
            </p>
          </TabsContent>
          <TabsContent value="intermediate" className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Nivel intermedio (2-4 semanas)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Reemplaza productos de higiene personal con alternativas sostenibles (cepillo de bambú, jabón
                    sólido).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Compra alimentos a granel usando tus propios recipientes reutilizables.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Utiliza envoltorios de cera de abeja en lugar de film plástico.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              Una vez que te hayas acostumbrado a los cambios básicos, estos pasos intermedios te ayudarán a reducir
              significativamente tu consumo de plástico.
            </p>
          </TabsContent>
          <TabsContent value="advanced" className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Nivel avanzado (1-3 meses)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Elabora tus propios productos de limpieza y cuidado personal para evitar envases plásticos.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Organiza un grupo de intercambio en tu comunidad para reutilizar objetos en lugar de comprar nuevos.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Contacta con empresas locales para sugerir alternativas al embalaje plástico.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              Estos pasos avanzados requieren más planificación y compromiso, pero tienen un impacto mucho mayor y
              pueden inspirar a otros a seguir tu ejemplo.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Resources Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Recursos adicionales</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/recursos/alternativas-plastico">
            <Card className="border-green-100 hover:shadow-md transition-all h-full">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Infograf��a: Alternativas al plástico</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Guía visual completa con alternativas sostenibles para los plásticos más comunes.
                </p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                  Descargar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/recursos/microplasticos">
            <Card className="border-green-100 hover:shadow-md transition-all h-full">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Infografía: Impacto de los microplásticos</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Datos visuales sobre el impacto de los microplásticos en los ecosistemas y la salud humana.
                </p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                  Descargar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/recursos/calculadora">
            <Card className="border-green-100 hover:shadow-md transition-all h-full">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Calculadora de plástico evitado</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Herramienta para calcular cuánto plástico evitas al implementar diferentes alternativas.
                </p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                  Acceder <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="bg-green-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">¿Listo para el reto?</h2>
            <p className="text-green-700">
              Únete a nuestro reto semanal "Cero plásticos" y comparte tus experiencias con la comunidad.
            </p>
          </div>
          <Link href="/retos/cero-plasticos">
            <Button className="bg-green-600 hover:bg-green-700">
              Participar en el reto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Related Eco-habits */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Ecohábitos relacionados</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/ecohabitos/compostaje">
            <Card className="overflow-hidden border-green-100 hover:shadow-md transition-all">
              <div className="flex">
                <div className="relative h-full w-1/3">
                  <Image src="/images/composting.jpg" alt="Compostaje" fill className="object-cover" />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-bold mb-2">Compostaje</h3>
                  <p className="text-sm text-gray-500">
                    Aprende a compostar residuos orgánicos y reduce la cantidad de basura que generas.
                  </p>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 mt-2">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
          <Link href="/ecohabitos/consumo-responsable">
            <Card className="overflow-hidden border-green-100 hover:shadow-md transition-all">
              <div className="flex">
                <div className="relative h-full w-1/3">
                  <Image
                    src="/images/sustainable-fashion.jpg"
                    alt="Consumo responsable"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-bold mb-2">Consumo responsable</h3>
                  <p className="text-sm text-gray-500">
                    Descubre cómo tomar decisiones de compra más conscientes y sostenibles.
                  </p>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 mt-2">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
