import React from "react";
import Images from "../../constants/Images";
import HygieneHero from "./components/hero";
import { dhl, jobberman, seplat } from "../../constants/hygiene_images";

const HygieneLanding = () => {
  return (
    <>
    <HygieneHero />

    <div className="h-[100px]"></div>
    <section className="px-12 md:flex items-center gap-8"> 
      <div className="bg-white rounded-l shadow w-full ml-auto">
          <div className="flex w-full align-items-center justify-between">
            <div className=" w-[fit-content] px-2 lg:w-[300px]">
            Over <span className="text-[#00A5E2]">100+</span> plus <br /> happy clients
            </div>
            <img src={jobberman} />
            <img src={dhl} />
            <img src={seplat} />
          </div>
      </div>
    </section>

    <div className="h-[100px]"></div>
    <section className="px-12 md:flex items-center gap-8"> 
      <h3></h3>
    </section>
    </>

    
  );
};

export default HygieneLanding;
