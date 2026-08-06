export default function ErrorState({ error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-red-600 text-xl font-semibold">
        Error al cargar los créditos: {error.message}
      </div>
    </div>
  );
}