import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactForm = () => (
  <Layout>
    <SEO title="Formularz kontaktowy" />
    <article>
      <h2>Formularz kontaktowy</h2>
      <section className="form">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <span>Nadawca (opcjonalnie)</span>
            <input type="text" name="name" id="name" />
          </label>
          <label>
            <span>E-mail (opcjonalnie)</span>
            <input type="email" name="_replyto" id="_replyto" />
          </label>
          <label>
            <span>Wiadomość (wymagane)</span>
            <textarea name="message" id="message" rows="5" required />
          </label>
          <div>
            <button type="submit" className="btn">
              Wyślij
            </button>
            <input type="reset" value="Wyczyść formularz" className="btn" />
          </div>
        </form>
      </section>
    </article>
  </Layout>
)

export default ContactForm
