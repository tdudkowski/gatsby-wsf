/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Aside from "./aside"
import Footerindex from "./footerindex"

const Layoutindex = ({ children }) => {
  return (
    <div className="container">
      <Aside />
      <Header />
      <main>
        <Aside />
        {children}
      </main>
      <Footerindex />
    </div>
  )
}

export default Layoutindex
