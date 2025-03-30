import HeroSlider from '@/components/HomePage/HeroSlider'
import OurServices from '@/components/HomePage/OurServices'
import React from 'react'

const HomePage = () => {
  return (
    <main className='font-poppins'>
        <HeroSlider />
        <section className='bg-customDark py-8'>
          <OurServices />
        </section>
    </main>
  )
}

export default HomePage