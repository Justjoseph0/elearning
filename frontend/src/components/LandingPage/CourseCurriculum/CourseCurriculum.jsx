import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from "lucide-react";
import TopImage from "../../../assets/ToplandingHeroImage2.png";

const CourseCurriculum = () => {
  return (
    <section className='px-6 md:px-0'>
      <h2 className='text-2xl font-bold mb-6'>Common Challenges & Our Solutions</h2>
      
      <motion.div 
        className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="md:w-[60%] space-y-6 max-w-2xl tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {[
            {
              problem: "The Problem: Course Selection Confusion",
              solution: "Our Solution",
              desc: "Many students struggle to find the right course that matches their career goals. With so many options available, it's easy to feel overwhelmed.",
              solutionDesc: "We provide personalized course recommendations based on your skill level, interests, and career aspirations, ensuring you choose the right path."
            },
            {
              problem: "The Problem: Lack of Practical Experience",
              solution: "Our Solution",
              desc: "Many online courses focus heavily on theory but lack real-world applications, leaving students unprepared for the job market.",
              solutionDesc: "Our courses emphasize hands-on projects, real-world case studies, and industry-level exercises to help you gain practical experience."
            },
            {
              problem: "The Problem: No Guidance or Mentorship",
              solution: "Our Solution",
              desc: "Many students lack support when learning, leading to frustration and dropping out.",
              solutionDesc: "We offer one-on-one mentorship, live Q&A sessions, and community support to ensure you get the guidance you need."
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className='bg-[#f9f9f9] border border-gray-400 p-4 rounded-lg shadow-md cursor-pointer'
            >
              <h3 className="font-medium">{item.problem}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
              <h3 className="font-medium mt-3">{item.solution}</h3>
              <p className="text-gray-700 text-sm">{item.solutionDesc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side */}
        <motion.div 
          className='md:w-[40%] flex flex-col gap-5'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className='bg-lightDark text-white rounded-md shadow-md flex flex-row items-center justify-between p-5'
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className='space-y-2 mr-5'>
              <h4 className='text-sm'>Contact Us</h4>
              <h2 className='text-xl font-semibold'>+65 31 585082</h2>
            </div>
            <div className='border-l border-gray-600 h-10'></div>
            <Phone className="text-primary w-16 h-16" />
          </motion.div>

          <motion.div 
            className='bg-white rounded-md shadow-md p-5'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center space-y-6 md:space-y-6 md:space-x-6">
              <div className='flex items-center space-x-7'>
                <motion.img 
                  src={TopImage} 
                  alt="Instructor" 
                  className="w-28 h-28 rounded-full object-cover border-4 border-primary"
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <h2 className="text-2xl font-bold text-primary">Meet Your Instructor</h2>
              </div>

              <div className=" md:text-left">
                <p className="mt-2 text-gray-700">
                  <strong>John Doe</strong> is a seasoned software engineer with over 10 years of industry experience. 
                  He has worked with top tech companies and specializes in <strong>full-stack development</strong>. 
                  His mission is to make learning <strong>accessible, practical, and impactful</strong>.
                </p>
                <p className="mt-3 text-gray-600">
                  🚀 Join his course and start your journey towards expertise today!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CourseCurriculum;
