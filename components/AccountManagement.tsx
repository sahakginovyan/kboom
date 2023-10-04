import React from 'react';
import {accountMenu} from 'helpers/utility';
import styles from 'styles/Menu.module.css';

const AccountManagement = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      Account management
    </div>
    {accountMenu.map((item) => (
      <div key={item.id} className={styles.item}>
        <span className={`${item.icon} ${styles.icon}`} />
        {item.label}
      </div>
    ))}
  </div>
);

export default AccountManagement;
