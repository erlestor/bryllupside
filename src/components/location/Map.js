import { GoogleMap, Marker } from "@react-google-maps/api"
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

const center = { lat: 63.340848, lng: 10.302035 }

const Map = ({ mapIsLoaded }) => (
  <>
    {mapIsLoaded ? (
      <div className="google-map">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
          options={{
            // mapTypeId: "satellite",
            keyboardShortcuts: false,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          <Marker
            position={selskapLocation}
            label="Snillet gård, Spongdalsvegen 579"
          />
          <Marker
            position={vielseLocation}
            label="Klæbu kirke, Prestegårdsvegen 43"
          />
        </GoogleMap>
      </div>
    ) : (
      <div>Laster inn kart</div>
    )}
  </>
)

export default Map
