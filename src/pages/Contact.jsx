import React, { useRef } from "react";
import Navbar2 from "@/components/nevbarSection/Navbar2";
import Footer from "@/components/footer/FooterMain";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  // Handle EmailJS form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v05zrqm", // Your EmailJS service ID
        "template_v9vfixi", // Your EmailJS template ID
        formRef.current,
        "12kctcLUc8hkON_JU" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <main className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gray-100 font-body">
        <Navbar2 />

        {/* Page Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Left: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Info + Socials + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p>
                <strong>Phone:</strong> 0762003233
              </p>
              <p>
                <strong>Email:</strong> sarafkhanmohammed@gmail.com
              </p>
              <p>
                <strong>Address:</strong> College of Melbourne, Attalachenai
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8",
                  },
                  {
                    icon: FaFacebookSquare,
                    link: "https://www.facebook.com/saraf.musammil",
                  },
                  {
                    icon: FaTwitterSquare,
                    link: "https://twitter.com/saraf_musammil",
                  },
                  {
                    icon: FaInstagramSquare,
                    link: "https://www.instagram.com/saraf.musammil",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-2xl h-10 w-10 border rounded-full flex items-center justify-center hover:text-emerald-500 transition-all duration-300"
                  >
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9999999999995!2d81.839999!3d7.383333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5000000000001%3A0x0000000000000000!2sAttalachenai%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v0000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Contact;
