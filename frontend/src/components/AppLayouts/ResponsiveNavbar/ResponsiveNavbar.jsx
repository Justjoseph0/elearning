import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const ResponsiveNavbar = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return null; // Hide if not open

    return (
        <motion.div
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg flex flex-col items-center space-y-6 pt-20 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Close Button */}
            <button className="absolute top-5 right-5 text-2xl" onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8" />
            </button>

            {/* Nav Links */}
            <ul className="flex flex-col space-y-6 text-lg text-gray-700">
                <li className="nav-link">Home</li>
                <li className="nav-link">Courses</li>
                <li className="nav-link">About Us</li>
                <li className="nav-link">Contact Us</li>
                <li className="nav-link">Testimonials</li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex flex-col space-y-4">
                <button className="btn-auth w-full">Login</button>
                <button className="btn-auth w-full">Register</button>
                <button className="btn-auth w-full">Logout</button>
            </div>
        </motion.div>
    );
};

export default ResponsiveNavbar;
