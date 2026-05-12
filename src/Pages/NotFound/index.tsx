import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <h2 className="text-3xl font-medium mb-4"> ERROR 404</h2>
      <p className="text-red-600 font-bold text-xl mb-2">
        Página não encontrada
      </p>
      <Link
        className="border bg-green-600 font-bold text-lg rounded  p-2.5 hover:bg-green-700 hover:text-gray-300 cursor-pointer"
        to="/"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
