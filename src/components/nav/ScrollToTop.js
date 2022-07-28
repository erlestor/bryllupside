import { useState, useEffect } from "react"
import { animateScroll as scroll } from "react-scroll"
import { AiOutlineArrowUp } from "react-icons/ai"

const ScrollToTop = () => {
  const [btnDisplay, setBtnDisplay] = useState("none")

  useEffect(() => {
    scrollFunction()
    window.addEventListener("scroll", scrollFunction)
    return () => window.removeEventListener("scroll", scrollFunction)
  }, [])

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setBtnDisplay("block")
    } else {
      setBtnDisplay("none")
    }
  }

  return (
    <button
      className="scroll-to-top-btn"
      style={{ display: btnDisplay }}
      onClick={() => scroll.scrollToTop()}
    >
      <AiOutlineArrowUp size={window.innerWidth > 768 ? 40 : 25} />
    </button>
  )
}

export default ScrollToTop
