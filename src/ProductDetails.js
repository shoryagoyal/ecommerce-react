import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState("");
  async function getProductDetails() {
    const data = await fetch("https://fakestoreapi.com/products/" + id);
    const json = await data.json();
    console.log(json);
    setProductDetails(json);
  }
  console.log("id=" + id);
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div>
      {productDetails.length === 0 ? (
        <div>Product detail loading</div>
      ) : (
        <div className="flex">
          <div>
            <img src={productDetails.image} alt="product" />
          </div>
          <div>
            <div>{productDetails.title}</div>
            <div>Description: {productDetails.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
