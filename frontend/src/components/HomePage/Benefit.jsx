import React from 'react'
import { Network, Map, DollarSign, Award } from 'lucide-react';

const Benefit = () => {
  return (
    <section className='mx-auto max-w-7xl py-10 px-8 lg:px-0'>
        {/* 📌 Section Title */}
        <h2 className="text-3xl text-center font-bold text-darkPurple mb-10">
            Skyrocket Your Cloud Career
        </h2>  
                
        <article className='flex flex-col lg:flex-row items-start gap-8 '>
            
            {/* 📌 Benefits Overview */}
            <aside className='lg:w-[40%] bg-customDark p-6 rounded-xl shadow-lg flex flex-col '>
                <section className='mb-6'>
                    <h3 className='text-xl font-semibold text-white mb-2 text-center'>How We Have Helped People</h3>
                    <p className='text-gray-300'>
                        Trained 5,000+ cloud engineers, with 80% securing jobs in top firms like Google, AWS, and Microsoft.  
                        Our alumni have launched startups, become industry leaders, and transformed their careers with six-figure salaries.
                    </p>
                </section>

                <section className='mb-6'>
                    <h3 className='text-xl font-semibold text-white mb-2 text-center'>How Our Teaching is Different</h3>
                    <p className='text-gray-300'>
                        We go beyond theory our hands-on labs simulate real-world challenges,  
                        personalized mentorship ensures your success, and industry experts guide you step-by-step
                        to build projects that make your resume stand out.
                    </p>
                </section>
            </aside>

            <aside className="lg:w-[60%] flex flex-col lg:flex-row gap-5 h-full">
                <div className="flex flex-col w-full h-full gap-5">
                    <section className="flex items-start gap-4">
                        <Network className="w-6 h-6 text-darkPurple flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-darkPurple">
                            Join a Thriving Cloud Community
                            </h3>
                            <p className="text-customDark">
                            Connect with top industry experts, collaborate on projects, and stay ahead in cloud technology.
                            </p>
                        </div>
                    </section>
                    <section className="flex items-start gap-4">
                        <Map className="w-6 h-6 text-darkPurple flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-darkPurple mb-2">
                            Find Your Learning Path
                            </h3>
                            <p className="text-customDark">
                            Whether you're a beginner or an experienced professional, our structured roadmap helps you master cloud engineering at your own pace. Get access to career coaching, exclusive job referrals, and a supportive community that accelerates your success.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="flex flex-col w-full h-full gap-5">
                    <section className="flex items-start gap-4">
                        <Award className="w-6 h-6 text-darkPurple flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-darkPurple mb-2">
                            Industry-Recognized Certificates
                            </h3>
                            <p className="text-customDark">
                            Earn certificates that validate your skills and boost your credibility in the cloud industry.
                            </p>
                        </div>
                    </section>

                    <section className="flex items-start gap-4">
                        <DollarSign className="w-6 h-6 text-darkPurple flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-darkPurple mb-2">
                            Affordable Pricing
                            </h3>
                            <p className="text-customDark">
                            Get top-tier cloud education without the premium price tag. Flexible plans to fit your budget.
                            </p>
                        </div>
                    </section>
                </div>
            </aside>
        </article>
    </section>
  )
}

export default Benefit
