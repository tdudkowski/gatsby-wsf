import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Landsturm = ({ data }) => (
  <Layout>
    <SEO title="Landsturm" />
    <article>
      <h2>Landsturm</h2>

      <figure className="figure">
        <Img fluid={data.landsturm2.childImageSharp.fluid} alt="Landsturm" />
        <figcaption className="figure-caption">Landsturm</figcaption>
      </figure>

      <p>Dziś, oglądając zrujnowane zabytki sztuki warownej ciężko wyobrazić sobie, że każdy taki obiekt posiadał kiedyś swoją załogę. Mieszkali i pracowali w nim ludzie. Podobnie było z Fortem Piechoty nr 6, fortyfikacje same w sobie są fascynujące a jednak do działania fortu niezbędni byli ludzie! Żołnierze! </p>

      <p>No tak, żołnierze ale jacy? Regularna armia, bitne wrocławskie pułki – 51. piechoty i 11. grenadierów, wyszły wraz z wybuchem wojny w pole, gdzie potrzebował ich Kajzer. Dzielni wrocławscy kirasjerzy, także na cesarski rozkaz opuścili twierdzę, w której i tak nie byłoby z nich pożytku. </p>

      <p>Czy wybudowane dużym finansowym wysiłkiem umocnienia, miały pozostać bez obrońców? Stanowcze – nie! </p>

      <p>Załogę Twierdzy Wrocław w roku 1914 stanowić miały następujące siły: </p>

      <ul>
        <li>28 batalionów piechoty,</li>
        <li>3 szwadrony kawalerii,</li>
        <li>4 baterie artylerii polowej,</li>
        <li>14 baterii artylerii pieszej,</li>
        <li>8 kompanii pionierów,</li>
        <li>1 forteczny oddział telefoniczny,</li>
        <li>2 forteczne plutony reflektorów,</li>
      </ul>

      <p>Łącznie 35 500 żołnierzy.</p>

      <p>Połowę stanu liczebnego załogi Twierdzy Wrocław w roku 1914 stanowiły jednostki Landwehry i Landsturmu, pozostałe jednostki to pozostawione przez pułki liniowe bataliony uzupełenień.</p>

      <p>Koncepcja utworzenia Landwehry i Landsturmu sięga jeszcze ery napoleońskiej. Pobudzone uniesieniem narodowym społeczeństwo pruskie pragnęło odeprzeć francuskiego okupanta. Obywatelską postawę społeczeństwa wykorzystali reformatorzy armii pruskiej, nadając zjawisku ramy formalne.<br />
Tak w wielkim skrócie narodził się na gruncie pruskim pomysł na obronę terytorialną i pospolite ruszenie. W praktyce wyglądało to w następujący sposób:<br />
Pobór do wojska w początku XIX wieku stał się obowiązkowy, jednakże nie wszyscy trafiali do wojska - z najrozmaitszych przyczyn.<br />
Ukończywszy 20. rok życia prusak jeśli już trafił do regimentu, spędzał w nim dwa lata. Następne pięć lata spędzał w rezerwie, czyli w większości w domu.<br />
Oczywiście 27 letni prusak, wciąż mógł być świetnym żołnierzem, toteż armia nie zapominała o nim. W wieku lat 27, prusak po odsłużeniu swego przy pułku trafiał w końcu do Landwehry, gdzie ciągle mógł zostać w razie czego zmobilizowany, i trafić na front - i tak aż do 39. urodzin, kiedy trafiał w końcu do Landsturmu II rzutu, gdzie mógł zostać owszem powołany do wojska w razie wojny, do obsady twierdz, zabezpieczenia granic, pilnowania porządku w mieście, i ogólnie do wszelkiego rodzaju służb tyłowych. Prusakowi wojsko dawało spokój ostatecznie, dopiero wraz z ukończeniem 45 roku zycia. W razie jednak bezpośredniego zagrożenia kraju, można było również powołać młodzież w wieku 17 - 20 lat jako Landsturm I rzutu. Oczywiście w razie wojny, tak czy siak ci którzy wcześniej nie służyli, bo się nie nadawali trafiali koniec końców do Landsturmu.</p>

      <p>Po co cała ta komplikacja? Z bardzo prostego powodu - żeby zapewnić armii stały dopływ siły żywej w razie strat na polu bitwy.</p>

      <p>Wyposażenie Landsturmu nie przedstawiało się ani świetnie jakościowo, ani jednolicie. Działo się tak dlatego, że regularne jednostki opuszczając garnizony zabierały ze sobą etatowe umundurowanie i uzbrojenie. Część sprzętu pozostawiano do formowania pułków rezerwowych, ale i ten sprzęt wobec mobilizowania całej armii błyskawicznie znikał. Landwehra miała zarezerwowane jeszcze jako takie sorty. Dla Landsturmu, ostatniego w kolejce do zaopatrzenia nie zostawało wiele.<br />
Wycofywane z liniowej służby karabiny, różnego rodzaju i koloru wojskowe kurtki robocze, najrozmaitsze ładownice, elementy wyposażenia niekiedy kompletowane nawet w cywilnej szafie. Słowem - bieda!</p>

      <p>Na domiar złego pospolitym ruszeniem, dowodzili oficerowie, którzy nie nadawali się już do żadnych zadań w polu. Głusi, ślepi, bez nogi, albo prawie bez nogi, zupełnie niekompetentni i w jakiejś części zdziadziali na emeryturze. Takiej też jakości był przeciętny landsturmann – przewyższający jednak sprytem swoich dowódców – prawdziwy Szwejk. Jeśli nawet sporo jednostek Landsturmu z czasem znalazło się we frontowych okopach, to karty historii milczą o mężnych obrońcach Festung Breslau z 1914 roku.</p>

      <p>Sylwetki takich właśnie najgorszych żołnierzy Jego Cesarskiej Wysokości Wilhelma II postanowiliśmy odtwarzać w ramach powstałej przy Stowarzyszeniu, Sekcji Rekonstrukcji Historycznej "Twierdza 1914".</p>

      <figure className="figure">
        <Img fluid={data.landsturm1.childImageSharp.fluid} alt="Landsturm" />
        <figcaption className="figure-caption"></figcaption>
      </figure>
    </article>
  </Layout>
)

export default Landsturm

export const pageQuery = graphql`
  query {
    landsturm1: file(relativePath: { eq: "wsf-landsturm1-600.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landsturm2: file(relativePath: { eq: "wsf-landsturm2-600.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
   }
}
`;
