import React from "react";
import CategoryPage from "../CatogeryPage/CategoryPage.jsx";
import bgFruits from "../../assets/Grocery Website Assets/fruits-banner.jpg";

function Fruits() {
  return (
    <div>
      <CategoryPage title="Fruits and Veggies" bgimage={bgFruits} />
    </div>
  );
}

export default Fruits;
