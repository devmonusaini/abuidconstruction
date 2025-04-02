import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px", // Set the height as needed
};

const center = {
  lat: 26.9124, // Replace with your latitude
  lng: 75.7873, // Replace with your longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust zoom level
        options={{
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          gestureHandling: "greedy", // Enables better touch gestures
        }}
      >
        {/* Add Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
