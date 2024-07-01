const getDuration = async (req, res) => {
    const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_DIRECTIONS_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
    try {
      const response = await fetch(mapboxUrl);
      const data = await response.json();
      console.log()
      res.status(200).send({ message: 'success', data: data.routes[0].duration })
    } catch (error) {
      res.status(500).send({ message: 'error', data: error.message })
    }
  }
  
  export default getDuration