
import React from 'react';
import { Github, Linkedin, Mail, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dinesh Chapiri</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Software Engineering Graduate passionate about building scalable, 
              modular, and intelligent solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:dineshkumarchapiri@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a 
                  href="mailto:dineshkumarchapiri@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  dineshkumarchapiri@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a 
                  href="tel:+919381812668"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 9381812668
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Dinesh Chapiri. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-2">Built with</span>
              <Star className="text-yellow-500 mx-1" size={16} />
              <span className="ml-2">using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
