import "./globals.css";

export const metadata = {
  title: "Quantum Capital",
  keywords: "Quantum Capital, créditos, finanzas, scoring, historial crediticio",
  authors: [{ name: "Quantum Capital Team", url: "https://quantumcapital.com" }],
  creator: "Quantum Capital",
  description: "Quantum Capital es un programa que te ayuda a conocer y entender tu historial crediticio.",
  openGraph: {
    title: "Quantum Capital",
    description: "Conoce y mejora tu historial crediticio con Quantum Capital.",
    url: "https://quantumcapital.com",
    siteName: "Quantum Capital",
    images: [
      {
        url: "https://quantumcapital.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quantum Capital - Mejora tu historial crediticio",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Capital",
    description: "Conoce y mejora tu historial crediticio con Quantum Capital.",
    images: ["https://quantumcapital.com/twitter-image.png"],
    creator: "@QuantumCapital",
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
