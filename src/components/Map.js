import React from "react"
import GoogleMapReact from "google-map-react"
import "./map.css"

import { FaMapMarkerAlt } from "react-icons/fa"

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBQ2c112VK7E_b5NPUD1jVv2uorxmL1B60",
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        options={getMapOptions}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

const LocationPin = () => (
  <div>
    <div className="marker-text">Spongdalsvegen 579</div>
    <FaMapMarkerAlt className="pin" size={40} />
  </div>
)

const getMapOptions = (maps) => {
  return {
    mapTypeId: maps.MapTypeId.SATELLITE,
  }
}

export default Map
