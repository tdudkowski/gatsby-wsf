import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <article>
      <h2>Blog</h2>
      <h3>Aktualizacja #3 (2020-07-04):</h3>
      <section>
        <h3>Zrobione</h3>
        <ul>
          <li>
            Cała istotna treść przeniesiona, projekt HTML+CSS, potem zbudowany w
            Gatsbym, archiwum na Githubie, hosting Netlify.
          </li>
          <li>Analityka: jest włączone Google Analytics.</li>
          <li>
            Formularz kontaktowy, jest i działa. Przez 2 tygodnie nie wrzucił
            ani jednego spamu. W darmowym planie ograniczenie do 100 wiadomości
            na miesiąc.
          </li>
          <li>
            Mapa Strony: zainstalowane są dwa pluginy, ale póki co efekt strony{" "}
            <Link to={404}>404</Link> mnie nie zadowala.
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
          <li>
            Wszystkie użyte usługi są darmowe, albo w zupełności, albo sa w
            darmowych planach mających limity daleko wykraczające poza potrzeby.
          </li>
          <li>
            <strong>Edytor WYSIWYG:</strong> zmorą rozwiązań systemów typu
            Gatsby jest opieranie się na Markdownie (format edycji znany z
            Wikipedii). Jedynym działającym rozwiązaniem, które daje WYSIWYG +
            możliwość umieszczania obrazków w dowolnym miejscu tekstu jest{" "}
            <a href="https://strapi.io">Strapi</a>, ale i tak z pewnymi
            zastrzeżeniami.
            <br />W tym momencie dodaję go do zrobionych, bo nie widzę żadnych
            lepszych opcji. Strapi jest najlepszy, działa, jest stabilny,
            rozwojowy i oprócz dziadowskiego edytora nie ma wad. Ale póki co mam
            go zainstalowanego tylko u siebie na komputerze, bo wymaga hostingu
            z Node.js, ja na swoim dotychczasowym (dawnej linuxpl.com teraz
            cyberfolks) nie mam. W lipcu przeniosę się na coś z Node.js.
          </li>
        </ul>

        <h3>Co jest jeszcze do zrobienia - po mojej stronie</h3>

        <p>Wciąz do zrobienia:</p>

        <ul>
          <li>
            Responsywność, generalnie jest ale trzeba dobracować. Pełna
            ewaluacja RWD będzie możliwa jak odzyskam smarfona. Ale póki co
            spełnia podstawowe wymagania.
          </li>
          <li>Design też do dopracowania, szczególnie prezentacja treści</li>
          <li>
            SEO. To po przełączeniu domeny, ale na ile dobrze rozumiem nie
            ścigamy się na lajki i oglądalność. Niemniej jednak dobrze żeby
            zapytanie o "fortyfikacje Wrocław" kierowało na WSF. Widzę, że Trasa
            Obiektów Militarnych Wrocławia i artykuł wiki "Twierdza Wrocław
            1890–1918" są na pierwszej stronie wyszukań. Jestem wikipedystą i
            mogę zrobić poprawny link do WSF, bo jest to a propos. Trzeba mieć
            tylko jakieś publikacje, artykuły w mediach.
          </li>
        </ul>
      </section>

      <section>
        <h3>Co jest jeszcze do zrobienia - po Twojej stronie</h3>
        <ul>
          <li>
            Proponuję jedną stronę z informacją i o Stowarzyszeniu i o obiekcie
            w języku niemieckim.
          </li>
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
