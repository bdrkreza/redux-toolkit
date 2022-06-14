import ProductService from "../services/productService";
import { setError, setProducts, setStatus, STATUS } from "./productSlice";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(setStatus(STATUS.PENDING));
    ProductService.getProducts()
      .then((data) => {
        dispatch(setProducts(data));
        dispatch(setStatus(STATUS.SUCCESS));
      })
      .catch((err) => {
        dispatch(setError(err));
        dispatch(setStatus(STATUS.ERROR));
      });
  };
};
