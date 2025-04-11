import { CircleCheckBig } from 'lucide-react';
import React, { useState } from 'react'

const CourseDetail = () => {
   const [activeCategory, setActiveCategory] = useState('Description');
  
    const categories = ['Description', 'Course Content', 'Teacher', 'Reviews']
  return (
    <div className='py-10 max-w-7xl mx-auto font-poppins'>
        <div className="relative">
            <img
                src="/images/detailPageImg.webp"
                alt="Course Banner"
                className="w-full h-64 object-cover rounded-t-2xl"
            />

            <div className="absolute inset-0 bg-darkPurple/60 rounded-t-2xl"></div>

            {/* 📝 Text on Image */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white">
                <h1 className="text-3xl md:text-4xl font-bold">Cloud Computing Fundamentals</h1>
                <p className="text-lg mt-2">Master the cloud from scratch with hands-on guidance</p>
            </div>
        </div>
        <div className='bg-[#f9f9f9] py-6 px-5 md:px-10 flex flex-col space-y-6 '>
            <div className='border-dark border-b pb-6 max-w-3xl'>
                <ul className='flex space-x-6 text-sm'>
                    {categories.map((category) => (
                    <li
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`cursor-pointer font-medium transition relative pb-1 ${
                        activeCategory === category
                            ? 'text-darkPurple after:content-[""] after:absolute after:left-0 after:-bottom-6 after:h-[4px] after:w-full after:bg-darkPurple'
                            : 'hover:text-darkPurple'
                        }`}
                    >
                        {category}
                    </li>
                    ))}
                </ul>
            </div>
            <div className='flex md:flex-row flex-col justify-between '>
                <div className='max-w-2xl'>
                {/* Course Content */}
                {activeCategory === 'Description' ? (
                    <div className='space-y-4 text-gray-700 '>
                        <p>
                            This course provides a comprehensive introduction to Cloud Computing. You'll learn about the core concepts,
                            deployment models, and leading service providers like AWS, Azure, and Google Cloud Platform.
                        </p>
                        <p>
                            Designed for beginners, this course includes practical use-cases and hands-on exercises to help you build real-world experience.
                        </p>
                    </div>
                ) : activeCategory === 'Course Content' ? (
                    <ul className='list-disc list-inside space-y-2 text-gray-700 '>
                        <li>Introduction to Cloud Computing</li>
                        <li>Cloud Service Models (IaaS, PaaS, SaaS)</li>
                        <li>Deployment Models (Public, Private, Hybrid)</li>
                        <li>Introduction to AWS</li>
                        <li>Working with Virtual Machines</li>
                        <li>Cloud Storage Solutions</li>
                        <li>Final Project</li>
                    </ul>
                ) : activeCategory === 'Teacher' ? (
                    <div className='flex items-center space-x-6 text-gray-700 '>
                        <img
                            src="/images/AboutImg2.jpg"
                            alt="Tutor"
                            className="w-24 h-24 rounded-full object-cover shadow-md"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-darkPurple">John Doe</h3>
                            <p className="mt-2">
                            Senior Cloud Engineer at TechNova with 10+ years of experience in cloud architecture,
                            DevOps, and infrastructure automation.
                            </p>
                            <p>He’s taught over 12,000 students worldwide and specializes in making technical topics accessible and fun.</p>
                        </div>
                    </div>
                ) : activeCategory === 'Reviews' ? (
                    <div className='space-y-4 '>
                        <div className='bg-white shadow-md p-4 rounded-lg'>
                            <h4 className='font-bold text-darkPurple'>Jane Smith</h4>
                            <p>"Very thorough and beginner-friendly. The examples helped me a lot in understanding core cloud concepts!"</p>
                        </div>
                        <div className='bg-white shadow-md p-4 rounded-lg'>
                            <h4 className='font-bold text-darkPurple'>Michael Lee</h4>
                            <p>"The course layout is amazing and the instructor knows his stuff. Highly recommend it!"</p>
                        </div>
                    </div>
                ) : null}
                </div>
                <div className='bg-[#f9f9f9] shadow-2xl rounded-xl p-3 space-y-3 mt-6 md:-mt-64 h-fit md:z-30'>
                    <img
                        src="/images/detailPageImg.webp"
                        alt="Course Banner"
                        className="w-full h-28 md:w-56 md:h-28 object-cover rounded-md"
                    />
                    <div className='space-y-2 flex flex-col items-center'>
                        <div className='space-y-1'>
                            <h5 className=' text-sm'>Course Price</h5>
                            <h2 className='text-2xl text-darkPurple font-semibold'>$ 69.99</h2>
                        </div>
                        <h5 className='text-sm'>Course Format</h5>
                        <ul className='text-sm'>
                            <li className='flex space-x-2'>
                                <CircleCheckBig /> 
                                <span> 5 Video Sessions</span>
                            </li>
                            <li className='flex space-x-2'>
                                <CircleCheckBig /> 
                                <span> 5 Video Sessions</span>
                            </li>
                            <li className='flex space-x-2'>
                                <CircleCheckBig /> 
                                <span> 5 Video Sessions</span>
                            </li>
                            <li className='flex space-x-2'>
                                <CircleCheckBig /> 
                                <span> 5 Video Sessions</span>
                            </li>
                            <li className='flex space-x-2'>
                                <CircleCheckBig /> 
                                <span> 5 Video Sessions</span>
                            </li>
                            
                        </ul>
                        <div className='text-center'>
                            <button className='bg-darkPurple text-white px-4 py-1 rounded-2xl'>Get Course</button>
                        </div>
                    </div>

                </div>

            </div>
            
            


        </div>
        
        
      
    </div>
  )
}

export default CourseDetail
