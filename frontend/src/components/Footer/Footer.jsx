import React from 'react'
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='py-5 bg-black font-montserrat mt-20 '>
        <div className=' max-w-[80%] mx-auto flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-10'>
                {/* Call Us */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="bg-primary text-white p-2 rounded-full">
                        <AiOutlinePhone className="text-4xl" />
                    </div>
                    <h3 className="font-semibold text-lg text-white">Call Us</h3>
                    <p className="text-gray-400 text-sm font-semibold">+13466299424</p>
                </div>

                {/* Email Us */}
                <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary text-white p-2 rounded-full">
                    <AiOutlineMail className="text-4xl" />
                </div>
                <h3 className="font-semibold text-lg text-white">Email Us</h3>
                <p className="text-gray-400 text-sm font-semibold">atoyebijoshua095@example.com</p>
                </div>

                {/* Visit Us */}
                <div className="flex flex-col items-center space-y-2">
                <div className="bg-primary text-white p-2 rounded-full">
                    <AiOutlineHome className="text-4xl" />
                </div>
                <h3 className="font-semibold text-lg text-white">Visit Us</h3>
                <p className="text-gray-400 text-sm font-semibold">12320 Barker Cypress Rd Ste 600 #177 Cypress, TX 77429</p>
                </div>
            </div>

            <div className='my-3 border-b-2 border-gray-600'></div>

            <div className='flex flex-col md:flex-row justify-between text-white '>
                <div className=" flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-3">About</h2>
                    <ul className="space-y-2 text-center font-medium text-gray-400">
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Who We Are</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Our Mission</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">FAQs</a></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center '>
                    <h2 className="text-xl font-semibold mb-3">Company</h2>
                    <ul className="space-y-2 text-center font-medium text-gray-400">
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">About Us</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Careers</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Press & Media</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Contact</a></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className="text-xl font-semibold mb-3">Resources</h2>
                    <ul className="space-y-2 text-center font-medium text-gray-400">
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Blog</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Help Center</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">FAQs</a></li>
                        <li><a href="#" className="hover:text-hoverLight transition duration-300">Guides</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center text-white space-y-3">
                    <h2 className="text-xl font-semibold">Subscribe</h2>
                    <p className="text-gray-300 text-center max-w-sm">
                    Get exclusive premium course updates straight to your inbox.
                    </p>
                    
                    <div className="flex w-full max-w-md space-x-2">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 p-5 rounded-md border-white border-2 focus:ring-2 focus:ring-hoverDark"
                    />
                    <Button className="bg-primary hover:bg-hoverDark text-white  p-5 rounded-md flex items-center">
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                    </div>
                </div>
            </div>

            <div className='my-3 border-b-2 border-gray-600'></div>

            <div class="mx-auto flex flex-col items-center gap-6 px-4 text-white">

                <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-teal-400 text-xl border-2 border-gray-600 rounded-full p-3">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-white hover:text-teal-400 text-xl border-2 border-gray-600 rounded-full p-3">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-white hover:text-teal-400 text-xl border-2 border-gray-600 rounded-full p-3">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white hover:text-teal-400 text-xl border-2 border-gray-600 rounded-full p-3">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="text-white hover:text-teal-400 text-xl border-2 border-gray-600 rounded-full p-3">
                        <FaYoutube />
                    </a>
                </div>
    
                <div class="text-center md:text-left text-sm">
                    &copy; 2024 HeirloomNexus Inc. All rights reserved.
                </div>
            </div>
        </div>

        
    </footer>
  )
}

export default Footer