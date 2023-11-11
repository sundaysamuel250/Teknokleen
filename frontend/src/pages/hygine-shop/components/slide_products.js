import Slider from "react-slick";
import { washableBrush } from "../../../constants/hygiene_shop_images";
function SlideProducts() {
  const settings = {
    dots: true,
    navs: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      window.innerWidth > 920 ? 3 : window.innerHeight > 890 ? 2 : 1,
    slidesToScroll:
      window.innerWidth > 920 ? 3 : window.innerHeight > 890 ? 2 : 1,
  };
  return (
    <div className="container mx-auto mt-[50px]">
      <div className="w-full overflow-hidden py-5">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div className="p-3 ">
              <div
                style={{ border: "1px solid #6EC1E4" }}
                className="flex mx-auto max-w-[400px] items-center justify-between p-3 px-5 bg-white rounded-[15px]"
              >
                <img
                  src={washableBrush}
                  className="h-[94px] max-w-[240px] object-contain"
                />
                <div className="">
                  <h3 className="text-[#23146D] font-[poppins] text-[17px]">
                  Washable brush
                  </h3>
                  <p>(6 Items)</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideProducts;
