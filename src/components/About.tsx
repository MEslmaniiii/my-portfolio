import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                I'm a passionate Full Stack Developer with a strong focus on creating
                exceptional user experiences. With expertise in both frontend and
                backend development, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600">
                My journey in web development started [X] years ago, and since then,
                I've worked on various projects ranging from small business websites
                to complex web applications.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              {/* Replace this div with your image */}
              <span className="text-gray-500">Your Image Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 