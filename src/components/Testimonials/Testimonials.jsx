import React from "react";
import Heading from "../Heading/Heading.jsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
function Testimonials() {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto gap-x-3 py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex justify-end py-5">
          <button className="text-2xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg  w-11 h-11 bg-zinc-100 flex justify-center items-center">
            <IoIosArrowBack />
          </button>
          <button className="text-2xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg  w-11 h-11 bg-zinc-100 flex justify-center items-center">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
