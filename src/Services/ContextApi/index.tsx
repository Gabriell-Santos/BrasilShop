import React, { createContext, useState } from "react";

interface CartContextProps {
  cart: CartItem[];
  quantityItems: number;
}

interface ChidreenProps {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  title: string;
  decription: string;
  price: number;
  quantity: number;
  img: string;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: ChidreenProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, quantityItems: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}
