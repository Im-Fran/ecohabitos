import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, CheckCircle, BarChart3, Calendar, Recycle, Zap, Leaf } from "lucide-react"
import { HabitTracker } from "@/components/habit-tracker"

export default function Seguimiento() {
  const plasticHabits = [
    { id: "p1", label: "Usar botella reutilizable", completed: true },
    { id: "p2", label: "Llevar bolsas de tela para compras", completed: true },
    { id: "p3", label: "Evitar productos con microplásticos", completed: false },
    { id: "p4", label: "Rechazar pajitas/popotes de plástico", completed: true },
    { id: "p5", label: "Comprar a granel para evitar envases", completed: false },
  ]

  const energyHabits = [
    { id: "e1", label: "Apagar luces al salir de habitaciones", completed: true },
    { id: "e2", label: "Desconectar cargadores sin uso", completed: true },
    { id: "e3", label: "Usar bombillas LED de bajo consumo", completed: true },
    { id: "e4", label: "Aprovechar la luz natural", completed: true },
    { id: "e5", label: "Regular la temperatura de calefacción/aire acondicionado", completed: false },
  ]

  const compostHabits = [
    { id: "c1", label: "Separar residuos orgánicos", completed: true },
    { id: "c2", label: "Crear compostador casero", completed: false },
    { id: "c3", label: "Mantener equilibrio de materiales secos/húmedos", completed: false },
    { id: "c4", label: "Remover el compost regularmente", completed: false },
    { id: "c5", label: "Utilizar el compost en plantas", completed: false },
  ]

  const weeklyProgress = [
    { week: "Semana 1", completed: 5, total: 15 },
    { week: "Semana 2", completed: 8, total: 15 },
    { week: "Semana 3", completed: 10, total: 15 },
    { week: "Semana 4", completed: 12, total: 15 },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seguimiento de Ecohábitos</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Lleva un registro de tus hábitos sostenibles y visualiza tu progreso a lo largo del tiempo.
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
              <div className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                <CardTitle>Reducción de Plásticos</CardTitle>
              </div>
              <CardDescription>Marca los hábitos que ya has incorporado a tu rutina diaria.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plasticHabits.map((habit) => (
                  <div key={habit.id} className="flex items-center space-x-2">
                    <Checkbox id={habit.id} defaultChecked={habit.completed} />
                    <label
                      htmlFor={habit.id}
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        habit.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {habit.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progreso</span>
                  <span className="text-sm text-gray-500">
                    {plasticHabits.filter((h) => h.completed).length}/{plasticHabits.length} completados
                  </span>
                </div>
                <Progress
                  value={(plasticHabits.filter((h) => h.completed).length / plasticHabits.length) * 100}
                  className="h-2 bg-gray-100"
                  indicatorClassName="bg-green-600"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-600" />
                <CardTitle>Ahorro Energético</CardTitle>
              </div>
              <CardDescription>Marca los hábitos que ya has incorporado a tu rutina diaria.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {energyHabits.map((habit) => (
                  <div key={habit.id} className="flex items-center space-x-2">
                    <Checkbox id={habit.id} defaultChecked={habit.completed} />
                    <label
                      htmlFor={habit.id}
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        habit.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {habit.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progreso</span>
                  <span className="text-sm text-gray-500">
                    {energyHabits.filter((h) => h.completed).length}/{energyHabits.length} completados
                  </span>
                </div>
                <Progress
                  value={(energyHabits.filter((h) => h.completed).length / energyHabits.length) * 100}
                  className="h-2 bg-gray-100"
                  indicatorClassName="bg-green-600"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <CardTitle>Compostaje</CardTitle>
              </div>
              <CardDescription>Marca los hábitos que ya has incorporado a tu rutina diaria.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {compostHabits.map((habit) => (
                  <div key={habit.id} className="flex items-center space-x-2">
                    <Checkbox id={habit.id} defaultChecked={habit.completed} />
                    <label
                      htmlFor={habit.id}
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        habit.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {habit.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progreso</span>
                  <span className="text-sm text-gray-500">
                    {compostHabits.filter((h) => h.completed).length}/{compostHabits.length} completados
                  </span>
                </div>
                <Progress
                  value={(compostHabits.filter((h) => h.completed).length / compostHabits.length) * 100}
                  className="h-2 bg-gray-100"
                  indicatorClassName="bg-green-600"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <Link href="/recursos">
              <Button className="bg-green-600 hover:bg-green-700">
                Ver guías para implementar más hábitos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
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
              <HabitTracker />
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
                <CardTitle>Progreso Semanal</CardTitle>
              </div>
              <CardDescription>Visualiza tu avance en la adopción de ecohábitos semana a semana.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {weeklyProgress.map((week, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">{week.week}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {week.completed}/{week.total} hábitos
                      </span>
                    </div>
                    <Progress
                      value={(week.completed / week.total) * 100}
                      className="h-2 bg-gray-100"
                      indicatorClassName="bg-green-600"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold mb-2">Resumen del mes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Hábitos completados</p>
                    <p className="text-2xl font-bold text-green-600">35</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Progreso general</p>
                    <p className="text-2xl font-bold text-green-600">58%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Mejor categoría</p>
                    <p className="text-md font-medium">Ahorro Energético</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Área de mejora</p>
                    <p className="text-md font-medium">Compostaje</p>
                  </div>
                </div>
              </div>
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
    </div>
  )
}
