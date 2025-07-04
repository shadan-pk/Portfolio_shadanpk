import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import BlobBackground from './components/BlobBackground';
import TechIcons from './components/TechIcons';
import HoverExplanationCard from './components/HoverExplanationCard';
import VolunteerCard from './components/VolunteerCard';
import { FaPaintBrush, FaCode, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const HomePage = () => (
  <div className="horizontal-scroll-section">
    <div className="main-content">
      <div className="left-panel">
        <h1 className="name">SHADAN PK</h1>
        <div className="experience-blocks">
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%', justifyContent: 'center', alignItems: 'stretch' }}>
          <HoverExplanationCard 
            icon={FaPaintBrush} 
            title="Designing" 
            description="Creating beautiful and intuitive user interfaces"
            accentColor="var(--google-red)"
            details={{
              overview: "I specialize in creating visually stunning and user-centric designs that balance aesthetics with functionality. My design philosophy centers on simplicity, accessibility, and meaningful user experiences.",
              skills: ["Visual Design", "Brand Identity", "Typography", "Color Theory", "Layout Design", "Design Systems"],
              tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Sketch", "Adobe XD", "Canva"],
              // experience: [
              //   "Designed brand identities for 20+ startups and small businesses",
              //   "Created visual assets for IEEE MEA SB events and campaigns",
              //   "Developed design systems used by teams of 10+ developers",
              //   "Led design workshops for aspiring designers in the community"
              // ],
              // approach: [
              //   "Research-driven design decisions based on user needs",
              //   "Iterative design process with continuous feedback loops",
              //   "Accessibility-first approach ensuring inclusive design",
              //   "Collaboration with developers for seamless implementation"
              // ]
            }}
          />
          <HoverExplanationCard 
            icon={FaCode} 
            title="UI/UX" 
            description="Crafting seamless user experiences with modern technologies"
            accentColor="var(--google-blue)"
            details={{
              overview: "I focus on creating intuitive and engaging user experiences through research, prototyping, and user-centered design. My approach combines analytical thinking with creative problem-solving.",
              skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture", "Interaction Design"],
              tools: ["Figma", "Adobe XD", "Principle", "InVision", "Miro", "Hotjar", "Google Analytics"],
              // experience: [
              //   "Improved user engagement by 40% through UX redesign projects",
              //   "Conducted user research sessions with 100+ participants",
              //   "Created interactive prototypes for 15+ web and mobile applications",
              //   "Mentored junior UX designers in user-centered design principles"
              // ],
              // approach: [
              //   "User research and persona development for informed decisions",
              //   "Rapid prototyping and iterative testing for validation",
              //   "Data-driven design improvements based on user analytics",
              //   "Cross-functional collaboration with product and engineering teams"
              // ]
            }}
          />
          <HoverExplanationCard 
            icon={FaHeart} 
            title="Volunteering" 
            description="Community impact through technology and education"
            accentColor="var(--google-green)"
            details={{
              overview: "I am passionate about leveraging technology and education to create a positive impact in the community. My volunteering experience spans digital literacy, accessible web solutions, mentoring, and organizing tech events.",
              skills: [
                "Community Leadership",
                "Project Management",
                "Mentoring",
                "Public Speaking",
                "Accessibility Design",
                "Social Impact"
              ],
              tools: [
                "Workshops",
                "Mentorship Programs",
                "Hackathons",
                "Accessibility Tools"
              ],
              // experience: [
              //   "Led digital literacy workshops for 200+ seniors",
              //   "Developed accessible web solutions for 5 NGOs",
              //   "Mentored 15+ junior developers in open source",
              //   "Organized 3 successful community hackathons"
              // ],
              // approach: [
              //   "Empowering communities through education and technology",
              //   "Inclusive and accessible project development",
              //   "Mentorship and knowledge sharing",
              //   "Collaboration with NGOs and local organizations"
              // ]
            }}
          />
        </div>
        </div>
      </div>
      <div className="right-panel">
        <img 
          src="./assets/profile.jpeg" 
          alt="Shadan PK" 
          className="profile-image"
        />
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'home', component: HomePage, title: 'Home' },
    { id: 'about', component: About, title: 'About' },
    { id: 'projects', component: Projects, title: 'Projects' },
    { id: 'contact', component: Contact, title: 'Contact' }
  ];

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const targetX = index * window.innerWidth;
      scrollContainerRef.current.scrollTo({
        left: targetX,
        behavior: 'smooth'
      });
      setCurrentSection(index);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  return (
    <div className="app">
      <BlobBackground />
      
      {/* Navigation arrows with smooth animations */}
      <AnimatePresence>
        {currentSection > 0 && (
          <motion.button 
            className="nav-arrow nav-arrow-left"
            onClick={prevSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronLeft />
          </motion.button>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {currentSection < sections.length - 1 && (
          <motion.button 
            className="nav-arrow nav-arrow-right"
            onClick={nextSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronRight />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section indicators with smooth animations */}
      <motion.div 
        className="section-indicators"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {sections.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${currentSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>

      {/* Horizontal scroll container with smooth morphing transitions */}
      <div 
        ref={scrollContainerRef}
        className="horizontal-scroll-container"
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft;
          const sectionIndex = Math.round(scrollLeft / window.innerWidth);
          if (sectionIndex !== currentSection) {
            setCurrentSection(sectionIndex);
          }
        }}
      >
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <motion.div
              key={section.id}
              className="horizontal-scroll-section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: Math.abs(currentSection - index) <= 1 ? 1 : 0.3,
                scale: currentSection === index ? 1 : 0.95,
                filter: currentSection === index ? 'blur(0px)' : 'blur(1px)',
                transform: `translateZ(${currentSection === index ? 0 : -50}px)`
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Component />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom navigation with smooth animations */}
      <motion.nav 
        className="bottom-nav"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`nav-link ${currentSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {section.title}
          </motion.button>
        ))}
      </motion.nav>
    </div>
  );
};

export default App;

