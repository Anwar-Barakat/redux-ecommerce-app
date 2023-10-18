import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dotSlide,
  nextSlide,
  prevSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const dispatch = useDispatch();
  const slideState = useSelector((state) => state.slider);
  return (
    <div className="relative">
      <div>
        {sliderData.map((slide) => {
          return (
            <div
              key={slide.id}
              className={
                parseInt(slide.id) === slideState.value
                  ? "opacity-100 duration-700 ease-out scale-100"
                  : "opacity-0 duration-700 ease-out scale-95"
              }
            >
              <div key={slide.id}>
                {parseInt(slide.id) === slideState.value && (
                  <img
                    className="h-[700px] w-full"
                    src={slide.img}
                    alt={`slide-${slide.id}`}
                  />
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4 text-center tracking-wide">
                <p className="text-white text-4xl font-inter font-bold tracking-wider leading-14">
                  {parseInt(slide.id) === slideState.value && slide.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-10 justify-center gap-1 w-full">
        {sliderData.map((dot) => {
          return (
            <div key={dot.id}>
              <div
                className={
                  slideState.value === parseInt(dot.id)
                    ? "bg-blue-300 rounded-full p-3 cursor-pointer w-1 shadow-md"
                    : "bg-gray-300 rounded-full p-3 cursor-pointer w-1 shadow-sm  hover:bg-blue-200 duration-300 ease-out"
                }
                onClick={() => {
                  dispatch(dotSlide(parseInt(dot.id)));
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute 
           hover:bg-blue-300
          duration-300 ease-out
          top-[50%] right-4 bg-white rounded-full p-2 cursor-pointer shadow-md flex justify-center items-center"
          onClick={() => dispatch(nextSlide(slideState.value + 1))}
        >
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute 
          hover:bg-blue-300
          duration-300 ease-out
          top-[50%] left-4 bg-white rounded-full p-2 cursor-pointer shadow-md flex justify-center items-center "
          onClick={() => dispatch(prevSlide(slideState.value - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000000"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
