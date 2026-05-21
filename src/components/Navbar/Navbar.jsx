import React from "react";
import { IoHeartSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

function Navbar() {
  return (
    <header className="bg-white fixed top-0 right-0 left-0 ">
      <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] items-center flex justify-between">
        {/* logo */}
        <a href="" className="text-3xl font-semibold">
          Gr<span className="text-orange-400  uppercase">o</span>cify
        </a>

        {/* Desktop menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Search button */}
          <div className="md:flex hidden p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-500 to-orange-500 text-white rounded-full w-10 h-10  flex justify-center items-center text-xl ">
              <IoSearch />
            </button>
          </div>

          <a href="" className="text-2xl text-zinc-800">
            <IoHeartSharp />
          </a>
          <a href="" className="text-2xl text-zinc-800">
            <HiShoppingBag />
          </a>

          {/* hamburgger */}
          <a href="" className="text-zinc-800  text-3xl md:hidden">
            <TbMenu2 />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
