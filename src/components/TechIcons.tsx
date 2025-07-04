import React, { useMemo } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiVite, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiApollographql, SiPrisma, SiTailwindcss } from 'react-icons/si';
import styles from './TechIcons.module.css';

const icons = [
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaGitAlt, FaDocker, FaFigma,
  SiTypescript, SiVite, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiApollographql, SiPrisma, SiTailwindcss
];

const TechIcons = () => {
  const animatedIcons = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const Icon = icons[i % icons.length];
      const style = {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        fontSize: `${Math.random() * 2 + 1}rem`,
        animationDuration: `${Math.random() * 20 + 15}s`,
        animationDelay: `${Math.random() * 10}s`,
      };
      return <Icon key={i} className={styles.icon} style={style} />;
    });
  }, []);

  return <div className={styles.iconContainer}>{animatedIcons}</div>;
};

export default TechIcons;
