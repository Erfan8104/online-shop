"use client";

import Container from "./../../components/Container";
import CartItem from "./../../components/CartItem";
import { useShoppingCartContext } from "./../../context/ShoppingCartContext";
import { IproductItemProps } from "@/components/ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatNumberWithCommas } from "./../../utils/number";
interface IDiscountData {
  id: number;
  code: string;
  percentage: number;
}
export default function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IproductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    axios("http://localhost:3000/products").then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);
  let totalPrice = cartItems.reduce((total, item) => {
    let selectedProduct = data.find(
      (product) => product.id == item.id.toString()
    );
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);

  const handleSubmitDiscount = () => {
    axios(`http://localhost:3000/discounts?code=${discountCode}`).then(
      (result) => {
        const data = result.data as IDiscountData[];
        let discountedPrice = (totalPrice * data[0].percentage) / 100;
        let finalPrice = totalPrice - discountedPrice;
        setFinalPrice(finalPrice);
        setDiscountedPrice(discountedPrice);
      }
    );
  };

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
          قیمت کل :<span>{formatNumberWithCommas(totalPrice)}$</span>
        </h3>
        <h3 className="rtl">
          {" "}
          سود شما از این خرید :
          <span>{formatNumberWithCommas(discountedPrice)}$</span>
        </h3>
        <h3 className="rtl">
          {" "}
          قیمت نهایی :<span>{formatNumberWithCommas(finalPrice)}$</span>
        </h3>
        <input
          className="rtl text-right border "
          placeholder="کد تخفیف را وارد کنید"
          type="text"
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button
          onClick={handleSubmitDiscount}
          className="bg-sky-600 text-white px-4 py-1 rounded "
        >
          اعمال
        </button>
      </div>
    </Container>
  );
}
