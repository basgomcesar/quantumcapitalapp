# Quantum Capital – Plataforma de Gestión de Créditos

Este proyecto es una aplicación desarrollada con [Next.js](https://nextjs.org/) que permite la visualización, gestión y análisis de créditos y reclamos. Utiliza tecnologías modernas como Tailwind CSS, ShadCN UI, Framer Motion y componentes reutilizables optimizados para rendimiento y experiencia de usuario.

---

## 🧱 Tecnologías principales

- **Next.js 14** – Framework para React con soporte SSR y estructura modular.
- **Tailwind CSS** – Sistema de diseño utilitario para estilos personalizados.
- **ShadCN UI** – Componentes accesibles, estilizados y consistentes.
- **Framer Motion** – Animaciones fluidas y declarativas.
- **React Icons & Lucide** – Íconos modernos y minimalistas.
- **Cookies JS** – Gestión de autenticación basada en tokens.

---

## 🔧 Configuración de Git

Antes de ejecutar cualquier comando `git`, asegúrate de estar **dentro de un repositorio Git válido** (el directorio debe contener una carpeta `.git`).

### Opción A – Clonar el repositorio (recomendado)

```bash
git clone https://github.com/basgomcesar/quantumcapitalapp.git
cd quantumcapitalapp
```

Una vez dentro del directorio clonado, ya tienes el remote `origin` configurado. Si necesitas cambiarlo:

```bash
git remote set-url origin https://github.com/basgomcesar/quantumcapitalapp.git
```

### Opción B – Inicializar un repositorio nuevo en un directorio existente

Si tienes archivos locales que aún no están en Git, **primero inicializa el repositorio** y luego agrega el remote:

```bash
git init
git remote add origin https://github.com/basgomcesar/quantumcapitalapp.git
```

> ⚠️ **Error frecuente:** Si ves `fatal: not a git repository (or any of the parent directories): .git`, significa que el directorio donde ejecutas el comando **no ha sido inicializado como repositorio Git**. Navega al directorio correcto o ejecuta `git init` primero.

---

## 🚀 ¿Cómo iniciar el proyecto?

Primero, instala las dependencias y ejecuta el entorno de desarrollo:

```bash
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 📁 Estructura del proyecto

```
.
├── app/                     # Rutas y páginas (App Router)
│   ├── page.tsx            # Página de inicio
│   ├── logs/               # Página de bitácora
│   ├── loans/              # Página de historial crediticio
│   └── claims/             # Página de reclamos
├── components/             # Componentes reutilizables
├── hooks/                  # Hooks personalizados (useLoans, useUser, etc.)
├── lib/                    # Lógica de servicios (API, helpers)
├── styles/                 # Estilos globales
└── public/                 # Recursos estáticos
```

---

## ✨ Funcionalidades destacadas

- 📊 **Dashboard de usuario** con tarjetas de información, puntuación de riesgo y resumen de créditos.
- 🧾 **Bitácora de actividades** con tabla dinámica y carga con skeletons.
- 🏢 **Direcciones personales y laborales** organizadas en tarjetas visuales.
- 📁 **Descarga de reportes** personalizados en base al usuario y sus créditos.
- 💳 **Sistema de pago simulado** para habilitar la vista principal.

---

## 📦 Despliegue

Puedes desplegar esta aplicación fácilmente en [Vercel](https://vercel.com) con un solo clic:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📚 Recursos adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [ShadCN UI Docs](https://ui.shadcn.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 🧑‍💻 Autor

Desarrollado por el equipo de Quantum Capital  
**basgomcesar** – `cesarbasiliogomez@gmail.com`
**caixba**
**carlos**
**benjamin**