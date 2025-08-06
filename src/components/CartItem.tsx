import React, { useEffect, useState } from "react";
import ProductItem, { IproductItemProps } from "./../components/ProductItem";
import axios from "axios";
import AddToCart from "./AddToCart";

interface ICartItemProps {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IproductItemProps);
  useEffect(() => {
    axios(`http://localhost:3000/products/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
      <div className="col-span-9 text-right p-4">
        <h2 className="font-bold text-xl">{data.title}</h2>
        <p>
          {" "}
          تعداد:<span>{qty}</span>
        </p>
        <p>
          قیمت محصول <span>{data.price}$</span>
        </p>

        <AddToCart id={id.toString()} />
      </div>
      <img className="col-span-3" src={data.image} alt="" />
    </div>
  );
}
