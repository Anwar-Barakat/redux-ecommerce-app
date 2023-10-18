import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.cart.length > 0 ? (
        <Dialog
          className="border-none outline-none overflow-y-scroll max-h-[400px]"
          open={open}
          handler={() => {
            setOpen(false);
          }}
        >
          <DialogHeader>
            <h1 className="text-black text-md pb-8 font-inter font-bold tracking-normal leading-none">
              Your shopping bag
            </h1>
          </DialogHeader>
          <DialogBody
            divider="true"
            className="flex flex-col justify-center items-start"
          >
            {cart.cart.map((product, index) => {
              return (
                <div
                  key={product.id}
                  className={`flex items-start  py-8 gap-8`}
                >
                  <div className="flex grow-[1]">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-[125px] min-w-[110px]"
                    />
                  </div>
                  <div className="flex grow-[2] flex-col mb-3">
                    <div className="flex justify-between items-start pb-4">
                      <h1 className="text-black text-xl  font-inter font-bold tracking-normal leading-none">
                        {product.name}
                      </h1>
                      <p className="font-bold">${product.price}</p>
                    </div>
                    <p>{product.text}</p>
                    <div className="flex justify-between pt-2 flex-wrap">
                      <p className="font-bold flex items-center gap-2">
                        <span className="inline-block">Color</span>
                        <span
                          style={{ backgroundColor: product.color }}
                          className="rounded-full inline-block font-inter w-4 h-4"
                        ></span>
                      </p>
                      <p className="font-bold">Size : {product.size}</p>
                      <p className="font-bold">Amount : {product.amount}</p>
                    </div>
                    <div className="flex justify-between pt-2 flex-wrap">
                      <p className="font-bold pt-2">
                        Total Item Price : ${product.totalPrice}
                      </p>
                      <Button
                        variant="gradient"
                        color="red"
                        size="sm"
                        onClick={() => {
                          dispatch(removeFromCart(product));
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <DialogFooter divider="true">
            <div className="font-bold flex items-center justify-between w-full">
              <span className="inline-block">Total Price</span>
              <span className="inline-block font-inter">
                ${cart.totalPrice}
              </span>
            </div>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          className="border-none outline-none"
          open={open}
          handler={() => {
            setOpen(false);
          }}
        >
          <DialogHeader>
            <h1 className="text-black text-md pb-2 font-inter font-bold tracking-normal leading-none">
              Your shopping bag is empty
            </h1>
          </DialogHeader>
          <DialogBody divider="true">
            <h1 className="text-black text-xl pb-2 font-inter font-bold tracking-normal leading-none">
              Please, add some products to your shopping bag.
            </h1>
          </DialogBody>
          <DialogFooter divider="true">
            <div className="font-bold flex items-center justify-between w-full">
              <span className="inline-block">Total Price</span>
              <span className="inline-block font-inter">$0.00</span>
            </div>
          </DialogFooter>
        </Dialog>
      )}
    </>
  );
};

export default Cart;
