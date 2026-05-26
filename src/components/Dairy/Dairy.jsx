import React from "react";
import CategoryPage from "../CatogeryPage/CategoryPage";
import bgDairy from '../../assets/Grocery Website Assets/dairy-banner.jpg'
function Dairy() {
  return (
    <div>
      {" "}
      <CategoryPage title="Dairy and Eggs" bgimage={bgDairy} />
    </div>
  );
}

export default Dairy;
