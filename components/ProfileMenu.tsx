import React, {useState} from 'react';
import {menu} from 'helpers/utility';
import styles from 'styles/Menu.module.css';

const ProfileMenu = () => {
  const [activeItemId, setActiveItemId] = useState("1");

  return (
    <div className={styles.container}>
      {menu.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${activeItemId === item.id ? styles.active : ''}`}
          onClick={() => setActiveItemId(item.id)}
        >
          <span className={`${item.icon} ${styles.icon}`} />
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ProfileMenu;
