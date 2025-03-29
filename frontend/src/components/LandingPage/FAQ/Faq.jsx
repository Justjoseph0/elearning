import { useState } from "react";
import faqData from "../../../Data/FaqData.json";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First one open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" px-6 flex flex-col md:flex-row items-center justify-between h-auto ">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#f9f9f9] border border-gray-400 p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
                <span className="text-primary text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <p 
                className={`text-gray-600 mt-2 transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Big Blue Question Mark */}
      <div className="flex justify-center items-center animate-pulse-scale">
        <span className="text-primary md:text-[200px] text-[150px] font-bold">?</span>
      </div>
    </section>
  );
};

export default FAQ;
