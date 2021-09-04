import {
  ADD_PRODUCT,
  ADD_PRODUCT_SAGA,
  INIT_PRODUCTS_SAGA,
  INIT_PRODUCTS,
  DELETE_PRODUCT_SAGA,
  DELETE_PRODUCT,
  START_DROG_SAGA,
  START_DROG,
  DROG_PRODUCT_SAGA,
  DROG_PRODUCT,
} from "./ActionTypes";

//add products

export const addProductSagaAC = (name, price, number, color, file) => {
  return {
    type: ADD_PRODUCT_SAGA,
    payload: { name, price, number, color, file },
  };
};

export const addProductAC = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

//init products
export const initProductsSagaAC = () => {
  return {
    type: INIT_PRODUCTS_SAGA,
  };
};

export const initProductsAC = (payload) => {
  return {
    type: INIT_PRODUCTS,
    payload,
  };
};

//delete product

export const deleteProductSagaAC = (payload) => {
  return {
    type: DELETE_PRODUCT_SAGA,
    payload,
  };
};

export const deleteProductAC = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

//start drog
export const drogStartSagaAC = (product) => ({
  type: START_DROG_SAGA,
  payload: product,
});

export const drogStartAC = (product) => ({
  type: START_DROG,
  payload: product,
});

//drog  перетаскивание продуктов

export const drogSagaAC = (startId, position1, endId, position2) => ({
  type: DROG_PRODUCT_SAGA,
  payload: { startId, position1, endId, position2 },
});

export const drogAC = (startId, position1, endId, position2) => ({
  type: DROG_PRODUCT,
  payload: { startId, position1, endId, position2 },
});
