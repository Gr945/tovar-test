import { call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_PRODUCT_SAGA,
  INIT_PRODUCTS_SAGA,
  DELETE_PRODUCT_SAGA,
  START_DROG_SAGA,
  DROG_PRODUCT_SAGA,
} from "../ActionTypes";
import { fetchAddProduct } from "../saga/async/fetchAddProduct";
import {
  addProductAC,
  initProductsAC,
  deleteProductAC,
  drogStartAC,
  drogAC,
} from "../ActionCreators";
import { fetchInitProducts } from "../saga/async/fetchInitProducts";
import { fetchDeleteProducts } from "../saga/async/fetchDeleteProducts";
import { fetchDropProductSaga } from "../saga/async/fetchDropProductSaga";

//add worker
export function* workerAddProduct(action) {
  try {
    const newProduct = yield call(fetchAddProduct, action.payload);
    yield put(addProductAC(newProduct));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}
//init worker
export function* workerInitProducts() {
  try {
    const allProducts = yield call(fetchInitProducts);
    yield put(initProductsAC(allProducts));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}
//delete worker
export function* workerDeleteProduct(action) {
  try {
    const id = yield call(fetchDeleteProducts, action.payload);
    yield put(deleteProductAC(id));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

//drog  перетаскивание

export function* workerDrogProduct(action) {
  try {
    const { startId, position1, endId, position2 } = action.payload;
    const dropBackBoolean = yield call(fetchDropProductSaga, action.payload);
  
    if (dropBackBoolean) {
      yield put(drogAC(startId, position1, endId, position2));
    } else {
      alert(false);
    }
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

//запись стартового обьекта перетаскивания в reducer
export function* workerDrogStartProduct(action) {
  try {
    yield put(drogStartAC(action.payload));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

export function* watcher() {
  yield takeEvery(ADD_PRODUCT_SAGA, workerAddProduct);
  yield takeEvery(INIT_PRODUCTS_SAGA, workerInitProducts);
  yield takeEvery(DELETE_PRODUCT_SAGA, workerDeleteProduct);
  yield takeEvery(START_DROG_SAGA, workerDrogStartProduct);
  yield takeEvery(DROG_PRODUCT_SAGA, workerDrogProduct);
}
