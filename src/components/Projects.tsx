import { ExternalLink, Github, Database } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      title: 'Restro Buddy',
      category: 'Full Stack',
      description:
        'A user-friendly food ordering platform that allows users to discover restaurant menus, select items, and add them to a cart. Built with ReactJS for the frontend, Node.js/Express for the backend, and SQL for database management.',
      tech: ['ReactJS', 'Node.js', 'Express.js', 'Redux', 'SQL'],
      features: [
        'User authentication and authorization',
        'Real-time menu browsing and search',
        'Shopping cart with order management',
        'Restaurant dashboard for menu updates',
        'Order tracking and history',
        'Responsive design for all devices'
      ],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Jobloom',
      category: 'Full Stack',
      description:
        'A full-stack job portal built with ReactJS for the frontend, Node.js/Express for the backend, and Clerk for user authentication. It includes features for job posting, application management, and error monitoring with Sentry.',
      tech: ['ReactJS', 'Node.js', 'Express.js', 'Clerk', 'MongoDB', 'Sentry', 'Tailwind CSS'],
      features: [
        'User authentication with Clerk',
        'Responsive design for all devices',
        'Error monitoring with Sentry',
        'ATS resume checker with scoring and suggestions',
        'Career support tools with resume templates, interview tips, and chatbot',
        'Fully responsive design for all devices'
      ],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'EasyTrack',
      category: 'Web Development',
      description:
        'Expense tracking app that helps users manage their finances by logging income and expenses, categorizing transactions, and generating reports to visualize spending patterns.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      features: [
        'Income and expense tracking',
        'Category-wise transaction management',
        'Visual reports and charts',
        'Budget planning tools',
        'Export data to CSV/PDF',
        'Multi-currency support'
      ],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'BookStore',
      category: 'Full Stack',
      description:
        'Online bookstore with user authentication, book browsing, shopping cart, and order management. Admin panel for managing inventory and orders.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'User authentication and profiles',
        'Advanced book search and filtering',
        'Shopping cart and checkout',
        'Order tracking and history',
        'Admin panel for inventory management',
        'Book reviews and ratings'
      ],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  const categories = ['All', 'Full Stack', 'Web Development'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4">
          <span className="text-cyan-400">02.</span>{' '}
          <span className="text-white">My</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>

        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          A showcase of my technical skills through real-world applications and
          innovative solutions.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                filter === category
                  ? 'bg-cyan-500 text-black'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 transition-all duration-300 ${
                  hoveredProject === project.title
                    ? 'border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20'
                    : 'hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Database className="text-cyan-400" size={24} />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.featured && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/50">
                      Completed
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-800 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all"
                    >
                      <Github size={18} className="text-cyan-400" />
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500 rounded-lg transition-all"
                    >
                      <ExternalLink size={18} className="text-cyan-400" />
                    </a>
                  </div>
                  <span className="text-gray-500 text-xs font-mono">{project.category}</span>
                </div>

                {hoveredProject === project.title && (
                  <div className="mt-6 pt-6 border-t border-cyan-500/30 animate-fade-in">
                    <h4 className="text-cyan-400 font-semibold mb-3 flex items-center space-x-2">
                      <span className="text-sm">Key Features:</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-gray-400 text-xs flex items-start space-x-2"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all font-mono">
            View More Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
