import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

import background from '../../../static/img/beach.jpg'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f1df0d, -0.5rem 0 0 #f1df0d',
              backgroundColor: '#422e6a',
              color: 'white',
              padding: '1rem',
              borderRadius: '0.5em',
            }}
          >
            Contacto
          </h1>
        </div>
        <section className="section">
          <div className="container has-text-centered">
            <p className="is-size-4-desktop mb-5 has-text-justified">
              En CAPPTOUR, nos especializamos en una atención personalizada. Contáctanos por alguno de nuestros medios: Whatsapp, llamada, correo, Facebook, y un experto estará listo para ayudarte a vivir una experiencia inolvidable.
            </p>
            <p className="is-size-4-desktop">
              Horarios:
            </p>
            <p className="is-size-4-desktop mb-5">
              Lunes a Viernes: 9:00 – 21:00 <br/>
              Sábado y Domingo : 10:00 – 18:00
            </p>
            <a className="is-size-4-desktop mb-5" href="mailto: contacto@capptour.com">
              Correo : contacto@capptour.com
            </a>
            <p className="is-size-4-desktop">
              Dirección
            </p>
            <p className="is-size-4-desktop mb-5">
              Cancún, Quintana Roo – centro CP 77508
            </p>
            <p className="mb-5">
              **No tenemos oficinas abiertas al público en general. Selecciona la forma de contacto de tu preferencia para contactarnos. 
            </p>
          </div>
          <div className="container">
            <div className="content">
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Nombre
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'tel'}>
                    Teléfono
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'tel'}
                      onChange={this.handleChange}
                      id={'tel'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Mensaje
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <span class="select">
                      <select>
                        <option selected>Tipo de interés</option>
                        <option>Tours</option>
                        <option>Circuito</option>
                        <option>Transportación</option>
                        <option>Paquete vacacional</option>
                      </select>
                    </span>
                    <span class="icon is-small is-left">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
