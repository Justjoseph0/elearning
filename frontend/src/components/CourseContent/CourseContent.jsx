import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import courseData from "../../Data/courseData.json";
import { motion, useInView } from "framer-motion";

const CourseContent = () => {
  const [openLesson, setOpenLesson] = useState(null);
  const [lessons, setLessons] = useState([]);

  // Load the JSON data when the component mounts
  useEffect(() => {
    setLessons(courseData);
  }, []);

  const toggleLesson = (id) => {
    setOpenLesson(openLesson === id ? null : id);
  };

  // Ref for scroll trigger
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-5 px-6 md:px-0"
    >
      <h2 className="text-2xl font-bold">Course Content</h2>
      <ul className="max-w-3xl space-y-3">
        {lessons.map((lesson, index) => (
          <motion.li
            key={lesson.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#f9f9f9] border border-gray-400 rounded-md p-5 cursor-pointer shadow-md"
            onClick={() => toggleLesson(lesson.id)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{lesson.title}</span>
              {openLesson === lesson.id ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openLesson === lesson.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-3 bg-gray-100 border-t border-gray-300 rounded-md">
                <p className="text-gray-700">{lesson.content}</p>
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default CourseContent;
