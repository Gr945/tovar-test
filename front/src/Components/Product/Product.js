import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductSagaAC,
  drogStartSagaAC,
  drogSagaAC,
} from "../../Redux/ActionCreators";
function Product({ el }) {
  const dispatch = useDispatch();
  const drogStartProduct = useSelector((state) => state.startDrogProduct);

  const deleteProduct = (id) => {
    dispatch(deleteProductSagaAC(id));
  };

  function startDrag(e, product) {
    dispatch(drogStartSagaAC(product));
  }

  function leaveDrag(e) {}

  function endDrag(e) {}

  function overDrag(e) {
    e.preventDefault();
  }

  function drop(e, productEnd) {
    e.preventDefault();
    dispatch(
      drogSagaAC(
        drogStartProduct._id,
        drogStartProduct.position,
        el._id,
        el.position
      )
    );
  }

  return (
    <div
      className="elDiv"
      draggable={true}
      onDragStart={(e) => startDrag(e, el)} //слушатель когда берем
      onDragLeave={(e) => leaveDrag(e)} //срабатывает если вышли за пределы др карты
      onDragEnd={(e) => endDrag(e)} //конец
      onDragOver={(e) => overDrag(e)} //если находимся над др обьектом
      onDrop={(e) => drop(e, el)}
    >
      {/* <div><image className='block' src={el.file} style={{width:'50px', height:'50px'}}/></div> */}
      <div className="block"> {el.name} </div>
      <div className="block">{el.price} руб</div>
      <div className="block">{el.color}</div>
      <div className="block">{el.number} шт</div>
      <button className="block" onClick={() => deleteProduct(el._id)}>
        удалить
      </button>
    </div>
  );
}

export default Product;
