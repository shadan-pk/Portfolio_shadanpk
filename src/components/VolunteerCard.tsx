import React, { useState } from 'react';
import styles from './VolunteerCard.module.css';
import { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface VolunteerCardProps {
  icon: IconType;
  title: string;
  description: string;
  details: {
    organization: string;
    duration: string;
    achievements: string[];
    skills: string[];
  };
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  details 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.cardContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.card}>
        <Icon className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={styles.hoverBox}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <div className={styles.hoverContent}>
              <div className={styles.organizationSection}>
                <h4 className={styles.sectionTitle}>Organization</h4>
                <p className={styles.organization}>{details.organization}</p>
                <span className={styles.duration}>{details.duration}</span>
              </div>
              
              <div className={styles.achievementsSection}>
                <h4 className={styles.sectionTitle}>Key Achievements</h4>
                <ul className={styles.achievementsList}>
                  {details.achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      className={styles.achievementItem}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.skillsSection}>
                <h4 className={styles.sectionTitle}>Skills Developed</h4>
                <div className={styles.skillsTags}>
                  {details.skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      className={styles.skillTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VolunteerCard;

