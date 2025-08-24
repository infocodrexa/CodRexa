import React from 'react'
import Hero from '../Hero/Hero'
import OurServices from '../OurServices/OurServices'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import HomeSlide from '../Hero_Slide/heroSlide'

const Homepage = () => {
  return (
   <>
      <Hero/>
      <HomeSlide/>
      <WhyChooseUs/>
      <OurServices/>
   </>
  )
}

export default Homepage