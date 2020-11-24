/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Aside from "./aside"
import Footer from "./footer"
// import AsideComp from "./aside-comp"
// import AsideMobile from "./aside-mobile"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Aside />
      <Header />
      <main>
        <Aside />
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
