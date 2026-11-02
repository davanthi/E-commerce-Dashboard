import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx"
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx"
import {ConfigProvider} from "antd";
const theme = {
  token: {
    colorPrimary: "#0f6e6a",
    colorInfo: "#0f6e6a",
    colorError: "#b42318",
    borderRadius: 12,
    fontFamily: '"DM Sans", sans-serif',
    colorBgContainer: "#fffcf7",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;











