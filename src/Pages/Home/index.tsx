import produto from "../../asstes/produto teste.jpeg";
import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl mx-auto mt-10">
        <h2 className="text-center text-2xl font-bold">
          Confira Nossos Produtos!
        </h2>
        <div className="mt-15 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="border rounded-lg p-4 shadow-md">
            <img
              className="mb-4 w-full max-h-80 object-cover rounded-lg"
              src={produto}
              alt="Logo do Produto"
            />
            <p className="font-bold mt-1.5 mb-5 text-center">
              Descrição do Produto
            </p>
            <div className="flex justify-between items-center font-bold">
              <p>R$ 99,90</p>
              <button className="p-2 ">
                <BsCartPlus size={22} color="black" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
