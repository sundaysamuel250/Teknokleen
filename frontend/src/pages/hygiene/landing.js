import React from "react";
import HygieneHero from "./components/hero";
import { motion } from "framer-motion";
import OurClientSection from "../home/components/OurClientSection";
import UnleashSection from "./components/unleashSection";
import WhatWeDoSection from "./components/whatWeDoSection";
import FooterSection from '../home/components/FooterSection'
import AboutCleaningSection from '../home/components/AboutCleaningSection'
const HygieneLanding = () => {
  
  return (
    <>
    <HygieneHero />
    <OurClientSection />
    <UnleashSection />
    <WhatWeDoSection />
    <AboutCleaningSection />
    <FooterSection />
    </>
  );
};

export default HygieneLanding;
