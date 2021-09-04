import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Product from '../Product/Product';
import {initProductsSagaAC} from '../../Redux/ActionCreators'

function AllProduct(props) {

  const dispatch = useDispatch()
const products = useSelector((state) => state.allProducts);

const initProducts =  () => {
dispatch(initProductsSagaAC())
}


useEffect(()=>{
  initProducts()
},)

  return (
    <div>
        { products.length ?
         products.sort((a, b) => a.position - b.position).map( el => <Product key={el._id} el={el}/>)
          : <div>список товаров пуст! Добавьте товар через :  Управление - Добавить товар</div>}

    </div>
  );
}

export default AllProduct;
