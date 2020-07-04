import { Link } from "gatsby"
import React from "react"
import logo from "../images/fort-logo-small-cut.jpg"
import "../styles/css/font-awesome.css"

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="WSF logo" />
    </Link>
    <section className="socialmedia">
      <a href="https://www.facebook.com/fortwroclaw/">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
      </a>
      <a href="https://www.youtube.com/user/fortwroclaw">
        <i className="fa fa-youtube" aria-hidden="true"></i>
      </a>
    </section>
    <h1>Wrocławskie Stowarzyszenie Fortyfikacyjne</h1>
  </header>
)

export default Header
