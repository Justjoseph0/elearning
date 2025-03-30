import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Clock, Lock, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Testimonials", path: "/faq" }
  ];

  const features = [
    { icon: <Clock className="text-yellow-400" size={20} />, title: "Learn at Your Pace", desc: "Access lifetime course materials anytime." },
    { icon: <Lock className="text-green-400" size={20} />, title: "Secure Payment", desc: "Safe & easy checkout for all courses." },
    { icon: <GraduationCap className="text-blue-400" size={20} />, title: "Expert-Led Courses", desc: "Learn from top industry professionals." }
  ];

  return (
    <nav className={`font-montserrat sticky top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top banner with features */}
      <div className="bg-customDark text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              {feature.icon}
              <div>
                <h3 className="font-medium text-sm">{feature.title}</h3>
                <p className="text-white text-xs">{feature.desc}</p>
              </div>
              {index < features.length - 1 && <div className="h-10 mx-4"></div>}
            </div>
          ))}
        </div>
      </div>
      
      {/* Main navbar */}
      <div className={`bg-white py-3 transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src="images/courseLogo.png" alt="Company Logo" className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <NavLink 
                  key={index}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-sm font-medium hover:text-darkPurple  transition-colors ${
                      isActive ? "text-darkPurple border-b-2 border-darkPurple" : "text-customDark"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            
            {/* Contact & Address - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="text-primary" size={20} />
                <div>
                  <p className="text-xs text-customDark">Contact Us</p>
                  <a 
                    href="https://wa.me/2349128721745" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary"
                  >
                    +234 912 872 1745
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary" size={20} />
                <div>
                  <p className="text-xs text-customDark">Our Address</p>
                  <p className="text-xs">Cypress, TX 77429</p>
                </div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-customDark focus:outline-none" 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <NavLink 
                  key={index}
                  to={link.path}
                  onClick={() => setShowMobileMenu(false)}
                  className={({ isActive }) => 
                    `text-sm font-medium py-2 border-b border-customDark ${
                      isActive ? "text-darkPurple" : "text-customDark"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="pt-4 flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="text-darkPurple" size={18} />
                  <a href="https://wa.me/2349128721745" className="text-sm">+234 912 872 1745</a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MapPin className="text-darkPurple" size={18} />
                  <p className="text-sm">Cypress, TX 77429</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;