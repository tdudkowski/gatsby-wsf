import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <article>
      <h2>Mapa strony albo 404</h2>
      <p>.</p>
      <section>
        <p>{data.site.siteMetadata.title}</p>

        <ul>
          {data.allSitePage.nodes.map(({ path }) => (
            <li>
              <Link to={path}>{path}</Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  </Layout>
)

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
