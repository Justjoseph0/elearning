import React from "react";
import HeroImage from "../../../assets/landingHeroImage1.png"
import TopImage from "../../../assets/ToplandingHeroImage2.png"
import AwsLogo from "../../../assets/aws-image.png"
import CloudGuruLogo from "../../../assets/CloudGuru-logo.png"
import { Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const LandingHero = () => {
  return (
    <header className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden ">

      <div className="absolute top-0 left-0 w-full h-full bg-white z-10"></div>

      <div className="absolute bottom-0 w-full md:block md:top-0 md:right-0 h-[25%] md:w-[45%] md:h-full bg-lightDark z-20 md:clip-slant"></div>


      {/* Content Inside Hero */}
      <div className="relative z-30 text-black md:w-[80%] flex flex-col md:flex-row md:pt-10 px-5 md:px-0">
        <article className="md:w-[60%]">
          <div className="max-w-xl space-y-5 ">
            <motion.h1
              className="font-bold text-3xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              Master DevOps & Cloud Engineering for Career Growth
            </motion.h1>

            <div className="font-normal text-gray-600 space-y-4">
              <motion.h2 variants={textVariants} initial="hidden" animate="visible" custom={0.4}>
                Job focused skills - Land a high paying Cloud Engineer role
              </motion.h2>

              <motion.h2 variants={textVariants} initial="hidden" animate="visible" custom={0.6}>
                Gain expertise in CI/CD, Infrastructure as Code, Microservices,
                and Cloud Monitoring with expert-led training. Earn a globally
                recognized certification and accelerate your career in Cloud 
                Engineering.
              </motion.h2>

              <motion.div
                className="md:space-x-4 md:space-y-0 space-y-2 flex flex-col md:flex-row"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0.8}
              >
                <button className="bg-primary text-sm font-semibold rounded text-white p-4 transition duration-300 ease-in-out hover:bg-hoverDark hover:shadow-lg">
                  View Training Options
                </button>
                <button className="border-primary border-2 text-primary text-sm font-semibold rounded px-4 py-3 transition duration-300 ease-in-out hover:bg-hoverDark hover:border-none hover:py-4 hover:text-white hover:shadow-lg">
                  Get Free Consultation
                </button>
              </motion.div>

              <motion.h2
                className="text-gray-600"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1.0}
              >
                Group Enrollment with Friends or Colleagues |{" "}
                <a
                  href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-hoverLight underline ml-1"
                >
                  Get in Touch
                </a>
              </motion.h2>

              {/* Animated Logos Section */}
              <motion.div 
                className="flex items-center justify-center gap-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.img 
                  src={AwsLogo} 
                  alt="AWS Logo" 
                  className="w-24 h-24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src={CloudGuruLogo} 
                  alt="A Cloud Guru Logo" 
                  className="w-24 h-24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </article>

        <aside className="relative md:w-[40%] mt-10 md:mt-0 ">
          {/* Circle with Image Inside */}
          <motion.div
            className="relative flex items-center justify-center w-40 h-40 md:w-72 md:h-72 rounded-full bg-[#66B2FF]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Image inside the Circle */}
            <motion.img
              src={HeroImage}
              alt="AWS DevOps Training Hero"
              className="w-28 h-28 md:w-60 md:h-60 rounded-full border-4 border-primary object-cover animate-pulse-scale"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            />
          </motion.div>

          {/* Background Shape */}
          <motion.div
            className="absolute hidden md:block top-8 md:top-16 right-10 md:right-28 -z-10 h-20 w-32 bg-primary rounded-lg shadow-[0_0_20px_5px_rgba(79,70,229,0.5)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          ></motion.div>

          {/* Second Image on Top of the Circle */}
          <motion.img
            src={TopImage}
            alt="AWS DevOps Training Overlay"
            className="absolute z-30 -bottom-10 md:-bottom-10 -left-12 md:left-20 -translate-x-1/2 w-40 h-40 md:w-[400px] md:h-[400px] object-cover animate-pulse-scale"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          />

          {/* Stats (Users & Ratings) */}
            <motion.div
              className="absolute z-40 bottom-10 right-0 md:left-0 flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
            >
            <div className="bg-white shadow-lg rounded-md p-3 font-bold flex items-center justify-center gap-2">
              <Users className="text-blue-500 w-5 h-5" />
              <span>100+ Learners</span>
            </div>

            <div className="bg-white shadow-lg rounded-md p-3 font-bold flex items-center justify-center gap-2">
              <Star className="text-yellow-500 w-5 h-5" />
              <span>3.5</span>
              <span className="text-sm font-medium">4 ratings</span>
            </div>
          </motion.div>
        </aside>   
            
      </div>
    </header>
  );
};

export default LandingHero;        