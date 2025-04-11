'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Profile Image - Left side on desktop, top on mobile */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-600 shadow-xl group hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src="/mohamed.jpg.png.png"
                  alt="Mohamed"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            
            {/* Content - Right side on desktop, bottom on mobile */}
            <div className="w-full md:w-2/3 space-y-6">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Hi, I&apos;m Mohamed — Strategic Planning Analyst & General Manager at Madaar Solutions. I build and scale SaaS & e-commerce ventures, combining deep market insight with AI-powered tools. I help business owners turn complexity into growth with smart data strategies and automation.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  My expertise lies in leveraging AI-powered tools and analytics to optimize business 
                  operations, enhance customer experiences, and drive sustainable growth. I combine 
                  strategic thinking with practical implementation to deliver measurable results.
                </p>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Key Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Strategic Planning',
                    'Business Growth',
                    'Data Analytics',
                    'AI Implementation',
                    'SaaS Optimization',
                    'E-commerce Strategy'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 