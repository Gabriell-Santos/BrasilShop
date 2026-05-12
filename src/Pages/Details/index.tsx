import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

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
  const [product, setproduct] = useState<ProdutoProps>();
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

      {product && (
        <section className="flex items-start gap-6 w-full max-w-2xl mt-7 ">
          {/* Imagem */}
          <div className="w-48 h-48 flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={product.cover}
              alt={product.title}
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col flex-1">
            <h3 className="font-medium text-lg"> {product.title} </h3>
            <p className="text-gray-500 text-sm mt-2">{product.description}</p>

            <div className="flex items-center justify-between mt-4">
              <span className="font-bold text-xl">
                R$
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <Link to={"/carts"}>
                <button onClick={() => addItemCart(product)}>
                  <FiTrash2 size={20} />
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
