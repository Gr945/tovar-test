import {
  ADD_PRODUCT,
  INIT_PRODUCTS,
  DELETE_PRODUCT,
  START_DROG,
  DROG_PRODUCT,
} from "./ActionTypes";

const initialState = { allProducts: [], startDrogProduct: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case ADD_PRODUCT:
      return { ...state, allProducts: [...state.allProducts, action.payload] };
    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (el) => el._id !== action.payload._id
        ),
      };
    case START_DROG:
      return { ...state, startDrogProduct: action.payload };

    case DROG_PRODUCT:
      const { startId, position1, endId, position2 } = action.payload;
      return {
        ...state,
        allProducts: state.allProducts.map((el) => {
          if (el._id === startId) {
            return { ...el, position: position2 };
          }
          if (el._id === endId) {
            return { ...el, position: position1 };
          }
          return el;
        }),
      };
    default:
      return state;
  }
}
