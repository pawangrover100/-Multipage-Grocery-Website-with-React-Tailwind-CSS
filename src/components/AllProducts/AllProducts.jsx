import React from 'react'
import CategoryPage from '../CatogeryPage/CategoryPage'
import bgALL from '../../assets/Grocery Website Assets/all-banner.jpg'
function AllProducts() {
  return (
    <div> <CategoryPage title="All Products" bgimage={bgALL} categories={["All"]} /></div>
  )
}
 
export default AllProducts