
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Git/GitHub", level: 85 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Creativity", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through projects, internships, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Coursework & Academic Background</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Data Structures (92%)', 'Object-Oriented Programming (88%)', 'Database Management Systems (90%)', 'Operating Systems (85%)', 'Computer Networks (87%)'].map((course, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Achievements & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <h4 className="font-semibold text-gray-800">Academic Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm">Maintained 8.5+ GPA throughout B.Tech program with consistent performance in core computer science subjects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="font-semibold text-gray-800">AI Project Recognition</h4>
                </div>
                <p className="text-gray-600 text-sm">Achieved 85%+ accuracy in NLP chatbot development during AI internship at EduSkills Foundation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h4 className="font-semibold text-gray-800">Full-Stack Development</h4>
                </div>
                <p className="text-gray-600 text-sm">Successfully delivered 6+ comprehensive projects using MERN stack and modern web technologies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <h4 className="font-semibold text-gray-800">Industry Experience</h4>
                </div>
                <p className="text-gray-600 text-sm">Completed multiple internships gaining hands-on experience in software development and AI technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
