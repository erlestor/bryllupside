import Map from "./Map"
import "./location.css"
// dette er mapcontainer

export const Location = () => {
  return (
    <div id="location" className="section location">
      <h1>Lokasjon</h1>
      <div className="locations-container">
        <h3 className="location-text">
          <b>Vielse</b>
          <br />
          Klæbu kirke
          <br />
          Prestegårdsvegen 43
        </h3>
        <h3 className="location-text">
          <b>Selskap</b>
          <br />
          Snillet gård
          <br />
          Spongdalsvegen 579
        </h3>
      </div>
      <Map />
    </div>
  )
}
