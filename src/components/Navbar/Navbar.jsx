import React from "react"

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] items-center flex justify-between">
        {/* logo */}
        <a href="" className="text-3lx font-semibold">
          Gr<span className="text-orange-400  uppercase">o</span>cify
        </a>

        {/* Desktop menu */}
        <ul className="flex items-center gap-x-15">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">Home</a>
          </li>
          <li>
            <a href="" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About us</a>
          </li>
          <li>
            <a href="" className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500">Process</a>
          </li>
          <li>
            <a href="" className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500">Contact us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
