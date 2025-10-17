import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import lecturer from "../../assets/Images/lecturer/lecturer.jpg";

const lecturers = [
  { name: "Dr. John Doe", subject: "Computer Science", img: lecturer },
  { name: "Ms. Jane Smith", subject: "Graphic Design", img: lecturer },
  { name: "Mr. Ahmed Khan", subject: "Digital Marketing", img: lecturer },
  { name: "Dr. Lisa Brown", subject: "Python Programming", img: lecturer },
];

export default function Lecturers() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-700 mb-12">
          Our Lecturers
        </h2>

        {/* Lecturer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lecturers.map((lecturer, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Full Responsive Image */}
              <img
                src={lecturer.img}
                alt={lecturer.name}
                className="w-full h-[300px] sm:h-[350px] 
                md:h-[400px] lg:h-[420px] 
                object-cover object-top group-hover:scale-110 
                transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Text + Icons Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end items-center text-center 
                text-white p-6 translate-y-10 group-hover:translate-y-0 transition-all duration-500"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {lecturer.name}
                </h3>
                <p className="text-gray-200 mb-3 text-sm sm:text-base">
                  {lecturer.subject}
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mb-2">
                  <a href="#" className="hover:text-emerald-400 transition">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:text-emerald-400 transition">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-emerald-400 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="hover:text-emerald-400 transition">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
