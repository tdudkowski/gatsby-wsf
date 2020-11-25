import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GRH609D = ({ data }) => (
  <Layout>
    <SEO title="GRH 609 Division" />
    <article>
      <h2>GRH 609 Division</h2>

      <p>
        Zajmujemy się odtwarzaniem 609 Dywizji Wehrmachtu do zadań specjalnych.
        Division z.b.V 609 została sformowana 26 stycznia 1945 jako jednostka
        „specjalnego przeznaczenia”, mająca być jednostką zbiorczą dla
        Wehrmachtu walczącego w Festung Breslau. Dywizje ‘’zur besonderen
        Verwendung (rozwinięcie skrótu – specjalnego przeznaczenia)’’ tworzone
        były ze zlepków oddziałów bojowych, które podlegały pod jeden kręgosłup
        sztabu, zaopatrzenia i intendentury. Było to ostatnie tchnienie
        niemieckiej armii mające na celu stworzenie składnych, gotowych do walki
        oddziałów formowanych z niedobitków.
      </p>

      <figure className="figure">
        <Img fluid={data.grh1.childImageSharp.fluid} alt="GRH 609 Division" />
        <figcaption className="figure-caption"></figcaption>
      </figure>

      <p>
        Jako grupa pasjonatów staramy się pielęgnować i zachować pamięć o
        wojennej i powojennej historii Wrocławia. Jesteśmy również członkami
        Wrocławskiego Stowarzyszenia Fortyfikacyjnego. Wspólnymi siłami staramy
        się przywrócić świetność Fortowi Piechoty Nr 6 znajdującemu się na
        wrocławskich Polanowicach.
      </p>

      <p>
        Współpracując z grupami rekonstrukcji historycznych odtwarzających
        jednostki walczące w Festung Breslau, jesteśmy w stanie ukazać
        wydarzenia mające miejsce na terenie Wrocławia od czasu ogłoszenia
        miasta twierdzą do czasu włączenia tych ziem do Rzeczypospolitej.
      </p>

      <figure className="figure">
        <Img fluid={data.grh2.childImageSharp.fluid} alt="GRH 609 Division" />
        <figcaption className="figure-caption"></figcaption>
      </figure>

    </article>
  </Layout>
)

export default GRH609D

export const pageQuery = graphql`
  query {
    grh1: file(relativePath: { eq: "wsf-grh609-1.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grh2: file(relativePath: { eq: "wsf-grh609-2.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
   }
}
`;