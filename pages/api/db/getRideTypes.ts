// pages/api/db/getRideTypes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../sanity/lib/client';

const query = `
*[_type=="rides"]{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
}|order(orderById asc)
`

const getRideTypes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sanityResponse = await client.fetch(query);
    if (!sanityResponse.length) {
      console.log('No rides found');
    }
    res.status(200).send({ message: 'success', data: sanityResponse })
  } catch (error) {
    console.error('Error fetching rides:', error);
    res.status(500).send({ message: 'error', data: error })
  }
}

export default getRideTypes
