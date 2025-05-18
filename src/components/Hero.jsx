import React from "react";
import HeroImage from "../assets/Hero_Image.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16 pt-30" id="Hero">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-32 h-32 md:w-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-2xl md:text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Niketha Garusinha
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-base md:text-lg text-gray-300 px-4 md:px-32">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-2 md:space-x-4">
        <button
          onClick={() =>
            document
              .getElementById("Contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm md:text-base transform transition-transform duration-300 hover:scale-105 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
        >
          Contact With Me
        </button>
        {/* <button className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm md:text-base transform transition-transform duration-300 hover:scale-105 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
          Resume
        </button> */}

        <a
          href="/Niketha_Garusinha_Resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm md:text-base transform transition-transform duration-300 hover:scale-105 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
