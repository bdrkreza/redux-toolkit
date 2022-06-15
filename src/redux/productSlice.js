import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
});

const initialState = {
  data: [],
  filteredProducts: [],
  status: STATUS.IDLE,
  isError: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
      state.filteredProducts = action.payload;
    },
    searchByName: (state, action) => {
      const filteredProducts = state.filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredProducts:
          action.payload.length > 0 ? filteredProducts : [...state.data],
      };
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    addProduct: (state, action) => {
      state.filteredProducts.push(action.payload);
    },
    filterProduct: (state, action) => {
      state.filteredProducts = state.filteredProducts.filter(
        (category) => category.category === action.payload.category
      );
    },
    updateProduct: (state, action) => {
      const { id, title, description, price, category, image } = action.payload;
      let isProduct = state.filteredProducts.filter(
        (product) => product.id === id
      );
      if (isProduct) {
        isProduct[0].title = title;
        isProduct[0].image = image;
        isProduct[0].description = description;
        isProduct[0].price = price;
        isProduct[0].category = category;
      }
    },
    deleteProduct: (state, action) => {
      state.filteredProducts = state.filteredProducts.filter(
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
  searchByName,
  filterProduct,
} = productSlice.actions;

export default productSlice.reducer;
