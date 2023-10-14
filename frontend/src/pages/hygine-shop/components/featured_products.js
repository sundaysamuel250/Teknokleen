import CategoryDropdown from "../atoms/category_dropdown";
import SortByDropdown from "../atoms/sortby_dropdown";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { washableBrush } from "../../../constants/hygiene_shop_images";
function FeaturedProduct() {
  return (
    <div className="container font-['poppins'] px-3 lg:px-auto mx-auto">
      <div className="my-[50px]">
        <div className="flex gap-5 lg:items-center flex-col lg:flex-row">
          <div>
            <h3 className="text-[#23146D] text-[24px] font-[600] whitespace-no-wrap min-w-[250px] w-[fit-content]">
              Featured Products
            </h3>
          </div>
          <div className="flex-initial w-full flex flex-col md:items-center lg:items-center md:flex-row lg:flex-row gap-4">
            {/* dropdwon here category */}
            <div className="flex items-center flex-initial w-full">
              <div className="min-w-[200px] lg:min-w-[250px]">
                <CategoryDropdown />
              </div>
              <div
                style={{ border: "1px solid #86CFF2" }}
                className="px-3 rounded-[10px] w-full flex items-center"
              >
                <input
                  className="h-[45px] font-[poppins] outline-none border-none w-full "
                  placeholder="Search products"
                />
                <AiOutlineSearch size={"18px"} color="#B0BABF" />
              </div>
            </div>
            <div className="flex gap-3 lg:gap-1 whitespace-no-wrap min-w-[300px] justify-end items-center cursor-[pointer]">
              <SortByDropdown /> &nbsp;
              {/* cart button */}
              <div className="flex gap-2 items-center">
                <FaCartShopping color="#23146D" size={"20px"} />{" "}
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-[30px] flex justify-center ">
          <ul className="cursor-['pointer'] flex justify-center gap-3 text-[#23146D] text-[14px]">
            <li>Best Sellers</li>
            <li>Evans Vanodine</li>
            <li>Host</li>
            <li>Truvox</li>
            <li>Robert Scott</li>
          </ul>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <div
              key={i}
              className="product relative p-3 pb-0 pl-0 rounded shadow bg-white"
            >
              <FaHeart
                onClick={() => {
                  console.log("clicking");
                }}
                className="absolute text-[#B0BABF] right-[10px] top-[15px]"
              />
              <div className="h-[300px] lg:h-[250px] pl-3 flex justify-center p-[20px] items-center">
                <img
                  className="h-[200px] lg:h-[150px] object-contain"
                  src={washableBrush}
                />
              </div>
              <div className="p-2 pl-4">
                <h6>Washable Machine</h6>
              </div>
              <button
                style={{ borderTopRightRadius: "10px" }}
                href="#?"
                className="text-[12px] text-white w-full h-[40px] bg-[#23146D]"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
