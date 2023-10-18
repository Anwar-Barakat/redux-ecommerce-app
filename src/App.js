import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main></Main>} path="/"></Route>
          <Route
            element={<FilteredProducts></FilteredProducts>}
            path="/filtered-products/:type"
          ></Route>
          <Route element={<SingleProduct />} path="/product/:id"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
