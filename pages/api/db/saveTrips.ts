import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../sanity/lib/client';

const saveTrips = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const tripDoc = {
            _type: 'trips',
            _id: `${req.body.userWalletAddress}-${Date.now()}`,
            pickup: req.body.pickupLocation,
            dropoff: req.body.dropoffLocation,
            price: parseFloat(req.body.price),
            rideCategory: req.body.selectedRide.service,
            rideTimestamp: new Date(Date.now()).toISOString(),
            passenger: {
                _key: `passenger-${req.body.userWalletAddress} - ${new Date(
                    Date.now(),
                ).toISOString()}`,
                _ref: req.body.userWalletAddress,
                _type: 'reference',
            },
        }
        await client.createIfNotExists(tripDoc)
        res.status(200).send({ message: 'success' })
    } catch (error) {
        res.status(500).send({ message: 'error', data: error })
    }
}

export default saveTrips