import React from "react"
import Layoutindex from "../components/layoutindex"
import SEO from "../components/seo"
import GPS from "../components/gps"

const IndexPage = () => (
  <Layoutindex>
    <SEO title="Strona główna" />
    <article>
      <h2>Fort Wrocław: Fort Piechoty nr 6, Polanowice</h2>
      <GPS />
      <section className="story">
        <div>
          <p>
            Odkryj tajemnice jednej z najważniejszych twierdz Rzeszy - FESTUNG
            BRESLAU!
          </p>
          <p>
            Chcesz wiedzieć więcej na temat historii Twojego miasta? Chcesz
            poznać ludzi, których pasjonuje historia Wrocławia? Chcesz pomóc
            ratować dobytek historyczny twojego regionu? Dobrze trafiłeś, to
            miejsce właśnie dla Ciebie!
          </p>
          <p>Zapraszamy!</p>
        </div>
      </section>
      <hr />
      <section className="facebook_section">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffortwroclaw%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          title="facebook"
          width="340"
          height="500"
          stylename={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <div>
          <p>
            Wrocławskie Stowarzyszenie Fortyfikacyjne powstało w 2012. Zajmuje
            sie Fortem Piechoty nr 6 na Polanowicach. Jest to jeden z elementów
            kajzerowskiej Twierdzy powstającej od lat 90. XIX wieku aż po
            Pierwszą Wojnę Światową.
          </p>
          <p>
            Na naszej stronie znajdziesz wszystkie informacje interesujące
            każdego pasjonata historii Wrocławia i nie tylko. Zostań jednym z
            nas, dołącz do Stowarzyszenia i pomóż w ratowaniu dziedzictwa
            Twierdzy Wrocław!
          </p>

          <p>
            Szczególnie zapraszamy na nasz fanpage na Facebooku. Śledzenie go to
            najlepszy sposób obserwowania tego co się na Forcie dzieje i co robi
            Stowarzyszenie.
          </p>
        </div>
      </section>
    </article>
  </Layoutindex>
)

export default IndexPage
