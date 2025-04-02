import { Star, BookOpen, Clock, Signal } from "lucide-react"; // Import Icons

const Popular = () => {
  return (
    <section className="mx-auto max-w-7xl py-10 px-8 lg:px-0">
        {/* 📌 Section Title */}
        <h2 className="text-3xl text-center font-bold text-darkPurple mb-10">
            Master the Cloud: Our Top Courses
        </h2>  

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
                {/* 🌥️ Image */}
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/TestiImg6.jpg" 
                        alt="Cloud Computing"
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* 📖 Text Content */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {/* ⭐ Rating Number */}
                        <h2 className="font-bold">4.3</h2>
                        
                        {/* ⭐ Stars */}
                        <div className="flex gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>

                        {/* 👥 Number of Reviews */}
                        <h2>(200)</h2>
                    </div>
                    <h3 className="text-xl font-semibold text-darkPurple">Cloud Computing Fundamentals</h3>
                    <p className="text-sm ">
                        Learn the basics of cloud infrastructure, deployment models, and core services.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {/* 📚 Lessons */}
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-5 h-5 text-darkPurple" />
                            <span>4 Lessons</span>
                        </div>

                        {/* ⏳ Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-darkPurple" />
                            <span>22hrs 5s</span>
                        </div>

                        {/* 🎯 Level */}
                        <div className="flex items-center gap-1">
                            <Signal className="w-5 h-5 text-darkPurple" />
                            <span>Beginner</span>
                        </div>
                    </div>
                    <div className=" rounded-lg flex justify-between items-center">
                        {/* Tutor Info */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/images/AboutImg2.png" 
                                alt="Tutor" 
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        </div>

                        {/* Price */}
                        <h2 className="text-xl font-bold text-black">$99.99</h2>
                    </div>
                </div>
            </div>

            {/* 🖥️ DevOps & Cloud Automation */}
            <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
                {/* 🌥️ Image */}
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/AboutImg1.png" 
                        alt="Cloud Computing"
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* 📖 Text Content */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {/* ⭐ Rating Number */}
                        <h2 className="font-bold">4.3</h2>
                        
                        {/* ⭐ Stars */}
                        <div className="flex gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>

                        {/* 👥 Number of Reviews */}
                        <h2>(200)</h2>
                    </div>
                    <h3 className="text-xl font-semibold text-darkPurple">DevOps & Cloud Automation</h3>
                    <p className="text-sm ">
                        Master CI/CD, Terraform, Kubernetes, and automation in the cloud.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {/* 📚 Lessons */}
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-5 h-5 text-darkPurple" />
                            <span>5 Lessons</span>
                        </div>

                        {/* ⏳ Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-darkPurple" />
                            <span>12hrs 5s</span>
                        </div>

                        {/* 🎯 Level */}
                        <div className="flex items-center gap-1">
                            <Signal className="w-5 h-5 text-darkPurple" />
                            <span>Beginner</span>
                        </div>
                    </div>
                    <div className=" rounded-lg flex justify-between items-center">
                        {/* Tutor Info */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/images/AboutImg2.png" 
                                alt="Tutor" 
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        </div>

                        {/* Price */}
                        <h2 className="text-xl font-bold text-black">$55.99</h2>
                    </div>
                </div>
            </div>

            {/* 🔥 AWS, Azure & GCP */}
            <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
                {/* 🌥️ Image */}
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/AboutImg2.png" 
                        alt="Cloud Computing"
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* 📖 Text Content */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {/* ⭐ Rating Number */}
                        <h2 className="font-bold">4.3</h2>
                        
                        {/* ⭐ Stars */}
                        <div className="flex gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>

                        {/* 👥 Number of Reviews */}
                        <h2>(200)</h2>
                    </div>
                    <h3 className="text-xl font-semibold text-darkPurple">AWS, Azure & GCP</h3>
                    <p className="text-sm ">
                        Deep dive into the top cloud platforms with hands-on labs and real-world projects.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {/* 📚 Lessons */}
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-5 h-5 text-darkPurple" />
                            <span>10 Lessons</span>
                        </div>

                        {/* ⏳ Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-darkPurple" />
                            <span>10hrs 5s</span>
                        </div>

                        {/* 🎯 Level */}
                        <div className="flex items-center gap-1">
                            <Signal className="w-5 h-5 text-darkPurple" />
                            <span>Beginner</span>
                        </div>
                    </div>
                    <div className=" rounded-lg flex justify-between items-center">
                        {/* Tutor Info */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/images/AboutImg2.png" 
                                alt="Tutor" 
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        </div>

                        {/* Price */}
                        <h2 className="text-xl font-bold text-black">$55.99</h2>
                    </div>
                </div>
            </div>

            {/* 🛠️ Infrastructure as Code */}
            <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
                {/* 🌥️ Image */}
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/AboutImg1.png" 
                        alt="Cloud Computing"
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* 📖 Text Content */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {/* ⭐ Rating Number */}
                        <h2 className="font-bold">4.3</h2>
                        
                        {/* ⭐ Stars */}
                        <div className="flex gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>

                        {/* 👥 Number of Reviews */}
                        <h2>(200)</h2>
                    </div>
                    <h3 className="text-xl font-semibold text-darkPurple">Infrastructure as Code (IaC)</h3>
                    <p className="text-sm ">
                        Automate cloud deployments with Terraform, Ansible, and Pulumi.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {/* 📚 Lessons */}
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-5 h-5 text-darkPurple" />
                            <span>3 Lessons</span>
                        </div>

                        {/* ⏳ Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-darkPurple" />
                            <span>3hrs 5s</span>
                        </div>

                        {/* 🎯 Level */}
                        <div className="flex items-center gap-1">
                            <Signal className="w-5 h-5 text-darkPurple" />
                            <span>Expert</span>
                        </div>
                    </div>
                    <div className=" rounded-lg flex justify-between items-center">
                        {/* Tutor Info */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/images/AboutImg2.png" 
                                alt="Tutor" 
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        </div>

                        {/* Price */}
                        <h2 className="text-xl font-bold text-black">$72.99</h2>
                    </div>
                </div>
            </div>

            {/* 🚀 Cloud Security & Compliance */}
            <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
                {/* 🌥️ Image */}
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/AboutImg2.png" 
                        alt="Cloud Computing"
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* 📖 Text Content */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {/* ⭐ Rating Number */}
                        <h2 className="font-bold">4.3</h2>
                        
                        {/* ⭐ Stars */}
                        <div className="flex gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>

                        {/* 👥 Number of Reviews */}
                        <h2>(200)</h2>
                    </div>
                    <h3 className="text-xl font-semibold text-darkPurple">Cloud Security & Compliance</h3>
                    <p className="text-sm ">
                        Secure cloud environments with best practices in IAM, encryption, and audits.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {/* 📚 Lessons */}
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-5 h-5 text-darkPurple" />
                            <span>3 Lessons</span>
                        </div>

                        {/* ⏳ Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-darkPurple" />
                            <span>3hrs 5s</span>
                        </div>

                        {/* 🎯 Level */}
                        <div className="flex items-center gap-1">
                            <Signal className="w-5 h-5 text-darkPurple" />
                            <span>Expert</span>
                        </div>
                    </div>
                    <div className=" rounded-lg flex justify-between items-center">
                        {/* Tutor Info */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/images/AboutImg2.png" 
                                alt="Tutor" 
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        </div>

                        {/* Price */}
                        <h2 className="text-xl font-bold text-black">$72.99</h2>
                    </div>
                </div>
            </div>

            {/* 🚀 Cloud Security & Compliance */}
            <div className="bg-white  p-4 rounded-lg shadow-md flex flex-col space-y-4 ">
                {/* 🌥️ Image */}
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/TestiImg6.jpg" 
                        alt="Cloud Computing"
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* 📖 Text Content */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        {/* ⭐ Rating Number */}
                        <h2 className="font-bold">4.3</h2>
                        
                        {/* ⭐ Stars */}
                        <div className="flex gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        </div>

                        {/* 👥 Number of Reviews */}
                        <h2>(200)</h2>
                    </div>
                    <h3 className="text-xl font-semibold text-darkPurple">Cloud Security & Compliance</h3>
                    <p className="text-sm ">
                        Secure cloud environments with best practices in IAM, encryption, and audits.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        {/* 📚 Lessons */}
                        <div className="flex items-center gap-1">
                            <BookOpen className="w-5 h-5 text-darkPurple" />
                            <span>3 Lessons</span>
                        </div>

                        {/* ⏳ Duration */}
                        <div className="flex items-center gap-1">
                            <Clock className="w-5 h-5 text-darkPurple" />
                            <span>3hrs 5s</span>
                        </div>

                        {/* 🎯 Level */}
                        <div className="flex items-center gap-1">
                            <Signal className="w-5 h-5 text-darkPurple" />
                            <span>Expert</span>
                        </div>
                    </div>
                    <div className=" rounded-lg flex justify-between items-center">
                        {/* Tutor Info */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/images/AboutImg2.png" 
                                alt="Tutor" 
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        </div>

                        {/* Price */}
                        <h2 className="text-xl font-bold text-black">$72.99</h2>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Popular;
