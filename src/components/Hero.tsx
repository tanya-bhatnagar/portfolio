import { Download, ChevronDown, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onScrollToProjects: () => void;
}

export function Hero({ onScrollToProjects }: HeroProps) {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = [
    'Full Stack Developer',
    'React.js Developer',
    'Node.js Developer',
    'Express.js Developer',
    'SQL Developer',
    'MERN Stack Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center space-y-6 max-w-4xl">
        <div className="mb-4">
          <p className="text-green-400 text-lg sm:text-xl font-mono animate-pulse">
            &lt;Hello World, I'm/&gt;
          </p>
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            TANYA
          </span>
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
          BHATNAGAR
        </h2>

        <div className="pt-4 h-16 flex items-center justify-center">
          <p className="text-cyan-400 text-xl sm:text-2xl font-mono transition-all duration-500 animate-fade-in">
            {skills[currentSkill]}
          </p>
        </div>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4">
          Enthusiastic Computer Science student with a strong focus on full-stack
          web development. I craft responsive and scalable solutions using
          React.js, Node.js, Express.js, and MySQL, while constantly exploring
          new technologies to refine my skills.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            onClick={onScrollToProjects}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            View My Work
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all flex items-center space-x-2">
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>

        <div className="flex items-center justify-center space-x-6 pt-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all"
          >
            <Linkedin size={24} className="text-cyan-400" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all"
          >
            <Github size={24} className="text-cyan-400" />
          </a>
        </div>
      </div>

      <button
        onClick={onScrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <span className="text-sm font-mono">Scroll Down</span>
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
