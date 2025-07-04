import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const ContactInfo = ({ icon: Icon, title, value, link }: { icon: any, title: string, value: string, link?: string }) => (
  <motion.div 
    className={styles.contactInfoCard}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className={styles.contactIcon} />
    <div className={styles.contactDetails}>
      <h3 className={styles.contactTitle}>{title}</h3>
      {link ? (
        <a href={link} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <p className={styles.contactValue}>{value}</p>
      )}
    </div>
  </motion.div>
);

const SocialLink = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.socialLink}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon />
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('/.netlify/functions/sendContactEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <motion.div 
      className={styles.contentWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Let's collaborate and create something amazing together
        </p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <div className={styles.contactGrid}>
              <ContactInfo 
                icon={FaEnvelope}
                title="Email"
                value="sshadanpk@gmail.com"
                link="mailto:sshadanpk@gmail.com"
              />
              <ContactInfo 
                icon={FaPhone}
                title="Phone"
                value="+91 8086465649"
                link="tel:+918086465649"
              />
              <ContactInfo 
                icon={FaMapMarkerAlt}
                title="Location"
                value="Kerala, India"
              />
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Connect with me</h3>
            <div className={styles.socialLinks}>
              <SocialLink 
                icon={FaLinkedin}
                href="https://www.linkedin.com/in/shadan-pk-b68427203/"
                label="LinkedIn"
              />
              <SocialLink 
                icon={FaGithub}
                href="https://github.com/shadan-pk"
                label="GitHub"
              />
              {/* <SocialLink 
                icon={FaTwitter}
                href="https://twitter.com/shadan_pk"
                label="Twitter"
              /> */}
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className={styles.input}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className={styles.input}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className={styles.input}
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <textarea 
                name="message"
                placeholder="Your Message" 
                className={styles.textarea}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className={`${styles.button} ${isSubmitting ? styles.submitting : ''} ${submitStatus === 'success' ? styles.success : ''}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className={styles.buttonContent}>
                  <div className={styles.spinner}></div>
                  Sending...
                </span>
              ) : submitStatus === 'success' ? (
                <span className={styles.buttonContent}>
                  ✓ Message Sent!
                </span>
              ) : (
                <span className={styles.buttonContent}>
                  <FaPaperPlane />
                  Send Message
                </span>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

