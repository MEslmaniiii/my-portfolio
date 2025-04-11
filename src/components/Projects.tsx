import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and user authentication.',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    githubLink: 'https://github.com/yourusername/task-manager',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'TailwindCSS']
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data, forecasts, and interactive maps with location-based services.',
    githubLink: 'https://github.com/yourusername/weather-dashboard',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation']
  }
];

const Projects = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaGithub className="mr-2 text-lg sm:text-xl" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 