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

const Layout = ({ children }) => {
  return (
    <div className="container">
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
