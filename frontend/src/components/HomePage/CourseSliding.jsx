import React from 'react';
import { Star } from "lucide-react";

const CourseSliding = () => {
  // Array of different courses
  const courses = [
    "AWS Solutions Architect",
    "Azure Cloud Engineer",
    "Google Cloud Professional",
    "Cloud Security Specialist",
    "DevOps Engineering",
    "Cloud Infrastructure Design"
  ];

  // Duplicate the array to ensure seamless scrolling
  const duplicatedCourses = [...courses, ...courses];

  return (
    <section className="py-8 bg-darkPurple text-white overflow-hidden">
      <marquee 
        behavior="scroll" 
        direction="left" 
        scrollamount="6" 
        className="w-full"
        loop="infinite"
      >
        <div className="flex items-center gap-8 whitespace-nowrap">
          {duplicatedCourses.map((course, index) => (
            <div key={index} className="flex items-center gap-3">
              <h3 className="text-lg font-semibold tracking-wide hover:text-purple-300 transition-colors duration-300">
                {course}
              </h3>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default CourseSliding;