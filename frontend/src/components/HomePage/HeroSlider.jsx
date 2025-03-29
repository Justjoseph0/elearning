import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import imageSlider from "../../assets/heroslider1.png";
import imageSlider2 from "../../assets/heroslider2.png";
import imageSlider3 from "../../assets/heroslider3.png";

const HeroSlider = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.3 } }),
  };
  return (
    <div className="relative h-[70vh] w-[90%] ml-auto flex space-y-20 items-center justify-center">
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
            className="relative flex flex-col-reverse md:flex-row justify-between h-full"
          >
            {/* Left Side - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full relative z-10 mt-16 bg-white md:bg-transparent p-6 md:p-0"
            >
              <motion.h1
                className="text-2xl md:text-4xl font-bold leading-tight"
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
                className="text-lg md:text-xl mt-4 text-gray-700">
                Future-Proof Your Career 🚀 Learn High-Income Skills Today!
              </motion.h3>

              <motion.div
                className="flex flex-col gap-3 mt-4 text-lg font-semibold text-gray-900"
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
                className="mt-6 flex gap-4">
                <motion.button 
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.5 }}
                  className="bg-primary text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg"
                >
                  Our Training Options
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.5 }}
                  className="border-primary border-2 text-primary text-sm font-semibold rounded px-4 py-3 transition duration-300 ease-in-out hover:bg-hoverDark hover:border-none hover:py-4 hover:text-white hover:shadow-lg"
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
              className="md:w-[60%] absolute right-0 w-1/2"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                src={imageSlider}
                alt="Best Online Courses"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute hidden md:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
            </motion.div>
          </motion.header>
        </SwiperSlide>
        
        {/* Slide 2 */}
        <SwiperSlide>
          <header className="relative flex flex-col-reverse md:flex-row justify-between h-full">
            {/* Left Side - Text */}
            <div className="w-full relative z-10 mt-16 bg-white md:bg-transparent p-6 md:p-0">
              {/* SEO-Optimized Heading */}
              <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-2xl">
                Master In-Demand Skills & Advance Your Career
              </h1>
              <h3 className="text-lg md:text-xl max-w-2xl mt-4 text-gray-700">
                Gain hands-on experience with expert-led courses designed for real-world success.
              </h3>

              {/* 🔥 Key Highlights in a Column */}
              <div className="flex flex-col gap-3 mt-4 text-lg font-semibold text-gray-900">
                <span className="flex items-center gap-2">📚 Access Exclusive Learning Resources</span>
                <span className="flex items-center gap-2">💡 Practical Projects & Case Studies</span>
                <span className="flex items-center gap-2">🌍 Join a Community of Professionals</span>
                <span className="flex items-center gap-2">🔑 Unlock New Career Opportunities</span>
              </div>

              {/* 📌 Call-to-Action Button */}
              <div className="mt-6">
                <button className="bg-primary text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg">
                  Explore Learning Paths
                </button>
              </div>
            </div>

            {/* Right Side - Image with white overlay gradient */}
            <div className="md:w-[60%] absolute right-0 w-1/2">
              <img
                src={imageSlider2}
                alt="Best Online Courses"
                className="w-full h-[550px] object-cover"
              />
              {/* White gradient flowing from text side into image */}
              <div className="absolute hidden md:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
            </div>
          </header>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <header className="relative flex flex-col-reverse md:flex-row justify-between h-full">
            {/* Left Side - Text */}
            <div className="w-full relative z-10 mt-16 bg-white md:bg-transparent p-6 md:p-0">
              {/* SEO-Optimized About Us Heading */}
              <h1 className="text-2xl md:text-4xl max-w-2xl font-bold leading-tight">
                Empowering Learners, Transforming Futures
              </h1>
              <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-700">
                We are dedicated to providing top-notch education, helping individuals and professionals gain real-world skills to thrive in their careers.  
              </p>

              {/* 📌 Call-to-Action Button */}
              <div className="mt-6">
                <button className="bg-primary text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg">
                  Learn More About Us
                </button>
              </div>
            </div>


            {/* Right Side - Image with white overlay gradient */}
            <div className="md:w-[60%] absolute right-0 w-1/2">
              <img
                src={imageSlider3}
                alt="Best Online Courses"
                className="w-full h-[550px] object-cover"
              />
              {/* White gradient flowing from text side into image */}
              <div className="absolute hidden md:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
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
