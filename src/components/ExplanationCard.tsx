import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ExplanationCard.module.css';

interface ExplanationCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  accentColor: string;
  details: {
    overview: string;
    skills: string[];
    tools: string[];
    experience: string[];
    approach: string[];
  };
}

const ExplanationCard: React.FC<ExplanationCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  accentColor,
  details 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <motion.div 
        className={styles.card}
        style={{ '--accent-color': accentColor } as React.CSSProperties}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.cardHeader}>
          <div className={styles.iconContainer}>
            <Icon className={styles.icon} />
            <div className={styles.iconGlow} />
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <button className={styles.expandButton}>
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={styles.expandedContent}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.contentSection}>
                <h4 className={styles.sectionTitle}>Overview</h4>
                <p className={styles.sectionText}>{details.overview}</p>
              </div>

              <div className={styles.contentSection}>
                <h4 className={styles.sectionTitle}>Core Skills</h4>
                <div className={styles.skillsGrid}>
                  {details.skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className={styles.contentSection}>
                <h4 className={styles.sectionTitle}>Tools & Technologies</h4>
                <div className={styles.toolsGrid}>
                  {details.tools.map((tool, index) => (
                    <span key={index} className={styles.toolTag}>{tool}</span>
                  ))}
                </div>
              </div>

              <div className={styles.contentSection}>
                <h4 className={styles.sectionTitle}>Experience Highlights</h4>
                <ul className={styles.experienceList}>
                  {details.experience.map((item, index) => (
                    <li key={index} className={styles.experienceItem}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h4 className={styles.sectionTitle}>My Approach</h4>
                <ul className={styles.approachList}>
                  {details.approach.map((item, index) => (
                    <li key={index} className={styles.approachItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExplanationCard;

