import React from 'react'
import Layout from '../../components/Layout'

import '../../components/index.sass'

import chichen from '../../static/img/chichen-itza.jpg'

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
        
        <div className="container">
          <p>
            CAPPTOUR , somos una tour operadora 100% mexicana especializada en la planeación, diseño y organización de tours y experiencias personalizadas, con el firme objetivo de asegurar a nuestros viajeros una experiencia única, placentera e inolvidable.
          </p>
          <p>
            Nuestro servicio, está enfocado en proporcionar calidad y confiabilidad, a través de la atención de nuestro personal debidamente capacitado, garantizando viajes únicos, logrando superar las expectativas de nuestros viajeros. 
          </p>
          <p>
            Brindando dentro de nuestros servicios, los mejores costos en hoteles, renta de autos, traslados; así como tours en todos los puntos de interés.
          </p>
        </div>
        
      </Layout>
    )
  }
}
