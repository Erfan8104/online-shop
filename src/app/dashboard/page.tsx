"use client";

import React from "react";
import Container from "@/components/Container";
import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: " ",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCreateProduct = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        image: newProduct.image,
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
      },
    });
  };

  return (
    <div className="bg-slate-100 p-4 text-right rtl ">
      <Container>
        <div className="grid grid-cols-3 gap-4 ">
          <input
            onChange={handleChangeProduct}
            type="text"
            placeholder="عنوان"
            name="title"
          />
          <input
            onChange={handleChangeProduct}
            type="text"
            placeholder="قیمت"
            name="price"
          />
          <input
            name="image"
            onChange={handleChangeProduct}
            type="text"
            placeholder="عکس"
          />
        </div>

        <textarea
          name="description"
          onChange={handleChangeProduct}
          className="w-full mt-4"
          placeholder="توضیحات"
        />
        <button
          onClick={handleCreateProduct}
          className="bg-sky-500 text-white rounded px-4 py-1 "
        >
          ساخت محصول جدید{" "}
        </button>
      </Container>
    </div>
  );
}
export default Dashboard;
