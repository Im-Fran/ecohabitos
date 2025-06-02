"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calculator, Leaf, Car, Home, Utensils, ArrowRight } from "lucide-react"

export default function CalculadoraHuella() {
  const [results, setResults] = useState(null)
  const [formData, setFormData] = useState({
    // Transporte
    carKm: "",
    carType: "",
    publicTransport: "",
    flights: "",
    
    // Hogar
    electricity: "",
    gas: "",
    heating: "",
    houseSize: "",
    
    // Alimentación
    diet: "",
    localFood: "",
    foodWaste: "",
    
    // Consumo
    shopping: "",
    recycling: "",
    water: "",
  })

  const calculateFootprint = () => {
    // Factores de emisión simplificados (kg CO2 por unidad)
    const factors = {
      car: {
        gasoline: 0.21,
        diesel: 0.17,
        hybrid: 0.12,
        electric: 0.05
      },
      electricity: 0.4, // kg CO2 por kWh
      gas: 2.0, // kg CO2 por m³
      flights: 0.25, // kg CO2 por km
      diet: {
        omnivore: 2.5,
        vegetarian: 1.7,
        vegan: 1.5,
        pescatarian: 2.0
      }
    }

    // Cálculos
    const carEmissions = (Number.parseFloat(formData.carKm) || 0) * 365 * (factors.car[formData.carType] || 0.21) / 1000
    const electricityEmissions = (Number.parseFloat(formData.electricity) || 0) * 12 * factors.electricity / 1000
    const gasEmissions = (Number.parseFloat(formData.gas) || 0) * 12 * factors.gas / 1000
    const flightEmissions = (Number.parseFloat(formData.flights) || 0) * factors.flights / 1000
    const dietEmissions = factors.diet[formData.diet] || 2.5
    
    const totalEmissions = carEmissions + electricityEmissions + gasEmissions + flightEmissions + dietEmissions

    // Clasificación
    let category = ""
    let color = ""
    if (totalEmissions < 4) {
      category = "Excelente"
      color = "text-green-600"
    } else if (totalEmissions < 8) {
      category = "Bueno"
      color = "text-yellow-600"
    } else if (totalEmissions < 12) {
      category = "Regular"
      color = "text-orange-600"
    } else {
      category = "Alto"
      color = "text-red-600"
    }

    setResults({
      total: totalEmissions.toFixed(2),
      breakdown: {
        transport: (carEmissions + flightEmissions).toFixed(2),
        home: (electricityEmissions + gasEmissions).toFixed(2),
        food: dietEmissions.toFixed(2)
      },
      category,
      color,
      recommendations: generateRecommendations(totalEmissions, formData)
    })
  }

  const generateRecommendations = (total, data) => {
    const recommendations = []
    
    if (Number.parseFloat(data.carKm) > 50) {
      recommendations.push({
        title: "Reduce el uso del automóvil",
        description: "Considera usar transporte público, bicicleta o caminar para trayectos cortos.",
        impact: "Hasta 2 toneladas CO2/año"
      })
    }
    
    if (Number.parseFloat(data.electricity) > 300) {
      recommendations.push({
        title: "Optimiza el consumo eléctrico",
        description: "Usa electrodomésticos eficientes y apaga dispositivos en standby.",
        impact: "Hasta 1.5 toneladas CO2/año"
      })
    }
    
    if (data.diet === "omnivore") {
      recommendations.push({
        title: "Reduce el consumo de carne",
        description: "Intenta tener días sin carne o adopta una dieta más basada en plantas.",
        impact: "Hasta 1 tonelada CO2/año"
      })
    }
    
    if (Number.parseFloat(data.flights) > 5000) {
      recommendations.push({
        title: "Compensa tus vuelos",
        description: "Considera alternativas locales para vacaciones o compensa las emisiones.",
        impact: "Variable según destino"
      })
    }

    return recommendations
  }

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <Calculator className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calculadora de Huella Ecológica</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Mide tu impacto ambiental personal y descubre cómo reducir tu huella de carbono.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle>Calcula tu huella de carbono</CardTitle>
            <CardDescription>
              Completa la información sobre tus hábitos diarios para obtener una estimación de tu impacto ambiental.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="transport" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="transport">
                  <Car className="h-4 w-4 mr-1" />
                  Transporte
                </TabsTrigger>
                <TabsTrigger value="home">
                  <Home className="h-4 w-4 mr-1" />
                  Hogar
                </TabsTrigger>
                <TabsTrigger value="food">
                  <Utensils className="h-4 w-4 mr-1" />
                  Alimentación
                </TabsTrigger>
                <TabsTrigger value="consumption">
                  <Leaf className="h-4 w-4 mr-1" />
                  Consumo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transport" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="carKm">Kilómetros en automóvil por día</Label>
                  <Input
                    id="carKm"
                    type="number"
                    placeholder="Ej: 30"
                    value={formData.carKm}
                    onChange={(e) => updateFormData("carKm", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carType">Tipo de vehículo</Label>
                  <Select value={formData.carType} onValueChange={(value) => updateFormData("carType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gasoline">Gasolina</SelectItem>
                      <SelectItem value="diesel">Diésel</SelectItem>
                      <SelectItem value="hybrid">Híbrido</SelectItem>
                      <SelectItem value="electric">Eléctrico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="flights">Kilómetros en avión por año</Label>
                  <Input
                    id="flights"
                    type="number"
                    placeholder="Ej: 5000"
                    value={formData.flights}
                    onChange={(e) => updateFormData("flights", e.target.value)}
                  />
                </div>
              </TabsContent>

              <TabsContent value="home" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="electricity">Consumo eléctrico mensual (kWh)</Label>
                  <Input
                    id="electricity"
                    type="number"
                    placeholder="Ej: 250"
                    value={formData.electricity}
                    onChange={(e) => updateFormData("electricity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gas">Consumo de gas mensual (m³)</Label>
                  <Input
                    id="gas"
                    type="number"
                    placeholder="Ej: 50"
                    value={formData.gas}
                    onChange={(e) => updateFormData("gas", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="houseSize">Tamaño de la vivienda</Label>
                  <Select value={formData.houseSize} onValueChange={(value) => updateFormData("houseSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tamaño" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Pequeña (&gt; 80m²)</SelectItem>\
                      <SelectItem value="medium">Mediana (80-150m²)</SelectItem>
                      <SelectItem value="large">Grande (&lt; 150m²)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="food" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="diet">Tipo de dieta</Label>
                  <Select value={formData.diet} onValueChange={(value) => updateFormData("diet", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu dieta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="omnivore">Omnívora</SelectItem>
                      <SelectItem value="vegetarian">Vegetariana</SelectItem>
                      <SelectItem value="vegan">Vegana</SelectItem>
                      <SelectItem value="pescatarian">Pescetariana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="localFood">¿Compras alimentos locales?</Label>
                  <Select value={formData.localFood} onValueChange={(value) => updateFormData("localFood", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="always">Siempre</SelectItem>
                      <SelectItem value="often">Frecuentemente</SelectItem>
                      <SelectItem value="sometimes">A veces</SelectItem>
                      <SelectItem value="never">Nunca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="consumption" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recycling">¿Reciclas regularmente?</Label>
                  <Select value={formData.recycling} onValueChange={(value) => updateFormData("recycling", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Frecuencia de reciclaje" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="always">Siempre</SelectItem>
                      <SelectItem value="often">Frecuentemente</SelectItem>
                      <SelectItem value="sometimes">A veces</SelectItem>
                      <SelectItem value="never">Nunca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shopping">Frecuencia de compras nuevas</Label>
                  <Select value={formData.shopping} onValueChange={(value) => updateFormData("shopping", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Con qué frecuencia compras?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Mínimas (solo necesario)</SelectItem>
                      <SelectItem value="moderate">Moderadas</SelectItem>
                      <SelectItem value="frequent">Frecuentes</SelectItem>
                      <SelectItem value="excessive">Excesivas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={calculateFootprint} className="w-full bg-green-600 hover:bg-green-700">
              Calcular mi huella ecológica
              <Calculator className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {results && (
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Tus resultados</CardTitle>
              <CardDescription>Tu huella de carbono anual estimada</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{results.total}</div>
                <div className="text-lg text-gray-500">toneladas CO₂ por año</div>
                <div className={`text-lg font-medium ${results.color} mt-2`}>
                  Categoría: {results.category}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Desglose por categoría:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Transporte</span>
                    <span className="text-sm font-medium">{results.breakdown.transport} t CO₂</span>
                  </div>
                  <Progress 
                    value={(Number.parseFloat(results.breakdown.transport) / Number.parseFloat(results.total)) * 100} 
                    className="h-2"
                  />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Hogar</span>
                    <span className="text-sm font-medium">{results.breakdown.home} t CO₂</span>
                  </div>
                  <Progress 
                    value={(Number.parseFloat(results.breakdown.home) / Number.parseFloat(results.total)) * 100} 
                    className="h-2"
                  />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Alimentación</span>
                    <span className="text-sm font-medium">{results.breakdown.food} t CO₂</span>
                  </div>
                  <Progress 
                    value={(Number.parseFloat(results.breakdown.food) / Number.parseFloat(results.total)) * 100} 
                    className="h-2"
                  />
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Recomendaciones personalizadas:</h3>
                <div className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="border-l-4 border-green-600 pl-3">
                      <h4 className="font-medium text-sm">{rec.title}</h4>
                      <p className="text-xs text-gray-600">{rec.description}</p>
                      <p className="text-xs text-green-600 font-medium">Ahorro: {rec.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>Promedio mundial: ~4.8 toneladas CO₂/año</p>
                <p>Meta climática: 2.3 toneladas CO₂/año para 2030</p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" onClick={() => setResults(null)}>
                Calcular de nuevo
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Ver ecohábitos recomendados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>

      <div className="mt-16 p-8 bg-green-50 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">¿Quieres reducir tu huella?</h2>
            <p className="text-gray-500">
              Descubre nuestros ecohábitos y únete a los retos semanales para hacer la diferencia.
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-green-600 hover:bg-green-700">Ver ecohábitos</Button>
            <Button variant="outline">Unirme a retos</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
