import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import produto from "../../asstes/produto teste.jpeg";

export function Carts() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-center font-bold text-3xl mb-6">Seu Carrinho!</h2>

      <section className="flex items-center justify-between border rounded-lg p-4 gap-4 shadow-sm mb-4">
        <div className="flex items-center gap-4">
          <img
            src={produto}
            alt="Logo Produto"
            className="w-20 h-20 object-cover rounded-md"
          />
          <span className="font-medium text-gray-700">Nome do Produto</span>
        </div>

        <div className="flex items-center gap-3 border rounded-full px-3 py-1">
          <button className="text-gray-500 hover:text-black transition">
            <FiMinus size={16} />
          </button>
          <span className="w-5 text-center font-medium">2</span>
          <button className="text-gray-500 hover:text-black transition">
            <FiPlus size={16} />
          </button>
        </div>

        <strong className="text-gray-800 text-lg">R$ 1.000,50</strong>

        <button className="text-red-400 hover:text-red-600 transition">
          <FiTrash2 size={20} />
        </button>
      </section>
      <span className=" font-medium ">TOTAL: R$ 1.800,00</span>
    </div>
  );
}
