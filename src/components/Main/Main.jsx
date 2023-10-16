import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import FilteredProducts from "../FilteredProducts/FilteredProducts";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <FilteredProducts />
    </div>
  );
};

export default Main;
