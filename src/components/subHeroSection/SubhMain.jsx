import { Calendar, Award, Paintbrush, BookOpen, Share2 } from "lucide-react";

const features = [
  { icon: <Calendar size={70} color="white" />, label: "Calendar" },
  { icon: <Award size={70} color="white" />, label: "Certificate" },
  { icon: <Paintbrush size={70} color="white" />, label: "Creativity" },
  { icon: <BookOpen size={70} color="white" />, label: "Homework" },
  { icon: <Share2 size={70} color="white" />, label: "Social Media" },
];

export default function SubhMain() {
  return (
    <div className="bg-emerald-500  py-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 px-4">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 w-28 sm:w-32 md:w-36"
          >
            {item.icon}
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold font-sans text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
