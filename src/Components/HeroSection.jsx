import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl m-auto p-2 relative top-36  ">
      <div className="  items-center justify-between flex  ">
        <div className=" feet max-w-xl gap-9">
          <div>
            <h1 className="text-8xl font-extrabold tracking-normal	">
              YOUR FEET DESERVE THE BEST
            </h1>
          </div>
          <div>
            <p className="mt-9 max-w-sm	max-h-20 text-base font-semibold leading-tight">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="mainBtn mt-9">
            <button className="btn">Shop Now</button>
            <button className="Catogery">Catogery</button>
          </div>
          <div className="mt-9">
            <span className="text-stone-800 	">Also available</span>
            <div className="flex items-center gap-3 mt-3">
              <div>
                <img
                  src="/images/flipkart.png"
                  alt=""
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
              <div>
                <img
                  src="/images/amazon.png"
                  alt=""
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Shoe-img">
          <img src="/images/shoeImage.png" alt="shoe-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
