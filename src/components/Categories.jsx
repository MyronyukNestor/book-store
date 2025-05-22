import { useContext, useState } from "react";
import { categories } from "../assets/data";
import { ShopContext } from "../context/ShopContext";

const Categories = () => {
  const {setCategory, setClickedOnCategory } =
    useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName, index) => {
    if (selectedCategory === index) {
      setSelectedCategory(null);
      setCategory("");
      setClickedOnCategory(false);
    } else {
      setSelectedCategory(index);
      setCategory(categoryName);
      setClickedOnCategory(true);
    }
  };

  return (
    <div className="py-15 flex flex-col max-md:items-center">
      <h1 className="text-xl font-semibold">Categories:</h1>
      <div className="flex flex-wrap items-center justify-between w-1/2 mt-10 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name, index)}
            className="flex flex-col items-center gap-3"
          >
            <div
              className={`bg-gray-100 p-5 w-23 h-23 rounded-full cursor-pointer hover:bg-gray-200  ${
                index === selectedCategory &&
                "ring-3 ring-rose-200 text-rose-200"
              }`}
              tabIndex="0"
            >
              <img src={category.image} alt="" />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
