import React from "react";
import FooterSection from "../home/components/FooterSection";
import HygieneShopHero from "./components/hero";
import AboutCleaningSection from "../home/components/AboutCleaningSection";

const School = () => {
  return (
    <>
      <HygieneShopHero />
      {/* product slider */}

      <AboutCleaningSection />
      <FooterSection />
    </>
  );
};

export default School;
