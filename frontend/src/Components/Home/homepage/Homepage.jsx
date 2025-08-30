import React from 'react'
import Hero from '../Hero/Hero'
import OurServices from '../OurServices/OurServices'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import HomeSlide from '../Hero_Slide/heroSlide'
import Ecommerce from '../Ecommerse/Ecommerse'
import IndustriesSection from '../IndustriesSection/IndustriesSection'
import Clients from '../OurClients/Clients'
import { HeroSection } from '../Hero2/Hero2'
import FeaturesSection from '../Hero2/FeaturesSection'
import AboutSection from '../Hero2/AboutSection'
import { ServicesSection } from '../Hero2/ServicesSection'

const Homepage = () => {
  return (
   <>
      <Hero/>
      <HomeSlide/>
      <HeroSection/>
      <FeaturesSection/>
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <OurServices/>
      <Ecommerce/>
      <IndustriesSection/>
      <Clients/>
   </>
  )
}

export default Homepage
