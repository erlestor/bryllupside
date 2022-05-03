import { useState, useEffect } from "react"
import { GoogleMap, DirectionsRenderer, Marker } from "@react-google-maps/api"
import "./directions.css"

export const DirectionsMap = ({ mapIsLoaded }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null)

  const havsteinbakken = { lat: 63.41073, lng: 10.37337 }

  const calculateRoute = async () => {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: "Sjøgangen 2, 7010 Trondheim",
      waypoints: [
        // using more than 10 waypoints are billed at a higher rate. check if I actually will get billed
        {
          location: "Nordsetvegen 470, 7540 Klæbu",
        },
        {
          location: "Flatheimvegen 20, 7549 Trondheim",
        },
      ],
      destination: "Spongdalsvegen 579, 7074 Spongdal",
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: false,
    })
    setDirectionsResponse(results)
    console.log(results)
  }

  useEffect(() => {
    calculateRoute()
  }, [])

  if (!mapIsLoaded) return <div>Laster inn...</div>
  return (
    <div className="map">
      <GoogleMap
        zoom={12}
        center={havsteinbakken}
        mapContainerClassName="map-container"
      >
        {/* <Marker position={{ lat: 63.37636, lng: 10.16502 }} label="Vielse" /> */}
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
