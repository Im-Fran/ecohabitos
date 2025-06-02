import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, BarChart3, Target } from "lucide-react"
import { SurveyResultsChart } from "@/components/survey-results-chart"

export default function ResultadosEncuestas() {
  const generalStats = {
    totalResponses: 342,
    averageImprovement: 73,
    completionRate: 89,
    recommendationScore: 4.2,
  }

  const beforeAfterData = [
    {
      category: "Preocupación ambiental",
      before: 3.2,
      after: 4.1,
      improvement: 28,
    },
    {
      category: "Uso de productos reutilizables",
      before: 2.8,
      after: 4.3,
      improvement: 54,
    },
    {
      category: "Separación de residuos",
      before: 2.5,
      after: 4.0,
      improvement: 60,
    },
    {
      category: "Conciencia energética",
      before: 3.0,
      after: 4.2,
      improvement: 40,
    },
    {
      category: "Participación ambiental",
      before: 1.8,
      after: 3.5,
      improvement: 94,
    },
  ]

  const demographicData = [
    { age: "16-18 años", percentage: 35, responses: 120 },
    { age: "19-21 años", percentage: 42, responses: 144 },
    { age: "22-25 años", percentage: 23, responses: 78 },
  ]

  const habitAdoption = [
    { habit: "Botella reutilizable", adopted: 89 },
    { habit: "Bolsas de tela", adopted: 76 },
    { habit: "Separación de residuos", adopted: 82 },
    { habit: "Apagar luces", adopted: 91 },
    { habit: "Compostaje", adopted: 34 },
    { habit: "Transporte sostenible", adopted: 58 },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <BarChart3 className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resultados de Encuestas</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Análisis del impacto de los ecohábitos en la conciencia ambiental de nuestra comunidad.
          </p>
        </div>
      </div>

      {/* General Statistics */}
      <div className="grid gap-6 md:grid-cols-4 mb-12">
        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Respuestas</p>
                <p className="text-2xl font-bold text-green-600">{generalStats.totalResponses}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Mejora Promedio</p>
                <p className="text-2xl font-bold text-green-600">{generalStats.averageImprovement}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Tasa de Finalización</p>
                <p className="text-2xl font-bold text-green-600">{generalStats.completionRate}%</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Puntuación NPS</p>
                <p className="text-2xl font-bold text-green-600">{generalStats.recommendationScore}/5</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="before-after" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="before-after">Antes vs Después</TabsTrigger>
          <TabsTrigger value="habits">Adopción de Hábitos</TabsTrigger>
          <TabsTrigger value="demographics">Demografía</TabsTrigger>
          <TabsTrigger value="trends">Tendencias</TabsTrigger>
        </TabsList>

        <TabsContent value="before-after" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Comparación Antes vs Después</CardTitle>
              <CardDescription>
                Cambios en la conciencia ambiental después de usar la plataforma (escala 1-5)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {beforeAfterData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.category}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-500">Antes: {item.before}</span>
                        <span className="text-green-600 font-medium">Después: {item.after}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          +{item.improvement}%
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div
                            className="h-2 rounded-full bg-gray-400"
                            style={{ width: `${(item.before / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div
                            className="h-2 rounded-full bg-green-600"
                            style={{ width: `${(item.after / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="habits" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Adopción de Ecohábitos</CardTitle>
              <CardDescription>Porcentaje de usuarios que han adoptado cada hábito</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {habitAdoption.map((habit, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{habit.habit}</span>
                      <span className="text-sm text-gray-500">{habit.adopted}%</span>
                    </div>
                    <Progress value={habit.adopted} className="h-2 bg-gray-100" indicatorClassName="bg-green-600" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Distribución por Edad</CardTitle>
              <CardDescription>Participación de diferentes grupos etarios en las encuestas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demographicData.map((demo, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{demo.age}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{demo.responses} respuestas</span>
                        <span className="text-sm font-medium">{demo.percentage}%</span>
                      </div>
                    </div>
                    <Progress value={demo.percentage} className="h-2 bg-gray-100" indicatorClassName="bg-green-600" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Tendencias Temporales</CardTitle>
              <CardDescription>Evolución de la conciencia ambiental a lo largo del tiempo</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <SurveyResultsChart />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>Comentarios Destacados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                    "La plataforma me ayudó a entender que pequeños cambios pueden tener un gran impacto. Ahora toda mi
                    familia practica ecohábitos."
                  </blockquote>
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                    "Los retos semanales me mantuvieron motivada. Es increíble ver cuánto he cambiado en solo 3 meses."
                  </blockquote>
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
                    "Nunca pensé que el compostaje fuera tan fácil. Ahora tengo mi propio sistema en casa."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>Áreas de Mejora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Más contenido sobre compostaje</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">67% solicitudes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Recordatorios automáticos</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">54% solicitudes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Más retos grupales</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">48% solicitudes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">App móvil</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">71% solicitudes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
