"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Sprout, Sun, Droplets, Calendar, MapPin, Download } from "lucide-react"

export default function PlanificadorHuerto() {
  const [gardenPlan, setGardenPlan] = useState(null)
  const [formData, setFormData] = useState({
    spaceType: "",
    spaceSize: "",
    sunlight: "",
    climate: "",
    experience: "",
    season: "",
    preferences: [],
  })

  const vegetables = {
    easy: [
      { name: "Lechuga", season: "todo-año", space: "pequeño", sunlight: "parcial", days: "45-60" },
      { name: "Rábanos", season: "otoño-invierno", space: "pequeño", sunlight: "parcial", days: "25-30" },
      { name: "Espinaca", season: "otoño-invierno", space: "pequeño", sunlight: "parcial", days: "40-50" },
      { name: "Perejil", season: "todo-año", space: "pequeño", sunlight: "parcial", days: "70-90" },
      { name: "Cilantro", season: "todo-año", space: "pequeño", sunlight: "parcial", days: "40-55" },
    ],
    medium: [
      { name: "Tomates Cherry", season: "primavera-verano", space: "mediano", sunlight: "pleno", days: "60-80" },
      { name: "Pimientos", season: "primavera-verano", space: "mediano", sunlight: "pleno", days: "70-90" },
      { name: "Zanahorias", season: "otoño-invierno", space: "mediano", sunlight: "pleno", days: "70-80" },
      { name: "Brócoli", season: "otoño-invierno", space: "mediano", sunlight: "pleno", days: "80-100" },
      { name: "Acelga", season: "todo-año", space: "mediano", sunlight: "parcial", days: "50-60" },
    ],
    advanced: [
      { name: "Tomates grandes", season: "primavera-verano", space: "grande", sunlight: "pleno", days: "80-100" },
      { name: "Berenjenas", season: "primavera-verano", space: "grande", sunlight: "pleno", days: "80-100" },
      { name: "Calabacines", season: "primavera-verano", space: "grande", sunlight: "pleno", days: "50-65" },
      { name: "Pepinos", season: "primavera-verano", space: "grande", sunlight: "pleno", days: "50-70" },
      { name: "Apio", season: "otoño-invierno", space: "mediano", sunlight: "parcial", days: "100-120" },
    ],
  }

  const generatePlan = () => {
    const { spaceType, spaceSize, sunlight, experience, season } = formData

    let recommendedVegetables = []
    const difficultyLevel = experience || "easy"

    // Filtrar vegetales según experiencia
    const availableVegetables = vegetables[difficultyLevel] || vegetables.easy

    // Filtrar por temporada y condiciones
    recommendedVegetables = availableVegetables.filter((veg) => {
      const seasonMatch = veg.season === "todo-año" || veg.season === season
      const sunlightMatch = sunlight === "pleno" || veg.sunlight === "parcial"
      const spaceMatch =
        (spaceSize === "pequeño" && veg.space === "pequeño") ||
        (spaceSize === "mediano" && (veg.space === "pequeño" || veg.space === "mediano")) ||
        spaceSize === "grande"

      return seasonMatch && sunlightMatch && spaceMatch
    })

    // Limitar según el tamaño del espacio
    const maxVegetables = spaceSize === "pequeño" ? 3 : spaceSize === "mediano" ? 5 : 8
    recommendedVegetables = recommendedVegetables.slice(0, maxVegetables)

    const layout = generateLayout(spaceType, spaceSize, recommendedVegetables.length)
    const calendar = generateCalendar(recommendedVegetables, season)
    const tips = generateTips(spaceType, experience)

    setGardenPlan({
      vegetables: recommendedVegetables,
      layout,
      calendar,
      tips,
      spaceInfo: { type: spaceType, size: spaceSize, sunlight, experience },
    })
  }

  const generateLayout = (type, size, vegCount) => {
    const layouts = {
      balcon: {
        pequeño: "2x2 macetas en esquinas",
        mediano: "3x2 macetas + jardineras laterales",
        grande: "4x2 macetas + jardineras perimetrales",
      },
      terraza: {
        pequeño: "Mesa de cultivo central",
        mediano: "2 mesas de cultivo + macetas",
        grande: "3 mesas de cultivo + sistema vertical",
      },
      jardin: {
        pequeño: "Cantero de 2x1 metros",
        mediano: "2 canteros de 2x1.5 metros",
        grande: "3 canteros de 2x2 metros + compostador",
      },
    }

    return layouts[type]?.[size] || "Distribución personalizada según espacio"
  }

  const generateCalendar = (vegetables, season) => {
    const months = {
      "primavera-verano": ["Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero", "Febrero"],
      "otoño-invierno": ["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
      "todo-año": ["Todo el año"],
    }

    return vegetables.map((veg) => ({
      vegetable: veg.name,
      plantingTime: months[veg.season] || months["todo-año"],
      harvestTime: `${veg.days} días después de plantar`,
    }))
  }

  const generateTips = (spaceType, experience) => {
    const baseTips = [
      "Asegúrate de que las macetas tengan buen drenaje",
      "Riega preferiblemente en las mañanas o tardes",
      "Observa tus plantas diariamente para detectar problemas",
      "Usa compost casero para nutrir la tierra",
    ]

    const spaceTips = {
      balcon: ["Protege las plantas del viento fuerte", "Considera el peso de las macetas"],
      terraza: ["Aprovecha las paredes para plantas trepadoras", "Crea sombra parcial si es necesario"],
      jardin: ["Prepara bien el suelo antes de plantar", "Considera la rotación de cultivos"],
    }

    const experienceTips = {
      principiante: ["Comienza con pocas variedades", "Lleva un diario de tu huerto"],
      intermedio: ["Experimenta con asociaciones de cultivos", "Prueba técnicas de poda"],
      avanzado: ["Implementa sistemas de riego automático", "Experimenta con variedades autóctonas"],
    }

    return [...baseTips, ...(spaceTips[spaceType] || []), ...(experienceTips[experience] || [])]
  }

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const togglePreference = (preference) => {
    setFormData((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter((p) => p !== preference)
        : [...prev.preferences, preference],
    }))
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <Sprout className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planificador de Huerto Urbano</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Diseña tu propio huerto urbano según tu espacio disponible, experiencia y condiciones climáticas.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle>Configura tu huerto</CardTitle>
            <CardDescription>
              Completa la información sobre tu espacio y preferencias para recibir un plan personalizado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="space" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="space">
                  <MapPin className="h-4 w-4 mr-1" />
                  Espacio
                </TabsTrigger>
                <TabsTrigger value="conditions">
                  <Sun className="h-4 w-4 mr-1" />
                  Condiciones
                </TabsTrigger>
                <TabsTrigger value="preferences">
                  <Sprout className="h-4 w-4 mr-1" />
                  Preferencias
                </TabsTrigger>
              </TabsList>

              <TabsContent value="space" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="spaceType">Tipo de espacio</Label>
                  <Select value={formData.spaceType} onValueChange={(value) => updateFormData("spaceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu espacio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="balcon">Balcón</SelectItem>
                      <SelectItem value="terraza">Terraza</SelectItem>
                      <SelectItem value="jardin">Jardín</SelectItem>
                      <SelectItem value="interior">Interior (ventanas)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="spaceSize">Tamaño del espacio</Label>
                  <Select value={formData.spaceSize} onValueChange={(value) => updateFormData("spaceSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tamaño" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pequeño">Pequeño (&lt; 2m²)</SelectItem>
                      <SelectItem value="mediano">Mediano (2-6m²)</SelectItem>
                      <SelectItem value="grande">Grande (&gt; 6m²)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="conditions" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sunlight">Horas de sol directo</Label>
                  <Select value={formData.sunlight} onValueChange={(value) => updateFormData("sunlight", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona las horas de sol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="poco">Poco sol (&lt; 4 horas)</SelectItem>
                      <SelectItem value="parcial">Sol parcial (4-6 horas)</SelectItem>
                      <SelectItem value="pleno">Sol pleno (&gt; 6 horas)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="climate">Clima de tu región</Label>
                  <Select value={formData.climate} onValueChange={(value) => updateFormData("climate", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu clima" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="templado">Templado</SelectItem>
                      <SelectItem value="mediterraneo">Mediterráneo</SelectItem>
                      <SelectItem value="subtropical">Subtropical</SelectItem>
                      <SelectItem value="desertico">Desértico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="season">Temporada actual</Label>
                  <Select value={formData.season} onValueChange={(value) => updateFormData("season", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la temporada" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primavera-verano">Primavera-Verano</SelectItem>
                      <SelectItem value="otoño-invierno">Otoño-Invierno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Nivel de experiencia</Label>
                  <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Principiante</SelectItem>
                      <SelectItem value="medium">Intermedio</SelectItem>
                      <SelectItem value="advanced">Avanzado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label>Preferencias de cultivo (opcional)</Label>
                  {["Orgánico", "Aromáticas", "Medicinal", "Decorativo", "Comestible"].map((pref) => (
                    <div key={pref} className="flex items-center space-x-2">
                      <Checkbox
                        id={pref}
                        checked={formData.preferences.includes(pref)}
                        onCheckedChange={() => togglePreference(pref)}
                      />
                      <Label htmlFor={pref} className="text-sm">
                        {pref}
                      </Label>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button
              onClick={generatePlan}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!formData.spaceType || !formData.spaceSize || !formData.sunlight || !formData.season}
            >
              Generar plan de huerto
              <Sprout className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {gardenPlan && (
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Tu plan personalizado</CardTitle>
              <CardDescription>
                Plan diseñado para {gardenPlan.spaceInfo.type} {gardenPlan.spaceInfo.size}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-green-600" />
                  Vegetales recomendados
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {gardenPlan.vegetables.map((veg, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 justify-start">
                      {veg.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  Distribución sugerida
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm">{gardenPlan.layout}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  Calendario de siembra
                </h3>
                <div className="space-y-2">
                  {gardenPlan.calendar.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="font-medium">{item.vegetable}</span>
                      <span className="text-gray-500">{item.harvestTime}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-green-600" />
                  Consejos personalizados
                </h3>
                <ul className="space-y-1">
                  {gardenPlan.tips.slice(0, 4).map((tip, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" onClick={() => setGardenPlan(null)}>
                Nuevo plan
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="mr-2 h-4 w-4" />
                Descargar plan
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-lg">Beneficios del huerto urbano</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                Alimentos frescos y sin químicos
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                Reducción de la huella de carbono
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                Actividad relajante y terapéutica
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600" />
                Ahorro en la compra de vegetales
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-lg">Materiales básicos</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <ul className="space-y-2">
              <li>• Macetas o contenedores con drenaje</li>
              <li>• Tierra de buena calidad</li>
              <li>• Semillas o plantines</li>
              <li>• Regadera o sistema de riego</li>
              <li>• Herramientas básicas de jardinería</li>
              <li>• Compost o fertilizante orgánico</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-lg">Recursos adicionales</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                📖 Guía de compostaje casero
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                🌱 Calendario de siembras
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                🐛 Guía de plagas y enfermedades
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
