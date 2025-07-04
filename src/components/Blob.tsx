import React, { useMemo } from 'react';
import styles from './Blob.module.css';

const Blob: React.FC = () => {
  const blobStyle = useMemo(() => {
    const size = Math.random() * 200 + 100;
    return {
      width: `${size}px`,
      height: `${size}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      '--x-end': `${Math.random() * 100 - 50}vw`,
      '--y-end': `${Math.random() * 100 - 50}vh`,
      animationDuration: `${Math.random() * 20 + 20}s`,
      animationDelay: `${Math.random() * -20}s`,
    } as React.CSSProperties;
  }, []);

  return <div className={styles.blob} style={blobStyle}></div>;
};

export default Blob;
