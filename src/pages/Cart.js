import { useState } from "react";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");
  const [products, setProducts] = useState([
    {
      id: 10001,
      pname: "shoe",
      price: 800,
      instock: true,

      image: "https://m.media-amazon.com/images/I/8146SOjTQJL._SX569_.jpg",
    },
    {
      id: 10001,
      pname: "shoe",
      price: 800,
      instock: true,

      image: "https://m.media-amazon.com/images/I/8146SOjTQJL._SX569_.jpg",
    },
    {
      id: 10001,
      pname: "shoe",
      price: 800,
      instock: true,

      image: "https://m.media-amazon.com/images/I/8146SOjTQJL._SX569_.jpg",
    },
  ]);
  return (
    <div className="cart">
      <h1> Cart Items: {products.length}</h1>
      {products.map((product) => (
        <CartCard product={product} />
      ))}
    </div>
  );
};
