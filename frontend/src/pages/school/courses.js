import React from "react";
import FooterSection from "../home/components/FooterSection";
import HygieneShopHero from "./components/hero";
import OurClientSection from "../home/components/OurClientSection";
import AboutCleaningSection from "../home/components/AboutCleaningSection";
import ElevateSchool from "./components/elevateSection";
import { mask } from "../../constants/school_images";
import OurCourses from "./components/our_courses";
import AdvancedBusiness from "./components/advanceBusiness";
import Custodia from "./components/custodia";
import CoursesHero from "./components/CoursesHero";

const Courses = () => {
  return (
    <>
      <CoursesHero />
      <OurCourses />
      <AdvancedBusiness />
      <Custodia />
      <FooterSection />
    </>
  );
};

export default Courses;
