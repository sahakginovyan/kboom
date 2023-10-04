import React from 'react';
import {socialIcons} from 'helpers/utility';
import styles from 'styles/Header.module.css';

const Header = () => (
  <div className={styles.container}>
    <div>
      <img className={styles.logo} src="/logo.svg" alt="KBOOM Logo" />
    </div>
    <div className={styles.social}>
      {socialIcons.map((socialIcon) => (
        <span key={socialIcon} className={`${socialIcon} ${styles.icon}`}/>
      ))}
    </div>
  </div>
);

export default Header;
