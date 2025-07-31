"use client";

import { createContext } from "react";
import { useState } from "react";

type CartItems = {
  id: number;
  qty: number;
};

const ShoppingCartContext = createContext({});

export function ShoppingCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
