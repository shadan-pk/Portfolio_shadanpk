import React, { useState } from 'react';
import styles from './EnhancedGlassCard.module.css';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface EnhancedGlassCardProps {
  icon: IconType;
  title: string;
  description?: string;
  gradient?: string;
}

const EnhancedGlassCard: React.FC<EnhancedGlassCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  gradient = 'linear-gradient(135deg, #3498db, #2980b9)'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5
      }}
      transition={{ 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        '--gradient': gradient
      } as React.CSSProperties}
    >
      <div className={styles.cardInner}>
        <div className={styles.iconContainer}>
          <motion.div
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Icon className={styles.icon} />
          </motion.div>
          <div className={styles.iconGlow}></div>
        </div>
        
        <motion.h3 
          className={styles.title}
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        {description && (
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, height: 0 }}
            animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        )}
        
        <div className={styles.shimmer}></div>
        <div className={styles.particles}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`${styles.particle} ${styles[`particle${i + 1}`]}`}></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedGlassCard;

