import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScoringCard() {
  return (
    <Card className="shadow-sm md:col-span-1 card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Scoring
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-8">
        <div className="text-4xl font-bold text-purple-600 mb-2">300</div>
        <div className="text-red-600 font-semibold mb-1">Calificacion mala</div>
        <div className="text-gray-600 text-sm">Puntaje crediticio</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
}