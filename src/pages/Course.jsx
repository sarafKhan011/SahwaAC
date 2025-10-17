import React from "react";
import { BookOpen, Users } from "lucide-react";
import Footer from "../components/footer/FooterMain";
import Navbar2 from "../components/nevbarSection/Navbar2"

// Example course images
// import webDevImg from "../assets/courses/webdev.jpg";
// import graphicImg from "../assets/courses/graphic.jpg";
// import marketingImg from "../assets/courses/marketing.jpg";
// import pythonImg from "../assets/courses/python.jpg";
// import uiuxImg from "../assets/courses/uiux.jpg";

const courses = [
  { title: "Web Development", duration: "3 Months", students: 120, description: "Learn front-end and back-end development with modern tools." },
  { title: "Graphic Design", duration: "2 Months", students: 85,  description: "Master design principles, Photoshop, Illustrator, and Figma." },
  { title: "Digital Marketing", duration: "1.5 Months", students: 100,  description: "Learn SEO, social media marketing, and ad campaigns." },
  { title: "Python Programming", duration: "3 Months", students: 150,  description: "Learn Python programming for web, data science, and automation." },
  { title: "UI/UX Design", duration: "2 Months", students: 90,  description: "Design user-friendly interfaces and enhance user experience." },
];

export default function Course() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar2 />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Courses</h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Explore our popular courses and boost your skills today!
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Course Image */}
              <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col justify-center items-center text-center px-4">
                <p className="text-white text-sm md:text-base">{course.description}</p>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-500 text-white p-2 rounded-full">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{course.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {course.students}
                  </span>
                </div>

                <button className="mt-auto bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer (only once) */}
      <Footer />
    </div>
  );
}
