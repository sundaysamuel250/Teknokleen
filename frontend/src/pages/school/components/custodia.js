import React, {useState} from  "react"
import {
  custodiaImage,
} from "../../../constants/school_images";
import Data from "./custodia_accordion_components/Data";
import Register from "./custodia_accordion_components/Register";

function Custodia() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const unleashHeadStyle = {
    color: "#00A5E2",
    fontSize: "45px",
    fontWeight: "700",
    fontFamily: "poppins",
  };
  return (
    <section className="font-['poppins'] lg:mx-[4rem] mx-[2rem] lg:flex items-center">
      <section className="md:mt-20 w-full mt-20">
        <div className="grid  w-full gap-5 lg:grid-cols-2 grid-cols-1">
          <div className="relative lg:order-first order-last mb-[100px] max-h-[500px]">
            <img
              src={custodiaImage}
              className="w-[full] max-h-[500px] object-cover object-top"
            />
          </div>
          <div className="p-3">
            <h1 className="lg:text-[40px] md:text-[32px] text-[20px] font-[500] leading-tight text-[#23146D] font-[''gentium-book-basic''] leading">
              CUSTODIAL MAINTENANCE COURSE FOR SUPERVISORS OF CLEANING STAFF
            </h1>
            <div className="mt-4 ">
             <Data />
            </div>
            <div>
              <p>
                For phone enquiries click call: <br />
                01 453 6549, 0803 844 0430, 0703 120 9591
              </p>
              <div className="mt-5"></div>
              <button onClick={openModal} className="bg-[#23146D] hover:bg-[#23146D] hover:tracking-[1px] md:w-[203px] md:h-[64px] w-[150px] h-[35px] rounded-[10px] text-[#FFC640] font-normal font-['Poppins'] md:text-[16px] text-[10px] leeding-none not-italic border-none tracking-wide ">
                Register here
              </button>
              <Register  isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Custodia;
