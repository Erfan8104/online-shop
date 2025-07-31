import Container from "./../../components/Container";
import { IproductItemProps } from "./../../components/ProductItem";

import ProdcutItem from "./../../components/ProductItem";
import Link from "next/link";
export default async function Store() {
  const result = await fetch("http://localhost:3004/products");
  const data = (await result.json()) as IproductItemProps[];
  return (
    <Container>
      <h1 className="text-right py-4">فروشگاه </h1>
      <div className="grid grid-cols-4 gap-1">
        {data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProdcutItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}
