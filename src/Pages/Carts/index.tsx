import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

import { CartContext } from "../../Services/ContextApi";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Carts() {
  const { cart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      {cart.length === 0 ? (
        <div className="mx-auto flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Seu carrinho está vazio
          </h2>
          <Link
            to="/"
            className="text-blue-500 flex items-center justify-center font-medium hover:text-blue-700"
          >
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <h2 className="text-center font-bold text-3xl mb-6">Seu Carrinho!</h2>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border rounded-lg p-4 gap-4 shadow-sm mb-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.cover}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <span className="font-medium text-gray-700"> {item.title} </span>
          </div>

          <div className="flex items-center gap-3 border rounded-full px-3 py-1">
            <button className="text-gray-500 hover:text-black transition">
              <FiMinus size={16} />
            </button>
            <span className="w-5 text-center font-medium">{item.quantity}</span>
            <button className="text-gray-500 hover:text-black transition">
              <FiPlus size={16} />
            </button>
          </div>

          <strong className="text-gray-800 text-lg">
            {item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <button className="text-red-400 hover:text-red-600 transition">
            <FiTrash2 size={20} />
          </button>
        </section>
      ))}
      {cart.length > 0 && (
        <span className=" font-medium ">TOTAL: R$ 1.800,00</span>
      )}
    </div>
  );
}
