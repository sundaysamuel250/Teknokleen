import { unleash } from "../../../constants/hygiene_images";
import {
  elevate1,
  elevate2,
  elevate3,
  ourCoursesImage,
  plusIcon,
} from "../../../constants/school_images";

function OurCourses() {
  const unleashHeadStyle = {
    color: "#00A5E2",
    fontSize: "45px",
    fontWeight: "700",
    fontFamily: "poppins",
  };
  return (
    <section className="font-['poppins'] lg:mx-[4rem] mx-[2rem] lg:flex items-center">
      <section className="md:mt-20 w-full mt-20">
        <h3 className="text-center font-['gentium-book-basic'] text-[64px] font-[600] text-[#23146D]">
          Our Courses
        </h3>
        <div className="grid  w-full gap-5 lg:grid-cols-2 grid-cols-1">
          <div className="relative lg:order-first order-last mb-[100px] max-h-[500px]">
            <img
              src={ourCoursesImage}
              className="w-[full] max-h-[500px] object-cover object-top"
            />
          </div>
          <div className="p-3">
            <h1 className="text-[40px] font-[500] leading-tight text-[#23146D] font-[''gentium-book-basic''] leading">
              ENTREPRENEURIAL COURSE FOR OPERATORS OF CLEANING BUSINESS
            </h1>
            <div className="mt-4 ">
              {[
                "Intorduction",
                "Course Objectives",
                "Course Contents",
                "Who should Attend?",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 py-[15px]">
                  <img src={plusIcon} />
                  <h6 className="font-[500] text-[18px]">{item}</h6>
                </div>
              ))}
            </div>
            <div>
              <p>
                For phone enquiries click call: <br />
                01 453 6549, 0803 844 0430, 0703 120 9591
              </p>
              <div className="mt-5"></div>
              <button className="bg-[#FFC640] hover:bg-[#FFC640] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[35px] rounded-[10px] text-[#fff] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
                Register here
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OurCourses;
