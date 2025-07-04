import React from 'react';
import styles from './GlassCard.module.css';
import { IconType } from 'react-icons';

interface GlassCardProps {
  icon: IconType;
  title: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ icon: Icon, title }) => {
  return (
    <div className={styles.card}>
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default GlassCard;
