import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Main } from "../pages/main/main";
import { CreateProduct } from "../pages/create-product/create-product";
import { UpdateProduct } from "../pages/update-product/update-product";
import { PrivateRoute } from "./privateRoute";

export const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/update-product/:idProduct"
        element={<PrivateRoute page={UpdateProduct} />}
      ></Route>
      <Route
        path="/create-product"
        element={<PrivateRoute page={CreateProduct} />}
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<PrivateRoute page={Main} />}></Route>
    </Routes>
  );
};

export default Rotas;
