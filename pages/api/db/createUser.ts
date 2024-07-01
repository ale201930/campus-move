
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../sanity/lib/client';

const createUserInSanity = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userWalletAddress, name } = req.body;

    if (!userWalletAddress || !name) {
      return res.status(400).send({ message: 'Faltan datos' });
    }

    const userDoc = {
      _type: 'users',
      _id: userWalletAddress,
      name: name,
      walletAddress: userWalletAddress,
    };

    await client.createIfNotExists(userDoc);
    res.status(200).send({ message: 'success' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ message: 'error', data: error });
  }
};

export default createUserInSanity;
