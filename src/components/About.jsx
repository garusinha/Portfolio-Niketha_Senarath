import React from "react";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-16 md:py-20" id="About">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-48 h-56 md:w-72 md:h-80 rounded object-cover mb-6 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-base md:text-lg mb-6 md:mb-8">
              I am a dedicated software developer with a Higher Diploma in
              Computer Science from LSBF College in Singapore. Passionate about
              web development and technology, I specialize in creating dynamic
              and efficient solutions. Constantly learning and improving, I
              strive to build innovative and user-friendly applications.
            </p>

            <div className="space-y-3 md:space-y-4 w-full">
              <div className="flex items-center w-full flex-wrap">
                <label
                  htmlFor="htmlandcss"
                  className="min-w-[80px] w-3/12 md:w-2/12 text-sm md:text-base"
                >
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div className="flex items-center w-full flex-wrap">
                <label
                  htmlFor="reactjs"
                  className="min-w-[80px] w-3/12 md:w-2/12 text-sm md:text-base"
                >
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              <div className="flex items-center w-full flex-wrap">
                <label
                  htmlFor="nodejs"
                  className="min-w-[80px] w-3/12 md:w-2/12 text-sm md:text-base"
                >
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p className="text-sm md:text-base">Years Experience</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  4+
                </h3>
                <p className="text-sm md:text-base">Projects Completed</p>
              </div>
              {/* <div>
                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p className="text-sm md:text-base">Happy Clients</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
