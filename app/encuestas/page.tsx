"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { ClipboardList, Award, ArrowRight } from "lucide-react"

export default function Encuestas() {
  const [currentSurvey, setCurrentSurvey] = useState("inicial")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [surveyCompleted, setSurveyCompleted] = useState(false)

  const initialSurvey = {
    title: "Encuesta Inicial - Conciencia Ambiental",
    description: "Ayúdanos a conocer tu nivel actual de conciencia ambiental y hábitos sostenibles",
    questions: [
      {
        id: "q1",
        type: "radio",
        question: "¿Qué tan preocupado/a te sientes por el cambio climático?",
        options: [
          { value: "1", label: "Nada preocupado/a" },
          { value: "2", label: "Poco preocupado/a" },
          { value: "3", label: "Moderadamente preocupado/a" },
          { value: "4", label: "Muy preocupado/a" },
          { value: "5", label: "Extremadamente preocupado/a" },
        ],
      },
      {
        id: "q2",
        type: "radio",
        question: "¿Con qué frecuencia utilizas productos reutilizables (botellas, bolsas, etc.)?",
        options: [
          { value: "1", label: "Nunca" },
          { value: "2", label: "Raramente" },
          { value: "3", label: "A veces" },
          { value: "4", label: "Frecuentemente" },
          { value: "5", label: "Siempre" },
        ],
      },
      {
        id: "q3",
        type: "radio",
        question: "¿Separas tus residuos para reciclaje?",
        options: [
          { value: "1", label: "Nunca" },
          { value: "2", label: "Raramente" },
          { value: "3", label: "A veces" },
          { value: "4", label: "Frecuentemente" },
          { value: "5", label: "Siempre" },
        ],
      },
      {
        id: "q4",
        type: "radio",
        question: "¿Qué tan consciente eres del consumo de energía en tu hogar?",
        options: [
          { value: "1", label: "Nada consciente" },
          { value: "2", label: "Poco consciente" },
          { value: "3", label: "Moderadamente consciente" },
          { value: "4", label: "Muy consciente" },
          { value: "5", label: "Extremadamente consciente" },
        ],
      },
      {
        id: "q5",
        type: "radio",
        question: "¿Has participado anteriormente en actividades ambientales?",
        options: [
          { value: "1", label: "Nunca" },
          { value: "2", label: "Una vez" },
          { value: "3", label: "Pocas veces" },
          { value: "4", label: "Varias veces" },
          { value: "5", label: "Regularmente" },
        ],
      },
      {
        id: "q6",
        type: "textarea",
        question: "¿Qué te motiva más a adoptar hábitos sostenibles?",
        placeholder: "Comparte tus motivaciones...",
      },
    ],
  }

  const followUpSurvey = {
    title: "Encuesta de Seguimiento - Progreso Ambiental",
    description: "Evalúa tu progreso después de usar nuestra plataforma",
    questions: [
      {
        id: "f1",
        type: "radio",
        question: "Después de usar nuestra plataforma, ¿cómo ha cambiado tu preocupación por el medio ambiente?",
        options: [
          { value: "1", label: "Ha disminuido mucho" },
          { value: "2", label: "Ha disminuido un poco" },
          { value: "3", label: "Se mantiene igual" },
          { value: "4", label: "Ha aumentado un poco" },
          { value: "5", label: "Ha aumentado mucho" },
        ],
      },
      {
        id: "f2",
        type: "radio",
        question: "¿Cuántos nuevos ecohábitos has implementado desde que usas la plataforma?",
        options: [
          { value: "1", label: "Ninguno" },
          { value: "2", label: "1-2 hábitos" },
          { value: "3", label: "3-4 hábitos" },
          { value: "4", label: "5-6 hábitos" },
          { value: "5", label: "Más de 6 hábitos" },
        ],
      },
      {
        id: "f3",
        type: "radio",
        question: "¿Qué tan útiles han sido los recursos de la plataforma?",
        options: [
          { value: "1", label: "Nada útiles" },
          { value: "2", label: "Poco útiles" },
          { value: "3", label: "Moderadamente útiles" },
          { value: "4", label: "Muy útiles" },
          { value: "5", label: "Extremadamente útiles" },
        ],
      },
      {
        id: "f4",
        type: "radio",
        question: "¿Has compartido conocimientos sobre ecohábitos con otros?",
        options: [
          { value: "1", label: "Nunca" },
          { value: "2", label: "Una vez" },
          { value: "3", label: "Pocas veces" },
          { value: "4", label: "Varias veces" },
          { value: "5", label: "Frecuentemente" },
        ],
      },
      {
        id: "f5",
        type: "radio",
        question: "¿Qué tan probable es que recomiendes esta plataforma a otros jóvenes?",
        options: [
          { value: "1", label: "Nada probable" },
          { value: "2", label: "Poco probable" },
          { value: "3", label: "Moderadamente probable" },
          { value: "4", label: "Muy probable" },
          { value: "5", label: "Extremadamente probable" },
        ],
      },
      {
        id: "f6",
        type: "textarea",
        question: "¿Qué aspecto de la plataforma te ha resultado más valioso?",
        placeholder: "Comparte tu experiencia...",
      },
    ],
  }

  const surveys = {
    inicial: initialSurvey,
    seguimiento: followUpSurvey,
  }

  const currentSurveyData = surveys[currentSurvey]
  const totalQuestions = currentSurveyData.questions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setSurveyCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetSurvey = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setSurveyCompleted(false)
  }

  const switchSurvey = (surveyType) => {
    setCurrentSurvey(surveyType)
    resetSurvey()
  }

  const currentQuestionData = currentSurveyData.questions[currentQuestion]

  if (surveyCompleted) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block rounded-full bg-green-100 p-3 mb-6">
            <Award className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">¡Encuesta Completada!</h1>
          <p className="text-gray-500 mb-8">
            Gracias por completar la encuesta. Tus respuestas nos ayudan a mejorar la plataforma y medir el impacto de
            los ecohábitos en la comunidad.
          </p>
          <div className="space-y-4">
            <Button onClick={resetSurvey} className="bg-green-600 hover:bg-green-700">
              Realizar otra encuesta
            </Button>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => (window.location.href = "/seguimiento")}>
                Ver mi progreso
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/comunidad")}>
                Ir a la comunidad
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-full bg-green-100 p-2">
          <ClipboardList className="h-6 w-6 text-green-600" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Encuestas de Conciencia Ambiental</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ayúdanos a medir el impacto de los ecohábitos en tu vida y en nuestra comunidad.
          </p>
        </div>
      </div>

      <Tabs value={currentSurvey} onValueChange={switchSurvey} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="inicial">Encuesta Inicial</TabsTrigger>
          <TabsTrigger value="seguimiento">Encuesta de Seguimiento</TabsTrigger>
        </TabsList>

        <TabsContent value={currentSurvey}>
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>{currentSurveyData.title}</CardTitle>
              <CardDescription>{currentSurveyData.description}</CardDescription>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    Pregunta {currentQuestion + 1} de {totalQuestions}
                  </span>
                  <span>{Math.round(progress)}% completado</span>
                </div>
                <Progress value={progress} className="h-2 bg-gray-100" indicatorClassName="bg-green-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{currentQuestionData.question}</h3>

                {currentQuestionData.type === "radio" && (
                  <RadioGroup
                    value={answers[currentQuestionData.id] || ""}
                    onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
                  >
                    {currentQuestionData.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {currentQuestionData.type === "textarea" && (
                  <Textarea
                    placeholder={currentQuestionData.placeholder}
                    value={answers[currentQuestionData.id] || ""}
                    onChange={(e) => handleAnswer(currentQuestionData.id, e.target.value)}
                    rows={4}
                  />
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                Anterior
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestionData.id]}
                className="bg-green-600 hover:bg-green-700"
              >
                {currentQuestion === totalQuestions - 1 ? "Finalizar" : "Siguiente"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
