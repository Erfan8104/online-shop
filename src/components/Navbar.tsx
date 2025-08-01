"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/",
      title: "خانه ",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-3 py-4">
          <Link href="/cart">سبد خرید </Link>
        </div>
        <div className="col-span-9 ">
          <nav className="shadow py-4 flex flex-row-reverse ">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className={`mr-4 ${
                  pathname === item.href ? "text-sky-500 " : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </Container>
  );
}
