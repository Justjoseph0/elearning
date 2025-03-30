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
    <div className="relative h-[70vh] w-full md:w-[90%] ml-auto flex items-center justify-center px-4 md:px-0">
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="h-full w-full"
      >
        {[imageSlider, imageSlider2, imageSlider3].map((image, index) => (
          <SwiperSlide key={index}>
            <motion.header 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative flex flex-col-reverse md:flex-row justify-between h-full items-center text-center md:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full md:w-1/2 relative z-10 bg-white md:bg-transparent p-6"
              >
                <motion.h1
                  className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight"
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
                  className="text-sm sm:text-lg md:text-xl mt-4 text-gray-700"
                >
                  Future-Proof Your Career 🚀 Learn High-Income Skills Today!
                </motion.h3>
                <motion.div
                  className="flex flex-col gap-3 mt-4 text-sm sm:text-lg font-semibold text-gray-900"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={6}
                >
                  <span>🎓 100+ Expert Courses</span>
                  <span>💼 Industry Recognized Certificates</span>
                  <span>🚀 Lifetime Access & Updates</span>
                  <span>🔥 Learn Anytime, Anywhere</span>
                </motion.div>
                <motion.div 
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={8}
                  className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <motion.button 
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.5 }}
                    className="bg-[#720034] text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-opacity-90"
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-full md:w-1/2"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  src={image}
                  alt="Best Online Courses"
                  className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
                />
              </motion.div>
            </motion.header>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination absolute left-4 bottom-10"></div>
    </div>
  );
};

export default HeroSlider;
