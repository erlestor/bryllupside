import "./hero.css"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const [picturePostion, setPicturePosition] = useState("absolute")

  useEffect(() => {
    updatePicturePosition()
    window.addEventListener("scroll", updatePicturePosition)
    return () => window.removeEventListener("scroll", updatePicturePosition)
  }, [])

  function updatePicturePosition() {
    if (
      (window.innerWidth > 768 &&
        (document.body.scrollTop > 130 ||
          document.documentElement.scrollTop > 130)) ||
      (window.innerwidth < 768 &&
        (document.body.scrollTop > 130 ||
          document.documentElement.scrollTop > 130))
    ) {
      setPicturePosition("fixed")
    } else {
      setPicturePosition("absolute")
    }
  }

  return (
    <div
      className="hero section"
      id="hero"
      style={{
        position: picturePostion,
        top: picturePostion === "fixed" ? "0" : "",
      }}
    />
  )
}

export default HeroSection
