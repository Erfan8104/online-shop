import Container from "./../../components/Container";
import { IProductList } from "./../../components/ProductItem";

import ProductItem from "./../../components/ProductItem";
import Link from "next/link";
import Pagination from "./../../components/Pagination";
import Search from "./../../components/Search";
interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

export default async function Store({ searchParams }: IStoreProps) {
  
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "5";
  const title = (await searchParams).title ?? "";
  const result = await fetch(
    `http://localhost:3000/products?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const data = (await result.json()) as IProductList[];
  return (
    <Container>
      <h1 className="text-right py-4">فروشگاه </h1>
      <Search />
      <div className="grid grid-cols-4 gap-1">
        {data.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagination pageCount={data.pages} />
    </Container>
  );
}
