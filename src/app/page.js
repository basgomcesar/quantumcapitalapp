"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import {
  CreditCard,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function CreditConsultationLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const handleLogin = () => {
    // Redirect to login page
    router.push("/login")
  }

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Consulta Instantánea",
      description: "Obtén tu puntaje crediticio en tiempo real sin afectar tu historial",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Seguro",
      description: "Tus datos están protegidos con encriptación de nivel bancario",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Monitoreo 24/7",
      description: "Alertas automáticas sobre cambios en tu reporte crediticio",
    },
  ]

  const benefits = [
    "Acceso gratuito a tu score crediticio",
    "Análisis detallado de tu historial",
    "Simulador de préstamos personalizado",
    "Consejos de expertos financieros",
    "Comparador de productos crediticios",
    "Alertas de fraude y identidad",
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Empresaria",
      content:
        "Gracias a Quantum Capital pude mejorar mi score de 650 a 780 en solo 6 meses. Ahora tengo acceso a mejores tasas de interés.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Profesional",
      content:
        "La plataforma es muy fácil de usar y las recomendaciones son muy precisas. Logré obtener mi primer crédito hipotecario.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Estudiante",
      content:
        "Como estudiante, me ayudó a entender cómo funciona el crédito y a construir un buen historial desde temprano.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Quantum Capital</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleLogin}>
            Iniciar Sesión
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-accent/10 text-accent-foreground hover:bg-accent/20">✨ Consulta Gratuita Disponible</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Quantum Capital
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Quantum Capital es un programa que te ayuda a conocer y entender tu historial crediticio. Descubre tu{" "}
              <span className="font-semibold text-primary">scoring</span>, mejora tus finanzas personales y toma
              decisiones más inteligentes.
            </p> 
          </div>
        </div>
      </section>

      {/* Score Discovery Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Descubre tu scoring</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Consulta tu puntaje crediticio en tiempo real y aprende cómo influye en tus oportunidades financieras.
                Nuestro sistema te proporciona información detallada y actualizada.
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-2 border-muted hover:border-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">850</div>
                  <div className="text-sm text-muted-foreground">Score Promedio</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-2 border-muted hover:border-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="card-gradient rounded-2xl p-8 border border-primary/20">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold">
                    750
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Excelente</h3>
                  <p className="text-muted-foreground">
                    Tu score crediticio te permite acceder a las mejores ofertas del mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Herramientas completas para gestionar y mejorar tu salud financiera
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-gradient group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

 

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que dicen nuestros usuarios</h2>
            <p className="text-xl text-muted-foreground">Miles de personas han mejorado su vida financiera con nosotros</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient border-border shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-muted-foreground mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para mejorar tu futuro financiero?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya han transformado su vida financiera. Consulta tu score crediticio gratis y
            comienza tu camino hacia la libertad financiera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Ingresa tu email"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button className="bg-card text-foreground hover:bg-card/90">Comenzar Gratis</Button>
          </div>
          <p className="text-sm opacity-75 mt-4">Sin compromisos. Cancela cuando quieras.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Quantum Capital</span>
              </div>
              <p className="text-muted-foreground">Tu aliado para una mejor salud financiera y decisiones inteligentes.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Consulta de Score
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Monitoreo Crediticio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Simulador de Préstamos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Asesoría Financiera
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Quantum Capital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}