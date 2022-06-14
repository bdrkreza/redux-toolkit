import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layout/navbar";
import Home from "../pages/home/Home";
import AddProduct from "../pages/product/addProduct";
import EditProduct from "../pages/product/editProduct";
import Products from "../pages/product/products";
import ViewProduct from "../pages/product/viewProduct";
import AddUser from "../pages/users/addUser";
import EditUser from "../pages/users/editUser";
import UserView from "../pages/users/userView";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/show_user" element={<UserView />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/edit_user" element={<EditUser />} />
        <Route path="/product" element={<Products />} />
        <Route path="/edit_product" element={<EditProduct />} />
        <Route path="/add_product" element={<AddProduct />} />
        <Route path="/view_product" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
