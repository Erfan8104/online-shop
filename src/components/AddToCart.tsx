"use client";
import { useContext } from "react";
import { ShoppingCartContext } from "./../context/ShoppingCartContext";
import { useShoppingCartContext } from "./../context/ShoppingCartContext";
export default function AddToCart({ id }: { id: string }) {
  const { cartItems, handleIncreaseProductQty, getProductQty } =
    useShoppingCartContext();

  return (
    <div>
      <div className="mt-4">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="px-4 py-2 rounded bg-sky-500 text-white"
        >
          +
        </button>
        <span className="mx-4">{getProductQty(parseInt(id))}</span>
        <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
      </div>
    </div>
  );
}
