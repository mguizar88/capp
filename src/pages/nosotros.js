import React from 'react'
import Layout from '../components/Layout'

import '../components/index.sass'

import chichen from '../../static/img/chichen-itza.jpg'
import travel from '../../static/img/travel-plans.svg'
import prices from '../../static/img/prices.svg'
import tour from '../../static/img/tour.svg'

export default class Nosotros extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${chichen})`,
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
            Nosotros
          </h1>
        </div>
        
        <div style={{maxWidth: '768px',}} className="container">
          <div className="columns is-vcentered">
            <div className="column is-half-desktop is-12-mobile">
              <p className="is-size-4-desktop">
                CAPPTOUR , somos una tour operadora 100% mexicana especializada en la planeación, diseño y organización de tours y experiencias personalizadas, con el firme objetivo de asegurar a nuestros viajeros una experiencia única, placentera e inolvidable.
              </p>
            </div>
            <div className="column is-half-desktop is-12-mobile">
              <img src={travel} alt="travel plans" />
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half-desktop is-12-mobile">
              <p className="is-size-4-desktop">
                Nuestro servicio, está enfocado en proporcionar calidad y confiabilidad, a través de la atención de nuestro personal debidamente capacitado, garantizando viajes únicos, logrando superar las expectativas de nuestros viajeros. 
              </p>
            </div>
            <div className="column is-half-desktop is-12-mobile">
              <img src={tour} alt="travel plans" />
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half-desktop is-12-mobile">
              <p className="is-size-4-desktop">
                Brindando dentro de nuestros servicios, los mejores costos en hoteles, renta de autos, traslados; así como tours en todos los puntos de interés.
              </p>
            </div>
            <div className="column is-half-desktop is-12-mobile">
              <img src={prices} alt="travel plans" />
            </div>
          </div>
        </div>
        
      </Layout>
    )
  }
}
