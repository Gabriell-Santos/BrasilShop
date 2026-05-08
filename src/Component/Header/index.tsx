import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export function Header() {
  return (
    <div>
      <header className="bg-gray-900 w-full p-2">
        <nav className="w-full max-w-7xl flex  items-center justify-between mx-auto h-14 ">
          <Link
            to="/"
            className="font-bold text-3xl cursor-pointer  bg-gradient-to-r from-green-600 via-yellow-500 to-blue-700 bg-clip-text text-transparent"
          >
            BRASIL_SHOP
          </Link>
          <Link className="mt-6 relative" to={"/carts"}>
            <FiShoppingCart size={24} color="white" />
            <span className="bg-lime-600 flex items-center justify-center font-bold rounded-full text-white absolute -top-4 -right-3 text-xs w-5 h-5">
              2
            </span>
          </Link>
        </nav>
      </header>
    </div>
  );
}
