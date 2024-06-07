import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { FetchAvaiblePlaces } from '../htttp.js';
export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      try {
        const places = await FetchAvaiblePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
          setAvailablePlaces(sortedPlaces)
          setIsLoading(false)
        });
      } catch (error) {
        setErrors({ message: error.message }, error)
      }
      setIsLoading(false)
    }

    fetchPlaces();
  }, [])

  if (errors) {
    return (
      <Error title="An error occurred!" message={errors.message} />
    )
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadintText="Fetching places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
