import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  console.log("hi");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={!user.authUser ? <Login /> : <Main />}
            path="/"
          ></Route>
          <Route
            element={!user.authUser ? <Login /> : <FilteredProducts />}
            path="/filtered-products/:type"
          ></Route>
          <Route
            element={!user.authUser ? <Login /> : <SingleProduct />}
            path="/product/:id"
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
