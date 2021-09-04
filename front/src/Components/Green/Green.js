import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

function Green(props) {
  const productsGreen = useSelector((state) =>
    state.allProducts.filter((el) => el.color === "зеленый")
  );
  return (
    <div>
      Зеленые
      {productsGreen.length ? (
        productsGreen
          .sort((a, b) => a.position - b.position)
          .map((el) => <Product key={el._id} el={el} />)
      ) : (
        <div> зеленых нет </div>
      )}
    </div>
  );
}

export default Green;
