import React from 'react';
import {Profile} from 'helpers/types';
import {levels} from 'helpers/utility';
import styles from 'styles/Profile.module.css';
import CoinChip from "./CoinChip";

const ProfileCard = ({ profile }: { profile: Profile }) => {
  const maxPoints = levels[`level_${profile.level}` as keyof typeof levels];

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={profile.avatar} alt="ProfileCard avatar" />
        <span className={styles.fullName}>
          {profile.fullName}
        </span>
      </div>

      <div className={styles.levels}>
        <div className={styles.level}>{profile.level}</div>
        <div className={styles.points}>
          <div className={styles.progress} style={{ width: `${profile.points / Number(maxPoints) * 100}%` }}>
            {profile.points}/{maxPoints}
          </div>
        </div>
      </div>

      <div className={styles.coins}>
        <CoinChip label="Gold coin" value={profile.coins} coinImage="gold-coin" />
        <CoinChip label="Rewards" value={profile.reward} coinImage="rewards" />
        <CoinChip label="Gold coin" value={`${profile.currentEnergy}/${profile.maxEnergy}`} coinImage="ghost" style={styles.ghost} />
      </div>
    </div>
  );
};

export default ProfileCard;
