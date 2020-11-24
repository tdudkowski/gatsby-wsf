import React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => (
  <>
    <h2>Infanterie Werk 6</h2>
    <h3>Komendantura</h3>
    <ul>
      <li>
        <Link to="/">Strona główna</Link>
      </li>
      <li>
        <Link to="/blog">Wydarzenia</Link>
      </li>
      <li>
        <Link to="/stowarzyszenie">Stowarzyszenie</Link>
      </li>
    </ul>
    <h3>Załoga</h3>
    <ul>
      <li>
        <Link to="/bohaterowie">Bohaterowie</Link>
      </li>
      <li>
        <Link to="/landsturm">Landsturm</Link>
      </li>
      <li>
        <Link to="/grh609d">GRH 609 Division</Link>
      </li>
    </ul>
    <h3>Archiwum Fortu</h3>
    <ul>
      <li>
        <Link to="/fort6">Fort Piechoty nr 6</Link>
      </li>
      <li>
        <Link to="/festung-breslau">Festung Breslau</Link>
      </li>
      <li>
        <Link to="/bibliografia">Bibliografia</Link>
      </li>
      <li>
        <Link to="/luftschutz-obrona-cywilna">Luftschutz / Obrona Cywilna</Link>
      </li>
      <li>
        <Link to="/slownik">Słowniczek forteczny</Link>
      </li>
      <li>
        <Link to="/mapa-obiektow-fortyfikacyjnych">
          Mapa obiektów fortyfikacyjnych
        </Link>
      </li>
      <li>
        <a href="https://www.youtube.com/user/fortwroclaw">WSF - YouTube</a>
      </li>
    </ul>
    <h3>Komunikacje</h3>
    <ul>
      <li>
        <Link to="/formularz-kontaktowy">Formularz kontaktowy</Link>
      </li>
      <li>
        <a href="http://www.forum.fortwroclaw.pl/">Forum</a>
      </li>
    </ul>

    <section className="hero">
      <p>
        Zalajkuj nasz profil i śledź informacje:
        <br />
        <a href="https://www.facebook.com/fortwroclaw/" className="facebook">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
          fb.com/fortwroclaw
        </a>
      </p>

      <hr />

      <p>Wsparcie</p>
      <Link to="/mecenat">Zostań mecenasem</Link>
    </section>
  </>
)

export default NavbarLinks
