import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCart from "./ProductCart";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products);
  const { type } = useParams();
  return (
    <>
      <div className="px-16">
        <div className="pt-8">
          <h1 className="text-4xl font-inter text-blue-400 underline">
            {type}
          </h1>
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
