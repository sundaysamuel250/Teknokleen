import React from "react";
import FooterSection from "../home/components/FooterSection";
import HygieneShopHero from "./components/hero";
import OurClientSection from "../home/components/OurClientSection";
import AboutCleaningSection from "../home/components/AboutCleaningSection";
import ElevateSchool from "./components/elevateSection";
import { mask } from "../../constants/school_images";

const School = () => {
  return (
    <>
      <HygieneShopHero />
      <OurClientSection />
      <ElevateSchool />
      <img src={mask} className="w-full" />
      <AboutCleaningSection />
      <FooterSection />
    </>
  );
};

export default School;
