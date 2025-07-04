
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Star, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with the form data
      const subject = `Portfolio Contact: Message from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `;
      
      const mailtoLink = `mailto:dineshkumarchapiri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Client Opened!",
        description: "Your default email client should open with the message pre-filled. Please send it to complete your message.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a passionate developer to join your team, want to collaborate on an exciting project, 
                or simply want to discuss the latest in tech, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a 
                    href="mailto:dineshkumarchapiri@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    dineshkumarchapiri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <a 
                    href="tel:+919381812668"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +91 9381812668
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <span className="text-purple-600">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
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

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
