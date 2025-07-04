
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Instructor",
      company: "Training Program",
      period: "Mar 2025 – Present",
      description: "Working on backend technologies like SQLite, Node.js, and Python as part of my training. Gaining practical experience in database management, API development, and server-side programming.",
      skills: ["SQLite", "Node.js", "Python", "Database Management", "API Development"],
      current: true
    },
    {
      title: "AI & Data Analytics Intern",
      company: "EduSkills Foundation",
      period: "Dec 2024 – Jan 2025",
      description: "Built an NLP chatbot and worked on AI & data analytics projects with a Green Tech focus. Achieved over 85% accuracy in intent classification.",
      skills: ["NLP", "Machine Learning", "Data Analytics", "Chatbot Development", "Green Tech"],
      current: false
    },
    {
      title: "Java Developer Intern",
      company: "Digital Bheem",
      period: "Aug 2023 – Sep 2023",
      description: "Developed a Java-based Online Movie Ticket Booking System focusing on usability and Object-Oriented Programming concepts. Created user-friendly interfaces with seat selection functionality.",
      skills: ["Java", "OOP", "GUI Development", "System Design", "User Experience"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My journey through various roles and internships, each contributing to my growth as a software developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  experience.current 
                    ? 'bg-blue-600 ring-4 ring-blue-100' 
                    : 'bg-white border-4 border-blue-200'
                }`}>
                  <Briefcase 
                    size={24} 
                    className={experience.current ? 'text-white' : 'text-blue-600'} 
                  />
                </div>

                {/* Content */}
                <div className="flex-1 ml-8">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{experience.period}</span>
                        {experience.current && (
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Professional Roles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600">AI Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
