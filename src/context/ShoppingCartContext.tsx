"use client";

import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

type CartItems = {
  id: number;
  qty: number;
};
type IShoppingCartContext = {
  cartItems: CartItems[];
};
export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

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
