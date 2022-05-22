import { useState, useEffect } from "react"
import {
  GoogleMap,
  DirectionsRenderer,
  DirectionsService,
  Marker,
} from "@react-google-maps/api"
import "./directions.css"

export const DirectionsMap = ({ mapIsLoaded }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null)

  const havsteinbakken = { lat: 63.41073, lng: 10.37337 }

  function directionsCallback(response) {
    if (response !== null) {
      if (response.status === "OK") {
        setDirectionsResponse(response)
      } else {
        console.log("response: ", response)
      }
    }
  }

  if (!mapIsLoaded) return <div>Laster inn...</div>
  return (
    <div className="map">
      <GoogleMap
        zoom={12}
        center={havsteinbakken}
        mapContainerClassName="map-container"
        options={{
          // mapTypeId: "satellite",
          keyboardShortcuts: false,
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <DirectionsService
          // required
          options={{
            origin: "Spongdalsvegen 579, 7074 Spongdal",
            waypoints: [
              // using more than 10 waypoints are billed at a higher rate. check if I actually will get billed
              {
                location: "Flatheimvegen 20, 7549 Trondheim",
              },
              {
                location: "Nordsetvegen 470, 7540 Klæbu",
              },
            ],
            destination: "Sjøgangen 2, 7010 Trondheim",
            travelMode: "DRIVING",
          }}
          // required
          callback={directionsCallback}
        />
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            //   options={{ suppressMarkers: true }}
          />
        )}
      </GoogleMap>
    </div>
  )
}
