import React, { useEffect } from "react";

const FilterProducts = () => {
  async function getCategories() {
    const categories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json = await categories.json();
    console.log(json);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <form className="shadow-lg p-4">
      <div>
        <div>Price</div>
        <div>
          <input type="checkbox" name="price" value="0-49" id="0-49" />
          <label for="0-49">0-49</label>
        </div>
        <div>
          <input type="checkbox" name="price" value="50-99" id="50-99" />
          <label for="50-99">50-99</label>
        </div>
        <div>
          <input type="checkbox" name="price" value="100-149" id="100-149" />
          <label for="100-149">100-149</label>
        </div>
        <div>
          <input type="checkbox" name="price" value="150+" id="150+" />
          <label for="150+">150+</label>
        </div>
      </div>
      <div>
        <div>Rating</div>
        <div>
          <input type="checkbox" name="rating" value="0-0.9" id="0-0.9" />
          <label for="0-0.9">0-0.9</label>
        </div>
        <div>
          <input type="checkbox" name="rating" value="1-1.9" id="1-1.9" />
          <label for="1-1.9">1-1.9</label>
        </div>
        <div>
          <input type="checkbox" name="rating" value="2-2.9" id="2-2.9" />
          <label for="2-2.9">2-2.9</label>
        </div>
        <div>
          <input type="checkbox" name="rating" value="3-3.9" id="3-3.9" />
          <label for="3-3.9">3-3.9</label>
        </div>
        <div>
          <input type="checkbox" name="rating" value="4-5" id="4-5" />
          <label for="4-5">4-5</label>
        </div>
      </div>
      <button className="border border-black p-2 my-2 rounded-md bg-gray-400">
        Apply filter
      </button>
    </form>
  );
};

export default FilterProducts;
