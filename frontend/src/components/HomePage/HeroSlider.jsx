import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import imageSlider from "/images/heroslider1.png";
import imageSlider2 from "/images/heroslider2.png";
import imageSlider3 from "/images/heroslider3.png";


const HeroSlider = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.3 } }),
  };
  return (
    <div className="relative h-[70vh] w-full lg:w-[90%] ml-auto flex items-center justify-center ">
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <motion.header 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col-reverse lg:flex-row lg:justify-between h-full text-center lg:text-left"
          >
            {/* Left Side - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 relative z-10 bg-white lg:bg-transparent p-6"
            >
              <motion.h1
                className="text-2xl lg:text-4xl font-bold leading-tight"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Learn. Grow. Succeed.
              </motion.h1>
              <motion.h3
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={4}
                className="text-lg lg:text-xl mt-4 text-gray-700">
                Future-Proof Your Career 🚀 Learn High-Income Skills Today!
              </motion.h3>

              <motion.div
                className="flex flex-col gap-3 mt-4 text-sm font-semibold items-center lg:items-start text-gray-900"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={6}
              >
                <span className="flex items-center gap-2">🎓 100+ Expert Courses</span>
                <span className="flex items-center gap-2">💼 Industry Recognized Certificates</span>
                <span className="flex items-center gap-2">🚀 Lifetime Access & Updates</span>
                <span className="flex items-center gap-2">🔥 Learn Anytime, Anywhere</span>
              </motion.div>

              <motion.div 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={8}
                className="mt-6 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.5 }}
                  className="bg-darkPurple text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg"
                >
                  Our Training Options
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.5 }}
                  className="border-[#720034] border-2 text-[#720034] text-sm font-semibold rounded px-4 py-3 transition duration-300 ease-in-out hover:bg-[#720034] hover:text-white"
                >
                  Get Free Consultation
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Image with animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="w-full lg:w-1/2 relative overflow-hidden" // Added 'overflow-hidden'
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                src={imageSlider}
                alt="Best Online Courses"
                className="w-full h-full object-cover max-h-[500px]" // Added 'max-h-[550px]'
              />
              <div className="absolute lg:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
            </motion.div>
          </motion.header>
        </SwiperSlide>
        
        {/* Slide 2 */}
        <SwiperSlide>
          <header className="relative flex flex-col-reverse lg:flex-row h-full text-center lg:text-left">

            {/* Left Side - Text */}
            <div className="w-full lg:w-1/2 relative z-10 bg-white lg:bg-transparent p-6">
              {/* SEO-Optimized Heading */}
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                Master In-Demand Skills & Advance Your Career
              </h1>
              <h3 className="text-lg lg:text-xl mt-4 text-gray-700">
                Gain hands-on experience with expert-led courses designed for real-world success.
              </h3>

              {/* 🔥 Key Highlights in a Column */}
              <div className="flex flex-col gap-3 mt-4 text-sm font-semibold items-center lg:items-start text-gray-900">
                <span className="flex items-center gap-2">📚 Access Exclusive Learning Resources</span>
                <span className="flex items-center gap-2">💡 Practical Projects & Case Studies</span>
                <span className="flex items-center gap-2">🌍 Join a Community of Professionals</span>
                <span className="flex items-center gap-2">🔑 Unlock New Career Opportunities</span>
              </div>

              {/* 📌 Call-to-Action Button */}
              <div className="mt-6">
                <button className="bg-darkPurple text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg">
                  Explore Learning Paths
                </button>
              </div>
            </div>

            {/* Right Side - Image with white overlay gradient */}
            <div className="w-full lg:w-1/2 relative overflow-hidden">
              <img
                src={imageSlider2}
                alt="Best Online Courses"
                className="w-full h-full object-cover max-h-[500px]"
              />
              {/* White gradient flowing from text side into image */}
              <div className="absolute hidden lg:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
            </div>
          </header>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <header className="relative flex flex-col-reverse lg:flex-row h-full text-center lg:text-left">
            {/* Left Side - Text */}
            <div className="w-full lg:w-1/2 relative z-10 bg-white lg:bg-transparent p-6">
              {/* SEO-Optimized About Us Heading */}
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                Empowering Learners, Transforming Futures
              </h1>
              <p className="text-lg lg:text-xl mt-4 text-gray-700">
                We are dedicated to providing top-notch education, helping individuals and professionals gain real-world skills to thrive in their careers.  
              </p>

              {/* 📌 Call-to-Action Button */}
              <div className="mt-6">
                <button className="bg-darkPurple text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg">
                  Learn More About Us
                </button>
              </div>
            </div>

            {/* Right Side - Image with white overlay gradient */}
            <div className="w-full lg:w-1/2 relative overflow-hidden">
              <img
                src={imageSlider3}
                alt="Best Online Courses"
                className="w-full h-full object-cover max-h-[500px]"
              />
              {/* White gradient flowing from text side into image */}
              <div className="absolute hidden lg:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
            </div>
          </header>
        </SwiperSlide>
        
      </Swiper>

      {/* Pagination on the left */}
      <div className="swiper-pagination absolute left-4 bottom-10"></div>
    </div>
  );
};

export default HeroSlider;