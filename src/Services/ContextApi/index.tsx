import React, { createContext, useState } from "react";

interface ProdutoProps {
  id: number;
  cover: string;
  title: string;
  description: string;
  price: number;
}

interface CartContextProps {
  cart: CartItem[];
  quantityItems: number;
  addItemCart: (newItem: ProdutoProps) => void;
  removeItemCart: (productId: CartItem) => void;
  totalResult: string;
  ButtonRemoveItemCart: (item: CartItem) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  title: string;
  description: string;
  cover: string;
  price: number;
  quantity: number;
  total: number;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: ChildrenProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalResult, setTotalResult] = useState("");

  function addItemCart(newItem: ProdutoProps) {
    const itemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (itemIndex !== -1) {
      let cartList = cart;
      cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
      cartList[itemIndex].total = cartList[itemIndex].total + newItem.price;
      setCart(cartList);
      TotalResultCart(cartList);
      return;
    }

    let data = {
      ...newItem,
      quantity: 1,
      total: newItem.price,
    };

    setCart((prevCart) => [...prevCart, data]);
    TotalResultCart([...cart, data]);
  }

  function removeItemCart(productId: CartItem) {
    const itemIndex = cart.findIndex((item) => item.id === productId.id);
    if (cart[itemIndex].quantity > 1) {
      let CarList = cart;
      CarList[itemIndex].quantity = CarList[itemIndex].quantity - 1;
      CarList[itemIndex].total =
        CarList[itemIndex].total - CarList[itemIndex].price;
      setCart(CarList);
      TotalResultCart(CarList);
      return;
    }
    const newCart = cart.filter((item) => item.id !== productId.id);
    setCart(newCart);
    TotalResultCart(newCart);
  }

  function TotalResultCart(itens: CartItem[]) {
    let Mycart = itens;
    let result = Mycart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);
    const formatResult = result.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    setTotalResult(formatResult);
  }

  function ButtonRemoveItemCart(item: CartItem) {
    const NewCar = cart.filter((product) => product.id !== item.id);
    setCart(NewCar);
    TotalResultCart(NewCar);
    return;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityItems: cart.length,
        addItemCart,
        removeItemCart,
        totalResult,
        ButtonRemoveItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
