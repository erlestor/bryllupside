import { useState, useEffect } from "react"
import { Contact } from "./components/contact/Contact"
import GiftIdeas from "./components/giftIdeas/GiftIdeas"
import HeroSection from "./components/hero/HeroSection"
import { Location } from "./components/location/Location"
import { Navbar } from "./components/nav/Navbar"
import Transport from "./components/transport/Transport"

function App() {
  const [showNavbar, setShowNavbar] = useState(false)

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
      <Navbar showNavbar={showNavbar} toggle={toggle} />
      <HeroSection />
      <div className="content">
        <Location />
        <Transport />
        <GiftIdeas />
        <Contact />
      </div>
    </div>
  )
}

export default App
