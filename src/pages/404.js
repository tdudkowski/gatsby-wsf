import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// var fs = require("fs")
// const { createFilePath } = require(`gatsby-source-filesystem`)

// var parse = require("xml-parser")
// var xml = createFilePath.readFileSync("../../public/sitemap.xml", "utf8")
// var inspect = require("util").inspect

// var obj = parse(xml)
// console.log(inspect(obj, { colors: true, depth: Infinity }))

const NotFoundPage = ({ data }) => {
  // let linksArray = data.allSitePage.nodes.path
  // console.log(linksArray)

  let filtered = ["/404/", "/dev-404-page/", "/404.html", "/"]
  let linksArray = []

  const selectIt = val => {
    if (!filtered.includes(val.path)) {
      linksArray.push(val.path.slice(1, -1))
    }
  }

  return (
    <Layout>
      <SEO title="Strony nie znaleziono albo 404" />
      <article>
        <h2>Strony nie znaleziono albo 404</h2>
        <p>Strona, której szukasz nie istnieje pod tym adresem.</p>
        <p>Albo została skasowana, albo ma zmienioną nazwę, albo jest przeniesiona - prawdopodobnie znajdziesz ją na <Link to="/mapa-strony"><strong>Mapie strony</strong></Link>; możesz też sprawdzić listę poniżej:</p>
        <section>
          <p>{data.site.siteMetadata.title}</p>
          <p>{data.allSitePage.nodes.filter(selectIt)}</p>

          <ul className="list404">
            {linksArray.map(el => (
              <li>
                <Link to={`/${el}`}>{el}</Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const fourzerofourQuery = graphql`
  query SitemapQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage {
      edges {
        node {
          path
        }
      }
      nodes {
        path
      }
    }
  }
`
