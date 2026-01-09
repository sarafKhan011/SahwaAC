import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "../components/nevbarSection/Navbar2";
import Footer from "@/components/footer/FooterMain";

import Event2 from "../assets/Images/Event2.jpg";
import Event0 from "../assets/Images/Event1-1.jpg";
import Event3 from "../assets/Images/Event3.jpg";
import Event4 from "../assets/Images/Event4.jpg";

const events = [
  {
    title: "Honorary Event",
    date: "2025-08-27",
    description:
      "An Honorary Event is a special program held to show respect and appreciation to someone for their achievements, hard work, or service. It is a way to honor and thank them in front of others.",
    image: Event0,
  },
  {
    title: "Blood Donation",
    date: "2025-07-16",
    description:
      "Blood donation is when a person voluntarily gives their blood to help save someone else’s life. This donated blood is used for patients during emergencies, surgeries, or illnesses. It is a safe and simple way to help others.",
    image: Event2,
  },
  {
    title: "Flood Relief Programme",
    date: "2025-12-08",
    description:
      "A Flood Relief Programme is a helping plan that supports people affected by floods. It provides food, water, clothes, medicine, safe places to stay, and helps repair damaged homes. The main goal is to keep people safe and help them return to normal life as soon as possible.",
    image: Event3,
  },
  {
    title: "Class Promotion Exam Results",
    date: "2025-01-05",
    description:
      "This event marks the official release of students’ promotion examination results, conducted with the participation of parents. It reflects students’ academic performance over the year and provides an opportunity for parents and teachers to review progress, discuss achievements, and plan future academic development.",
    image: Event4,
  },
];

function Events() {
  return (
    <>
      <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body">
        <Navbar2 />

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Events
        </motion.h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full h-56 sm:h-48 md:h-52 lg:h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Event Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-500 mb-2">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Events;
