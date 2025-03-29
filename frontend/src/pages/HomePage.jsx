import HeroSlider from '@/components/HomePage/HeroSlider'
import OurServices from '@/components/HomePage/OurServices'
import Sponsors from '@/components/HomePage/Sponsors'
import React from 'react'

const HomePage = () => {
  return (
    <section className='font-poppins'>
      <header>
        <HeroSlider/>
      </header>
      {/* <section>
        <Sponsors/>
      </section> */}
      <section className='bg-lightDark py-8'>
        <OurServices/>
      </section>
    </section>
  )
}

export default HomePage