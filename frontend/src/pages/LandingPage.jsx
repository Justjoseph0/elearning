import CourseContent from '@/components/LandingPage/CourseContent/CourseContent'
import CourseCurriculum from '@/components/LandingPage/CourseCurriculum/CourseCurriculum'
import CourseTabs from '@/components/LandingPage/CourseTabs/CourseTabs'
import FAQ from '@/components/LandingPage/FAQ/Faq'
import HowWeWork from '@/components/LandingPage/HowWeWork/HowWeWork'
import LandingHero from '@/components/LandingPage/LandingHero/LandingHero'
import React from 'react'

const LandingPage = () => {
  return (
    <section className='font-poppins'>
      <header>
        <LandingHero />
      </header>
      <article className='mt-16 md:w-[80%] mx-auto '>
        <CourseTabs />
      </article>
      <main className='mt-16 md:w-[80%] mx-auto'>
        <CourseCurriculum/>
      </main>
      <section className='mt-16 md:w-[80%] mx-auto'>
        <CourseContent />
      </section>
      <section className='mt-16 bg-[#f9f9f9]'>
        <HowWeWork/>
      </section>
      <section className='mt-16 md:w-[80%] mx-auto'>
        <FAQ/>
      </section>
        

    </section>
  )
}

export default LandingPage