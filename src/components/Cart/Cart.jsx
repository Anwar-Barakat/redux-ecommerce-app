import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

const Cart = ({ open, setOpen }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.cart.length > 0 ? (
        <Dialog
          className="border-none outline-none"
          open={open}
          handler={() => {
            setOpen(false);
          }}
        >
          <DialogHeader>
            <h1 className="text-black text-2xl pb-2 font-inter font-bold tracking-normal leading-none">
              Your shopping bag
            </h1>
          </DialogHeader>
          <DialogBody
            divider
            className="flex flex-col justify-center items-start"
          >
            {cart.cart.map((product, index) => {
              return (
                <div
                  key={product.id}
                  className={`flex items-start  py-4 gap-8 border-b`}
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
                    <p className="font-bold pt-2">
                      Total Item Price : ${product.totalPrice}
                    </p>
                  </div>
                </div>
              );
            })}
          </DialogBody>
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
            <h1 className="text-black text-xl pb-2 font-inter font-bold tracking-normal leading-none">
              Your shopping bag is empty
            </h1>
          </DialogHeader>
          <DialogBody>
            <h1 className="text-black text-2xl pb-2 font-inter font-bold tracking-normal leading-none">
              Please, add some products to your shopping bag.
            </h1>
            <p>Regards</p>
          </DialogBody>
        </Dialog>
      )}
    </>
  );
};

export default Cart;
