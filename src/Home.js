import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./App.css";
import Shimmer from "./Shimmer";

const Home = () => {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const productsData = await fetch("https://fakestoreapi.com/products");
    const json = await productsData.json();
    setProducts(json);
    console.log(json);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {products.length === 0 ? (
        <div className="flex flex-wrap">
          {Array(10)
            .fill("")
            .map((e) => (
              <Shimmer />
            ))}
        </div>
      ) : (
        <div className="flex flex-wrap flex-1">
          {products.map((singleProduct) => (
            <Product
              price={singleProduct.price}
              rating={singleProduct.rating}
              imageSrc={singleProduct.image}
              key={singleProduct.id}
              title={singleProduct.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
