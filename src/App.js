import { useState, useEffect } from "react"
import { Contact } from "./components/contact/Contact"
import GiftIdeas from "./components/giftIdeas/GiftIdeas"
import HeroText from "./components/hero/HeroText"
import Info from "./components/info/Info"
import { Location } from "./components/location/Location"
import { Navbar } from "./components/nav/Navbar"
import ScrollToTop from "./components/nav/ScrollToTop"
import Password from "./components/password/Password"
import Transport from "./components/transport/Transport"

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)

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
          <Navbar showNavbar={showNavbar} toggle={toggle} />
          <div className="content">
            <HeroText />
            <Info />
            <Location />
            <Transport />
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
