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

  function addItemCart(newItem: ProdutoProps) {
    const itemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (itemIndex !== -1) {
      let cartList = cart;
      cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
      cartList[itemIndex].total = cartList[itemIndex].total + newItem.price;
      setCart(cartList);
      return;
    }

    let data = {
      ...newItem,
      quantity: 1,
      total: newItem.price,
    };

    setCart((prevCart) => [...prevCart, data]);
  }

  return (
    <CartContext.Provider
      value={{ cart, quantityItems: cart.length, addItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
