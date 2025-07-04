
import React from 'react';
import { Mail, Github, Linkedin, Star, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                Whether you're looking for a passionate developer to join your team, want to collaborate on an exciting project, 
                or simply want to discuss the latest in tech, I'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <a 
                    href="mailto:dineshkumarchapiri@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    dineshkumarchapiri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-green-100 rounded-full mb-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                  <a 
                    href="tel:+919381812668"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +91 9381812668
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <span className="text-purple-600">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="text-blue-600" size={28} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Github className="text-gray-800" size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
