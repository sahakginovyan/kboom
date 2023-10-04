import React from 'react';
import {Profile as ProfileType, Team} from 'helpers/types';
import ProfileCard from './ProfileCard';
import AccountManagement from './AccountManagement';
import ProfileMenu from './ProfileMenu';
import styles from 'styles/TeamMenu.module.css';

const TeamSubMenu = ({ team, profile }: { team: Team, profile: ProfileType }) => (
  <div className={styles.container}>
    <div className={styles.menuContainer}>
      <div className={styles.logo}>
        <img className={styles.teamLogo} src={team.logo} alt={team.name} />
        <span className={styles.teamName}>
          {team.name}
        </span>
      </div>
      <ProfileCard profile={profile} />
      <ProfileMenu />
    </div>
    <AccountManagement />
  </div>
)

export default TeamSubMenu;
