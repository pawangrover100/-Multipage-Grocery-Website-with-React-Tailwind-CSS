import React, { useState } from "react";
import Heading from "../Heading/Heading";

function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
      <section className="max-w-[1400px] mx-auto py-10">
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className="flex gap-10 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 text-lg  rounded-lg cursor-pointer
                  ${activeTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100 text-black"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Products;
