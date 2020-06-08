/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import SEO from "../components/seo"
import Header from "./header"
import Aside from "./aside"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <SEO title="Home" />
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
