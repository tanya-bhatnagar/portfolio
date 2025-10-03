import { Code2, Database, Briefcase, Wrench } from 'lucide-react';
import { useState, useEffect } from 'react';

export function About() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const skills = [
    { name: 'React.JS', level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.JS', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'JavaScript', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'HTML/CSS', level: 92, color: 'from-red-500 to-rose-500' },
    { name: 'MySQL', level: 80, color: 'from-blue-500 to-indigo-500' },
    { name: 'Git', level: 85, color: 'from-orange-500 to-red-500' },
  ];

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex].name;

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentSkill.length) {
          setDisplayedText(currentSkill.substring(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentSkill.substring(0, displayedText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSkillIndex, typingSpeed, skills]);

  const expertise = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building complete web applications with modern technologies.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing relational databases.',
    },
    {
      icon: Briefcase,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces.',
    },
    {
      icon: Wrench,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs.',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4">
          <span className="text-cyan-400">01.</span>{' '}
          <span className="text-white">About</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 text-xl font-mono mb-4">&lt;profile&gt;</h3>
            <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
              <p>
                Hi! I'm passionate Computer Science student from Roorkee, UP,
                currently pursuing my degree at LPU. I specialize in creating
                responsive and user-centric web applications that solve real-world problems.
              </p>
              <p>
                My journey in programming started with curiosity about how
                websites work, which led me to dive deep into both front-end
                and back-end technologies. I specialize in React.js, Express.js,
                Node.js, and SQL.
              </p>
              <p>
                I thrive as an ESE Software, where I contributed to the
                development of PaycardStudy, a food ordering platform with
                3,000+ real-time users. I've also built projects like LeetByte,
                EasyTrack, and BookStore Management System, all driven by a
                smooth functionality and a user-friendly experience. This
                journey has deepened my love for solving problems and creating
                digital experiences that make a positive difference.
              </p>
            </div>
            <p className="text-cyan-400 text-xl font-mono mt-4">&lt;/profile&gt;</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
            <h3 className="text-cyan-400 text-xl font-mono mb-4">&lt;skills&gt;</h3>

            <div className="mb-8 h-16 flex items-center">
              <span className="text-white font-mono text-2xl">
                {displayedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-mono text-sm">{skill.name}</span>
                    <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-cyan-400 text-xl font-mono mt-6">&lt;/skills&gt;</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <Icon className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
          <h3 className="text-cyan-400 text-xl font-mono mb-4">&lt;education&gt;</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold">B.Tech Computer Science</h4>
              <p className="text-cyan-400 text-sm">Lovely Professional University</p>
              <p className="text-gray-400 text-sm">Class 1 (Secondary School)</p>
            </div>
          </div>
          <p className="text-cyan-400 text-xl font-mono mt-4">&lt;/education&gt;</p>
        </div>
      </div>
    </section>
  );
}
