import React from "react";
import Images from "../../../constants/Images";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {AiFillTwitterCircle} from "react-icons/ai"


const FooterSection = () => {
    const currentYear = new Date().getFullYear();

  return (
    <section className="lg:flex md:flex items-center justify-center w-[100%] h-[135px] lg:mt-0 mt-[4rem] lg:py-0 py-[2rem]  ">
      <section className=" flex flex-col sm:flex-row  space-y-[2rem] items-center justify-center lg:space-x-[16rem]">
        <section>
          <img src={Images.Logo} />
        </section>
        <footer className="flex items-center justify-center lg:space-x-[2rem] space-x-2 text-[#0D1111] font-['Poppins'] lg:text-18 text-[12px] font-semibold leading-32">
          <p>&copy; {currentYear} Teknokleen..</p>
          <h2>Privacy Policy</h2>
          <h2>Terms of use </h2>
        </footer>
        <section className="flex items-center justify-center space-x-6">
        <div ><FaFacebook className="w-[40px] h-[40px] rounded-[400px]" color="#000"  /></div>
        <div><FaLinkedin className="w-[40px] h-[40px] rounded-[400px]"  /></div>
        <div><FaInstagram className="w-[40px] h-[40px] rounded-[400px]" /></div>
        <div><AiFillTwitterCircle className="w-[40px] h-[40px] rounded-[400px]" /></div>
        </section>
      </section>
    </section>
  );
};

export default FooterSection;
