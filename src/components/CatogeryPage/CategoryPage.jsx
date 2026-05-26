import Banner from "../Banner/Banner";
import ProductsList from "../ProductsList/ProductsList";
import Cards from "../Cards/Cards";

function CategoryPage({ title, bgimage, categories = [] }) {
  let filteredItems = categories.includes("All")
    ? ProductsList
    : ProductsList.filter((item) => categories.includes(item.category));

  const renderProducts = filteredItems.map((product) => {
    return (
      <Cards
        key={product.id}
        product={product}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  })
  return (
    <div>
      <Banner title={title} bgimage={bgimage} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10">
        {renderProducts}
      </div>
    </div>
  );
}

export default CategoryPage;
