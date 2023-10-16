import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { filterHandling } from "../../features/slices/productSlice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const dispatch = useDispatch();

  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <>
      <div className="flex items-center justify-center w-[50%] mx-auto rounded shadow-lg mt-16 p-3 bg-blue-400 mb-4">
        <h3 className="text-white font-bold font-inter">SALES UP TO 40%</h3>
      </div>
      <div className="flex items-center justify-center mb-4">
        <img
          className="h-96 rounded-lg object-center shadow-xl shadow-blue-gray-900/50 w-[70%]"
          src={require("./../../assets/images/clothes.jpg")}
          alt="SALES UP TO 40%"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center mt-16 w-4/5 mx-auto">
        {buttons.map((button, index) => {
          return (
            <Link key={index} to={`/filtered-products/${button}`}>
              <Button
                size="lg"
                color="gray"
                variant="outlined"
                ripple={true}
                className="hover:bg-blue-600 hover:text-white duration-300 ease-out"
                onClick={() => dispatch(filterHandling(button))}
              >
                {button}
              </Button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavigateButtons;
