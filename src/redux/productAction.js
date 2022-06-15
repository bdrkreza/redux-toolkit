import ProductService from "../services/productService";
import {
  addProduct,
  deleteProduct,
  filterProduct,
  setError,
  setProducts,
  setStatus,
  STATUS,
  updateProduct,
} from "./productSlice";

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

export const createProduct = (body) => {
  return (dispatch) => {
    dispatch(setStatus(STATUS.PENDING));
    ProductService.addProduct(body)
      .then((data) => {
        dispatch(addProduct(data));
        dispatch(setStatus(STATUS.SUCCESS));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setStatus(STATUS.ERROR));
      });
  };
};

export const UpdateProduct = (id, body) => {
  return (dispatch) => {
    dispatch(setStatus(STATUS.PENDING));
    ProductService.updateProduct(id, body)
      .then((data) => {
        dispatch(updateProduct(data));
        dispatch(setStatus(STATUS.SUCCESS));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setStatus(STATUS.ERROR));
      });
  };
};

export const DeleteProduct = (id) => {
  return (dispatch) => {
    ProductService.deleteProduct(id)
      .then((data) => {
        dispatch(deleteProduct(data));
        dispatch(setStatus(STATUS.SUCCESS));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setStatus(STATUS.ERROR));
      });
  };
};

export const FilterProduct = (category) => {
  return (dispatch) => {
    ProductService.getProductByCategory(category)
      .then((data) => {
        dispatch(filterProduct(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setStatus(STATUS.ERROR));
      });
  };
};
