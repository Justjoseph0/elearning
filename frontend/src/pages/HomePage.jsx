import AboutUs from '@/components/HomePage/AboutUs'
import Benefit from '@/components/HomePage/Benefit'
import CallToAction from '@/components/HomePage/CallToAction'
import CourseSliding from '@/components/HomePage/CourseSliding'
import HeroSlider from '@/components/HomePage/HeroSlider'
import OurServices from '@/components/HomePage/OurServices'
import Partners from '@/components/HomePage/Partners'
import Popular from '@/components/HomePage/Popular'
import Testimonial from '@/components/HomePage/Testimonial'
import React from 'react'

const HomePage = () => {
  return (
    <main className='font-poppins'>
        <HeroSlider />
        <section className='bg-customDark'>
          <AboutUs />        
        </section>
        <Popular />      
        <OurServices />  
        <CourseSliding/>
        <Benefit />
        <CourseSliding />
        <Testimonial />
        <Partners />
        <CallToAction />
    </main>
  )
}

export default HomePage