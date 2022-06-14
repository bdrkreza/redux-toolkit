import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layout/navbar";
import AddUser from "../pages/addUser";
import EditUser from "../pages/editUser";
import Home from "../pages/Home";
import UserView from "../pages/userView";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/show_user" element={<UserView />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/edit_user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
