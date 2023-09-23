import React from 'react'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import OurClientSection from './components/OurClientSection'
import ChooseUsSection from './components/ChooseUsSection'
import AboutCleaningSection from './components/AboutCleaningSection'
import FooterSection from './components/FooterSection'

const Home = () => {
  return (
    <div>
    <HeroSection />
    <OurClientSection />
    <ServicesSection />
    <ChooseUsSection />
    <AboutCleaningSection />
    <FooterSection />
    </div>
  )
}

export default Home