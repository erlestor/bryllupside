import React from "react"
import Map from "./Map"

// dette er mapcontainer

const location = {
  address: "Spongdalsvegen 579, 7074 Spongdal",
  lat: 63.376249,
  lng: 10.164493,
}

export const Location = () => {
  return (
    <div id="location" className="section">
      <h1>Lokasjon</h1>
      <Map location={location} zoomLevel={18} />
    </div>
  )
}
