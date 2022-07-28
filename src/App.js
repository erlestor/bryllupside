import { useState, useEffect } from "react"
import { useLoadScript, useJsApiLoader } from "@react-google-maps/api"
import { Contact } from "./components/contact/Contact"
import GiftIdeas from "./components/giftIdeas/GiftIdeas"
import HeroText from "./components/hero/HeroText"
import Info from "./components/info/Info"
import { Location } from "./components/location/Location"
import { Navbar } from "./components/nav/Navbar"
import ScrollToTop from "./components/nav/ScrollToTop"
import Password from "./components/password/Password"
import Transport from "./components/transport/Transport"

const libraries = ["places"]

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [loggedIn, setLoggedIn] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("loggedIn")
    const initialValue = JSON.parse(saved)
    return initialValue || false
  })
  // const [loggedIn, setLoggedIn] = useState(true)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBQ2c112VK7E_b5NPUD1jVv2uorxmL1B60",
    libraries,
  })

  const toggle = () => {
    setShowNavbar(!showNavbar)
  }

  const updateSidebarOpen = () => {
    if (window.innerWidth > 768) {
      setShowNavbar(true)
    } else if (window.innerWidth < 768) {
      setShowNavbar(false)
    }
  }

  useEffect(() => {
    updateSidebarOpen()
    window.addEventListener("resize", updateSidebarOpen)
    return () => window.removeEventListener("resize", updateSidebarOpen)
  }, [])

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <div className="page">
            <Navbar showNavbar={showNavbar} toggle={toggle} />
            <HeroText />
            <Info />
            <Location mapIsLoaded={isLoaded} />
            <Transport mapIsLoaded={isLoaded} />
            <GiftIdeas />
            <Contact />
            <ScrollToTop />
          </div>
        </>
      ) : (
        <Password setLoggedIn={setLoggedIn} />
      )}
    </div>
  )
}

export default App
