"use client"

import React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ReportSection from "@/components/ReportSection"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, TrendingUp, FileText } from "lucide-react"

const carouselItems = [
  {
    title: "Conoce tu historial",
    description: "Accede fácilmente a tu historial crediticio, identifica áreas de mejora y mantente informado.",
    icon: FileText,
  },
  {
    title: "Descubre tu scoring",
    description:
      "Consulta tu puntaje crediticio en tiempo real y aprende cómo influye en tus oportunidades financieras.",
    icon: TrendingUp,
  },
  {
    title: "Mejora tu perfil financiero",
    description:
      "Obtén consejos y herramientas personalizadas para optimizar tu salud financiera y aumentar tu scoring.",
    icon: CreditCard,
  },
]

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-br from-background to-muted min-h-screen">
      {/* Header animado */}
      <motion.section
        className="w-full max-w-4xl text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold text-foreground mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bienvenido a{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Quantum Capital
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Quantum Capital es un programa que te ayuda a conocer y entender tu historial crediticio. Descubre tu{" "}
          <strong className="text-primary">scoring</strong>, mejora tus finanzas personales y toma decisiones más
          inteligentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        </motion.div>
      </motion.section>

      {/* Carrusel automático */}
      <motion.section
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="relative">
          {/* Contenido del carrusel */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-card rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                {React.createElement(carouselItems[currentSlide].icon, { className: "w-8 h-8 text-primary-foreground" })}
              </div>

              <h2 className="text-2xl font-semibold text-foreground mb-2">{carouselItems[currentSlide].title}</h2>

              <p className="text-muted-foreground">{carouselItems[currentSlide].description}</p>
            </motion.div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-6">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-8" : "bg-muted hover:bg-accent"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sección de características */}
      <motion.section
        className="w-full max-w-4xl mt-16 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-secondary/20 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Consulta Rápida</h3>
              <p className="text-sm text-muted-foreground">Obtén tu reporte en minutos</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Análisis Detallado</h3>
              <p className="text-sm text-muted-foreground">Comprende tu situación crediticia</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mejora Continua</h3>
              <p className="text-sm text-muted-foreground">Recibe consejos personalizados</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </main>
  )
}