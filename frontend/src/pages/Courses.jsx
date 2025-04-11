import Card from '@/components/Card'
import { Search } from 'lucide-react'
import React, { useState } from 'react'


const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'DevOps', 'AWS', 'Azure', 'Google Cloud']

  return (
    <div className='font-poppins'>
      <div className="relative">
        {/* 📸 Background Image */}
        <img
          src="/images/detailPageImg.webp"
          alt="Course Banner"
          className="w-full h-[60vh] object-cover"
        />

        {/* 🟣 Overlay */}
        <div className="absolute inset-0 bg-darkPurple/60 rounded-t-2xl"></div>

        {/* 📝 Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Unlock the Power of the Cloud</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl">
            Dive into real-world cloud strategies, sharpen your skills, and become a cloud computing pro.
          </p>
          <button className="mt-6 bg-white text-darkPurple font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            Start Learning Now
          </button>
        </div>
      </div>

      <h2 className='text-5xl font-bold my-10 text-center text-darkPurple'>Our Courses</h2>

      {/* Top Filters */}
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center px-10 pb-5 '>
        {/* Search Bar */}
        <div className="flex items-center border border-customDark rounded-md  px-3 py-2 w-full max-w-56">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none bg-transparent"
          />
          <Search className="w-5 h-5" />
        </div>

        {/* Categories */}
        <div>
          <ul className="flex items-center space-x-4 bg-[#f9f9f9] p-4 rounded-md">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer px-3 py-1 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-darkPurple text-white'
                    : 'text-darkPurple hover:bg-purple-100 hover:text-darkPurple'
                }`}
              >
                {category}
              </li>
            ))}
          </ul>

        </div>

        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            name="sort"
            className="border border-gray-300 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-darkPurple"
          >
            <option value="name">Name</option>
            <option value="date">Date</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      {/* Course Content */}
      {activeCategory === 'All' ? (
        <div className='mt-8 max-w-7xl mx-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-20 space-y-6'>
          <img src="/images/error-404.png" alt='Not Found' className='w-60 h-60 object-contain' />
          <p className='text-lg text-gray-600'>
            {activeCategory} courses not available. Check back soon.
          </p>
        </div>
      )}
    </div>
  )
}

export default Courses
