const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`

  try {
    const response = await fetch(mapboxUrl)
  
    const data = await response.json();
    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    console.error('Error fetching location coordinates:', error) // Log the error
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
