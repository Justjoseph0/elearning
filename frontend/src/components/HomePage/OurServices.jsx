import React from 'react'

const OurServices = () => {
  return (
    <section className='mx-auto max-w-7xl px-4 lg:px-0 py-10'>
        <h2 className='text-3xl text-center font-bold text-customDark mb-6'>Our Services</h2>
        <article className="grid lg:grid-cols-3  grid-cols-1 gap-4 w-full h-full px-4 md:px-0">
            {/* Left Side - 2 Smaller Grid Items */}
            <div className="flex lg:flex-col items-center md:flex-row gap-4 flex-col">
                <div className='bg-customDark border-4 border-black p-1 rounded-xl h-full shadow-2xl card '>
                    <div className="bg-dark p-6 rounded-lg shadow-2xl h-full card-content">
                        <h3 className="text-lg font-bold text-darkPurple mb-2">Cloud Certification Training</h3>
                        <p className="text-gray-300">
                            Prepare for AWS, Azure, and Google Cloud certifications with expert-led courses and hands-on labs.
                        </p>
                    </div>
                </div>
                <div className='bg-customDark border-4 border-black p-1 rounded-xl h-full shadow-2xl card '>
                    <div className="bg-dark p-6 rounded-lg shadow-md h-full card-content">
                        <h3 className="text-lg font-bold text-darkPurple mb-2">Live Instructor-Led Classes</h3>
                        <p className="text-gray-300">
                            Attend live sessions with cloud engineers and industry experts to get real-world insights and Q&A sessions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Center - 1 Large Grid Item */}

            <div className="flex items-center justify-center h-full bg-lightDark border-4 border-black p-1 rounded-xl shadow-2xl card ">
                <div className="bg-dark text-white p-8 rounded-lg shadow-md w-full h-fit card-content">
                    <h2 className="text-2xl text-darkPurple font-bold mb-4">Hands-on Cloud Labs</h2>
                    <p className="text-gray-300">
                        Get real-world experience with cloud computing through interactive labs. Deploy virtual machines, configure networks, 
                        and manage cloud storage in AWS, Azure, and Google Cloud environments.
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-300">
                        <li>Deploy cloud applications</li>
                        <li>Configure CI/CD pipelines</li>
                        <li>Work with real-world cloud scenarios</li>
                    </ul>
                </div>
            </div>

            {/* Right Side - 2 Larger Grid Items */}
            <div className="flex lg:flex-col items-center md:flex-row gap-4 flex-col">
                <div className='bg-customDark border-4 border-black p-1 rounded-xl shadow-2xl h-full card '>
                    <div className="bg-dark p-6 rounded-lg shadow-md h-full card-content">
                        <h3 className="text-lg font-bold text-darkPurple mb-2">Career Guidance & Mentorship</h3>
                        <p className="text-gray-300">
                            Get 1-on-1 mentorship from industry professionals to help you land a job in cloud engineering.
                        </p>
                    </div>
                </div>
                <div className='bg-customDark border-4 border-black p-1 rounded-xl shadow-2xl h-full card '>
                    <div className="bg-dark p-6 rounded-lg shadow-md h-full card-content">
                        <h3 className="text-lg font-bold text-darkPurple mb-2">Exclusive Cloud Community</h3>
                        <p className="text-gray-300">
                            Join a network of cloud professionals, share insights, collaborate on projects, and stay updated with industry trends.
                        </p>
                    </div>
                </div>
            </div>

        </article>

    </section>
  )
}

export default OurServices