import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HoverExplanationCard.module.css';

interface HoverExplanationCardProps {
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

const HoverExplanationCard: React.FC<HoverExplanationCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  accentColor,
  details 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Track hover state for both card and popup
  const [cardHover, setCardHover] = useState(false);
  const [popupHover, setPopupHover] = useState(false);
  const isPopupVisible = cardHover || popupHover;

  return (
    <div className={styles.cardContainer}>
      <motion.div 
        className={styles.card}
        style={{ '--accent-color': accentColor } as React.CSSProperties}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <div className={styles.iconContainer}>
          <Icon className={styles.icon} />
          <div className={styles.iconGlow} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </motion.div>

      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            className={styles.hoverDetails}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setPopupHover(true)}
            onMouseLeave={() => setPopupHover(false)}
          >
            <div className={styles.detailsHeaderContainer}>
              <div className={styles.detailsHeader}>
                <h3 className={styles.detailsTitle}>{title}</h3>
                <p className={styles.detailsSubtitle}>Professional Expertise</p>
              </div>
              <div className={styles.detailsSection}>
                <h4 className={styles.sectionTitle}>Overview</h4>
                <p className={styles.sectionText}>{details.overview}</p>
              </div>
            </div>

            {/* Move Overview here, below Professional Expertise */}

            <div className={styles.detailsContent}>
              <div className={styles.detailsSection}>
                <h4 className={styles.sectionTitle}>Core Skills</h4>
                <div className={styles.skillsGrid}>
                  {details.skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className={styles.detailsSection}>
                <h4 className={styles.sectionTitle}>Tools & Technologies</h4>
                <div className={styles.toolsGrid}>
                  {details.tools.map((tool, index) => (
                    <span key={index} className={styles.toolTag}>{tool}</span>
                  ))}
                </div>
              </div>

              {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%' }}>
                <div className={styles.detailsSection} style={{ flex: 1 }}>
                  <h4 className={styles.sectionTitle}>Experience Highlights</h4>
                  <ul className={styles.experienceList}>
                    {details.experience.map((item, index) => (
                      <li key={index} className={styles.experienceItem}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.detailsSection} style={{ flex: 1 }}>
                  <h4 className={styles.sectionTitle}>My Approach</h4>
                  <ul className={styles.approachList}>
                    {details.approach.map((item, index) => (
                      <li key={index} className={styles.approachItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default HoverExplanationCard;

