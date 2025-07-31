interface IproductItemProps {
  id: string;
  image: string;
  description: string;
  title: string;
  price: number;
}
export default function ProductItem({
  price,
  image,
  id,
  description,
  title,
}: IproductItemProps) {
  return (
    <div className="shadow-md ">
      <img src={image} className="object-cover" alt="" />
      <div className="p-2 text-right rtl ">
        <h3 className="font-bold">{title}</h3>
        <p>
          {" "}
          قیمت: <span>{price}</span>
        </p>
      </div>
    </div>
  );
}
