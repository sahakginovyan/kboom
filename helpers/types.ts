import {ReactElement, ReactNode} from "react";
import {InferGetServerSidePropsType, NextPage} from "next";
import {AppProps} from "next/app";

export type Profile =  {
  id: string,
  level: string,
  points: number,
  fullName: string,
  coins: string,
  reward: string,
  maxEnergy: number,
  currentEnergy: number,
  teamId: string,
  avatar: string,
};

export type Team = {
  id: string,
  name: string,
  logo: string,
}

export type NextPageWithLayout<Props extends (args: any) => any> = NextPage<InferGetServerSidePropsType<Props>> & {
  getLayout?: (page: ReactElement, props: InferGetServerSidePropsType<Props>) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>
};
