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
        <h3>Co jest jeszcze do zrobienia - po mojej stronie</h3>
        <ul>
          <li>
            Responsywność, są rozdzielczości na których układ wygląda dość
            dziwnie. Parę tygodni temu telefon wpadł mi w błoto i po długiej
            sekwencji wydarzeń doprowadziło to do popsutego gniazda zasilania,
            więc na jakiś czas nie mam jak testować działaniana urządzeniach
            przenośnych inaczej jak symulacją w przeglądarce.
          </li>
          <li>
            Dopracowanie wyglądu, sam nie jestem jakimś designerem, ale mogę
            zrobić dobrą rzecz, tyle, że wymaga to czasu, napatrzenia się i nie
            przychodzi w ciągu paru dni.
          </li>
          <li>SEO i analityka. Tu proponuję analytics.google.</li>
          <li>
            Formularz kontaktowy. Przydaje się, raz na ruski rok, ale serio,
            bardzo się przydaje i zawsze robi dobre wrażenie jak jest.
          </li>
          <li>
            <strong>Najważniejsze: </strong>
            Jakiś interfejs dla edytora do wprowadzania treści, konkretnie to
            dwóch rodzajów treści: newsów (coś jak blog, ale można użyć jakiejś
            branżowej nazwy) i artykułów. Najlepiej WYSIWYG.
          </li>
          <li>
            Zapewnienie utrzymania strony w razie wu: archiwum jest na githubie,
            Gatsby nie jest jeszcze tak popularny jak WordPress, ale znalezienie
            kogoś, kto się na tym zna nie jest takie trudne. Sklonować i
            modyfikować stronę to żaden problem. Potem tylko trzeba ją
            zahostować i skierować tam domenę.
          </li>
          <li>
            Mapa Strony: tak naprawde przyda się jak już będą artykuły, ale już
            teraz można o tym pomyśleć.
          </li>
          <li>
            To jak mogą wyglądać umieszczone w treści zdjęcia jest w podstronie
            - <Link to="fort6">Fort 6</Link>, ale nie jestem jakoś specjalnie z
            tego zadowolony. Rzecz jest do dalszego przemyślenia. Umiesiłem je
            też dlatego, żeby sprawdzić ewentualne opóźnienie ładowania strony.
            Ale z tego co widać Gatsby sobie z tym radzi bardzo dobrze.
          </li>
        </ul>
        <p>
          Na tę chwilę to zostawiam w takim stanie jak jest. Od najbliższej
          niedzieli zajmę się powyższymi brakami. Nie powinno mi to zająć więcej
          jak 2 tygodnie.
        </p>
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
