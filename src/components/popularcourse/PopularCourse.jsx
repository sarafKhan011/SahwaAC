import React from "react";
import { BookOpen } from "lucide-react";

// ✅ Example course images (replace with your own file paths)
import WebDImg from "../../assets/Images/course/WebD.jpg";
import GraphicImg from "../../assets/Images/course/Graphic.jpg";
// import marketingImg from "../../assets/courses/marketing.jpg";
// import pythonImg from "../../assets/courses/python.jpg";
// import uiuxImg from "../../assets/courses/uiux.jpg";

const courses = [
  { title: "Web Development", duration: "3 Months", students: 120, img: WebDImg },
  { title: "Graphic Design", duration: "2 Months", students: 85, img: GraphicImg },
  { title: "Digital Marketing", duration: "1.5 Months", students: 100, img: WebDImg },
  { title: "Python Programming", duration: "3 Months", students: 150, img: WebDImg },
  { title: "UI/UX Design", duration: "2 Months", students: 90, img: WebDImg },
];

export default function PopularCourses() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-700 mb-12">
          Popular Courses
        </h2>

        {/* Scrollable Cards */}
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="min-w-[260px] sm:min-w-[280px] bg-white rounded-2xl shadow-lg 
              flex-shrink-0 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-40 w-full rounded-t-2xl overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Course Details */}
              <div className="p-6 flex flex-col">
                {/* Icon */}
                <div className="bg-emerald-500 text-white p-3 rounded-full w-fit mb-3">
                  <BookOpen size={22} />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Students: {course.students}
                </p>

                {/* Enroll Button */}
                <button className="mt-auto bg-emerald-500 text-white px-4 py-2 rounded-xl 
                  hover:bg-emerald-600 hover:scale-105 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
