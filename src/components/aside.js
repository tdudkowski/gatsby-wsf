// src https://snopkowski.com/blog/gatsby-navigation-styled-components
import React, { useState } from "react"
import NavbarLinks from "./navbarlinks"
// import Logo from "./Logo"
import styled from "styled-components"

const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    /* background-color:#fff; */
    background-color: rgba(250, 250, 250, 0.4);
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    position: absolute;
    /* top: 2rem; */
    width: 100%;
    justify-content: flex-start;
    transition: all 0.3s ease-in;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Aside = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <aside className="menu-main">
      <Navigation>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
      </Navigation>
    </aside>
  )
}
export default Aside
