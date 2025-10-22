import { Calendar, Award, Paintbrush, BookOpen, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const features = [
  { icon: Calendar, title: "Calendar", desc: "Keep track of events & schedules." },
  { icon: Award, title: "Certificate", desc: "Earn certificates for completed courses." },
  { icon: Paintbrush, title: "Creativity", desc: "Enhance creative skills." },
  { icon: BookOpen, title: "Homework", desc: "Organize assignments efficiently." },
  { icon: Share2, title: "Social Media", desc: "Connect with classmates online." },
];

export default function SubhMain() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-500 to-emerald-600">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2 
        variants={fadeIn("right")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Features
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeIn("up", idx * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center text-center p-6 gap-4
                           shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-full">
                  <Icon size={40} color="white" />
                </div>
                <h3 className="text-white font-semibold text-lg md:text-xl">{item.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
