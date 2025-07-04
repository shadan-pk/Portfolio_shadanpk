import React from 'react';
import styles from './Blob.module.css';

const BlobBackground = () => {
  return (
    <div className={styles.blobContainer}>
      <div className={`${styles.blob} ${styles.blue}`}></div>
      <div className={`${styles.blob} ${styles.red}`}></div>
      <div className={`${styles.blob} ${styles.yellow}`}></div>
      <div className={`${styles.blob} ${styles.green}`}></div>
      <div className={`${styles.blob} ${styles.purple}`}></div>
      <div className={`${styles.blob} ${styles.orange}`}></div>
      <div className={`${styles.blob} ${styles.pink}`}></div>
    </div>
  );
};

export default BlobBackground;
