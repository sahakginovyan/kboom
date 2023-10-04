import { ReactElement } from 'react';
import type { GetServerSideProps } from 'next'
import axios from 'axios'
import MainLayout from 'layouts/MainLayout';
import { Team, NextPageWithLayout } from 'helpers/types';
import { GetServerSidePropsContext } from "next/types";

// Define a getServerSideProps function for server-side rendering
export const getServerSideProps: GetServerSideProps<{
  data: Team[];
  team: Team;
}> = (async (context: GetServerSidePropsContext<any>) => {
  // Extract the 'id' parameter from the context
  const { id } = context.params;

  // Fetch team data from the API based on the 'id' parameter, for more information check pages/api/teams/[id].tsx file
  const teamRes = await axios.get(`${process.env.REACT_APP_API_URL}/teams/${id}`);

  // Return the fetched data as props,
  // so this props will be available in MainLayout, check pages/_app.tsx getLayout second argument
  return { props: { ...teamRes.data } };
});

// Define the Team component
const Team: NextPageWithLayout<typeof getServerSideProps> = () => {
  return (
    <div></div>
  );
};

// Define a custom `getLayout` function for the Team component
Team.getLayout = function getLayout(page: ReactElement, props) {
  return (
    <MainLayout {...props}>
      {page}
    </MainLayout>
  );
};

export default Team;
