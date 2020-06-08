import React from "react"
import FooterCR from "./footercr"

const Footer = () => (
  <footer>
    <div>
      <section>
        <h2>Kontakt</h2>
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
        </p>
      </section>
      <section>
        <h2>Facebook</h2>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffortwroclaw%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          title="facebook"
          width="340"
          height="500"
          styleName="border: none; overflow: hidden;"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </section>
      <section>
        <h2>GPS: 51.164, 17.043</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.2055403740815!2d17.037805951380957!3d51.159999979479316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA5JzM2LjAiTiAxN8KwMDInMjQuMCJF!5e0!3m2!1sen!2spl!4v1591552150796!5m2!1sen!2spl"
          title="maps-google"
          width="600"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
        ></iframe>
      </section>
    </div>
    <hr />
    <FooterCR />
  </footer>
)

export default Footer
