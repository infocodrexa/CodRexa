import React from 'react'
import Hero from '../Hero/Hero'
import OurServices from '../OurServices/OurServices'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import HomeSlide from '../Hero_Slide/heroSlide'
import Ecommerce from '../Ecommerse/Ecommerse'

const Homepage = () => {
  return (
   <>
      <Hero/>
      <HomeSlide/>
      <WhyChooseUs/>
      <OurServices/>
      <Ecommerce/>
   </>
  )
}

export default Homepage