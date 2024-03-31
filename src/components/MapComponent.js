import React from "react";
import GoogleMapReact from "google-map-react";

const MapComponent = ({ drones }) => {
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 5,
  };

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {drones.map((drone, index) => (
          <Marker
            key={index}
            lat={drone.lat}
            lng={drone.lng}
            text={`Drone ${index + 1}`}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => <div>{text}</div>;

export default MapComponent;
