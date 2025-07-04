
import React from 'react';
import { Star, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Sree Vidyanikethan Engineering College",
      period: "2021 – 2025",
      gpa: "8.5",
      description: "Comprehensive computer science education with focus on software engineering, data structures, algorithms, and modern development practices.",
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Database Systems", "Web Development"]
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "Sree Chaitanya Junior College",
      period: "2019 – 2021",
      gpa: "9.7",
      description: "Strong foundation in Mathematics, Physics, and Chemistry with exceptional academic performance.",
      highlights: ["Mathematics", "Physics", "Chemistry", "Problem Solving"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science and problem-solving skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                    {edu.degree}
                    <Award className="ml-3 text-yellow-500" size={24} />
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600">
                    {edu.period}
                  </p>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:text-right">
                  <div className="flex items-center justify-start lg:justify-end">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    <span className="text-2xl font-bold text-gray-800">
                      {edu.gpa}
                    </span>
                    <span className="text-gray-600 ml-1">GPA</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <span
                    key={highlightIndex}
                    className="px-4 py-2 bg-white text-blue-800 rounded-full text-sm font-medium shadow-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Academic Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">9.7</div>
                <div className="text-gray-600">Intermediate GPA</div>
                <div className="text-sm text-gray-500 mt-1">Top Academic Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.5</div>
                <div className="text-gray-600">B.Tech GPA</div>
                <div className="text-sm text-gray-500 mt-1">Consistent Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
