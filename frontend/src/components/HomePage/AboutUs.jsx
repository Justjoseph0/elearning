import { Quote, CloudCog, Rocket } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-7xl py-10 px-8 lg:px-0 text-white">
      
      {/* 📌 Section Title */}
      <h2 className="text-3xl text-center font-bold text-light mb-10">
        Who We Are
      </h2>  

      <article className="flex lg:flex-row flex-col gap-10">
        
        {/* 📕 Text + Quote Box */}
        <div className="lg:w-[40%] flex flex-col items-center lg:items-start">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-white">
            We Empower Learners And Transform Futures
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-200 text-center lg:text-start">
            We provide cutting-edge cloud engineering education, equipping learners with 
            skills in cloud computing, DevOps, automation, and infrastructure as code.
          </p>
          <p className="mt-2 text-gray-200 text-center lg:text-start">
            From AWS, Azure, and Google Cloud to containerization, CI/CD pipelines, and 
            cloud security, our hands-on courses prepare you for real-world cloud solutions.
          </p>

          {/* 📌 CTA Button */}
          <div className="mt-12 lg:mt-6">
            <a 
              href="/about"
              className="bg-darkPurple text-white text-lg font-semibold py-3 px-6 rounded-lg 
              hover:bg-hoverDark transition duration-300"
            >
              Learn More About Us
            </a>
          </div>

          {/* ℹ️ Informative Section */}
          <div className="mt-12 lg:mt-6 bg-dark border-2 rounded-lg py-7 px-4 max-w-sm">
            <Quote className="text-gray-400 w-10 h-10" />  {/* Quote Icon */}

            <p className="mt-4 text-gray-300 text-sm">
              <span>✅ Trained over 5,000+ cloud engineers across various industries.  </span>
              <span>🚀 90% of our graduates land jobs in top tech firms. </span> 
              <span>🌍 Partnered with leading cloud providers for real-world projects.  </span>
            </p>
          </div>

        </div>

        {/* 📸 Image + Google Rating */}
        <aside className="lg:w-[60%] flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-5 lg:w-1/2 h-full">
            {/* 📌 Image Section */}
            <img
              src="/images/AboutImg1.png" 
              alt="Google Ranking Success"
              className="w-full h-[60%] object-cover rounded-lg shadow-lg"
            />

            <div className="lg:w-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center lg:h-[40%]">
              
              {/* Mission Icon + Title */}
              <div className="flex items-center gap-3">
                <Rocket className="w-10 h-10 text-darkPurple" /> {/* Cloud/Mission Icon */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h3>
              </div>

              {/* Mission Statement */}
              <div className="flex flex-col items-center justify-center mt-4 text-center lg:text-start">
                <p className="text-gray-700 text-sm">
                  Empower aspiring <span className="font-semibold">Cloud Engineers</span> with hands-on training,  
                  real-world projects, and career-focused mentorship.  
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-5 lg:w-1/2 h-full">
            <div className="lg:w-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
              {/* Icon + Heading */}
              <div className="flex items-center gap-3">
                <CloudCog className="w-10 h-10 text-darkPurple" /> {/* Cloud Computing Icon */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Master Cloud Engineering
                </h3>
              </div>

              {/* Short Info */}
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-gray-700 text-center text-sm">
                  Learn AWS, Azure, Google Cloud, and DevOps practices to deploy scalable and secure cloud solutions.
                </p>
              </div>
            </div>
            

            {/* 📌 Image Section */}
            <img
              src="/images/AboutImg2.png" 
              alt="Google Ranking Success"
              className="w-full h-[60%] object-cover rounded-lg shadow-lg"
            />

          </div>
        </aside>
      </article>     
    </section>
  );
};

export default AboutUs;
