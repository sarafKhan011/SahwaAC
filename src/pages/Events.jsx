import Navbar2 from "../components/nevbarSection/Navbar2";
import React from "react";
import Event1 from "../assets/Images/Event1.jpg";
import Footer from "@/components/footer/FooterMain";
// import ScienceExhibition from "../../assets/Images/science-exhibition.jpg";
// import CulturalFest from "../../assets/Images/cultural-fest.jpg";

const events = [
  {
    title: "Annual Sports Day",
    date: "2025-11-15",
    description:
      "Our students showcased their athletic talents and sportsmanship during the Annual Sports Day.",
    image: Event1,
  },
  {
    title: "Science Exhibition",
    date: "2025-10-20",
    description:
      "Students presented innovative projects and experiments, demonstrating creativity and scientific thinking.",
    image: Event1,
  },
  {
    title: "Cultural Fest",
    date: "2025-09-10",
    description:
      "A celebration of our diverse culture with music, dance, and traditional performances by students.",
    image: Event1,
  },
];

function Events() {
  return (
    <>
    <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body">
      <Navbar2 />
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Events
      </h1>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 sm:h-48 md:h-52 lg:h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-500 mb-2">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>

    <Footer/>
    </>
  );
}

export default Events;
