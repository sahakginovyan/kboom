import type { NextApiRequest, NextApiResponse } from 'next'
import {teams} from 'helpers/utility';
import {Team} from 'helpers/types';

type DataType = {
  data: Team[],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  // return teams mock data
  res.status(200).json({ data: teams });
};
