import React from "react";
import Grocery from "../../assets/Grocery Website Assets/grocery.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 flex items-center pt-25 ">
        {/* hero contant */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="text-7xl/20 font-bold mt-4">
            Tasty Organic <span className="text-orange-500 ">Fruits</span> & <span className="text-orange-500 ">Vaggies</span> <br />in your city
          </h1>
          <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>
          <Button content="Shop Now"/>
        </div>

        {/* hero image */}
        <div className="flex-1">
          <img src={Grocery} alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
