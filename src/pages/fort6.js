import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function Fort6({ data }) {
  return (
    <Layout>
      <SEO title="Fort Piechoty nr 6" />
      <article>
        <h2>Fort Piechoty nr 6</h2>

        <p>Fort powstał na bazie istniejącego tutaj od roku 1891 schronu piechoty. Schron ów miał służyć piechocie rozwijającej swoje pozycje w rowach strzeleckich, w odległości około 100 metrów od obiektu.</p>

        <p>Fort Polanowice zaczęto wznosić w latach 1890 – 1891. Powstała wówczas budowla wyposażona w sześć kazamat, studnię i latrynę. Do roku 1901 dziewiętnaście takich schronów składało się na szkielet Twierdzy Wrocław. Pod względem wyglądu i rozwiązań konstrukcyjnych Schron Piechoty nr 6 przypominał Schron Piechoty nr 1 przy ul. Dembowskiego.</p>

        <p>Konstrukcja schronu złożona jest z trzech warstw, cegły, piasku i betonu. Budowlę przykrywa warstwa ziemi dochodząca do 80 centymetrów grubości pozwalająca na wprowadzenie maskowania roślinnego. Pierwotnie fasada obiektu posiadała sześć dużych dwuskrzydłowych bram i siedem jednoskrzydłowych drzwi. Na prawym skrzydle budowli znajdowało się zakratowane okienko latryny.</p>

        <p>W roku 1910 na bazie Schronu Piechoty nr 6 zbudowano Dzieło Piechoty (niem. Infanteriewerk) nr 6. Oznaczało to objęcie terenu ziemnym szańcem o odpowiednim dla prowadzenia ostrzału profilu. W czołową, skierowaną w stronę nieprzyjaciela część ziemnego szańca wbudowano unikatową, charakterystyczną dla fortów wrocławskich, betonową pozycje strzelecką. Posiadała ona dwa przeciwodłamkowe posterunki obserwacyjne. Oprócz tego wybudowano dwa schrony pogotowia oraz wartownię. Przebudowano także sam schron piechoty, który od tego momentu stanowił koszary fortu. Wejście do fortu, zamykała masywna, kuta krata forteczna.</p>

        <p>Na początku XX wieku, było to jedno z najnowocześniejszych dzieł warownych na wschodniej granicy Niemiec. Fort posiadał łączność telefoniczną, elektryczną instalację alarmową, elektrycznie napędzany system wentylacyjny oraz oświetlenie. Komunikacji między obiektami służył system rur głosowych – telegrafu akustycznego.</p>

        <p>Nowoczesność miała swoją cenę. Sam schron koszarowy kosztował około 60 000 marek niemieckich, jego rozbudowa w roku 1910 kosztowała w przybliżeniu 230 000 marek, przy czym koszt samej betonowej pozycji strzeleckiej wyniósł od 21 850 marek do nieco ponad 30 000 marek. Każde ze stanowisk obserwacyjnych kosztowało po 500 marek. W tym samym momencie dniówka robotnika wykwalifikowanego wynosiła 2 – 3 marki zaś praca zwykłego robotnika była warta 1,5 – 2 marek za dzień. Dla zrozumienia ogromu wydatków, warto też dodać, że w tym czasie bochenek chleba kosztował około 20 fenigów.</p>

        <p>W 1914 roku wraz z wybuchem I wojny światowej nastąpiła rozbudowa mobilizacyjna Twierdzy Wrocław, ogrom przeprowadzonych prac dotknął także Polanowice. W okół fortu wzniesiono zasieki z drutu kolczastego, w pobliże doprowadzono uzbrojenie artyleryjskie, przestrzeń między poszczególnymi fortami i schronami wypełniona została rowami strzeleckimi i bateriami artyleryjskimi.</p>

        <p>Po pierwszej wojnie światowej Fort Piechoty nr 6 był jedynie epizodycznie wykorzystywany przez wojsko. Taki stan rzeczy trwał aż do roku 1938, kiedy to po zlikwidowaniu twierdzy, fort przyjął przede wszystkim funkcję magazynową.</p>

        <p>Pod koniec drugiej wojny światowej fort został ponownie zmobilizowany. Wykopano nowe okopy, rozstawiono zasieki. W 1945 roku, obiekt przeszedł chrzest bojowy, biorąc udział w potyczkach z patrolami zwiadu oblegających. Miał także swój udział w bitwie stoczonej o sąsiednie obiekty w marcu 1945 roku. Fort nie został zdobyty w walce. Oddano go po kapitulacji twierdzy, 6 maja 1945 roku.</p>

        <p>W roku 1951 Fort Polanowice został objęty w posiadanie przez Wojsko Polskie. Nastąpiła wówczas dalsza rozbudowa mająca na celu przygotowanie w oparciu o pruskie budowle fortyfikacyjne, nowoczesnego Stanowiska Dowodzenia przeznaczonego dla 98. Samodzielnego Pułku Artylerii Obrony Powietrznej Kraju. Prace te ukończono w roku 1960. W tym okresie z fortu koordynowano całą naziemną obronę przeciwlotniczą Wrocławia. W 1973 roku 17. Samodzielny Pułk Artylerii Obrony Powietrznej Kraju, będący następcą 98. spa OPK, został rozformowany. Wojsko ostatecznie opuściło fort w roku 1987 przekazując obiekty i teren władzom cywilnym, kończąc tym samym nieprzerwaną prawię stuletnią historię wojskowego wykorzystania Fortu Polanowice. Rozpoczęła się trwająca ponad 20 lat dewastacja.</p>

        <figure className="figure">
          <Img fluid={data.fort.childImageSharp.fluid} />
          <figcaption className="figure-caption">Fort 6</figcaption>
        </figure>

        <p>
          Pierwszego maja 2013 roku teren fortu znalazł się pod opieką Wrocławskiego Stowarzyszenia Fortyfikacyjnego
        </p>

        <h3>1 Schron główny</h3>

        <p>
          Pomieszczenia bytowe dla załogi fortu. Przed modernizacją w 1910 roku, schron przeznaczony był dla 250 żołnierzy. Po modernizacji pomieścić mógł około 170 żołnierzy. W obiekcie znajdowały się pomieszczenia dla wypoczynku, izba dowodzenia, latryna, studnia, oraz podręczne magazyny zaopatrzenia. W czasie walki budowla spełniała rolę schronu dla rezerw.
        </p>

        <h3>2 Schron pogotowia</h3>

        <p>
          Służył części załogi przeznaczonej do obsadzenia pozycji bojowych w razie alarmu. Wnętrze schronu pogotowia wypełniały cztery rzędy ławek. Pomieszczenie było ogrzewane piecykiem okopowym. Obiekt był wyposażony w oświetlenie lampami naftowymi, grawitacyjną wentylację, elektryczną instalację alarmową oraz rury głosowe pozwalające na komunikację z innymi budowlami fortu. Schron pogotowia pomieścić mógł 24-25 żołnierzy.
        </p>

        <figure className="figure">
          <Img fluid={data.schronPogotowia.childImageSharp.fluid} />
          <figcaption className="figure-caption">Schron pogotowia</figcaption>
        </figure>

        <h3>3 Wartownia</h3>

        <p>
          Wartownia przeznaczona była do użytkowania przez żołnierzy pełniących straż na pozycji strzeleckiej fortu. Obsadę pozycji strzeleckiej, stanowił pluton (około 50 żołnierzy). Wartownia była przeznaczona dla 12 z nich, pozostałym służyły schrony przedpiersiowe umieszczone w pozycji strzeleckiej, każdy z takich schronów, pomieścić mógł 8 ludzi.
        </p>

        <h3>4 Betonowa pozycja strzelecka</h3>

        <p>
          Zasadnicze urządzenie bojowe fortu. Wprowadzona do użycia w 1910 roku była jednym z najnowocześniejszych rozwiązań technicznych zastosowanych w Twierdzy Wrocław. Eksperymenty nad rozwiązaniami tego typu trwały już od początku XX wieku. Samo urządzenie składa się z kilku części – przedpiersia z ławką strzelecką, transzei komunikacyjnej, poprzecznic oraz zaplecznika. Konstrukcja zapewniała znacznie lepszą ochronę niż przedpiersie ziemnego szańca. Była też znacznie trwalsza.
        </p>

        <figure className="figure">
          <Img fluid={data.pozycjaStrzelecka.childImageSharp.fluid} />
          <figcaption className="figure-caption">Unikalne, doskonale zachowane betonowe pozycje strzeleckie.</figcaption>
        </figure>

        <h3>5 Posterunki obserwacyjne.</h3>

        <p>
          Tak zwane ślimaki. Służyły do obserwacji przedpola (terenu przed fortem) nawet w czasie ostrzału. Żołnierz prowadzący obserwację meldował o sytuacji przed fortem przez rurę głosową załodze schronu pogotowia lub oficerom w schronie głównym.
        </p>

        <figure className="figure">
          <Img fluid={data.stanowiskoObserwacyjne.childImageSharp.fluid} />
          <figcaption className="figure-caption">Stanowisko obserwacyjne</figcaption>
        </figure>

      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    fort: file(relativePath: { eq: "wsf-fort-660.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    schronPogotowia: file(
      relativePath: { eq: "wsf-fort2-800-schronpogotowia.jpg" }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pozycjaStrzelecka: file(relativePath: { eq: "wsf-fort4-800-pozycjastrzelecka.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stanowiskoObserwacyjne: file(
      relativePath: { eq: "wsf-fort3-800-stanowiskoobserwacyjne.jpg" }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`