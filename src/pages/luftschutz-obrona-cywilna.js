import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const OC = ({ data }) => (
  <Layout>
    <SEO title="Luftschutz" />
    <article>
      <h2>Luftschutz</h2>

      <figure className="figure floatl">
        <Img fluid={data.OC1.childImageSharp.fluid} alt="Luftshutz" />
        <figcaption className="figure-caption">Luftschutz.</figcaption>
      </figure>

      <p>Już w trakcie pierwszej wojny światowej stało się jasne, że również miasta położone daleko za linią frontu mogą
paść ofiarą ataku lotniczego. W odpowiedzi na to nowe zagrożenie zaczęły pojawiać się pierwsze schrony przeciwlotnicze.</p>

      <p>W latach 30' we wszystkich państwach europejskich, prowadziły działalność różnego rodzaju organizacje mające przygotować ludność cywilną do ewentualnej wojny powietrznej.</p>

      <p>W Niemczech po roku 1935 kilka takich organizacji zostało połączonych pod kierownictwem Ministerstwa Lotnictwa w
Reichs Luftschutzbund. Nieco wcześniej zaczęto przygotowywać pierwsze przedsięwzięcia technicze mające służyć zabezpieczeniu ludności przed skutkami nalotów - zaczęły pojawiać się pierwsze ukrycia przeciwlotnicze, organizowane wówczas głównie w piwnicach.</p>

      <p>Po roku 1935 skala przedsięwzięć związanych z przygotowaniami do wojny powietrznej znacznie wzrosła. Zaczęły pojawiać sie wolnostojące budowle schronowe. Za budowę ukryć i schronów odpowiedzialni byli właściciele zakładów przemysłowych, budynków będących własnością prywatną, ale także służby miejskie zostały obciążone zadaniami z zakresu budowy urządzeń ochrony zbiorowej. W tym okresie, aż do roku 1939 masowo budowano stałe szczeliny przeciwlotnicze.</p>

      <p>W październiku roku 1940 wszedł w życie Führer LS - Sofortprogramm w ramach którego w miastach zagrożonych nalotem zaczęto projektować i wznosić schrony wielkokubaturowe. Budowa tego typu obiektów trwała we Wrocławiu aż do roku 1944.</p>

      <p>Już od 1943 roku Niemcy zaczęły doświadczać coraz cięższych nalotów dokonywanych przez lotnictwo alianckie.Skutkiem tych działań była intensyfikacja działań przy budowie kolejnych urządzeń schronowych - powróciła koncepcja masowej budowy szczelin przeciwlotniczych z prefabrykatów. Pod koniec wojny szczeliny przeciwlotnicze ulegały dalszym uproszczeniom, zaczęto także budować prowizoryczne rowy przeciwodłamkowe.</p>

      <p>Konieczność użytkowania schronów była z pewnością trudnym elementem dnia codziennego w wojennej rzeczywistości. W schronach na stosunkowo niewielkiej przestrzeni przebywały stłoczone dziesiątki osób, często uciekając z mieszkań wraz z najcenniejszym dobytkiem. Chociaż duża część budowli ochronnych posiadała węzły sanitarne i mechaniczną wentylację, to przebywanie w większości schronów nie należało do komfortowych.</p>

      <p>Na Wrocław nie były kierowane naloty dywanowe. Zniszczenie miasta i okres pełnego wykorzystania zbudowanych we Wrocławiu schronów przypada na czas oblężenia w roku 1945.</p>

      <p>Licząc razem z ukryciami w piwnicach Niemcy zbudowali we Wrocławiu około kilku tysięcy schronów przeciwlotniczych. Z czego około czterysta to obiekty wolnostojące, wśród których dominują zachowane do dziś szczeliny przeciwlotnicze umieszczone w podwórkach, na zieleńcach i placach miejskich.</p>

      <h3>Szczeliny przeciwlotnicze</h3>

      <figure className="figure">
        <Img fluid={data.OC2.childImageSharp.fluid} alt="Luftshutz" />
        <figcaption className="figure-caption">Luftschutz.</figcaption>
      </figure>

      <p>Luftschutz - Deckungsgraben (Szczeliny Przeciwlotnicze) powstały poprzez ewolucję rowów strzeleckich pierwszej wojny światowej na skutek pojawienia się lotnictwa. Pierwsze schrony tego rodzaju zbudowano w Niemczech już w latach 1933 – 1934, we Wrocławiu pierwsze stałe szczeliny przeciwlotnicze pojawiły się w latach 1935 – 1936. Początkowo, do roku mniej więcej 1938, budowano we Wrocławiu wyłącznie szczeliny o monolitycznej, betonowej lub żelbetowej konstrukcji. Po wybuchu wojny zaczęto wznosić konstrukcje o ceglanych ścianach i betonowym stropie, bądź w całości zbudowane z cegły.</p>

      <p>W okresie od 1940 do 1943 roku nie budowano szczelin przeciwlotniczych. W 1943 roku w związku z nasilającymi się atakami alianckiego lotnictwa, opracowano oraz nakazano wznoszenie prefabrykowanych szczelin przeciwlotniczych. Pogarszająca się sytuacja wymusiła w 1944 roku dalsze uproszczenie konstrukcji tego rodzaju ukryć.</p>

      <p>Do 1944 roku, nie zalecano budowy odkrytych szczelin przeciwlotniczych, tj. rowów o odpowiednim profilu i narysie, pozbawionych jednak ochronnego stropu. Sytuacja miast przyfrontowych, wymagała jednak wprowadzenia także tego rodzaju ukryć, nazwanych LS-Splittergraben.</p>

      <p>Szczeliny przeciwlotnicze budowane w pierwszym okresie (do roku 1940) posiadały z reguły przedsionek, śluzę gazoszczelną, przedział ochronny oraz nisze sanitarną. Przedział ochronny wyposażony był w składane ławki oraz instalację wentylacyjną, nierzadko wyposażoną w ręczne filtrowentylatory. Każda szczelina budowana w tym okresie posiadała dwa wejścia, lub wejście i wyjście ewakuacyjne. Wyposażenie szczelin ulegało stopniowemu upraszczaniu. W 1944 roku szczeliny prefabrykowane o możliwie jak najmniej skomplikowanej konstrukcji posiadały już tylko śluzy gazoszczelne i przedziały ochronne wyposażone w grawitacyjną wentylację i proste składane ławki.</p>

      <p>Pewna cześć szczelin przeciwlotniczych, była modernizowana i wykorzystywana po II Wojnie Światowej.</p>

      <h3>Obrona Cywilna</h3>

      <figure className="figure">
        <Img fluid={data.OC3.childImageSharp.fluid} alt="Luftshutz" />
        <figcaption className="figure-caption">Luftschutz.</figcaption>
      </figure>

      <p>Druga wojna światowa zakończyła się w Europie w maju 1945 roku. Jednak ostatnim akordem tego globalnego konfliktu było użycie dwóch bomb atomowych przeciw Japonii. Początkowo do roku 1949 bronią jądrową dysponowały tylko Stany Zjednoczone. Dnia 29 sierpnia 1949 roku Związek Radziecki przeprowadził pierwszą udaną próbę broni atomowej.</p>

      <p>Rozdzwięk między aliantami zachodnimi a Związkiem Radzieckim zaczął się nasilać pod koniec drugiej wojny światowej. Wraz z klęską Niemiec hitlerowskich, otwarcie zarysowała się rywalizacja między niedawnymi sojusznikami. Rywalizacja ta, szybko przerodziła się w otwartą wrogość wobec czego światu zaczęła zagrażać nowa wojna światowa.</p>

      <p>W takich mniej więcej okolicznościach w roku 1951 roku powołano w Polsce do życia Terenową Obroną Przeciwlotniczą, organizacje będącą pierwszą formacją obrony cywilnej w powojennej Polsce. Organizacja ta, działając pod auspicjami Ministerstwa Obrony Narodowej przejęła znajdujące się również we Wrocławiu schrony poniemieckie - z zastrzeżeniem wszakże tych, które do swoich celów zamierzało wykorzystać Wojsko Polskie. TOPL stał przed analogicznymi zadaniami jak wcześniej Luftschutz, doszło jednak jedno nowe zadanie o niezwykle złożonym charakterze - ochrona przed bronią masowego rażenia. Oczywiście istniejące schrony i ukrycia nie były przewidziane do zabezpieczenia ludności przed skutkami użycia broni atomowej, dlatego też należało wprowadzić zadania modernizacyjne o ogromnej skali. Jednocześnie w wielu odbudowywanych dzielnicach zaczęto budować nowe schrony pod budynkami.</p>

      <p>TOPL został w roku 1965 zastąpiony przez Powszechną Samoobronę, o nieco mniejszym zakresie działania, skupionej na alarmowaniu ludności, szkoleniu z zakresu obrony cywilnej, organizacji przygotowania inżynieryjno - technicznego, oraz jak sama nazwa wskazuje, przygotowaniu społeczeństwa do samoobrony i samopomocy w sytuacji kryzysu militarnego. Na skutek doskonalenia systemu Obrony Terytorium Kraju, oraz wzrastających potrzeb zapewnienia kompleksowej odpowiedzi na możliwości niszczące ówczesnych środków rażenia dnia 18 maja 1973 roku powołano do życia Obronę Cywilną, która funkcjonowała do początku lat 90', koniec zaś Zimnej Wojny spowodował praktyczny zmierzch funkcjonowania tej instytucji.</p>

      <p>Po drugiej wojnie światowej we Wrocławiu wciąż powstawały budowle ochronne. Na potrzeby urządzenia stanowisk dowodzenia TOPL oraz Wojsko Polskie zaadaptowały kilka obiektów pofortecznych, pozostałe zostały przekazane do wykorzystania w ochronie ludności. W odbudowywanych dzielnicach pojawiły się nowe schrony pod budynkami.</p>

      <p>Ogółem w całym okresie między rokiem 1951 a 1990 powstało we Wrocławiu blisko 300 schronów i ukryć nowego typu.</p>

      <p>Dziś obiekty te pozostają w znacznej mierze zapomniane i niewykorzystane.</p>
    </article>
  </Layout>
)

export default OC

export const pageQuery = graphql`
  query {
    OC1: file(relativePath: { eq: "wsf-luftschutz-oc1-600.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    OC2: file(relativePath: { eq: "wsf-luftschutz-oc2-600.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
   }
   OC3: file(relativePath: { eq: "wsf-luftschutz-oc3-600.jpg" }) {
    id
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
}
}
`;
