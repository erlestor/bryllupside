import React from "react"
import GoogleMapReact from "google-map-react"
import "./map.css"

import { FaMapMarkerAlt } from "react-icons/fa"

const selskapLocation = {
  address: "Spongdalsvegen 579, 7074 Spongdal",
  lat: 63.376249,
  lng: 10.164493,
}

const vielseLocation = {
  address: "Prestegårdsvegen 43, 7540 Klæbu",
  lat: 63.29535,
  lng: 10.47656,
}

const Map = ({ zoomLevel }) => (
  <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBQ2c112VK7E_b5NPUD1jVv2uorxmL1B60",
      }}
      defaultCenter={selskapLocation}
      defaultZoom={16}
      options={getMapOptions}
    >
      <LocationPin
        lat={selskapLocation.lat}
        lng={selskapLocation.lng}
        text={selskapLocation.address}
      />
      <LocationPin
        lat={vielseLocation.lat}
        lng={vielseLocation.lng}
        text={vielseLocation.address}
      />
    </GoogleMapReact>
  </div>
)

const LocationPin = ({ text }) => (
  <div className="pin-container">
    <div className="pin-text">{text}</div>
    <FaMapMarkerAlt className="pin" size={40} />
  </div>
)

const getMapOptions = (maps) => {
  return {
    mapTypeId: maps.MapTypeId.SATELLITE,
  }
}

export default Map
