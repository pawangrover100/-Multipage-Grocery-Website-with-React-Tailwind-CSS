import { useState } from "react";
import Heading from "../Heading/Heading";
import ProductsList from "../ProductsList/ProductsList.js";
import Cards from "../Cards/Cards.jsx";
import Button from "../Button/Button.jsx";
import { Link } from "react-router-dom";

function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItem =
    activeTab === "All"
      ? ProductsList
      : ProductsList.filter((item) => item.category === activeTab);

  const renderCards = filteredItem.slice(0, 8).map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <div>
      <section className="max-w-[1400px] mx-auto py-10">
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 text-lg  rounded-lg cursor-pointer
                  ${
                    activeTab === category
                      ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                      : "bg-zinc-100 text-black"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* Products listing */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
          {renderCards}
        </div>
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/All"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounden-lg md:text-lg text:md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Products;
