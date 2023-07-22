import React from "react";

const Product = ({ price, rating, imageSrc, title }) => {
  return (
    <div className="p-4 border border-black m-4 w-56">
      <div>
        <img
          alt="product"
          src={imageSrc}
          className="border border-black w-48"
        />
      </div>
      <div className="py-3">
        <h2 className="font-bold">{title}</h2>
        <div>
          <span>{rating.rate} </span>
          <span className="text-gray-400">{rating.count}</span>
        </div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default Product;
