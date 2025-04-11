import { BookOpen, Clock, Signal, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <Link to="/courses/1">
        <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
            {/* 🌥️ Image */}
            <div className="w-full rounded-lg overflow-hidden">
                <img
                    src="/images/TestiImg6.jpg" 
                    alt="Cloud Computing"
                    className="w-full object-cover rounded-lg shadow-md"
                />
            </div>

            {/* 📖 Text Content */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    {/* ⭐ Rating Number */}
                    <h2 className="font-bold">4.3</h2>
                    
                    {/* ⭐ Stars */}
                    <div className="flex gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>

                    {/* 👥 Number of Reviews */}
                    <h2>(200)</h2>
                </div>
                <h3 className="text-xl font-semibold text-darkPurple">Cloud Computing Fundamentals</h3>
                <p className="text-sm ">
                    Learn the basics of cloud infrastructure, deployment models, and core services.
                </p>
                <div className="flex items-center gap-4 text-sm">
                    {/* 📚 Lessons */}
                    <div className="flex items-center gap-1">
                        <BookOpen className="w-5 h-5 text-darkPurple" />
                        <span>4 Lessons</span>
                    </div>

                    {/* ⏳ Duration */}
                    <div className="flex items-center gap-1">
                        <Clock className="w-5 h-5 text-darkPurple" />
                        <span>22hrs 5s</span>
                    </div>

                    {/* 🎯 Level */}
                    <div className="flex items-center gap-1">
                        <Signal className="w-5 h-5 text-darkPurple" />
                        <span>Beginner</span>
                    </div>
                </div>
                <div className=" rounded-lg flex justify-between items-center">
                    {/* Tutor Info */}
                    <div className="flex items-center gap-3">
                        <img 
                            src="/images/AboutImg2.jpg" 
                            alt="Tutor" 
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                    </div>

                    {/* Price */}
                    <h2 className="text-xl font-bold text-black">$99.99</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card