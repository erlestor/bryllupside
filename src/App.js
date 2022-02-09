import { useState, useEffect } from "react"
import GiftIdeas from "./components/GiftIdeas"
import HeroSection from "./components/HeroSection"
import { Location } from "./components/Location"
import { Navbar } from "./components/Navbar"
import Transport from "./components/Transport"

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
      </div>
    </div>
  )
}

export default App
