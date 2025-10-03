import { useState, useRef } from 'react';
import { MatrixRain } from './components/MatrixRain';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const ref = refs[section as keyof typeof refs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <div ref={homeRef}>
        <Hero onScrollToProjects={() => scrollToSection('projects')} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
