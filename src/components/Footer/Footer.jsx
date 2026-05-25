import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20  ">
      <div className="flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          {/* logo */}
          <a href="#" className="text-3xl font-semibold">
            Gr<span className="text-orange-400  uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2025 &copy; all right reserved</p>
        </div>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Compony </h5>
          </li>
          <li className="text-zinc-800 mt-6">
            <a href="#" className="hover:text-orange-500 ">
              About
            </a>
          </li>
          <li className="text-zinc-800 mt-6">
            <a href="#" className="hover:text-orange-500 ">
              FAQ
            </a>
          </li>
        </ul>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support </h5>
          </li>
          <li className="text-zinc-800 mt-6">
            <a href="#" className="hover:text-orange-500 ">
              Support Center
            </a>
          </li>
          <li className="text-zinc-800 mt-6">
            <a href="#" className="hover:text-orange-500 ">
              FeedBack
            </a>
          </li>
          <li className="text-zinc-800 mt-6">
            <a href="#" className="hover:text-orange-500 ">
              Contact us
            </a>
          </li>
        </ul>
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>

          <p className="mt-6 text-zinc-600">
            Question or Feedbacks? <br />
            we'd Love to here from you
          </p>
          <div className="bg-white flex rounded-lg py-1 mt-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              id="email"
              autoComplete="off"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className=" bg-gradient-to-b from-orange-400 to-orange-500 text-2xl text-white hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
