import React, { useState } from "react";
import dirtbike from "../assets/dirtbike.jpg"
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";

const MyMap = () => {
  const [selectedmarker,setselectedmarker]=useState("")
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: 'AIzaSyBzRRsFH6kUE_PP5QaBIGytJIowSkPiAUQ',
  });
  const containerStyle = {
    width: "1000px",
    height: "400px",
  };

  const center = {
    lat: 17.491659,
    lng: 78.391983,
  };
  
  const places = [
    {
      name: 'ameerpet',
      location: {
        lat: 17.437462,
        lng: 78.448288,
      },
    },
    {
        name: 'secunderabd',
        location: {
          lat: 17.439930,
          lng:  78.498276
        },
      },
  ];

  const waterstyle=[
    {
      featureType:"water",
      elementType:"geometry.fill",
      stylers:[
        {
          color:"#E4080A"
        }
      ]

    }
  ]
  const mapTheme=[
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
  

  return (
    <>
      <h1>react google maps</h1>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}
        options={{
          styles:mapTheme
          // styles:waterstyle,
          // mapTypeControl:false,
          // mapTypeId:"satellite",
          // mapTypeId:"terrain",
          // mapTypeId:"hybrid",
          // fullscreenControl:false,
          // streetViewControl:false,
          // zoomControl:false,
          // disableDefaultUI:true,
          // draggableCursor:false,
          

        }}
        >
          <Marker position={center} onClick={()=>{setselectedmarker(center)}} />
          {
            places.map((each)=>{
                return(
                    <Marker position={each.location} options={{
                        icon: {
                            url: dirtbike, // Image path for the marker icon
                            scaledSize: new window.google.maps.Size(40, 40), // Resized image to 40x40 pixels
                            origin: new window.google.maps.Point(0, 0), // Image origin
                            anchor: new window.google.maps.Point(20, 20), // Image anchor
                          }
                    }}/>
                )

            })
          }
          {selectedmarker && <InfoWindow position={center} options={{pixelOffset:new window.google.maps.Size(0,-40)}}>
            <h1> kphb</h1>
            
            </InfoWindow>}
        </GoogleMap>
      )}
    </>
  );
};
export default MyMap;
