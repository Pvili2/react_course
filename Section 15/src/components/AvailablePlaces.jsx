import { useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { FetchAvaiblePlaces } from '../htttp.js';
import { useFetch } from '../hooks/useFetch.js';




async function fetchSortedPlaces() {
  const places = await FetchAvaiblePlaces();
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)

      resolve(sortedPlaces);
    });
  })
}
export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(true);
  const { errors, fetchingData: availablePlaces, setFetchedData: setAvailablePlaces, setErrors } = useFetch(fetchSortedPlaces, [])


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
    // onSelectPlace={onSelectPlace}
    />
  );
}
