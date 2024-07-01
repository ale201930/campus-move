import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../sanity/lib/client';


const getUserInfo = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const query = `
          *[_type == "users" && walletAddress=="${req.query.walletAddress}"]{
              name,
              walletAddress,
              "imageUrl": profileImage.asset->url
            }
        `
    
        const sanityResponse = await client.fetch(query);
        console.log(sanityResponse)
        res.status(200).send({ message: 'success', data: sanityResponse[0] })
      } catch (error) {
        res.status(500).send({ message: 'error', data: error })
      }
    
}

export default getUserInfo