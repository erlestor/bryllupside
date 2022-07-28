import { DirectionsMap } from "../directions/DirectionsMap"
import "./transport.css"

const Transport = ({ mapIsLoaded }) => {
  return (
    <div className="section info-section" id="transport">
      <h1>Transport</h1>
      <h3>
        Det er parkering ved Klæbu Kirke for vielsen. Ved festlokalet er det
        stor parkeringsplass, så det er mulig å sette igjen bilen og hente på
        søndag om man ønsker. <br />
        <br /> Vi har mulighet for å organisere busstransport fra Malvik til
        kirka, fra kirka til festlokalet og fra festlokalet og mot byen. Før det
        bestemmes må vi vite om det er behov og ønske om det. Derfor ber vi alle
        om å svare på{" "}
        <a
          href="https://forms.gle/bNN3WpWvPWb1fWLS6"
          target="_blank"
          rel="noreferrer"
        >
          dette spørreskjemaet.{" "}
        </a>
      </h3>
      {/* <DirectionsMap mapIsLoaded={mapIsLoaded} /> */}
    </div>
  )
}

export default Transport
