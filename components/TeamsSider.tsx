import React, {useCallback} from 'react';
import {useRouter} from "next/router";
import {Team} from "helpers/types";
import styles from 'styles/Logos.module.css';

const TeamsSider = ({data}: { data: Team[] }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleTeamSelect = useCallback((team: Team) => {
    router.push(`/teams/${team.id}`);
  }, [router]);

  return (
    <div className={styles.container}>
      {data.map((team) => (
        <div key={team.id} title={team.name} className={`${styles.logo} ${id === team.id ? styles.active : ''}`}>
          {id === team.id ? <div className={styles.menuAngel}></div> : null }
          <div className={styles.logoContainer} onClick={() => handleTeamSelect(team)}>
            <img
              className={styles.teamLogo}
              alt={`Logo of the ${team.name}`}
              src={team.logo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsSider;
