export const teams = [
  {
    id: '1',
    name: 'Team GO',
    logo: `${process.env.REACT_APP_TEAM_LOGOS}/team-1.svg`
  },
  {
    id: '2',
    name: 'Team FIRE',
    logo: `${process.env.REACT_APP_TEAM_LOGOS}/team-2.svg`
  },
  {
    id: '3',
    name: 'Team EAGLE',
    logo: `${process.env.REACT_APP_TEAM_LOGOS}/team-3.svg`
  },
  {
    id: '4',
    name: 'Team FLESH',
    logo: `${process.env.REACT_APP_TEAM_LOGOS}/team-4.svg`
  },
];

export const levels = {
  "level_3": '600',
  "level_4": '700',
  "level_7": '1000',
  "level_9": '1300',
};

export const profiles = [
  {
    id: '1',
    level: "7",
    points: 268,
    fullName: 'Pseudo',
    coins: '10,000',
    reward: '322',
    maxEnergy: 5,
    currentEnergy: 2,
    teamId: '1',
    avatar: `${process.env.REACT_APP_APP_URL}/profile/avatar.png`
  },
  {
    id: '2',
    level: "4",
    points: 600,
    fullName: 'John Lenon',
    coins: '1,000',
    reward: '322',
    maxEnergy: 5,
    currentEnergy: 2,
    teamId: '2',
    avatar: `${process.env.REACT_APP_APP_URL}/profile/avatar.png`
  },
  {
    id: '2',
    level: "9",
    points: 1100,
    fullName: 'Mickel Jordan',
    coins: '19,897',
    reward: '322',
    maxEnergy: 10,
    currentEnergy: 7,
    teamId: '3',
    avatar: `${process.env.REACT_APP_APP_URL}/profile/avatar.png`
  },
  {
    id: '2',
    level: "3",
    points: 15,
    fullName: 'Donald Trump',
    coins: '1500',
    reward: '322',
    maxEnergy: 3,
    currentEnergy: 2,
    teamId: '4',
    avatar: `${process.env.REACT_APP_APP_URL}/profile/avatar.png`
  },
];

export const menu = [
  {
    id: '1',
    label: "Quests",
    icon: 'icon-paper'
  },
  {
    id: '2',
    label: "Adventures",
    icon: 'icon-map2'
  },
  {
    id: '3',
    label: "Leaderboard",
    icon: 'icon-medal'
  },
  {
    id: '4',
    label: "Shop",
    icon: 'icon-shop'
  },
  {
    id: '5',
    label: "Club",
    icon: 'icon-award'
  },
  {
    id: '6',
    label: "Notifications",
    icon: 'icon-bell'
  },
];

export const accountMenu = [
  {
    id: '1',
    label: "Account",
    icon: 'icon-account'
  },
  {
    id: '2',
    label: "Settings",
    icon: 'icon-settings'
  },
];

export const socialIcons = [
  'icon-twitter',
  'icon-twitch',
  'icon-tiktok',
  'icon-youtube',
  'icon-instagram',
  'icon-facebook',
  'icon-discord',
];
