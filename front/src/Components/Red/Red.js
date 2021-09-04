import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

function Red(props) {
  const productsRed = useSelector((state) =>
    state.allProducts.filter((el) => el.color === "красный")
  );
  return (
    <div>
      Красные
      {productsRed.length ? (
        productsRed
          .sort((a, b) => a.position - b.position)
          .map((el) => <Product key={el._id} el={el} />)
      ) : (
        <div> красных нет </div>
      )}
    </div>
  );
}

export default Red;
