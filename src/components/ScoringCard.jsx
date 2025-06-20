import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function ScoringCard() {
  const [scoring, setScoring] = useState(null);
  const userId = Cookies.get("userId");
  useEffect(() => {
    async function fetchScoring() {
      try {
        const response = await fetch(
          `${BASE_URL}/CalificacionMensuals/score/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("authToken")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener el puntaje crediticio");
        }

        const data = await response.json();
        setScoring(data);
      } catch (error) {
        console.error("Error fetching scoring:", error);
      }
    }
    fetchScoring();
  }, [userId]);

  // Determinar el color según la categoría
  const getCategoriaColor = (categoria) => {
    switch (categoria) {
      case "Regular":
        return "text-yellow-500";
      case "Mala":
        return "text-red-600";
      case "Buena":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="shadow-sm md:col-span-1 card-gradient">
      <CardHeader className="">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Scoring
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
        <div className="text-gray-600 text-sm">Puntaje crediticio</div>
        <div className="text-4xl font-bold text-purple-600 mb-2">
          {scoring ? scoring.score : "Cargando..."}
        </div>
        <div
          className={`${getCategoriaColor(
            scoring ? scoring.categoria : ""
          )} font-semibold mb-1`}
        >
          Calificacion {scoring ? scoring.categoria : "Cargando..."}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${scoring ? scoring.score / 10 : 0}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
}
