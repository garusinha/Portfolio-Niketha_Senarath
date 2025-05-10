import React from "react";
import realstate from "../assets/realstate.png";
import singaporeZoo from "../assets/singaporeZoo.png";
import sipsayura from "../assets/SipSayura.png";
import automartlk from "../assets/automartlk.png";
const projects = [
  {
    id: 1,
    name: "Real State Project",
    technologies: "React JS with Vite and use tailwind CSS",
    image: realstate,
    github: "https://garusinha.github.io/project1/",
  },
  {
    id: 2,
    name: "Singapore Zoo Website",
    technologies: "Html, Css and JavaScript",
    image: singaporeZoo,
    github: "https://garusinha.github.io/Niketha_Senarath/",
  },
  {
    id: 3,
    name: "SipSayura Education Center",
    technologies: "WordPress",
    image: sipsayura,
    github: "https://sipsayura-ed.com/",
  },
  {
    id: 3,
    name: "Automart.lk",
    technologies: "React JS with Vite and use tailwind CSS",
    image: automartlk,
    github: "https://garusinha.github.io/automart.lk/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-16" id="Project">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center">
          {projects.map((project) => (
            <div key={project.name} className="p-4 flex flex-col items-center">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-3 w-full h-40 sm:h-48 object-cover"
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {project.name}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mb-3">
                {project.technologies}
              </p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
