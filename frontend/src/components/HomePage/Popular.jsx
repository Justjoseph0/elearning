import { Star, BookOpen, Clock, Signal } from "lucide-react"; // Import Icons
import Card from "../Card";

const Popular = () => {
  return (
    <section className="mx-auto max-w-7xl py-10 px-8 lg:px-0">
        {/* 📌 Section Title */}
        <h2 className="text-3xl text-center font-bold text-darkPurple mb-10">
            Master the Cloud: Our Top Courses
        </h2>  

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}

export default Popular;
