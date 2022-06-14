import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
});

const initialState = {
  data: [],
  status: STATUS.IDLE,
  isError: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, title, description, price, category, image } = action.payload;
      let isProduct = state.data.filter((product) => product.id === id);
      if (isProduct) {
        isProduct[0].title = title;
        isProduct[0].image = image;
        isProduct[0].description = description;
        isProduct[0].price = price;
        isProduct[0].category = category;
      }
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  setProducts,
  setStatus,
  setError,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
