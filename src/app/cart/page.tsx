"use client";

import Container from "./../../components/Container";
import CartItem from "./../../components/CartItem";
import { useShoppingCartContext } from "./../../context/ShoppingCartContext";

export default function Cart() {
  const { cartItems } = useShoppingCartContext();
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
          قیمت کل :<span>77$</span>
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
