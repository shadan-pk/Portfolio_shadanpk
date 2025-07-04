import React, { useState } from 'react';
import styles from './Projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaPalette, FaMobile, FaEye } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  icon: any;
  gradient: string;
  github?: string;
  demo?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Node.js featuring user authentication, product management, and secure payment processing.",
    fullDescription: "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: FaCode,
    gradient: "linear-gradient(135deg, #4285F4, #1a73e8)",
    github: "https://github.com/shadan-pk/ecommerce",
    demo: "https://ecommerce-demo.com",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Responsive design for all devices"
    ]
  },
  {
    id: 2,
    title: "Design System",
    description: "Comprehensive UI component library and design system with reusable components, design tokens, and documentation.",
    fullDescription: "A complete design system with reusable components, design tokens, and comprehensive documentation to ensure consistency across all digital products.",
    category: "design",
    tags: ["Figma", "React", "Storybook", "CSS"],
    icon: FaPalette,
    gradient: "linear-gradient(135deg, #34A853, #137333)",
    github: "https://github.com/shadan-pk/design-system",
    demo: "https://design-system-demo.com",
    features: [
      "50+ reusable UI components",
      "Design tokens for colors, typography, and spacing",
      "Comprehensive documentation with Storybook",
      "Accessibility-first approach",
      "Dark and light theme support",
      "Figma design kit integration"
    ]
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Beautiful mobile application interface designed with user experience in mind, featuring smooth animations and intuitive navigation.",
    fullDescription: "A stunning mobile application interface designed with user experience in mind, featuring smooth animations, intuitive navigation, and modern design principles.",
    category: "mobile",
    tags: ["React Native", "Expo", "TypeScript"],
    icon: FaMobile,
    gradient: "linear-gradient(135deg, #FBBC05, #F9AB00)",
    github: "https://github.com/shadan-pk/mobile-app",
    demo: "https://mobile-app-demo.com",
    features: [
      "Cross-platform compatibility",
      "Smooth animations and transitions",
      "Offline functionality",
      "Push notifications",
      "Biometric authentication",
      "Real-time data synchronization"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio website showcasing projects and skills with an innovative glass morphism design and smooth animations.",
    fullDescription: "A modern portfolio website showcasing projects and skills with an innovative glass morphism design, smooth animations, and responsive layout.",
    category: "web",
    tags: ["React", "TypeScript", "Framer Motion"],
    icon: FaCode,
    gradient: "linear-gradient(135deg, #EA4335, #D33B2C)",
    github: "https://github.com/shadan-pk/portfolio",
    demo: "https://shadan-pk.com",
    features: [
      "Glass morphism design aesthetic",
      "Smooth page transitions",
      "Interactive animations",
      "Responsive design",
      "SEO optimized",
      "Performance optimized"
    ]
  }
];

const ProjectCard = ({ project, onClick }: { project: Project, onClick: () => void }) => (
  <motion.div 
    className={styles.projectCard}
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.2 }}
  >
    <div 
      className={styles.projectImage}
      style={{ background: project.gradient }}
    >
      <project.icon />
    </div>
    
    <div className={styles.projectContent}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectTags}>
        {project.tags.slice(0, 4).map((tag, index) => (
          <span key={index} className={styles.projectTag}>{tag}</span>
        ))}
      </div>
    </div>
    
    <div className={styles.projectActions}>
      <button 
        className={styles.viewDetailsButton}
        onClick={onClick}
      >
        <FaEye /> View Details
      </button>
      <div className={styles.projectLinks}>
        {project.github && (
          <a 
            href={project.github} 
            className={styles.projectLink}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Code
          </a>
        )}
        {project.demo && (
          <a 
            href={project.demo} 
            className={styles.projectLink}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project | null, onClose: () => void }) => {
  if (!project) return null;

  return (
    <motion.div 
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={styles.modal}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className={styles.modalContent}>
          <div className={styles.modalSection}>
            <h3 className={styles.modalSectionTitle}>About</h3>
            <p>{project.fullDescription}</p>
          </div>
          
          <div className={styles.modalSection}>
            <h3 className={styles.modalSectionTitle}>Technologies</h3>
            <div className={styles.projectTags}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.projectTag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.modalSection}>
            <h3 className={styles.modalSectionTitle}>Key Features</h3>
            <ul className={styles.featuresList}>
              {project.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'Design' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div 
      className={styles.contentWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>My Projects</h1>
        <p className={styles.subtitle}>
          A showcase of my creative work and technical expertise
        </p>
      </div>

      <div className={styles.projectsContainer}>
        <div className={styles.filterSection}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;

