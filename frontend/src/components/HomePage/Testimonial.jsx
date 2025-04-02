import { Quote, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react'

const Testimonial = () => {
  return (
    <section className='mx-auto max-w-7xl py-10 px-8 lg:px-0'>
        {/* 📌 Section Title */}
        <h2 className="text-3xl text-center font-bold text-darkPurple mb-10">
            What Our Learners Say
        </h2>  
        
        <article className="hidden lg:flex flex-col items-center lg:flex-row gap-8">
            {/* 📌 Left Section */}
            <div className='lg:w-[45%] flex flex-col gap-10'>
                <div className=' flex flex-row gap-14 items-center rounded-lg'>
                    {/* Left Box */}
                    <div className='flex flex-col gap-5 rounded-md lg:w-7/12'>
                        <div className='bg-dark pt-4  rounded-xl mb-2 space-y-4'>
                            <div className='flex items-center justify-between gap-2 mx-4'>
                                {/* Left: Quote & Text */}
                                <div className='flex-1'>
                                    <Quote className='w-10 h-10 text-white' />
                                    <p className='text-gray-200 ml-6 text-sm'>
                                        I went from knowing nothing about the cloud to landing a role as a Solutions Architect in just six months. 
                                    </p>
                                </div>

                                {/* Right: Image (Centered & Bordered) */}
                                <div className='border-4 border-white  rounded-full overflow-hidden w-28 h-28 flex items-center justify-center -mr-14'>
                                    <img src="/images/TestiImg1.png" alt="About" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className='bg-customDark p-3 text-sm flex flex-col items-center rounded-b-xl text-white font-semibold'>
                                <span>Noah Sullivan</span>
                                <span>AWS Solutions Architect</span>
                            </div>
                        </div>
                        <div className='bg-dark rounded-xl pt-4 text-gray-200 space-y-4'>
                            <div className='mx-4'>
                                <p className='text-sm'>The hands-on labs and real-world projects made all the difference. I was able to secure a job as a Cloud Engineer even before completing the course!</p>
                            </div>
                            <div className='bg-customDark rounded-b-xl p-3 flex flex-row justify-between'>
                                <div className='flex flex-col items-center text-white text-sm font-semibold'>
                                    <span> Emma Carter </span>
                                    <span>Senior Cloud Engineer</span>
                                </div>
                                {/* Right: Image (Centered & Bordered) */}
                                <div className='border-4 border-white  rounded-full overflow-hidden w-20 h-20 flex items-center justify-center -mt-10'>
                                    <img src="/images/TestiImg6.jpg" alt="About" className="w-full h-full object-cover" />
                                </div>                  
                            </div>
                        </div>
                    </div>
                    {/* Right Box */}
                    <div className='bg-black w-5/12 text-white rounded-xl'>
                        <div className='m-4 flex flex-col items-center'>
                            {/* Right: Image (Centered & Bordered) */}
                            <div className='border-4 border-white rounded-full overflow-hidden w-32 h-32 flex items-center justify-center -mt-20'>
                                <img src="/images/TestiImg8.png" alt="User Testimonial" className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Star Rating */}
                            <div className='flex justify-center items-center mt-4'>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 w-10 h-10 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>    
                            </div>

                            {/* Testimonial Text */}
                            <div className='space-y-3 text-center'>
                                <h2 className='text-sm text-white font-semibold'>Truly Grateful !!</h2>
                                <p className='text-sm text-gray-200'>
                                    The mentorship and structured learning path made a huge difference.  
                                    I finally mastered Kubernetes and cloud security, which led to my promotion!
                                </p>
                            </div>
                        </div>

                        <div className='mt-3 bg-customDark text-sm p-3 flex flex-col items-center rounded-b-xl text-white font-semibold'>
                            <span> Ryan Patel </span>
                            <span>Cloud Consultant</span>
                        </div>
                        
                    </div>
                </div>
                <div className=' flex flex-col items-center justify-center text-white '>
                    <div className='text-center space-y-4 bg-dark p-4 rounded-xl'>
                        <h2 className='text-sm font-bold'>I Was Very Impressed !!</h2>
                        <p className='text-sm text-gray-200'>From struggling to break into tech to now working at Microsoft as a Cloud Consultant—this program gave me the skills and confidence I needed.</p>
                        <p className='text-sm font-semibold'>Evan Roberts, Nia Daviesರ, Liam Roberts</p>
                    </div>
                    <div className=' flex mt-4 space-x-5'>
                        <div className='border-4 border-dark  rounded-full overflow-hidden w-24 h-24 flex items-center justify-center '>
                            <img src="/images/TestiImg3.png" alt="About" className="w-full h-full object-cover" />
                        </div> 
                        <div className='border-4 border-dark mt-5  rounded-full overflow-hidden w-32 h-32 flex items-center justify-center '>
                            <img src="/images/TestiImg-11.png" alt="About" className="w-full h-full object-cover" />
                        </div> 
                        <div className='border-4 border-dark  rounded-full overflow-hidden w-24 h-24 flex items-center justify-center '>
                            <img src="/images/TestiImg1.png" alt="About" className="w-full h-full object-cover" />
                        </div> 
                    </div>
                </div>
            </div>

            {/* 📌 Right Section */}
            <div className='lg:w-[55%] flex flex-row items-center gap-5'>
                {/* 📌 Left Sub-Column */}
                <div className='lg:w-[40%] flex flex-col  gap-5'>
                    <div className='bg-dark p-2 text-white rounded-lg font-montserrat'>
                        <img src="/images/TestiImg4.png" alt="About" className='w-full h-full rounded-lg object-cover' />
                        
                    </div>
                    <div className='bg-dark flex flex-col text-white rounded-lg'>
                        <div className='m-4 flex flex-col items-center space-y-3'>
                            {/* Right: Image (Centered & Bordered) */}
                            <div className='border-4 border-white rounded-full overflow-hidden w-24 h-24 flex items-center justify-center '>
                                <img src="/images/TestiImg2.png" alt="About" className="w-full h-full object-cover" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 w-10 h-10 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>    
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm text-center text-white font-bold'>I Really Appreciate !!</h2>
                                <p className='text-sm text-gray-200 text-center'>I loved the mentorship and structured learning path.</p>
                            </div>
                            
                        </div>
                        <div className='mt-3 bg-customDark text-sm p-3 flex flex-col items-center rounded-b-xl text-white font-montserrat font-semibold'>
                            <span> Marcus Lee </span>
                            <span>Cloud Data Engineer</span>
                        </div>
                        
                    </div>
                </div>

                {/* 📌 Right Sub-Column */}
                <div className='lg:w-[60%] flex flex-col  gap-5'>
                    <div className='bg-customDark flex flex-col items-center justify-center text-white mt-10 rounded-lg'>
                        <div className='m-4 flex flex-col items-center space-y-3 '>
                            {/* Right: Image (Centered & Bordered) */}
                            <div className='border-4 border-white rounded-full overflow-hidden w-32 h-32 flex items-center justify-center -mt-20 '>
                                <img src="/images/TestiImg8.png" alt="About" className="w-full h-full object-cover" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 w-10 h-10 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>
                                <Star className='text-yellow-500 fill-yellow-500'/>    
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm text-center text-white font-bold'>Aisha Khan - Cloud Security Analyst</h2>
                                <p className='text-sm text-gray-200 text-center'>From battling to enter the tech world to now thriving at Google as a Cloud Engineer this course equipped me with the expertise and courage I needed.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='bg-customDark flex rounded-lg shadow-lg text-white overflow-hidden p-6 items-center'>
                        {/* Left Side: Image (Takes same width as text) */}
                        <div className='w-1/2 flex justify-center'>
                            <img src="/images/TestiImg9.png" alt="Testimonial" className="w-32 h-32 rounded-full object-cover border-4 border-white" />
                        </div>

                        {/* Right Side: Testimonial Content */}
                        <div className='w-1/2 space-y-4 flex flex-col justify-center'>
                            <h2 className='text-sm leading-relaxed'>
                                I learned Terraform, CI/CD pipelines, and multi-cloud strategies, making me a top candidate in interviews.
                            </h2>

                            {/* Stacked Name & Job Title */}
                            <div className='flex flex-col items-center font-bold'>
                                <span className='text-sm '>Sophie Patel</span>
                                <span className='text-sm text-white text-center'>Cloud Engineer at Google</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-customDark flex items-center justify-between rounded-lg shadow-lg text-white p-6 gap-x-6'>
                        {/* Left Side: Text Content */}
                        <div className='w-2/3 space-y-3'>
                            <h2 className='text-base font-bold'>
                                The hands-on labs and real-world projects made all the difference
                            </h2>
                            <p className='text-sm leading-relaxed text-gray-200'>
                                I was able to secure a job as a Cloud Engineer even before completing the course!
                            </p>
                        </div>

                        {/* Right Side: Image & Name */}
                        <div className='flex flex-col items-center'>
                            {/* Profile Image */}
                            <div className='border-4 border-white rounded-full overflow-hidden w-32 h-32 flex items-center justify-center shadow-md'>
                                <img src="/images/TestiImg2.png" alt="Testimonial" className="w-full h-full object-cover" />
                            </div> 

                            {/* Name & Role */}
                            <div className='mt-3 text-sm p-3 text-white font-montserrat font-semibold w-full text-center'>
                                <span>James Harper</span>
                                <span className='block'>AWS Solutions Architect</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
        <div className="lg:hidden  flex flex-row gap-5 justify-center items-center rounded-lg">
        <Swiper
            modules={[Pagination]} // Enable pagination module
            spaceBetween={20} // Gap between slides
            slidesPerView={1} // Default 1 slide for mobile
            breakpoints={{
            768: { // md breakpoint in Tailwind (768px)
                slidesPerView: 2, // 2 slides for md and up
            },
            }}
            pagination={{ clickable: true }} // Pagination dots at bottom
            className="w-full max-w-7xl"
        >
            {/* Slide 1: Left Box Top */}
            <SwiperSlide>
            <div className="flex flex-col rounded-md w-full">
                <div className="bg-dark rounded-xl pt-6 text-white space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mx-6">
                        <p className="text-sm leading-relaxed">
                        The hands-on labs and real-world projects made all the difference. I was able to secure a job as a Cloud Engineer even before completing the course!
                        </p>
                    </div>
                    <div className="bg-customDark rounded-b-xl p-4 flex flex-row justify-between items-center">
                        <div className="flex flex-col text-white font-montserrat font-semibold">
                        <span className="text-base">Sophie Patel</span>
                        <span className="text-sm text-gray-300">Senior Cloud Engineer</span>
                        </div>
                        <div className="border-4 border-white rounded-full overflow-hidden w-20 h-20 flex items-center justify-center -mt-10 transform hover:scale-105 transition-transform duration-300">
                        <img src="/images/TestiImg1.png" alt="Sophie Patel" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            {/* Slide 2: Left Box Bottom */}
            <SwiperSlide>
            <div className="flex flex-col rounded-md w-full">
                <div className="bg-dark rounded-xl pt-6 text-white space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mx-6">
                    <p className="text-sm leading-relaxed">
                    The hands-on labs and real-world projects made all the difference. I was able to secure a job as a Cloud Engineer even before completing the course!
                    </p>
                </div>
                <div className="bg-customDark rounded-b-xl p-4 flex flex-row justify-between items-center">
                    <div className="flex flex-col text-white font-montserrat font-semibold">
                    <span className="text-base">Sophie Patel</span>
                    <span className="text-sm text-gray-300">Senior Cloud Engineer</span>
                    </div>
                    <div className="border-4 border-white rounded-full overflow-hidden w-20 h-20 flex items-center justify-center -mt-10 transform hover:scale-105 transition-transform duration-300">
                    <img src="/images/TestiImg1.png" alt="Sophie Patel" className="w-full h-full object-cover" />
                    </div>
                </div>
                </div>
            </div>
            </SwiperSlide>

            {/* Slide 3: Right Box */}
            <SwiperSlide>
                <div className="flex flex-col rounded-md w-full">
                    <div className="bg-dark rounded-xl pt-6 text-white space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mx-6">
                        <p className="text-sm leading-relaxed">
                        The hands-on labs and real-world projects made all the difference. I was able to secure a job as a Cloud Engineer even before completing the course!
                        </p>
                    </div>
                    <div className="bg-customDark rounded-b-xl p-4 flex flex-row justify-between items-center">
                        <div className="flex flex-col text-white font-montserrat font-semibold">
                        <span className="text-base">Sophie Patel</span>
                        <span className="text-sm text-gray-300">Senior Cloud Engineer</span>
                        </div>
                        <div className="border-4 border-white rounded-full overflow-hidden w-20 h-20 flex items-center justify-center -mt-10 transform hover:scale-105 transition-transform duration-300">
                        <img src="/images/TestiImg1.png" alt="Sophie Patel" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>

    </section>
  )
}

export default Testimonial
