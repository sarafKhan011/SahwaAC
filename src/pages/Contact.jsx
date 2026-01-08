import React, { useRef } from "react";
import { motion } from "framer-motion";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v05zrqm",
        "template_v9vfixi",
        formRef.current,
        "12kctcLUc8hkON_JU"
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

  const socialLinks = [
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8" },
    { icon: FaFacebookSquare, link: "https://www.facebook.com/saraf.musammil" },
    { icon: FaTwitterSquare, link: "https://twitter.com/saraf_musammil" },
    { icon: FaInstagramSquare, link: "https://www.instagram.com/saraf.musammil" },
  ];

  return (
    <>
      <main className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gray-100 font-body">
        <Navbar2 />

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Contact Us
        </motion.h1>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
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
          </motion.div>

          {/* Right: Info + Socials + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p><strong>Phone:</strong> 0672 255 049</p>
              <p><strong>Email:</strong> sahwaac1991@gmail.com</p>
              <p><strong>Address:</strong> Palamunai, Ampara, Sri Lanka. (E.P)</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    className="text-black text-2xl h-10 w-10 border rounded-full flex items-center justify-center hover:text-emerald-500 transition-all duration-300"
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
            >
  <a
  href="https://www.google.com/maps/dir/?api=1&destination=7V94%2BMPQ+Palamunai%2C+Sri+Lanka"
  target="_blank"
  rel="noopener noreferrer"
  title="Get Directions to Sahwa Arabic College"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0452078426373!2d81.83936797499707!3d7.377746413041043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x3ae5009f49c4c6f3%3A0x8a542cf8f992aeb4!2sSahwa%20Arabic%20College!5e1!3m2!1sen!2slk!4v1731139000000!5m2!1sen!2slk"
    width="100%"
    height="450"
    style={{ border: 0, borderRadius: "12px", cursor: "pointer" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Sahwa Arabic College Landmark Map"
  />
</a>



            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
