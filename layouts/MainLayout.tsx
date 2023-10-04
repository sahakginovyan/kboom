import React, {ReactElement} from "react";
import {Profile, Team} from "helpers/types";
import Head from 'next/head'
import Header from "components/Header";
import TeamsSider from "components/TeamsSider";
import TeamSubMenu from "components/TeamSubMenu";
import styles from "styles/Home.module.css";

type MainLayoutType =  {
  children: ReactElement, // The content to be wrapped by MainLayout
  data: Team[], // Data related to teams
  team?: Team, // The selected team (optional)
  profile?: Profile  // User profile data (optional)
};

const MainLayout = ({ children, data, team, profile }: MainLayoutType) => {

  return (
    <>
      <Head>
        <title>
          KBoom
        </title>
        <link rel="icon" href="/favicon.svg" sizes="40px" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.bodyContainer}>
          <TeamsSider data={data} />
          { team && profile ? <TeamSubMenu team={team} profile={profile} /> : null }
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
