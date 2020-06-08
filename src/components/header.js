import { Link } from "gatsby"
import React from "react"
import logo from "../assets/fort-logo-small-cut.jpg"

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="WSF logo" />
    </Link>
    <h1>Wrocławskie Stowarzyszenie Fortyfikacyjne</h1>
  </header>
)

export default Header
