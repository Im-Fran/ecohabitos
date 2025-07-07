"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, Navigation, Clock, Phone, Filter } from "lucide-react"

export default function MapaReciclaje() {
  const [searchLocation, setSearchLocation] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const recyclingPoints = [
    {
      id: 1,
      name: "Centro de Reciclaje Municipal",
      address: "Av. Principal 123, Centro",
      distance: "0.8 km",
      types: ["papel", "plastico", "vidrio", "metal", "electronico"],
      hours: "Lun-Vie: 8:00-18:00, Sáb: 9:00-14:00",
      phone: "+56 2 1234 5678",
      verified: true,
    },
    {
      id: 2,
      name: "Punto Verde Supermercado",
      address: "Mall Plaza Norte, Local 45",
      distance: "1.2 km",
      types: ["papel", "plastico", "vidrio"],
      hours: "Lun-Dom: 10:00-22:00",
      phone: "+56 2 8765 4321",
      verified: true,
    },
    {
      id: 3,
      name: "Reciclaje Electrónicos TechGreen",
      address: "Calle Tecnología 456",
      distance: "2.1 km",
      types: ["electronico", "baterias"],
      hours: "Lun-Vie: 9:00-17:00",
      phone: "+56 2 5555 0123",
      verified: false,
    },
    {
      id: 4,
      name: "Contenedores Comunitarios Parque Central",
      address: "Parque Central, Sector Norte",
      distance: "1.5 km",
      types: ["papel", "plastico", "vidrio"],
      hours: "24 horas",
      phone: "N/A",
      verified: true,
    },
    {
      id: 5,
      name: "Centro de Acopio Textil",
      address: "Av. Moda 789",
      distance: "3.2 km",
      types: ["textil", "ropa"],
      hours: "Mar-Sáb: 10:00-19:00",
      phone: "+56 2 9999 8888",
      verified: true,
    },
    {
      id: 6,
      name: "Punto de Reciclaje Aceite Usado",
      address: "Estación de Servicio EcoFuel",
      distance: "2.8 km",
      types: ["aceite", "lubricantes"],
      hours: "Lun-Dom: 6:00-23:00",
      phone: "+56 2 7777 6666",
      verified: true,
    },
  ]

  const materialTypes = {
    papel: { label: "Papel y Cartón", color: "bg-blue-100 text-blue-800", icon: "📄" },
    plastico: { label: "Plástico", color: "bg-yellow-100 text-yellow-800", icon: "🥤" },
    vidrio: { label: "Vidrio", color: "bg-green-100 text-green-800", icon: "🍾" },
    metal: { label: "Metal", color: "bg-gray-100 text-gray-800", icon: "🥫" },
    electronico: { label: "Electrónicos", color: "bg-purple-100 text-purple-800", icon: "📱" },
    baterias: { label: "Baterías", color: "bg-red-100 text-red-800", icon: "🔋" },
    textil: { label: "Textiles", color: "bg-pink-100 text-pink-800", icon: "👕" },
    ropa: { label: "Ropa", color: "bg-indigo-100 text-indigo-800", icon: "👔" },
    aceite: { label: "Aceite Usado", color: "bg-orange-100 text-orange-800", icon: "🛢️" },
    lubricantes: { label: "Lubricantes", color: "bg-amber-100 text-amber-800", icon: "⚙️" },
  }

  const filteredPoints =
    selectedFilter === "all" ? recyclingPoints : recyclingPoints.filter((point) => point.types.includes(selectedFilter))

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <MapPin className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mapa de Puntos de Reciclaje</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Encuentra los puntos de reciclaje más cercanos a tu ubicación para diferentes tipos de materiales.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Mapa Mockup */}
        <div className="lg:col-span-2">
          <Card className="border-green-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Mapa Interactivo</CardTitle>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Mi ubicación
                </Button>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar dirección..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Mockup del mapa */}
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                  {/* Simulación de calles */}
                  <div className="absolute top-20 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-40 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-60 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-20 w-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-40 w-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-60 w-1 bg-gray-300"></div>

                  {/* Marcadores de puntos de reciclaje */}
                  <div className="absolute top-16 left-16 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="absolute top-36 left-36 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="absolute top-56 left-56 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="absolute top-32 left-48 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="absolute top-72 left-24 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                    5
                  </div>
                  <div className="absolute top-64 left-64 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                    6
                  </div>

                  {/* Marcador de ubicación actual */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full opacity-30 animate-ping"></div>
                  </div>
                </div>

                {/* Leyenda */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <div className="text-xs font-medium mb-2">Leyenda</div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span>Puntos de reciclaje</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span>Tu ubicación</span>
                  </div>
                </div>

                {/* Controles de zoom */}
                <div className="absolute top-4 right-4 flex flex-col gap-1">
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                    +
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                    -
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de puntos */}
        <div className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtrar por material
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedFilter} onValueChange={setSelectedFilter}>
                <TabsList className="grid grid-cols-2 gap-1 h-auto p-1">
                  <TabsTrigger value="all" className="text-xs">
                    Todos
                  </TabsTrigger>
                  <TabsTrigger value="papel" className="text-xs">
                    Papel
                  </TabsTrigger>
                  <TabsTrigger value="plastico" className="text-xs">
                    Plástico
                  </TabsTrigger>
                  <TabsTrigger value="vidrio" className="text-xs">
                    Vidrio
                  </TabsTrigger>
                  <TabsTrigger value="electronico" className="text-xs">
                    Electrónicos
                  </TabsTrigger>
                  <TabsTrigger value="textil" className="text-xs">
                    Textiles
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredPoints.map((point) => (
              <Card key={point.id} className="border-green-100 hover:shadow-md transition-all cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {point.name}
                        {point.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            Verificado
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {point.address}
                      </CardDescription>
                      <div className="text-sm text-green-600 font-medium mt-1">📍 {point.distance}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {point.types.map((type) => (
                      <Badge key={type} className={`text-xs ${materialTypes[type]?.color}`} variant="secondary">
                        {materialTypes[type]?.icon} {materialTypes[type]?.label}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {point.hours}
                    </div>
                    {point.phone !== "N/A" && (
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {point.phone}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Navigation className="h-3 w-3 mr-1" />
                      Cómo llegar
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                      Ver detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-lg">¿Cómo usar el mapa?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>Permite el acceso a tu ubicación o busca tu dirección</li>
              <li>Filtra por el tipo de material que quieres reciclar</li>
              <li>Selecciona el punto más cercano y conveniente</li>
              <li>Usa "Cómo llegar" para obtener direcciones</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-lg">Materiales aceptados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(materialTypes).map(([key, type]) => (
                <div key={key} className="flex items-center gap-1">
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-lg">¿Falta un punto?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <p className="mb-3">
              Ayúdanos a mantener actualizada la información reportando nuevos puntos de reciclaje.
            </p>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Reportar punto
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
