
import React from 'react';
import { Github, Star, Users, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Chat Website using MERN Stack",
      description: "Real-time chat application built with MongoDB, Express.js, React.js, Node.js, and Socket.io for seamless communication.",
      features: ["Real-time messaging with Socket.io", "Group chat functionality", "RESTful API development", "User authentication & authorization", "Scalable backend architecture"],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      github: "#",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Parkinson's Disease Prediction App",
      description: "Web application that predicts Parkinson's disease using CNN and LightGBM models with secure authentication.",
      features: ["AI-powered CNN & LightGBM models", "Secure user authentication system", "Medical data input forms", "Real-time disease prediction", "Interactive data visualization charts"],
      tech: ["Python", "CNN", "LightGBM", "Web Development"],
      github: "#",
      live: "#",
      featured: true,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "React Movie App",
      description: "Responsive movie browsing application with modular design, featuring smooth navigation and state management.",
      features: ["Interactive movie cards with details", "Dynamic routing system", "Context API state management", "Responsive mobile-first design", "Advanced movie search functionality"],
      tech: ["React.js", "Context API", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Chatbot using NLP",
      description: "AI-powered chatbot achieving over 85% intent classification accuracy using Logistic Regression and NLP techniques.",
      features: ["Natural language processing algorithms", "85%+ intent classification accuracy", "Machine learning model training", "Conversation flow management", "Real-time response generation"],
      tech: ["Python", "NLP", "Logistic Regression", "AI"],
      github: "#",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tooth & Glow Dashboard",
      description: "Modern dental clinic management dashboard with user authentication and dynamic data visualization.",
      features: ["Secure user authentication system", "Comprehensive clinic management tools", "Dynamic data visualization charts", "Appointment scheduling system", "Patient record management"],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/Dineshkumar1432/dentalcare.git",
      live: null,
      featured: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Job Board Blueprint Generator",
      description: "Comprehensive job board application with integrated AI chatbot for posting jobs and managing applications.",
      features: ["AI chatbot integration for assistance", "Advanced job posting management", "Dynamic job filtering system", "Application tracking system", "Clean, intuitive user interface"],
      tech: ["React.js", "Node.js", "AI Integration", "Database"],
      github: "https://github.com/Dineshkumar1432/job-board-blueprint-gen.git",
      live: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, AI/ML implementation, and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{project.title}</h3>
                  <Star className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-3 py-1 bg-gray-700 text-white rounded text-sm hover:bg-gray-800 transition-colors"
                  >
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex-1 text-center px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
