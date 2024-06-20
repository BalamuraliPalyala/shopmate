import { ProductCard } from "../components";

export const Home = () => {
  const products = [
    {
      id: 10001,
      pname: "shoe",
      price: 800,
      instock: true,
    },
    {
      id: 10002,
      pname: "shoe",
      price: 500,
      instock: true,
    },
    {
      id: 10003,
      pname: "shoe",
      price: 660,
      instock: true,
    },
    {
      id: 10004,
      pname: "shoe",
      price: 800,
      instock: true,
    },
    {
      id: 10005,
      pname: "shoe",
      price: 1700,
      instock: true,
    },
  ];
  return (
    <main>
      <section className="products flex flex-wrap justify-content align-center">
        {products.map((product, i) => {
          return <ProductCard product={product} />;
        })}
      </section>
    </main>
  );
};
