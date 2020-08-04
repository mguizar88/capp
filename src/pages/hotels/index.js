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
            <div className="tour-type-container">
              <div className="tour-type ">
                <img className="tour-type-rounded" src={pier} />
                <div className="overlay is-hidden-tablet" style={{backgroundColor: `#422e6a`}}>
                  <span className="icon is-large">
                    <i class="fas fa-3x fa-gopuram"></i>
                  </span>
                  <p>HOTEL PIER BACALAR – ALL INCLUSIVE</p>
                </div>
                <div className="content is-hidden-mobile">
                  <h3 className="title">HOTEL PIER BACALAR – ALL INCLUSIVE</h3>
                  <p className="description has-text-white has-text-justified">
                    Rodeado de naturaleza, estarás en un entorno de exclusividad lejos de todo lo cotidiano. Podrás disfrutar de la increíble laguna de Bacalar a unos cuantos pasos de tu habitación y por la noche gozarás del cielo estrellado como nunca antes lo habías visto. 
                  </p>
                  <span></span>
                  <a target="_blank" rel="noopener noreferrer" className="button has-text-white" href="https://bekehotels.com/hotel-pier-bacalar/">Ver Hotel</a>
                </div>
              </div>
              <div className="tour-type">
                <img className="tour-type-rounded" src={casaMaya} />
                <div className="overlay is-hidden-tablet" style={{backgroundColor: `#eab92a`}}>
                  <span className="icon is-large">
                    <i class="fas fa-3x fa-water"></i>
                  </span>
                  <p>HOTEL CASA MAYA HOLBOX</p>
                </div>
                <div className="content is-hidden-mobile">
                  <h3 className="title">HOTEL CASA MAYA HOLBOX</h3>
                  <p className="description has-text-white has-text-justified">
                    Hotel a la orilla del mar con una impresionante playa que te hará sentir en un entorno 100% caribeño. En la mañana podrás relajarte, disfrutar un rico cóctel y nadar en el mar cristalino. Mientras que por la noche recorrerás las peculiares calles de la isla y degustar la gastronomía local. 
                  </p>
                  <span></span>
                  <a target="_blank" rel="noopener noreferrer" className="button has-text-white" href="https://bekehotels.com/hotel-casa-maya-holbox/">Ver Hotel</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
