import React from "react"
import { Link as LinkS } from "react-scroll"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"
import "./nav.css"

export const Navbar = ({ showNavbar, toggle }) => {
  return (
    <div className="nav-container">
      <div className="hamburger" onClick={toggle}>
        {showNavbar ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>
      <div
        className="nav-links"
        style={{
          visibility: showNavbar ? "visible" : "hidden",
          opacity: showNavbar ? "1" : "0",
          maxHeight: showNavbar ? "500px" : "0",
        }}
        onClick={toggle}
      >
        <LinkS
          className="link"
          to="hero"
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          // offset={-80}
        >
          <h2>Tidspunkt</h2>
        </LinkS>
        <LinkS
          className="link"
          to="location"
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          // offset={-80}
        >
          <h2>Lokasjon</h2>
        </LinkS>
        <LinkS
          className="link"
          to="transport"
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          // offset={-80}
        >
          <h2>Transport</h2>
        </LinkS>
        <LinkS
          className="link"
          to="gifts"
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          // offset={-80}
        >
          <h2>Gaveideer</h2>
        </LinkS>
        <LinkS
          className="link"
          to="gifts"
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          // offset={-80}
        >
          <h2>Kontakt</h2>
        </LinkS>
      </div>
    </div>
  )
}
