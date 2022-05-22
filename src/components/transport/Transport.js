import { DirectionsMap } from "../directions/DirectionsMap"
import "./transport.css"

const Transport = ({ mapIsLoaded }) => {
  return (
    <div className="section info-section" id="transport">
      <h1>Transport</h1>
      <h3 className="transport-info">Kommer senere</h3>
      {/* <DirectionsMap mapIsLoaded={mapIsLoaded} /> */}
    </div>
  )
}

export default Transport
