import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCart from "./ProductCart";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "purple",
    "red",
    "yellow",
    "orange",
    "green",
    "blue",
    "brown",
    "black",
  ];

  const sizeButtons = ["S", "M", "L", "XL"];
  console.log("hi");

  return (
    <>
      <div className="px-16">
        <div className="pt-8">
          <h1 className="text-4xl font-inter text-blue-400 underline">
            {type}
          </h1>

          {type && (
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-2">
                {genderButtons.map((gender, index) => (
                  <Button
                    key={index}
                    color="gray"
                    variant="outlined"
                    ripple={true}
                    className="hover:bg-black hover:text-white ease-in-out duration-300"
                  >
                    {gender}
                  </Button>
                ))}
                <Button
                  color="gray"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-black hover:text-white ease-in-out duration-300"
                >
                  Hight Price
                </Button>
                <Menu>
                  <MenuHandler>
                    <Button
                      color="gray"
                      variant="outlined"
                      ripple={true}
                      className="hover:bg-black hover:text-white ease-in-out duration-300"
                    >
                      Select a color
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {colorButtons.map((color, index) => {
                      return (
                        <MenuItem
                          style={{ color: color, background: "#fff" }}
                          key={index}
                        >
                          {color}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <Button
                      color="gray"
                      variant="outlined"
                      ripple={true}
                      className="hover:bg-black hover:text-white ease-in-out duration-300"
                    >
                      Select a size
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    {sizeButtons.map((size, index) => {
                      return <MenuItem key={index}>{size}</MenuItem>;
                    })}
                  </MenuList>
                </Menu>
              </div>
              <div>
                <Button
                  color="red"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-red-600 hover:text-white ease-in-out duration-300"
                >
                  Clear filters
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="@container">
          <div className="grid @xl:grid-cols-4 @lg:grid-cols-3 @md:grid-cols-2 @sm:grid-cols-1 justify-items-center py-8 gap-12">
            {products.filterState.map((product, index) => (
              <ProductCart key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredProducts;
