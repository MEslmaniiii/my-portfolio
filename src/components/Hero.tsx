'use client';

import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Full Stack Developer & Designer
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            I create beautiful, responsive, and user-friendly web applications
            that make a difference.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition duration-300">
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg transition duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 