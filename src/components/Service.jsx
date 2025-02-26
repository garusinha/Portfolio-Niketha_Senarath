import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web Design.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building Responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-16" id="about">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Services
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-4 sm:px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500 text-sm sm:text-base"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
