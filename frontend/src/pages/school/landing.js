import React from "react";
<<<<<<< HEAD
import OurClientSection from "../home/components/OurClientSection";
import AboutCleaningSection from "../home/components/AboutCleaningSection";
import ElevateSchool from "./components/elevateSection";
import { mask } from "../../constants/school_images";
import SchoolHero from "./components/hero"
import Footer_about from "../about/components/Footer_about";
=======
import FooterSection from "../home/components/FooterSection";
import HygieneShopHero from "./components/hero";
import AboutCleaningSection from "../home/components/AboutCleaningSection";
>>>>>>> started school

const School = () => {
  return (
    <>
<<<<<<< HEAD
    <SchoolHero />
      <OurClientSection />
      <ElevateSchool />
      <img src={mask} className="w-full" />
      <AboutCleaningSection />
      <Footer_about />
=======
      <HygieneShopHero />
      {/* product slider */}

      <AboutCleaningSection />
      <FooterSection />
>>>>>>> started school
    </>
  );
};

export default School;
