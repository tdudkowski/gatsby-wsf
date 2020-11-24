import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FestungBreslau = ({ data }) => (
  <Layout>
    <SEO title="Festung Breslau" />
    <article>
      <h2>Festung Breslau</h2>

      <h3>Kalendarium budowy Twierdzy Wrocław</h3>

      <figure className="figure">
        <Img fluid={data.plan.childImageSharp.fluid} alt="Obszar Twierdzy" />
        <figcaption className="figure-caption">Obszar Twierdzy</figcaption>
      </figure>

      <ul>
        <li>9 maj 1889 – Cesarz Wilhelm II nakazuje odbudowę fortyfikacji Wrocławia.</li>
        <li>1 czerwca 1889 – Szef Sztabu Generalnego, podczas podróży sztabowej do Wrocławia wyznacza przebieg umocnień w terenie.</li>
        <li>10 października 1889 – Szef Sztabu Generalnego oraz Generalny Inspektorat Korpusu Inżynierów, Pionierów i Twierdz, określają kształt umocnień przyszłej twierdzy.</li>
        <li>24 kwietnia 1890 – Dla odciążenia przyszłej mobilizacji, zapada decyzja o budowie pierwszych schronów piechoty.</li>
        <li>21 maj 1890 – Powstaje Depot Bau-Verwaltung Breslau.</li>
        <li>1890 – 1891 – Trwa budowa pierwszych siedmiu schronów piechoty na północnym brzegu Odry. Zostają wybudowane i zaopatrzone składy mobilizacyjne przy ul. Bardzkiej i Krzywoustego.</li>
        <li>1891 – 1892 – Trwa budowa kolejnych trzech schronów piechoty na północnym brzegu Odry. Zostają powiększone składy mobilizacyjne.</li>
        <li>1892 – 1894 – Trwa budowa pięciu schronów piechoty na południowym brzegu Odry.</li>
        <li>1894 – Zostaje założona stacja gołębi pocztowych.</li>
        <li>1895 – Zostaje ukończona budowa wału obwodnicy kolejowej. W wał na odcinku od Księża Małego po Krzyki, umieszczonych zostaje pięć baterii artyleryjskich.</li>
        <li>1896 – 1897 Budowa pierwszego betonowego schronu piechoty – ul. Lotnicza, Schron Piechoty nr 10.</li>
        <li>1897 – 1898 Budowa betonowego schronu piechoty przy ul. Redyckiej.</li>
        <li>1899 – 1900 Budowa betonowego schronu piechoty przy ul. Wiaduktowej.</li>
        <li>1900 – 1901 Budowa betonowego schronu piechoty, z urządzeniem ochrony wejścia przy ul. Bystrzyckiej.</li>
        <li>1901 – Powiększenie stacji gołębi pocztowych, początek budowy fortecznej sieci telegraficznej.</li>
        <li>1905 - Kolej Prawego Brzegu Odry otrzymuje bezpośrednie połączenie kolejowe łączące Wrocław z kolejami rosyjskimi. Wzrost znaczenia budowanej twierdzy.</li>
        <li>1903 – 1906 Powiększenie zasobów składów mobilizacyjnych.</li>
        <li>28 luty 1905 – Powiększenie planowanej twierdzy, wysunięcie frontów zachodniego, północno – wschodniego.</li>
        <li>1906 – Schrony Piechoty nr 7 i 8 (ul. Sułowska i Irysowa) zostają przebudowane na Forty Piechoty.</li>
        <li>25 października 1906 – Depot Bau-Verwaltung Breslau zostaje przekształcony w Królewską Pruską Fortyfikację Wrocław.</li>
        <li>21 luty 1907 – Zostaje wydana zgoda na budowę urządzeń piętrzących na Widawie. Ze względu na nieuregulowane prace przeciwpowodziowe, budowa nie rozpoczyna się.</li>
        <li>1907 – 1908 – Do Wrocławia zostają skierowane środki pieniężne na budowę kolejnych Fortów Piechoty.</li>
        <li>1910 – Powstają Forty Piechoty nr 4,5,6, w Fortach Piechoty 7 i 8 zostają zbudowane schrony pogotowia i betonowa pozycja strzelecka.</li>
        <li>14 czerwca 1910 – Cesarz Wilhelm II ogłasza Wrocław twierdzą.</li>
        <li>22 czerwca 1910 – Zostają ogłoszone rejony ograniczeń budowlanych.</li>
        <li>1912 – Zostają zmodernizowane Schrony Piechoty nr 3,9,12,13,14,15. Zapada decyzja o wysunięciu frontu południowego przed nasyp obwodnicy kolejowej. Zostaje wybudowany Jaz Forteczny nr I.</li>
        <li>6 listopada 1913 – Rozpoczęte zostają prace projektowe nad frontem południowym twierdzy.</li>
        <li>28 lipca 1914 – Wybucha pierwsza wojna światowa.</li>
        <li>lipiec – sierpień 1914 – Twierdza Wrocław zostaje zmobilizowana, pojawiają się baterie artyleryjskie, rowy strzeleckie, zasieki, powstaje szereg nowych budowli fortecznych.</li>
        <li>1916 – 1917 – Rozpoczyna się rozbiórka fortyfikacji polowych, powstałych w czasie mobilizacji.</li>
        <li>1919 – Podpisanie Traktatu Wersalskiego, Twierdza Wrocław zostaje poddana kontroli Międzyalianckiej Komisji Kontroli Wojskowej.</li>
        <li>19 grudnia 1924 – Twierdzę wizytują inspektorzy Międzyalianckiej Komisji Kontroli Wojskowej, stwierdzają że obiekty są niedostępne, a niektóre formy ziemne dzieł, oraz siec telefoniczna zniszczona.</li>
        <li>6 sierpnia 1938 – Adolf Hitler podejmuje decyzję o opuszczeniu Twierdzy Wrocław. Odtąd przestają obowiązywać rejony ograniczeń budowlanych, zostaje zniesione stanowisko komendanta twierdzy, dzieła forteczne nie są utrzymywane w stanie pozwalającym na walkę.</li>
      </ul>

      <h3>Twierdza Wrocław w roku 1914</h3>

      <p>Główna linia walki, zasadnicza rubież obronna Twierdzy Wrocław w roku 1914 roku wyznaczona była po linii stałych dzieł fortyfikacyjnych. Obwód obronny twierdzy, podzielony był na cztery brygadowe odcinki obrony.</p>

      <ul>
        <li>Odcinek I - od brzegu Odry na wysokości obecnych Bartoszowic po dzisiejszą ulicę Sołtysowicką</li>
        <li>Odcinek II - od ulicy Sołtysowickiej do brzegu Odry w Lesie Osobowickim</li>
        <li>Odcinek III - od brzegu Odry do obecnej ul. Krzyckiej</li>
        <li>Odcinek IV - od ul. Krzyckiej do Odry</li>
      </ul>

      <p>Przed zasadniczą rubieżą obronną, znajdowały się trzy pozycje wysunięte z zadaniem opóźniania domarszu wroga do twierdzy, były to następujące:</p>

      <ol>
        <li>Na Pawłowicach</li>
        <li>Na Psim Polu</li>
        <li>W miejscowości Ślęza</li>
      </ol>

      <p>Umocnienia Twierdzy składały się z następujących elementów:</p>

      <ul>
        <li>Pięciu wzniesionych w czasie pokoju stałych dzieł piechoty</li>
        <li>Ośmiu schronów piechoty częściowo otoczonych przedpiersiem, których rozbudowa w punkty oporu miała zostać ukończona wraz z rozpoczęciem mobilizacji</li>
        <li>Sześciu schronów piechoty które miały zostać rozbudowane do formy punktów oporu dopiero w razie mobilizacji.</li>
        <li>Jazów fortecznych na Widawie i Ślęzie</li>
        <li>Dziesięciu mobilizacyjnych schronów piechoty</li>
        <li>Jedenastu mobilizacyjnych punktów oporu piechoty</li>
      </ul>

      <p>Ponadto</p>

      <ul>
        <li>Wału obwodnicy kolejowej, wzmocnionej na odcinku od Krzyków do Tarnogaju pięcioma stanowiskami dział 9 cm</li>
        <li>Przygotowanymi do obrony, znajdującymi się w głównej linii walki osiedlami</li>
        <li>Grupy rowów strzeleckich oraz pozycji artyleryjskich rozbudowanych w toku mobilizacji w międzypolach i zapolu głównej linii walki</li>
      </ul>

      <p>
        W twierdzy znajdowało się również całe konieczne zaplecze logistyczne i organizacyjne, w postaci komendantury, budynków koszarowych, piekarni garnizonowej, laboratorium amunicyjnego, szop i wozowni działowych, licznych magazynów, stajni, kuźni, urzędu fortyfikacyjnego, i wszystkich instalacji niezbędnych garnizonowi w czasie pokoju jak i twierdzy w czasie obrony - nie wyłączając z wyliczenia wojskowej stacji gołębii pocztowych, która również w Twierdzy Wrocław funkcjonowała.
</p>

      <h3>Uzbrojenie</h3>

      <figure className="figure">
        <Img fluid={data.fahrpanzer1.childImageSharp.fluid} alt="Fahrpanzer" />
        <figcaption className="figure-caption">Fahrpanzer</figcaption>
      </figure>

      <ul>
        <li>50 Fahrpanzerów (przewoźnych wieżyczek pancernych) z działem 5,3 cm z zapasem 200 granatów, 400 karataczy na działo</li>
        <li>24 działa 9 cm C/73 na lawetach wałowych</li>
        <li>72 działa 9 cm C/73 na lawetach polowych do aramat 9 cm dysponowano zapasem 80 granatów, 320 szrapneli i 10 kartaczy na działo</li>
        <li>36 armat 12 cm z zapasem 100 granatów, 400 szrapneli na działo</li>
        <li>24 ciężkie haubice polowe 15 cm z zapasem 400 granatów na działo</li>
      </ul>

      <p>Ponadto:</p>

      <ul>
        <li>30 karabinów maszynowych</li>
        <li>2 średnie miotacze min ( mittlere Minenwerfer a/A 17 cm) z zapasem 400 min każdy</li>
        <li>4 przewoźne reflektory z lustrem średnicy 60 cm</li>
        <li>8 przenośnych reflektorów z lustrem średnicy 25 cm</li>
        <li>20 urządzeń do wystrzeliwania granatów karabinowych z zapasem 200 sztuk amunicji na każde</li>
        <li>92 pistolety sygnałowe z zapasem 25200 flar</li>
      </ul>

      <p>Posiadano poza tym następujace rodzaje amunicji<br />
Amunicja karabinowa M.1888 1660000 sztuk, amunicja karabinowa S. Patronen 1798300 i dalszych 3541700 przygotowanych do elaboracji, 37008 naboi rewolwerowych oraz 20896 naboi pistoletowych 9 x 19 mm.</p>

      <p>Działa wchodzące w skład uzbrojenia twierdzy były przechowywane w szopach działowych 6 Pułku Artylerii Polowej przy ul. Koszarowej, Wozowni Artyleryjskiej nr III przy ul. Gnieźnieńskiej, magazynach wojskowych przy ul. Poznańskiej oraz odpowiednio przy dziełach fortecznych z wyłączeniem I.R. 11 przy ul. Strzegomskiej.</p>

      <p>Amunicję przechowywano w magazynie przy ul. Poznańskiej oraz w laboratorium amunicyjnym przy ul. Koszarowej.</p>

      <figure className="figure">
        <Img fluid={data.fahrpanzer2.childImageSharp.fluid} alt="Fahrpanzer" />
        <figcaption className="figure-caption">Fahrpanzer</figcaption>
      </figure>

      <h3>Nazewnictwo i typologia dzieł fortecznych we Wrocławiu</h3>

      <p>Przed jakimikolwiek rozważaniami nazewniczymi, należy przyjąć pewną ważną w dyskusji na ten temat uwagę. Pierwotnie dla zasadniczego użytkownika którym była pruska armia, liczyła się przede wszystkim numeracja, nie zaś przybliżające funkcję nazewnictwo. Numer obiektów wiązał dane dzieło warowne z terenem, przypisywał lokalizację jak adres, funkcja mogła ulec zmianie. W pierwszych chronologicznie i znanych obecnie dokumentach z fazy kiedy funkcjonował Depot-Bau Verwaltung Breslau, wznoszone obiekty fortyfikacyjne nazywano magazynami...</p>

      <p>W istniejącej literaturze przyjęło się podział obiektów fortecznych we Wrocławiu na Infanterie Räume (I.R.), Infanterie Stellungen (I.St.), Unterstände (U.) oraz jazy forteczne – Stauwehre (St.W).</p>

      <p>Podział ten obarczony jest pewnym błędem, ponieważ Infanterie Stellung jest czymś innym niż Infanterie Stüzpunkt. Otóż, np. Wolffsberg Stellung w Twierdzy Metz, jest zespołem fortyfikacji półstałych, rozciągniętym na znacznym obszarze, wyposażonym w liczne pancerne stanowiska obserwacyjne artylerii i piechoty. Coś takiego jak Infanterie Stellung w ogóle w pruskiej fortyfikacji nie funkcjonowało jako nazwa typologiczna. Mimo swego linearnego charakteru przykładowy Wolffsberg Stellung posiada też dość znaczną głębokość. Natomiast wrocławskie Infanterie Stützpunkt, mimo pewnego rozproszenia swoich urządzeń bojowych są właściwie skupionymi punktami oporu, stanowiącymi stałe węzły obrony w przygotowywanych doraźnie w wypadku mobilizacji pozycjach polowych. Polska literaturą fortyfikacyjną określa takie obiekty mianem fortów piechoty. Ponadto, wszelkie zachowane źródła historyczne rozwijają skrót I.St, jako Infanterie Stüzpunkt.</p>

      <p>Infanterie Räume – Schrony piechoty. Pierwszych 19 schronów piechoty zostało zbudowanych w latach 1891-1901. Ich zadanie bojowe polegało na daniu schronienia piechocie, której pozycje osłaniały znajdujące się w zapolu schronów baterie artyleryjskie. Każdy fort – punkt oporu piechoty, posiada w swoim obrębie schron piechoty, ale… nie każdy schron piechoty, jest punktem oporu, chociaż w razie mobilizacji mógł zostać jako taki rozbudowany. W czasie pokoju większość znajdujących się we Wrocławiu schronów piechoty służyło jako magazyny, przede wszystkim materiałów służących do rozbudowy twierdzy jak i sprzętu artyleryjskiego.</p>

      <p>Unterstände – Schrony mobilizacyjne. Zostały wzniesiona w 1914 roku, z analogicznym zadaniem jak budowane w czasie pokoju schrony piechoty.</p>

      <p>Stauwehre – Jazy forteczne. Mimo ich niepozornego wyglądu były to właściwie decydujące dla obronności twierdzy urządzenia, pozwalające na wytworzenie przed dużymi połaciami frontu twierdzy potężnych przeszkód wodnych. Opócz stałych jazów na Widawie i Ślęzie w analogicznej roli mogły zostać wykorzystane przyczółki mostów na Oławie.</p>

      <p>Kwestia numeracji</p>

      <p>W roku 1903, mimo trwającego planowania wojennej rozbudowy twierdzy, stosowano następujące nazewnictwo:</p>

      <p>Werk 1 (Zimpel), Werk 2 (Cawallen), Werk 3 (Friedewalde), Werk 4 (Schottwitz), Werk 5 (Bischwitz), Werk 6 (Pohlanowitz), Werk 7 (Lilienthal), Werk 8 (Haferberg), Werk 9 (Liepe), Werk S (Schwedenschanze unten), Werk Sa (Schwedenschanze oben), Werk 10 (Poepelwitz), Werk Kl. Gandau, Werk 11 (Kl. Mochbern), Werk 12 (Gr. Mochbern), Werk 13 (Gräbschen), Werk 14 (Kleinburg), Werk 15 (Krietern), Werk 20 (Brockau). Dzieła (Werke) 16 – 19 oraz 21 miały powstać w wypadku mobilizacji i nie posiadały nazw.</p>

      <p>Kompletne nazewnictwo obiektów twierdzy w latach pierwszej wojny światowej nie jest znane. Fortyfikacja Wrocław, w 1920 roku przedstawiła jednak aliantom mapę twierdzy, z oznaczeniami obiektów, których konsekwentnie używano we wszystkich wytworzonych wówczas dokumentach.</p>

      <p>Były to następujące oznaczenia:</p>

      <ul>
        <li>Infanterie Räume (I.R.) 1, 2, 3, 9, S, Sa, 10, 10a, 11, 12, 13, 14, 15, 20.</li>
        <li>Infanterie Stützpunkte (I.St.) 4, 5, 6, 7, 8, 8a, 15a, 15b, 16, 17, 18, 18a, 19, 21, 22, 23</li>
        <li>Unterstände (U.) 1-10.</li>
        <li>Jazy forteczne oznaczono natomiast cyframi rzymskimi od I do XII.</li>
        <li>W czasie oblężenia Wrocławia w 1945 roku, używano w rozkazach na określenie wszystkich obiektów kubaturowych słowa Bunker, obiekty miały ciągłą numerację od 1 do ponad 40.</li>
      </ul>

      <p>W literaturze dotyczącej fortyfikacji Wrocławia spotykamy się z następującym nazewnictwem:</p>

      <ul>
        <li>Infanterie Raum (I.R.-) 1, 2, S, Sa, 10, 10a, 11, 14, 20</li>
        <li>Infanterie Stellungen (I.St.- ) 3, 4, 5, 6, 7, 8, 8a, 9, 12, 13, 15, 15a, 15b, 16, 17, 18, 18a, 19, 21, 22, 23, e
Unterstand (U.-) 1-10</li>
        <li>Stauwehr (St.W.-) oznaczone cyframi rzymskimi od I do XII.</li>
      </ul>

      <p>Numeracja ta posiada słabe strony, przede wszystkim nie jest argumentowana źródłami historycznymi. Uznano że schrony piechoty, które posiadają nową betonową fasadę (płaszcz), są elementami punktów oporu piechoty. Koncepcja ta ma jednak wadę, ponieważ I.R.S, I.R.Sa, oraz I.R. 14 również posiadają przebudowane fasady, a nie zostały określone jako I.St. Mimo że np. I.R.13 i 14 są do siebie bliźniaczo podobne, na dodatek I.R. 14 posiada w szyi staw, oraz ziemny szaniec wokół schronu.</p>

    </article>
  </Layout>
)

export default FestungBreslau

export const pageQuery = graphql`
  query {
    plan: file(relativePath: { eq: "wsf-twierdza1-800-cut.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fahrpanzer1: file(relativePath: { eq: "wsf-twierdza2-800-cut.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
   }
   fahrpanzer2: file(relativePath: { eq: "wsf-twierdza3-800-cut.jpg" }) {
    id
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
}
}
`;
