import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from "lucide-react";
import CompanyLogo from "../../assets/HEIRLOOMNEXUS.png";
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showNavBar, setShowNavBar] = useState(false);
  return (
    <nav className='font-montserrat shadow-md mb-10 md:mb-0 '>
        <div className='bg-black md:block hidden text-white py-4'>
            <div className='flex flex-col md:flex-row justify-between items-center max-w-[80%] mx-auto text-center'>
                {/* Learn at Your Pace */}
                <div className='flex items-center space-x-3 mb-4 md:mb-0'>
                    <span className='text-yellow-400 text-2xl'>🕒</span>
                    <div>
                        <h3 className='font-semibold text-lg '>Learn at Your Pace</h3>
                        <p className='text-gray-400 text-sm'>"Access lifetime course materials anytime."</p>
                    </div>
                </div>

                <div className='hidden md:block border-l border-gray-600 h-10'></div>

                {/* Secure Payment */}
                <div className='flex items-center space-x-3 mb-4 md:mb-0'>
                    <span className='text-hoverLight text-2xl'>🔒</span>
                    <div>
                        <h3 className='font-semibold text-lg'>Secure Payment</h3>
                        <p className='text-gray-400 text-sm'>"Safe & easy checkout for all courses."</p>
                    </div>
                </div>

                <div className='hidden md:block border-l border-gray-600 h-10'></div>

                {/* Expert-Led Courses */}
                <div className='flex items-center space-x-3'>
                    <span className='text-hoverLight text-2xl'>🎓</span>
                    <div>
                        <h3 className='font-semibold text-lg'>Expert-Led Courses</h3>
                        <p className='text-gray-400 text-sm'>"Learn from top industry professionals."</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row max-w-[80%] mx-auto justify-between items-center py-4'>
            {/* Logo Placeholder */}
            <div>
                <a href="#" className="flex items-center space-x-2">
                    <img src={CompanyLogo} alt="Company Logo" className="w-20 h-20" />
                </a>
            </div>
            <button className="text-2xl md:hidden" onClick={() => setShowNavBar(!showNavBar)}>
                {showNavBar ? <X /> : <Menu />}
            </button>

            {/* Contact & Address */}
            <div className='md:flex hidden space-x-7 items-center'>
                <div className='flex items-center space-x-3'>
                    <Phone className="text-primary " size={48} />
                    <div>
                        <h3 className='font-semibold text-xl text-gray-900'>Contact Us</h3>
                        <a 
                            href="https://wa.me/2349128721745" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-hoverLight text-sm font-semibold"
                        >
                            +234 912 872 1745
                        </a>
                    </div>
                </div>

                <div className='hidden md:block border-l border-gray-600 h-10'></div>

                {/* Address */}
                <div className='flex items-center space-x-3'>
                    <MapPin className="text-primary" size={48} />
                    <div>
                        <h3 className='font-semibold text-xl text-gray-900'>Our Address</h3>
                        <p className='text-gray-500 text-sm max-w-52 font-semibold '>12320 Barker Cypress Rd Ste 600 #177 Cypress, TX 77429</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='hidden mb-5 md:block border-b-2 border-gray-600'></div>

        <div className='max-w-[80%] mx-auto hidden md:flex justify-between '>
            <ul className='flex space-x-8'>
                {["Home", "Courses", "About Us", "Contact Us", "Testimonials"].map((name, index) => (
                    <li key={index}>
                        <NavLink 
                            to={`/${name.toLowerCase().replace(/ /g, "")}`}
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='flex space-x-5'>
                <button className='btn-auth'>Login</button>
                <button className='btn-auth'>Register</button>
                <button className='btn-auth'>Logout</button>
            </div>
        </div>

        <div className='hidden mt-5 md:block border-b-2 border-gray-600'></div>

        {/* Responsive Navbar for Mobile */}
        <ResponsiveNavbar isOpen={showNavBar} setIsOpen={setShowNavBar} />
    </nav>
  )
}

export default Navbar;
