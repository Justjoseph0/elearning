import React from "react";
import { Phone, Mail, Home, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 bg-customDark font-montserrat ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Call Us */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <div className="bg-darkPurple text-white p-3 rounded-full">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg text-white">Call Us</h3>
            <p className="text-gray-400 text-sm font-medium">+13466299424</p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <div className="bg-darkPurple text-white p-3 rounded-full">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg text-white">Email Us</h3>
            <p className="text-gray-400 text-sm font-medium break-words max-w-xs">
              atoyebijoshua095@example.com
            </p>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <div className="bg-darkPurple text-white p-3 rounded-full">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-lg text-white">Visit Us</h3>
            <p className="text-gray-400 text-sm font-medium max-w-xs">
              12320 Barker Cypress Rd Ste 600 #177 Cypress, TX 77429
            </p>
          </div>
        </div>

        <div className="border-b-2 border-gray-600 mb-10"></div>

        {/* Footer Links & Subscribe Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-4 text-white">About</h2>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Resources</h2>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-darkPurple text-sm transition duration-300">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Subscribe</h2>
            <p className="text-gray-400 text-sm mb-4 text-center sm:text-left">
              Get exclusive premium course updates straight to your inbox.
            </p>
            <div className="flex w-full max-w-sm space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-gray-600 text-white text-sm rounded-md"
              />
              <Button className="bg-darkPurple hover:bg-darkPurple/85 text-white p-2">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-gray-600 mb-8"></div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-white bg-darkPurple rounded-full p-2 hover:opacity-80 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white bg-darkPurple rounded-full p-2 hover:opacity-80 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white bg-darkPurple rounded-full p-2 hover:opacity-80 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white bg-darkPurple rounded-full p-2 hover:opacity-80 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white bg-darkPurple rounded-full p-2 hover:opacity-80 transition-opacity">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            &copy; {currentYear} HeirloomNexus Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;