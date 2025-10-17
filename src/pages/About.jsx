import Navbar2 from '@/components/nevbarSection/Navbar2';
import React from 'react';
import aboutImage from "../assets/Images/About.jpg" 
import Footer from '@/components/footer/FooterMain';


function AboutUs() {
  return (
    <>
    <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body">
      <Navbar2/>
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        About Us
      </h1>

      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="About Islamic College"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Islamic College was founded with the vision of providing quality education that
            combines academic excellence with strong moral and ethical values. Our mission
            is to nurture students into responsible, knowledgeable, and compassionate citizens.
          </p>
          <p>
            We offer a holistic learning environment, where students are encouraged to
            explore, innovate, and develop skills that prepare them for the modern world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 text-gray-800">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p>
            To provide a nurturing environment for students to achieve academic excellence
            while instilling strong Islamic values, leadership qualities, and social responsibility.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p>
            To be a leading institution recognized for academic excellence, moral integrity,
            and the holistic development of students, preparing them for lifelong success.
          </p>
        </div>
      </section>

      {/* Optional Quote */}
      <section className="mt-12 text-center text-gray-600 italic">
        "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela
      </section>
    </main>

    <Footer/>
    </>
  );
}

export default AboutUs;
