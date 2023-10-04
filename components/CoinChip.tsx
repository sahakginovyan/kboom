import React from 'react';
import styles from 'styles/Profile.module.css';

type CoinChipType = { label: string, value: string, coinImage: string, style?: string }

const CoinChip = ({label, value, coinImage, style = ''}: CoinChipType) => (
  <span className={styles.coin}>
    <img src="/profile/plus.svg" alt="plus" className={styles.plus}/>
    <img src={`/profile/${coinImage}.svg`} alt={label} className={`${styles.coinType} ${style}`}/>
    <span className={styles.coinText}>
      {value}
    </span>
  </span>
);

export default CoinChip;