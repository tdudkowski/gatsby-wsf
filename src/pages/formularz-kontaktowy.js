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
          <input type="hidden" name="bot-field" aria-label="hidden field" />
          <input
            type="hidden"
            name="form-name"
            value="contact"
            aria-label="hidden field"
          />
          <label>
            <span>Nadawca (opcjonalnie)</span>
            <input type="text" name="name" id="name" aria-label="sender name" />
          </label>
          <label>
            <span>E-mail (opcjonalnie)</span>
            <input
              type="email"
              name="_replyto"
              id="_replyto"
              aria-label="email"
            />
          </label>
          <label>
            <span>Wiadomość (wymagane)</span>
            <textarea
              name="message"
              id="message"
              rows="5"
              aria-label="text here"
              required
            />
          </label>
          <div>
            <button type="submit" className="btn">
              Wyślij
            </button>
            <input
              type="reset"
              value="Wyczyść formularz"
              className="btn"
              aria-label="clear button"
            />
          </div>
        </form>
      </section>
    </article>
  </Layout>
)

export default ContactForm
