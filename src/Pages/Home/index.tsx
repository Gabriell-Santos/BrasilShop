import api from "../../Services/Api";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

export function Home() {
  // Interface para definir o tipo dos produtos
  interface ProdutoProps {
    id: number;
    cover: string;
    title: string;
    description: string;
    price: number;
  }
  const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

  useEffect(() => {
    async function getProdutos() {
      const response = await api.get("/products");
      setProdutos(response.data);
    }
    getProdutos();
  }, []);

  return (
    <div>
      <main className="w-full max-w-7xl mx-auto mt-10">
        <h2 className="text-center text-2xl font-bold">
          Confira Nossos Produtos!
        </h2>
        <div className="mt-15 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {produtos.map((produto) => (
            <div key={produto.id} className="border rounded-lg p-4 shadow-md">
              <img
                className="mb-4 w-full max-h-80 object-cover rounded-lg"
                src={produto.cover}
                alt="Logo do Produto"
              />
              <p className="font-bold mt-1.5 mb-5 text-center">
                {produto.title}
              </p>
              <div className="flex justify-between items-center font-bold">
                <p>
                  {produto.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button className="p-2 ">
                  <BsCartPlus size={22} color="black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
