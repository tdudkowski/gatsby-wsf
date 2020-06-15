import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <article>
      <h2>Blog</h2>
      <section>
        <p>
          <strong>Aktualizacja - zrobione:</strong>
        </p>
        <ul>
          <li>
            Obrazki: niespodziewany problem z obrazkami sam się rozwiązał po
            wrzuceniu na Netlify, istnieje tylko na Githubie, który nie miał być
            miejscem hostowania. W docelowym miejscu czyli tu, obrazki podane
            zgodnie z instrukcją są wyświetlane zgodnie z instrukcją. Co nie
            unieważnia uwagi, że można je lepiej ostylować -{" "}
            <Link to="fort6">Fort 6</Link>. Ale to jest generalna uwaga co do
            designu, więc ostatecznie ją kasuję. Serwowanie strony przez Githuba
            wyłączam skoro jest niepotrzebne.
          </li>
          <li>Analityka: jest włączone Google Analytics.</li>
          <li>Formularz kontaktowy, jest i działa.</li>
          <li>
            Mapa Strony: zainstalowane są dwa pluginy, zobaczymy, który będzie
            lepiej się nadawał.
          </li>
          <li>
            Zapewnienie utrzymania strony w razie wu: archiwum jest na githubie
            (adres:{" "}
            <a href="https://github.com/tdudkowski/gatsby-wsf">
              github.com/tdudkowski/gatsby-wsf
            </a>
            ), Gatsby nie jest tak popularny jak WordPress, ale znalezienie
            kogoś, kto się na tym zna nie jest takie trudne. Sklonować (z
            mastera, nie gh-pages) i modyfikować stronę to żaden problem. Potem
            tylko trzeba ją zahostować i skierować tam domenę.
          </li>
        </ul>

        <h3>Co jest jeszcze do zrobienia - po mojej stronie</h3>

        <p>Poprzednie wciąż do zrobienia w tym tygodniu:</p>

        <ul>
          <li>
            <strong>Najważniejsze: </strong>
            Jakiś interfejs dla edytora do wprowadzania treści, konkretnie to
            dwóch rodzajów treści: newsów (coś jak blog, ale można użyć jakiejś
            branżowej nazwy) i artykułów. Najlepiej WYSIWYG. Problem polega na
            tym, że można zrobić to na kilka sposobów i trzeba je przetestować.
          </li>
          <li>
            Responsywność, są rozdzielczości na których układ wygląda dość
            dziwnie. Z braku działającego telefonu na jakiś czas nie mam jak
            testować działania na urządzeniach przenośnych inaczej jak symulacją
            w przeglądarce.
          </li>
          <li>
            Dopracowanie wyglądu, sam nie jestem jakimś designerem, ale mogę
            zrobić dobrą rzecz, tyle, że wymaga to czasu, napatrzenia się i nie
            przychodzi w ciągu paru dni. Dotyczy to równiez tego jak osadzać
            obrazki.
          </li>
          <li>
            SEO. Zajmę się tym po przełączeniu domeny, ale na ile dobrze
            rozumiem nie ścigamy się na lajki i oglądalność. Niemniej jednak
            dobrze żeby zapytanie o "fortyfikacje Wrocław" kierowało na WSF.
            Widzę, że Trasa Obiektów Militarnych Wrocławia i artykuł wiki
            "Twierdza Wrocław 1890–1918" są na pierwszej stronie wyszukań.
            Jestem wikipedystą i mogę zrobić poprawny link do WSF, bo jest to a
            propos.
          </li>
        </ul>
        <p></p>
      </section>

      <section>
        <h3>Co jest jeszcze do zrobienia - po Twojej stronie</h3>
        <ul>
          <li>
            Mail Stowarzyszenia: oficjalny, w domenie. Może być gmail. I prawdę
            mówiąc najlepiej jeżeli będzie to gmail właśnie ze względu na
            analitykę.
          </li>
          <li>
            Rozkład treści: wstępnie to uporządkowałem, ale na pewno można to
            zrobic lepiej. To wyjdzie z czasem.
          </li>
          <li>
            Archiwum wydarzeń - dobrze by było i te wpisy sprzed lat jakoś
            umieścić, bo dokumentowanie dziełań dobrze wygląda. Rzecz w tym, że
            nie powinno być dziur mających więcej niż rok. Jak by sie udało
            odtworzyć późniejsze wyjazdy i wydarzenia, typu uczestnictwo w Nocy
            Muzeów... Moim zdaniem warto to zrobić.
          </li>
          <li>
            Użyłem mapy Polanowic, zdjęcia fortu i feldgrau. Nie wiem jak bardzo
            a propos jest feldgrau bo on szerzej wszedł jakoś przed WWI, Tak
            samo z tym niemieckim fontem w menu. Po pierwsze tylko nawiązuje, po
            drugie jak to z takimi bardzo narodowymi fontami bywa nie ma dobrej
            internacjonalizacji, polskie znaki tworzone są jakąś tam
            interpolacją i np. ł wygląda prawie dobrze, ale żżć używać w menu
            nie można. Przydałyby się na tła zdjęcia dokumentów, pieczątek,
            jakieś elementy graficzne związane z Landsturmem. No i kolory, które
            są rzeczywiście trafione. Czyli wzory i stylistyka z epoki.
          </li>
          <li>
            Last but not least - generalna aktualizacja treści. Np bibliografia.
            I tak jak mówiłem: monografia Twierdzy, mapa (papierowa) i szlak
            obiektów militarnych to są rzeczy na osobne pozycje w menu.
          </li>
        </ul>
        <p>Z tych rzeczy żadna nie jest pilna, to tylko moje propozycje.</p>
      </section>
    </article>
  </Layout>
)

export default Blog
