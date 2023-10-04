import {ReactElement} from "react";
import type { GetServerSideProps } from 'next'
import axios from 'axios';
import {Team, NextPageWithLayout} from 'helpers/types';
import MainLayout from 'layouts/MainLayout';
import styles from 'styles/Home.module.css';

export const getServerSideProps = (async () => {
  // Fetch mock data from the API, for more information check pages/api/teams/index.ts file
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/teams`);

  // Return the fetched data as props,
  // so this props will be available in MainLayout, check pages/_app.tsx getLayout second argument
  return { props: { data: res.data.data } };
}) satisfies GetServerSideProps<{
  data: Team
}>

const Home: NextPageWithLayout<typeof getServerSideProps> = () => {
  return (
    <div className={styles.container}>Please Choose a team</div>
  );
};

// Define a custom `getLayout` function for the Home component
Home.getLayout = function getLayout(page: ReactElement, props) {
  return (
    <MainLayout {...props}>
      {page}
    </MainLayout>
  );
};

export default Home;
