import { IproductItemProps } from "./../../../components/ProductItem";
import Container from "./../../../components/Container";
import AddToCart from "./../../../components/AddToCart";

export default async function Prodcut({ params }: { params: { id: string } }) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3000/products/${id}`);
  const data = (await result.json()) as IproductItemProps;
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 text-right p-4 rtl">
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p className="text-gray-600 "> {data.description}</p>
          <p className="font-bold">
            {data.price}:<span>20$</span>
          </p>
          <AddToCart id={id} />
        </div>
        <div className="col-span-3  rtl text-right">
          <img src={data.image} alt="" />
        </div>
      </div>
    </Container>
  );
}
