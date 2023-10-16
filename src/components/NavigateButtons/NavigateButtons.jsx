import { Button } from "@material-tailwind/react";
import React from "react";
const NavigateButtons = () => {
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
      <div className="flex flex-wrap gap-4 justify-center items-center py-8">
        {buttons.map((button, index) => {
          return (
            <>
              <Button
                key={index}
                size="lg"
                color="gray"
                variant="outlined"
                ripple={true}
                className="hover:bg-blue-600 hover:text-white duration-300 ease-out"
              >
                {button}
              </Button>
            </>
          );
        })}
        <div className="flex items-center justify-center w-[50%] mx-auto rounded shadow-lg mt-4 p-3 bg-blue-400">
          <h3 className="text-white font-bold font-inter">SALES UP TO 40%</h3>
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <img
          className="h-[500px] w-[70%] rounded shadow-gray-400 shadow-2xl"
          src={require("./../../assets/images/clothes.jpg")}
          alt="SALES UP TO 40%"
        />
      </div>
    </>
  );
};

export default NavigateButtons;
