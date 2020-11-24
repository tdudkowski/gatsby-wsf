import React from "react"
import FooterCR from "./footercr"
import GPS from "../components/gps"

const Footerindex = () => (
  <footer>
    <div>
      <section>
        <h2>Adres</h2>
        <p>
          FORT PIECHOTY NR 6<br />
          "Polanowice"
          <br />
          ul. Polanowicka
          <br />
          50-001 Wrocław
          <br />
          +48 697 220 076
          <br />
          Godziny otwarcia:
          <br />
          sobota 10:00 - 14:00
          <br />
          Wrocławskie Stowarzyszenie Fortyfikacyjne
          <br />
          KRS 0000416407
          <br />
          REGON 021854154
          <br />
          NIP 895-20-12-718
        </p>
      </section>
      <section>
        <h2>Lokalizacja</h2>
        <GPS />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.9423436054494!2d17.04127131561381!3d51.1648523435119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA5JzUzLjUiTiAxN8KwMDInMzYuNSJF!5e0!3m2!1spl!2spl!4v1606211700517!5m2!1spl!2spl"
          title="maps-google"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabindex="0"></iframe>
      </section>
    </div>
    <hr />
    <FooterCR />

  </footer>
)

export default Footerindex
