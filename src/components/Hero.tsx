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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-400 dark:text-blue-300">Mohamed</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 dark:text-gray-200">
            I grow SaaS & eCommerce businesses using AI + Strategy
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400 dark:text-gray-300">
            Strategic Planning Analyst & General Manager at Madaar Solutions, helping businesses scale through data-driven strategies and AI-powered tools.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Let&apos;s Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 