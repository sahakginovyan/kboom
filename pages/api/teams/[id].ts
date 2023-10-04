import type {NextApiRequest, NextApiResponse} from 'next'
import {teams, profiles} from 'helpers/utility';
import {Profile, Team} from 'helpers/types';

type DataType = {
  data?: Team[] | undefined,
  team?: Team | undefined,
  profile?: Profile | undefined,
  message?: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  const { id } = req.query;

  // find team by query id
  const team: Team | undefined = teams.find((team) => team.id === id);

  if (!team) {
    return res.status(404).json({ message: "page not found" });
  }

  // join profile by team id
  const profile = profiles.find((profile) => profile.teamId === team.id);

  return res.status(200).json({ data: teams, team, profile });
};
