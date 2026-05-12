import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import logo from "../../assets/teste.jpeg";
import { useContext, useState } from "react";
import { CartContext } from "../../Services/ContextApi/index";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import api from "../../Services/Api/index";

interface ProdutoProps {
  id: number;
  cover: string;
  title: string;
  description: string;
  price: number;
}

export function Details() {
  const [product, setproduct] = useState();
  const { addItemCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`products/${id}`);
        setproduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [id]);

  return (
    <div className="w-full max-w-7xl flex flex-col justify-center items-center  mx-auto px-4">
      <h2 className="font-medium text-3xl my-6 text-center mt-8">
        Detalhes do Produto
      </h2>

      <section className="flex items-start gap-6 w-full max-w-2xl mt-7 ">
        {/* Imagem */}
        <div className="w-48 h-48 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={logo}
            alt="Produto"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col flex-1">
          <h3 className="font-medium text-lg">Tênis Nike Air Max 270</h3>
          <p className="text-gray-500 text-sm mt-2">
            O Nike Air Max 270 é um tênis de corrida e estilo de vida que
            combina conforto e design.
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-xl">R$ 599,99</span>
            <Link to={"/carts"}>
              <button>
                <FiTrash2 size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
