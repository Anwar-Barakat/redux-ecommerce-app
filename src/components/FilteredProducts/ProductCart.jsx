import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { singleProduct } from "../../features/slices/productSlice";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        className="w-96"
        onClick={() => {
          dispatch(singleProduct(product.id));
        }}
      >
        <CardHeader floated={false} className="h-80">
          <img src={product.img} alt={product.name} />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold text-lg">
              {product.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium text-lg">
              ${product.price}
            </Typography>
          </div>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {product.text}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="colors">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              textGradient
              className="flex gap-1"
            >
              {product.color.map((c, index) => (
                <i
                  key={index}
                  className="fas fa-map-marker-alt fa-sm  p-2 rounded-full w-6 h-6 inline-block"
                  style={{ background: c }}
                ></i>
              ))}
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCart;
