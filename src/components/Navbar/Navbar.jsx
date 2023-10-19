import React, { useState } from "react";
import logo from "./../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { logout } from "../../features/slices/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-black p-2 w-full">
        <Link to={`/`}>
          <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">
            R-Mark Store, Welcome
          </h3>
        </Link>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <Link to={`/`}>
            <img src={logo} alt="Logo" className="h-28 w-full" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button
            className="font-inter text-base font-medium tracking-normal leading-none text-center"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
          <div className="flex justify-around items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center ">
              Wishlist
            </p>
          </div>
          {user.image && <Avatar src={user.image} alt="avatar" size="sm" />}
          <div
            className="flex flex-row items-center cursor-pointer gap-1"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="relative">
              {cart.totalAmount > 0 && (
                <span className="rounded-full  text-white bg-red-300  font-inter text-xs absolute top-[-10px] left-[-8px] w-4/5 h-4/5 flex items-center justify-center">
                  {cart.totalAmount}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center ">
              Shopping bag
            </p>
            <div>{open && <Cart open={open} setOpen={setOpen} />}</div>
          </div>
        </div>
      </div>
      <div className="flex bg-black p-4 w-full justify-around">
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          50% OFF
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          Free Shipping & Returns
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          Different Payments
        </div>
      </div>
    </>
  );
};

export default Navbar;
