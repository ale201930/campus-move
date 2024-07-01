"use client";
import { useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { UberContext } from '../context/uberContext';

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;



const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-67.36145859999999, 9.9126704],
      zoom: 8,
      attributionControl: false,
    });

    map.on('load', () => {
      if (pickupCoordinates) {
        console.log("Adding pickup marker at:", pickupCoordinates);
        addMarker(map, pickupCoordinates);
      }

      if (dropoffCoordinates) {
        console.log("Adding dropoff marker at:", dropoffCoordinates);
        addMarker(map, dropoffCoordinates);
      }

      if (pickupCoordinates && dropoffCoordinates) {
        console.log("Fitting map bounds to coordinates:", [pickupCoordinates, dropoffCoordinates]);
        map.fitBounds([pickupCoordinates, dropoffCoordinates], {
          padding: 400,
        });
      }
    });

    return () => {
      map.remove();
    };
  }, [pickupCoordinates, dropoffCoordinates]);

  const addMarker = (map, coordinates) => {
    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    console.log("Marker added at:", coordinates);
  };

  return (
  
      <div className={style.wrapper} id="map" />
  );
};

export default Map;
