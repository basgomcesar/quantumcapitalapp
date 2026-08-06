import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoansSummaryCard({ creditos }) {
  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Resumen de créditos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SummaryCounters creditos={creditos} />
        <RecentMovements creditos={creditos} />
      </CardContent>
    </Card>
  );
}

function SummaryCounters({ creditos }) {
  const corriente = creditos.filter(c => c.idEstadoCredito === 1).length;
  const atrasado = creditos.filter(c => c.idEstadoCredito === 2).length;
  const sinRecuperar = creditos.filter(c => c.idEstadoCredito === 3).length;
  const cerrado = creditos.filter(c => c.idEstadoCredito === 4).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="text-2xl font-bold text-blue-600">{corriente}</div>
        <div className="text-sm text-gray-600">Créditos corrientes</div>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <div className="text-2xl font-bold text-green-600">{atrasado}</div>
        <div className="text-sm text-gray-600">Créditos atrasados</div>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <div className="text-2xl font-bold text-yellow-600">{sinRecuperar}</div>
        <div className="text-sm text-gray-600">Créditos sin recuperar</div>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <div className="text-2xl font-bold text-red-600">{cerrado}</div>
        <div className="text-sm text-gray-600">Créditos cerrados</div>
      </div>
    </div>
  );
}


function RecentMovements({ creditos }) {
  const movements = creditos.map((credito) => ({
    institution: "#"+ credito.id,
    type: credito.idEstadoCredito == "1" ? "Crédito corriente" :
           credito.idEstadoCredito == "2" ? "Crédito atrasado" :
           credito.idEstadoCredito == "3" ? "Crédito sin recuperar" :
           credito.idEstadoCredito == "4" ? "Crédito cerrado" : 
           "Desconocido",
    amount: `$${credito.montoPrestado.toLocaleString()}`,
    status: credito.estadoCredito,
    statusColor: credito.idEstadoCredito ===  "1" ? "text-green-600" :
                 credito.idEstadoCredito === "2" ? "text-yellow-600" : 
                 credito.idEstadoCredito === "3" ? "text-red-600" :
                 credito.idEstadoCredito === "4" ? "text-gray-600" :
                 "text-gray-400",
    pendingAmount: `$${credito.saldoPendiente.toLocaleString()}`,
  }));

  return (
    <div className="border-t pt-4">
      <h4 className="font-semibold text-gray-800 mb-3">Últimos movimientos</h4>
      <div className="space-y-2">
        {movements.map((movement, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
              <div className="font-medium">{movement.institution}</div>
              <div className="text-sm text-gray-600">{movement.type}</div>
            </div>
            <div className="text-right">
              <div className="font-medium">{movement.amount}</div>
              <div className={`text-sm ${movement.statusColor}`}>{movement.status}</div>
              <div className="text-sm text-gray-500">Pendiente: {movement.pendingAmount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}