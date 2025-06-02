import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Leaf, AlertTriangle, Users } from "lucide-react"

export default function Acerca() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acerca del Proyecto</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conoce más sobre nuestra misión, objetivos y el equipo detrás de Ecohábitos para Jóvenes.
          </p>
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="about">El Proyecto</TabsTrigger>
          <TabsTrigger value="mission">Misión</TabsTrigger>
          <TabsTrigger value="objectives">Objetivos</TabsTrigger>
          <TabsTrigger value="scope">Alcances</TabsTrigger>
          <TabsTrigger value="team">Equipo</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">¿Qué es Ecohábitos?</h2>
              <p className="text-gray-500 mb-4">
                Ecohábitos para Jóvenes es una página web educativa diseñada para enseñar a estudiantes y jóvenes a
                implementar hábitos sostenibles en su vida diaria de forma práctica y sencilla.
              </p>
              <p className="text-gray-500 mb-4">
                Nuestro enfoque se centra en tres áreas principales: reducción del uso de plásticos, compostaje y ahorro
                energético, proporcionando recursos prácticos como guías, infografías y retos semanales.
              </p>
              <p className="text-gray-500">
                Este proyecto nace como respuesta a la problemática de desinformación y falta de recursos prácticos para
                que los jóvenes puedan adoptar estilos de vida más sostenibles.
              </p>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/young-people-eco-habits.jpg"
                alt="Jóvenes practicando ecohábitos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-green-600" />
              Problemática y causas
            </h3>
            <p className="text-gray-500 mb-4">
              A pesar del creciente interés de los jóvenes por contribuir al cuidado ambiental, existe una brecha
              significativa entre la intención y la acción. Muchos no saben por dónde comenzar, y suelen enfrentarse a
              barreras que dificultan la adopción de hábitos sostenibles.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-6">
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Desinformación</h4>
                  <p className="text-sm text-gray-500">
                    Presencia de información excesiva y contradictoria, que genera confusión sobre qué acciones son
                    realmente efectivas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Falta de recursos</h4>
                  <p className="text-sm text-gray-500">
                    Escasez de recursos accesibles y prácticos que orienten sobre cómo aplicar los eco hábitos en la
                    rutina diaria.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Ausencia de educación</h4>
                  <p className="text-sm text-gray-500">
                    Falta de educación ambiental en etapas formativas tempranas, lo que limita la incorporación de estos
                    hábitos desde pequeños.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mission">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-500 mb-4">
                La misión del grupo es educar y motivar a jóvenes y estudiantes hacia una vida más sostenible, a través
                de una plataforma digital accesible que convierta la conciencia ambiental en acciones prácticas y
                cotidianas.
              </p>
              <p className="text-gray-500">
                Buscamos que la información sobre ecohábitos no solo esté disponible, sino que sea comprensible,
                atractiva y aplicable, mediante el uso de recursos visuales, retos interactivos y contenidos didácticos
                adaptados a su realidad. Esta misión responde a la necesidad de cerrar la brecha entre el deseo de
                actuar y el conocimiento de cómo hacerlo, ofreciendo herramientas simples que permitan incorporar
                pequeñas acciones con impacto real.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Indicadores de Mejora</h2>
              <p className="text-gray-500 mb-4">
                Para medir la mejora y el impacto del proyecto, utilizamos indicadores cuantitativos y cualitativos que
                reflejen el nivel de participación y cambio de hábitos entre los usuarios jóvenes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Gráficos de barras que muestran el progreso semanal o mensual en la cantidad de usuarios activos y
                    retos completados.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Checklists de hábitos sostenibles, integradas en la plataforma, donde los usuarios pueden marcar
                    cada acción cumplida.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span className="text-sm text-gray-500">
                    Encuestas breves para evaluar el cambio en la conciencia ambiental antes y después del uso de la
                    plataforma.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="objectives">
          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Objetivo General</h2>
              <p className="text-gray-500">
                Diseñar e implementar una página web educativa que promueva la adopción de eco hábitos en jóvenes,
                mediante contenido visual, dinámico y adaptado a sus intereses y necesidades.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Objetivos Específicos</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-green-600">1</span>
                    </div>
                    <h3 className="font-medium mb-2">Crear contenido educativo</h3>
                    <p className="text-sm text-gray-500">
                      Desarrollar contenido sobre reciclaje, consumo responsable y ahorro energético.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <h3 className="font-medium mb-2">Interfaz amigable</h3>
                    <p className="text-sm text-gray-500">
                      Desarrollar una interfaz amigable e interactiva que motive la participación juvenil.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-green-600">3</span>
                    </div>
                    <h3 className="font-medium mb-2">Herramientas de seguimiento</h3>
                    <p className="text-sm text-gray-500">
                      Incluir herramientas de autoevaluación y seguimiento de hábitos ecológicos.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="font-bold text-green-600">4</span>
                    </div>
                    <h3 className="font-medium mb-2">Comunidad virtual</h3>
                    <p className="text-sm text-gray-500">
                      Fomentar una comunidad virtual donde los jóvenes compartan experiencias y consejos sustentables.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scope">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Alcances</h2>
              <Card className="border-green-100 mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Plataforma web educativa</h3>
                  <p className="text-sm text-gray-500">
                    Enfocada en estudiantes y jóvenes, con el objetivo de enseñar e incentivar la adopción de hábitos
                    sostenibles relacionados con la reducción del uso de plásticos, el compostaje y el ahorro
                    energético.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-100 mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Recursos interactivos</h3>
                  <p className="text-sm text-gray-500">
                    El sitio incluirá guías prácticas, infografías y retos semanales diseñados con un enfoque accesible,
                    visual e interactivo.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Enfoque juvenil</h3>
                  <p className="text-sm text-gray-500">
                    Diseño visual, accesibilidad y lenguaje amigable adaptado a jóvenes.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Limitaciones</h2>
              <Card className="border-red-100 mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Sin alianzas institucionales</h3>
                  <p className="text-sm text-gray-500">
                    Falta de integración con instituciones u organizaciones ambientales, lo que restringe su alcance a
                    nivel comunitario o formal.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-100 mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Recursos limitados</h3>
                  <p className="text-sm text-gray-500">
                    Al tratarse de un proyecto académico, el tiempo y los recursos técnicos son limitados, lo que obliga
                    a priorizar una versión funcional mínima del sitio.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Dependencia de internet</h3>
                  <p className="text-sm text-gray-500">
                    Al depender exclusivamente de acceso a internet, el contenido queda fuera del alcance de jóvenes en
                    contextos con baja conectividad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Equipo Código ágil</h2>
              </div>
              <p className="text-gray-500 mb-6">
                Somos un equipo de estudiantes comprometidos con el medio ambiente y el desarrollo de soluciones
                digitales que generen un impacto positivo en la sociedad.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Nicolás Rosales", role: "Desarrollador", avatar: "/images/team-member-1.jpg" },
                  { name: "Francisco Solis", role: "Diseñador UX/UI", avatar: "/images/team-member-2.jpg" },
                  { name: "Franco Contreras", role: "Contenido", avatar: "/images/team-member-3.jpg" },
                  { name: "Benjamin Lara", role: "Investigación", avatar: "/images/team-member-4.jpg" },
                ].map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Profesor guía</h3>
              <p className="text-gray-500">Ruben Letelier</p>
              <p className="text-sm text-gray-500">Asignatura: Desarrollo ágil 303</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="mt-16 p-8 bg-green-600 text-white rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">¿Quieres formar parte del cambio?</h2>
            <p className="text-green-50">
              Únete a nuestra comunidad y comienza a implementar ecohábitos en tu vida diaria.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/ecohabitos">
              <Button className="bg-white text-green-600 hover:bg-green-50">Explorar ecohábitos</Button>
            </Link>
            <Link href="/comunidad">
              <Button variant="outline" className="text-white border-white hover:bg-green-700">
                Unirme a la comunidad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
