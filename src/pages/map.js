import React from "react"
import Layout from "../components/layout"

const Map = () => (
  <Layout>
    <article>
      <h2>Mapa obiektów fortyfikacyjnych</h2>
      <section>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1HJ3VWU_2h5Q4n_uoX1aag9QYFjE"
          title="maps-google-fort"
          width="640"
          height="480"
        ></iframe>
      </section>
    </article>
  </Layout>
)

export default Map
