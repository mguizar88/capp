import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/capptour.webp'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer style={{backgroundColor: '#eab92a'}} className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Capptour"
            style={{ width: '14em' }}
          />
        </div>
        <div className="has-text-centereds has-text-white-ter">
          <div className="container is-fluid has-text-white-ter">
            <div className="columns" style={{borderBottom: 'solid 5px #443575', paddingBottom: '2rem', marginBottom: '5rem'}}>
              <div className="column is-full-mobile">
                <div className="columns">
                  <div className="column is-half">
                    <p>¿Quieres recibir ofertas exclusivas de los tours? !Suscribete a nuestro boletín de noticias!</p>
                  </div>
                  <div className="column is-half">
                    <form style={{display: 'flex'}}>
                      <div className="field" style={{width: '100%'}}>
                        <div className="control">
                          <input className="input" type="text" placeholder="Dirección de email"/>
                        </div>
                      </div>
                      <input className="button has-text-white" style={{backgroundColor: '#473278', marginLeft: '-5px', border: 'none', width: '200px'}} type="submit" value="Suscribirse" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                <section className="menu has-text-centered-mobile">
                  <h3 className="title has-text-white">Contáctanos</h3>
                  <ul className="menu-list has-text-centered-mobile">
                    <li>
                      <Link to="/" className="navbar-item has-text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item has-text-white"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section className="has-text-centered-mobile">
                  <h3 className="title has-text-white">Enlaces rápidos</h3>
                  <ul className="menu-list has-text-centered-mobile">
                    <li>
                      <Link className="navbar-item has-text-white" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item has-text-white" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social has-text-centered-mobile">
                <h3 className="title has-text-white">Siguenos</h3>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
