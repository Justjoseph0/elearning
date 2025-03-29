import { motion } from "framer-motion";
import { Search, Handshake, Rocket } from "lucide-react";
import howWeWorkData from "../../../Data/HowWeWorkData.json";
import { useEffect, useState } from "react";

const HowWeWork = () => {
  const iconMap = {
    FaSearch: <Search className="text-primary w-8 h-8" />, 
    FaHandshake: <Handshake className="text-primary w-8 h-8" />, 
    FaRocket: <Rocket className="text-primary w-8 h-8" />, 
  };

  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(howWeWorkData);
  }, []);

  return (
    <section className="py-12 md:w-[80%] mx-auto px-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        How We Work
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="relative group bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center space-y-4 transition-all duration-500 animate-pulse-scale">
            {/* Fancy Before/After Glow */}
            <div className="absolute inset-0 rounded-lg before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:transition-all before:duration-500 before:content-[''] before:pointer-events-none before:group-hover:border-primary"></div>
            
            {iconMap[step.icon]}
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
