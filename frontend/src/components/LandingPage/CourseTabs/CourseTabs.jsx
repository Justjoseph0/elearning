import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState("info");

  // Ref for scroll trigger
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 px-6 md:px-0"
    >
      {/* Tabs */}
      <motion.div 
        className="max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex space-x-7 border-b border-black relative">
          <h2
            className={`text-xl font-bold pb-2 cursor-pointer transition-all duration-300 ${
              activeTab === "info" ? "text-primary border-b-4 border-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Course Info
          </h2>
          <h2
            className={`text-xl font-bold pb-2 cursor-pointer transition-all duration-300 ${
              activeTab === "reviews" ? "text-primary border-b-4 border-primary" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </h2>
        </div>

        {/* Tab Content with Animation */}
        <div className="mt-5">
          {activeTab === "info" && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-5 bg-[#f9f9f9] rounded-md space-y-5"
            >
              <h2 className="font-semibold">📚 Course Information</h2>
              <p className="text-sm">Dear Interested Ones</p>
              <p className="text-sm">
                Welcome to your learning hub! Thank you for choosing our platform for your learning journey. We are committed to providing you with high-quality training and resources to support your success.
              </p>
              <p className="text-sm">
                Unlock premium learning resources, expert-led courses, real-time support, and exclusive materials—all designed to help you grow and succeed. 🚀
              </p>
              <p className="text-sm">For any issues or support, feel free to reach out to our team at support@yourcourse.com.</p>
            </motion.div>
          )}

          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-5"
            >
              <MessageCircle className="w-10 h-10 text-gray-400 mb-2" />
              <p className="text-gray-500 text-lg">No reviews yet</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Stacked Cards with Scroll Animation */}
      <motion.div
        className="w-[300px] mr-10 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {/* First Card */}
        <motion.div
          className="bg-white border-2 border-primary rounded-lg p-5 shadow-lg w-full 
                    transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3">
            
            <span className="text-primary w-5 h-5"><CheckCircle /></span>
            <h3 className="text-lg font-semibold">Why This Course?</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Get hands-on experience with real-world projects.
          </p>
        </motion.div>

        {/* Second Card (Overlap with -mt & -mr) */}
        <motion.div
          className="bg-white border-2 border-primary rounded-lg p-5 shadow-lg w-full 
                    transition-all duration-300 cursor-pointer -mt-4 ml-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3">
            
            <span className="text-primary w-5 h-5"><CheckCircle /></span>
            <h3 className="text-lg font-semibold">Course Benefits</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Learn from industry experts and gain certifications.
          </p>
        </motion.div>

        {/* Third Card (More overlap) */}
        <motion.div
          className="bg-white border-2 border-primary rounded-lg p-5 shadow-lg w-full 
                    transition-all duration-300 cursor-pointer -mt-4 ml-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3">
            
            <span className="text-primary w-5 h-5"><CheckCircle /></span>
            <h3 className="text-lg font-semibold">Career Impact</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Boost your career with valuable skills.
          </p>
        </motion.div>
      </motion.div>


    </motion.section>
  );
};

export default CourseTabs;
