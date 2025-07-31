export default function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
      <div className="col-span-9 text-right p-4">
        <h2 className="font-bold text-xl">اسم محصول </h2>
        <p>
          {" "}
          تعداد:<span>3</span>
        </p>
        <p>
          قیمت محصول <span>45$</span>
        </p>

        <div className="mt-4">
          <button className="px-4 py-2 rounded bg-sky-500 text-white">+</button>
          <span className="mx-4">3</span>
          <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
        </div>
      </div>
      <img
        className="col-span-3"
        src="https://placehold.co/300x200/CCFFCC/000000?text=گوشی+سامسونگ"
        alt=""
      />
    </div>
  );
}
