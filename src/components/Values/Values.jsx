import React from "react";
import Heading from "../Heading/Heading.jsx";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/Grocery Website Assets/basket-full-vegetables.png";

function Values() {
  const values = [
    {
      id: 1,
      title: "Trust",
      para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      para: "It is a long established fact that a reader will be distracted by the readable.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <FaSeedling />,
    },
  ];

  const LeftValues = values.slice(0, 2).map((item) => {
    return (
      <div className="flex flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b form-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="text-right">
          <h3 className="text-zine-800 font-bold text-3xl ">{item.title}</h3>
          <p className="text-zine-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  const RightValues = values.slice(2).map((item) => {
    return (
      <div className="flex items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b form-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="#">
          <h3 className="text-zine-800 font-bold text-3xl ">{item.title}</h3>
          <p className="text-zine-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="Our" heading="Values" />
      <div className="flex gap-5 mt-15">
        {/* left values */}
        <div className="min-h-100 flex  flex-col  justify-between">
          {LeftValues}
        </div>
        <div className="w-1/2">
          <img src={Basket} alt="" />
        </div>
        {/* right value */}
        <div className="min-h-100 flex  flex-col  justify-between">
          {RightValues}
        </div>
      </div>
    </div>
  );
}

export default Values;
