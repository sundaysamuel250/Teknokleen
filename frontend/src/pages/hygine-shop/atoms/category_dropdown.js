import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const CategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ]);
  return (
    <div className="lg:p-10 font-[poppins]">
      <div className="dropdown inline-block relative">
        <button
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
          className="bg-[#23146D] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <AiOutlineMenu /> &nbsp;
          <span className="mr-1">
            {selectedCategory == "" ? "Category" : selectedCategory}
          </span>
        </button>
        {showDropdown && (
          <ul className="dropdown-menu absolute  text-gray-700 pt-1">
            {categories.map((category, i) => (
              <li key={i} className="">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    setSelectedCategory(category);
                  }}
                  className="rounded-t bg-white shadow hover:bg-gray-400 text-left py-2 px-5 min-w-[200px] block whitespace-no-wrap"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;
