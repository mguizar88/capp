import React from 'react'
import Layout from '../../components/Layout'

import '../../components/index.sass'

import pier from '../../../static/img/pier.jpg'
import casaMaya from '../../../static/img/casa-maya.jpg'
import hoteles from '../../../static/img/hoteles.jpg'

export default class HotelIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${hoteles})`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f1df0d, -0.5rem 0 0 #f1df0d',
              backgroundColor: '#422e6a',
              color: 'white',
              padding: '1rem',
            }}
          >
            Hoteles
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="animatable">
              <div className="card-columns tour-type-container">
                <a target="_blank" rel="noopener noreferrer" href="https://bekehotels.com/hotel-pier-bacalar/">
                  <div className="card no-border" 
                  style={{
                    height: '700px',
                    backgroundImage: `url(${pier})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  >
                    <div className="discount-overlay">
                      <h4 className="title has-text-white has-text-centered">HOTEL PIER BACALAR – ALL INCLUSIVE</h4>
                      <p className="has-text-white has-text-centered">
                        Rodeado de naturaleza, estarás en un entorno de exclusividad lejos de todo lo cotidiano. Podrás disfrutar de la increíble laguna de Bacalar a unos cuantos pasos de tu habitación y por la noche gozarás del cielo estrellado como nunca antes lo habías visto. 
                      </p>
                    </div>
                  </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://bekehotels.com/hotel-casa-maya-holbox/">
                  <div className="card no-border" 
                    style={{
                      height: '800px',
                      backgroundImage: `url(${casaMaya})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="discount-overlay">
                      <h4 className="title has-text-white has-text-centered">HOTEL CASA MAYA HOLBOX</h4>
                      <p className="has-text-white has-text-centered">
                        Hotel a la orilla del mar con una impresionante playa que te hará sentir en un entorno 100% caribeño. En la mañana podrás relajarte, disfrutar un rico cóctel y nadar en el mar cristalino. Mientras que por la noche recorrerás las peculiares calles de la isla y degustar la gastronomía local.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
