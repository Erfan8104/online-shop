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
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let isNotProductExist = currentItem.find((item) => item.id == id) == null;
      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
