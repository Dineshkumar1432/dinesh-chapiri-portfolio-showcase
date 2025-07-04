
import React from 'react';
import { Code, Users, Star, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Full-Stack Development",
      description: "Experienced in building scalable web applications and AI solutions"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Team Collaboration",
      description: "Strong communication and problem-solving skills in team environments"
    },
    {
      icon: <Star className="text-yellow-600" size={24} />,
      title: "Innovation",
      description: "Passionate about exploring new technologies and creating user-focused solutions"
    },
    {
      icon: <Briefcase className="text-purple-600" size={24} />,
      title: "Professional Growth",
      description: "Eager to contribute to meaningful projects and continuous learning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                I'm a passionate software engineering graduate with a love for creating 
                <span className="text-blue-600 font-semibold"> scalable web applications</span> and 
                <span className="text-blue-600 font-semibold"> AI solutions</span> that make a real difference.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My journey in technology has been driven by curiosity and a desire to solve complex problems. 
                I specialize in <strong>full-stack development</strong> and <strong>machine learning</strong>, 
                with hands-on experience in building everything from real-time chat applications to 
                AI-powered healthcare solutions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                What sets me apart is my combination of technical expertise and strong soft skills. 
                I believe in the power of <strong>effective communication</strong>, <strong>adaptability</strong>, 
                and <strong>creative problem-solving</strong> to deliver solutions that not only work well 
                but also provide exceptional user experiences.
              </p>

              <p className="text-lg leading-relaxed">
                I'm always eager to explore emerging technologies and collaborate with like-minded professionals 
                to create innovative, user-focused solutions that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
