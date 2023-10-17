import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Select, Option, Button } from "@material-tailwind/react";

const SingleProduct = () => {
  const { selectedProduct } = useSelector((state) => state.products);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  console.log(size);
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-around items-center gap-24">
        <div className="grow-[2]">
          <img
            className=" w-[500px] rounded-lg object-center"
            src={selectedProduct.img}
            alt={selectedProduct.name}
          />
        </div>
        <div className="grow-[3]">
          <div className="max-w-lg">
            <h5 className="text-3xl font-inter font-bold leading-none pb-4">
              {selectedProduct.name}
            </h5>
            <p className="text-orange-700 mt-1 font-bold pb-1">15% OFF</p>
            <p className="text-gray-700 tracking-wide leading-7">
              {selectedProduct.text}
            </p>
            <div className="pb-4 mt-8">
              <div>
                <div className="">
                  {selectedProduct.size && (
                    <Select
                      label="Select Size"
                      value={size}
                      onChange={(e) => {
                        setSize(e);
                      }}
                    >
                      {selectedProduct.size.map((size, index) => (
                        <Option value={size} key={index}>
                          {size}
                        </Option>
                      ))}
                    </Select>
                  )}
                </div>
              </div>
            </div>
            <div className="pb-4 mt-4">
              <div>
                <div className="">
                  {selectedProduct.color && (
                    <Select
                      label="Select Color"
                      value={color}
                      onChange={(e) => {
                        setColor(e);
                      }}
                    >
                      {selectedProduct.color.map((color, index) => (
                        <Option value={color} key={index}>
                          {color}
                        </Option>
                      ))}
                    </Select>
                  )}
                </div>
              </div>
            </div>
            <div className="pb-2 mt-2">
              <Button
                size="lg"
                color="gray"
                variant="outlined"
                ripple={true}
                className="hover:bg-blue-600 hover:text-white duration-300 ease-out"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
