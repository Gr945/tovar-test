import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

function Blue(props) {
  const productsBlue = useSelector((state) =>
    state.allProducts.filter((el) => el.color === "синий")
  );
  return (
    <div>
      Синие
      {productsBlue.length ? (
        productsBlue
          .sort((a, b) => a.position - b.position)
          .map((el) => <Product key={el._id} el={el} />)
      ) : (
        <div> синих нет </div>
      )}
    </div>
  );
}

export default Blue;
