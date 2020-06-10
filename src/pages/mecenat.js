import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Mecenat = () => (
  <Layout>
    <SEO title="Zostań mecenasem!" />
    <article>
      <h2>Zostań mecenasem!</h2>

      <p>Twórzcie z nami historię – wspólnie odbudujmy wyjątkowy fort!</p>

      <p>
        Zawsze marzyliście o tym, by zostać bohaterami i zapisać się na kartach
        historii? Oto szansa dla was!
      </p>

      <p>
        Teraz każdy, dosłownie każdy, może wesprzeć prace restauracyjne na
        wyjątkowym obiekcie stanowiącym część Festung Breslau.
      </p>

      <h3>3 To właśnie wy możecie nam pomóc!</h3>

      <p>W jaki sposób?</p>

      <p>
        Przychodząc na cykliczne, odbywające się w każdą sobotę spotkania,
        podczas których prowadzone są prace porządkowe na obiekcie. Wystarczy
        zapał, dobre chęci i otwarta głowa. Podczas działań możesz poznać lepiej
        opiekunów fortu, posłuchać ich opowieści i anegdot związanych z tym
        wyjątkowym obiektem i mieć pewność, że wszystko, co zrobisz, zostanie
        częścią historii miasta Wrocławia!
      </p>

      <p>Wpłacając darowiznę na konto. Oto dane:</p>

      <blockquote>
        44 1750 0012 0000 0000 2236 8869
        <br />
        WROCŁAWSKIE STOWARZYSZENIE FORTYFIKACYJNE
        <br />
        TRZEBNICKA 74/3
        <br />
        50-231 WROCŁAW
        <br />
        TYTUŁ PRZELEWU: Darowizna na cele statutowe
        <br />
      </blockquote>

      <p>
        Więcej w: <Link to="stowarzyszenie">Stowarzyszenie</Link>
      </p>
    </article>
  </Layout>
)

export default Mecenat
