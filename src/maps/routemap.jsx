import React, { useRef, useState } from 'react';
import { Autocomplete, DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const  libraries= ['places']
const RouteMap = () => {
  const [map, setMap] = useState(null);
  const[directions,setDirections]=useState(null)
  const[distance,setDistance]=useState('')
  const[Duration,setDuration]=useState('')
  const fromref=useRef()
  const toref=useRef()
  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: 17.491659,
    lng: 78.391983,
  };

  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBzRRsFH6kUE_PP5QaBIGytJIowSkPiAUQ',
    libraries
  });

  
  if (!isLoaded) {
    return <div>Loading...</div>; 
  }
 async function calculateRoute(){
      if(fromref.current.value ==='' || toref.current.value===''){
        return
      }
      const directionservice=new google.maps.DirectionsService()
      const results= await directionservice.route({
        origin:fromref.current.value,
        destination:toref.current.value,
        travelMode:google.maps.TravelMode.DRIVING
      })
      setDirections(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
}

  return (
    <>
      <h1>Google Maps</h1>

      
        <label>From</label>
        <Autocomplete>
          <input type="text" ref={fromref} />
        </Autocomplete>

        <label>To</label>
        <Autocomplete>
          <input type="text" ref={toref}/>
        </Autocomplete>

        <button  onClick={calculateRoute}>Submit</button>
      

      <button onClick={() => map.panTo(center)}>Refresh</button>

      <h1>Distance:{distance}</h1>
      <h1>Duration:{Duration}</h1>

      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directions && (<DirectionsRenderer directions={directions}/>)}
      </GoogleMap>
    </>
  );
};

export default RouteMap;
