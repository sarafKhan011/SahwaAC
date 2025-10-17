import React from "react";
import AboutImg from "../../assets/Images/About.jpg";

const PmMain = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <img
            src={AboutImg}
            alt="President"
            className="w-64 md:w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-3/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saepe,
            earum itaque totam neque consequuntur error nostrum quisquam velit
            architecto? Modi dolor libero voluptas, excepturi, quos sequi
            obcaecati dolores sit, distinctio officiis pariatur aliquid
            reiciendis.”
          </p>

          {/* Signature
          <div className="text-gray-800 font-semibold text-xl">
            <span className="block text-3xl font-signature mb-1">✍️</span>
            <span>Dr. John Doe</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PmMain;
