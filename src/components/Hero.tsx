
import React from 'react';
import { Mail, Star, Users, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="text-blue-600">Dinesh Chapiri</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 mb-4">
                Software Engineering Graduate
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl">
                "Building scalable, modular, and intelligent solutions."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={20} />
                <span>dineshkumarchapiri@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>📞 +91 9381812668</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>📍 Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="text-gray-800" size={24} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center">
                <img
                  src="/lovable-uploads/4aa2ddf0-9c79-4997-9eb9-9855f4f2cc4f.png"
                  alt="Dinesh Chapiri"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <Star className="text-yellow-500" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                <Users className="text-green-500" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
