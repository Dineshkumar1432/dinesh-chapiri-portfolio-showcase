import React from 'react';
import { Github, Star, Users, ExternalLink, Database, Server, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Job Portal Backend System",
      description: "Comprehensive backend API for job portal platform with advanced job matching algorithms, user management, and real-time notifications.",
      features: ["RESTful API architecture", "JWT-based authentication", "Advanced job search & filtering", "File upload for resumes", "Email notification system", "Role-based access control"],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Nodemailer"],
      github: "https://github.com/Dineshkumar1432/JobPortal-backend.git",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "backend"
    },
    {
      title: "Healthcare Management Backend",
      description: "Robust healthcare management system backend with patient records, appointment scheduling, and medical data security compliance.",
      features: ["Patient management system", "Appointment scheduling API", "Medical records security", "Doctor-patient communication", "Prescription management", "HIPAA compliant architecture"],
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
      github: "https://github.com/Dineshkumar1432/HealthCareManagement-backend.git",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "backend"
    },
    {
      title: "Hotel Management Backend",
      description: "Complete hotel management backend system with booking engine, room management, payment processing, and guest services automation.",
      features: ["Room booking & availability system", "Payment gateway integration", "Guest check-in/check-out API", "Inventory management", "Staff management system", "Revenue analytics"],
      tech: ["Node.js", "Express.js", "MongoDB", "Stripe API", "JWT", "Mongoose"],
      github: "https://github.com/Dineshkumar1432/HotelManagement-Backend.git",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "backend"
    },
    {
      title: "Chat Website using MERN Stack",
      description: "Real-time chat application built with MongoDB, Express.js, React.js, Node.js, and Socket.io for seamless communication.",
      features: ["Real-time messaging with Socket.io", "Group chat functionality", "RESTful API development", "User authentication & authorization", "Scalable backend architecture"],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      github: "#",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "fullstack"
    },
    {
      title: "Parkinson's Disease Prediction App",
      description: "Web application that predicts Parkinson's disease using CNN and LightGBM models with secure authentication.",
      features: ["AI-powered CNN & LightGBM models", "Secure user authentication system", "Medical data input forms", "Real-time disease prediction", "Interactive data visualization charts"],
      tech: ["Python", "CNN", "LightGBM", "Web Development"],
      github: "#",
      live: "#",
      featured: true,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "ai/ml"
    },
    {
      title: "Chatbot using NLP",
      description: "AI-powered chatbot achieving over 85% intent classification accuracy using Logistic Regression and NLP techniques.",
      features: ["Natural language processing algorithms", "85%+ intent classification accuracy", "Machine learning model training", "Conversation flow management", "Real-time response generation"],
      tech: ["Python", "NLP", "Logistic Regression", "AI"],
      github: "#",
      live: null,
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "ai/ml"
    },
    {
      title: "React Movie App",
      description: "Responsive movie browsing application with modular design, featuring smooth navigation and state management.",
      features: ["Interactive movie cards with details", "Dynamic routing system", "Context API state management", "Responsive mobile-first design", "Advanced movie search functionality"],
      tech: ["React.js", "Context API", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "frontend"
    },
    {
      title: "Tooth & Glow Dashboard",
      description: "Modern dental clinic management dashboard with user authentication and dynamic data visualization.",
      features: ["Secure user authentication system", "Comprehensive clinic management tools", "Dynamic data visualization charts", "Appointment scheduling system", "Patient record management"],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/Dineshkumar1432/dentalcare.git",
      live: null,
      featured: false,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "fullstack"
    },
    {
      title: "Job Board Blueprint Generator",
      description: "Comprehensive job board application with integrated AI chatbot for posting jobs and managing applications.",
      features: ["AI chatbot integration for assistance", "Advanced job posting management", "Dynamic job filtering system", "Application tracking system", "Clean, intuitive user interface"],
      tech: ["React.js", "Node.js", "AI Integration", "Database"],
      github: "https://github.com/Dineshkumar1432/job-board-blueprint-gen.git",
      live: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "fullstack"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'backend':
        return <Server className="text-green-600" size={20} />;
      case 'ai/ml':
        return <Database className="text-purple-600" size={20} />;
      case 'fullstack':
        return <Users className="text-blue-600" size={20} />;
      default:
        return <Star className="text-yellow-500" size={20} />;
    }
  };

  const getTypeBadge = (type) => {
    const badges = {
      backend: "bg-green-100 text-green-800",
      frontend: "bg-orange-100 text-orange-800",
      fullstack: "bg-blue-100 text-blue-800",
      "ai/ml": "bg-purple-100 text-purple-800"
    };
    return badges[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Heading Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse">
              <Star size={24} />
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-3"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical projects spanning 
            <span className="font-semibold text-green-600"> backend development</span>, 
            <span className="font-semibold text-purple-600"> AI/ML implementation</span>, and 
            <span className="font-semibold text-blue-600"> full-stack solutions</span>.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <Server className="text-green-600" size={18} />
              <span className="text-sm font-medium text-gray-700">Backend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <Database className="text-purple-600" size={18} />
              <span className="text-sm font-medium text-gray-700">AI/ML</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              <Users className="text-blue-600" size={18} />
              <span className="text-sm font-medium text-gray-700">Full Stack</span>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {getTypeIcon(project.type)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadge(project.type)}`}>
                    {project.type.toUpperCase()}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-2 flex-1">{project.title}</h3>
                  {project.type === 'backend' && <Shield className="text-green-600 flex-shrink-0 ml-2" size={20} />}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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

        {/* Other Projects */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">Other Projects</h3>
          <div className="flex items-center justify-center">
            <div className="h-1 w-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-gray-500 rounded-full mx-2"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-200 group"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadge(project.type)}`}>
                    {project.type.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-3 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition-colors transform hover:scale-105"
                  >
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors transform hover:scale-105"
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
