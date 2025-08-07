"use client";

import Container from "./../../components/Container";
import CartItem from "./../../components/CartItem";
import { useShoppingCartContext } from "./../../context/ShoppingCartContext";
import { IproductItemProps } from "@/components/ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatNumberWithCommas } from "./../../utils/number";
export default function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IproductItemProps[]>([]);
  useEffect(() => {
    axios("http://localhost:3000/products").then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);
  return (
    <Container>
      <h1 className="text-right my-4 ">سبد خرید </h1>
      <div className=" ">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="border shadow-md text-right p-4">
        <h3 className="rtl">
          {" "}
          قیمت کل :
          <span>
            {formatNumberWithCommas(
              cartItems.reduce((total, item) => {
                let selectedProduct = data.find(
                  (product) => product.id == item.id.toString()
                );
                return total + (selectedProduct?.price || 0) * item.qty;
              }, 0)
            )}
            $
          </span>
        </h3>
        <h3 className="rtl">
          {" "}
          سود شما از این خرید :<span>77$</span>
        </h3>
        <h3 className="rtl">
          {" "}
          قیمت نهایی :<span>77$</span>
        </h3>
        <input
          className="rtl text-right border "
          placeholder="کد تخفیف را وارد کنید"
          type="text"
        />
        <button className="bg-sky-600 text-white px-4 py-1 rounded ">
          اعمال
        </button>
      </div>
    </Container>
  );
}
