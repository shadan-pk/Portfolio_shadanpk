import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaCode, FaPalette, FaUsers } from 'react-icons/fa';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <motion.div 
    className={styles.skillCard}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className={styles.skillIcon} />
    <h3 className={styles.skillTitle}>{title}</h3>
    <div className={styles.skillsList}>
      {skills.slice(0, 4).map((skill, index) => (
        <span key={index} className={styles.skillTag}>{skill}</span>
      ))}
    </div>
  </motion.div>
);

const TimelineItem = ({ year, title, description, icon: Icon }: { year: string, title: string, description: string, icon: any }) => (
  <motion.div 
    className={styles.timelineItem}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.timelineIcon}>
      <Icon />
    </div>
    <div className={styles.timelineContent}>
      <span className={styles.timelineYear}>{year}</span>
      <h3 className={styles.timelineTitle}>{title}</h3>
      <p className={styles.timelineDescription}>{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <motion.div 
      className={styles.contentWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>About Me</h1>
        <p className={styles.subtitle}>
          Passionate designer and developer creating meaningful digital experiences
        </p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.introSection}>
            <p className={styles.introText}>
              I am a skilled and experienced graphic designer and front-end developer with a passion for creating innovative and user-friendly designs. As the Design Lead of IEEE MEA SB, I spearhead creative projects, mentor aspiring designers, and foster collaborative environments.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
              <SkillCard 
                icon={FaPalette}
                title="Design"
                skills={["Photoshop", "Premiere Pro", "UI/UX", "Branding"]}
              />
              <SkillCard 
                icon={FaCode}
                title="Development"
                skills={["HTML5", "CSS3", "JavaScript", "React"]}
              />
              <SkillCard 
                icon={FaUsers}
                title="Leadership"
                skills={["Team Management", "Mentoring", "Public Speaking"]}
              />
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.timelineSection}>
            <h2 className={styles.sectionTitle}>Journey</h2>
            <div className={styles.timeline}>
              <TimelineItem 
                year="2024"
                title="Senior Designer & Developer"
                description="Leading design initiatives and developing cutting-edge web applications."
                icon={FaBriefcase}
              />
              <TimelineItem 
                year="2023"
                title="Design Lead - IEEE MEA SB"
                description="Spearheading creative projects and mentoring aspiring designers."
                icon={FaAward}
              />
              <TimelineItem 
                year="2022"
                title="Full-Stack Development"
                description="Expanded expertise into full-stack development and modern frameworks."
                icon={FaCode}
              />
              <TimelineItem 
                year="2021"
                title="Design Foundation"
                description="Started journey in graphic design and UI/UX development."
                icon={FaGraduationCap}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

