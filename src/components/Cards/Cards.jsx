import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

function Cards() {
  return (
    <div>
      {/* Card Icons */}
      <div>
        <span>
          <FaHeart />
        </span>
        <button>
          <FaPlus />
        </button>
      </div>
      {/* Card image */}
      <div>
        <img src="" />
      </div>
      {/* Card content */}
      <div>
        <h3>Title</h3>
        <p></p>
        <Button content="shop now" />
      </div>
    </div>
  );
}

export default Cards;
