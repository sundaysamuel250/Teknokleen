import React from "react";
import Images from "../../../constants/Images";

const HeroSection = () => {
  return (
    <section className="px-12 mt-20 md:flex items-center gap-8"> 
      <section className="mt-40 transparent-page">
        <p>trusted cleaning services</p>
       <section className=""> 
        <h1 className="text-[#23146D] text-[78px] text-[] font-normal md:font-[400] font-['Gentium Book Basic'] not-italic leading-[99px] ">Transforming<br /> 
        <div class="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute md:left-[40%]"></div>
        <b>Corperate Cleaning...</b></h1>
        <p className="w-[513px] italic text-[16px] font-['Poppins'] leading-[30px] text-[#4F4F4F] ">We provide comprehensive solutions for corporate cleaning, including sales and distribution 
            of equipment, products, and expert training and consultancy services.</p>
       </section>
       <section className="md:flex mt-12 gap-5"> 
        <button className="bg-[#23146D] w-[203px] h-[64px] rounded-[10px] text-[#fff] font-normal font-['Poppins'] text-[16px] leeding-none not-italic border-none tracking-wide ">Book Now</button>
        <button className="bg-[#fff] w-[203px] h-[64px] rounded-[10px] text-[#23146D] font-normal font-['Poppins'] text-[16px] leeding-none not-italic border-[#23146D] border-[2px] tracking-wide">Learn More</button>
        <div class="h-[100px] w-[100px] bg-[#00A5E2] rounded-[50%] opacity-[0.7] blur-[67px] absolute md:left-[12%] bottom-[2%]"></div>
       </section>
      </section>
      <section className="bg-img">
        <div className="h-[25px] w-[25px] bg-[#00CCB1] rounded-md md:absolute top-[48%] right-[45%] "></div>
        <div className="h-[25px] w-[25px] bg-[#6EC1E4] rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] md:absolute top-[58%] right-[95%] "></div>
        <img src={Images.Home} alt="home image not showing" className="mt-[12rem] overflow-hidden"/>
      </section>
    </section>
  );
};

export default HeroSection;
