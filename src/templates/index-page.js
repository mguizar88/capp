import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import '../components/index.sass'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  divider,
  mostVisitedBack,
  tour,
  secondTour,
  thirdTour,
  tourTypes,
  culturales,
  acuaticos,
  vacacionales,
  cancun,
  snorkel,
  animatable,
  snorkel,
  vest,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <form className="searcher" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
          <input className="input is-large" type="text" placeholder="¿A dónde viajas?" />
          <div className="control">
            <div className="select is-large">
              <select className="is-hovered">
                <option>Tipo de tour</option>
                <option>With options</option>
              </select>
            </div>
          </div>
          <input className="input is-large" type="date" placeholder="Fecha" />
          <input style={{backgroundColor: '#eab92a', color: '#fff'}} className="button is-large" type="submit" value="Buscar" />
        </form>
      </div>
    </div>
    <section
      style={{
        backgroundImage: `url(${
          !!mostVisitedBack.childImageSharp ? mostVisitedBack.childImageSharp.fluid.src : mostVisitedBack
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
        padding: `3rem 0`,
      }}
    >
      <Img className="divider-top" fluid={divider.childImageSharp.fluid} />
      <div className="container">
        <h2 className="title t-yellow is-size-1-desktop has-text-centered space-1">
          <span><i className="fas fa-map-marker-alt"></i></span>Los Más Visitados
        </h2>
        <div className="most-visited-tours" style={{marginTop: '40px', marginBottom: '50px'}}>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item tour-card active"
                style={{
                  backgroundImage: `url(${
                    !!tour.childImageSharp ? tour.childImageSharp.fluid.src : tour
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-caption tour-caption d-none d-md-block">
                  <h3 className="title is-2 is-size-4-mobile t-yellow">Tour Laguna de 7 colores de Bacalar</h3>
                  <div className="indicators">
                    <span>
                      <i className="fas fa-clock"></i>
                      <p>6 horas</p>
                    </span>
                    <span>
                      <i className="fas fa-utensils"></i>
                    </span>
                    <span>
                      <i className="fas fa-shuttle-van"></i>
                    </span>
                    <span>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <p className="is-hidden-mobile">
                    Comienza con una visita al Canal de los Piratas, un lugar perfecto en aguas cristalinas.
                    A continuación, nos trasladamos al "Cenote Negro"; el punto más profundo de la laguna. 
                    Nuestra próxima visita es al "Cenote Esmeralda", donde estará en una excelente posición para apreciar los diferentes tonos de azul de la laguna. 
                    Luego nos trasladamos al "Cenote Cocalitos", hogar de estromatolitos, que son estructuras en forma de roca que producen oxígeno. 
                    Y nuestra última parada será "Bird Island", donde podrá disfrutar de la paz y la tranquilidad de la laguna y dependiendo de la temporada, 
                    es posible que también vea múltiples especies de aves.
                  </p>
                  <button className="button">Ver Más</button>
                </div>     
              </div>
              <div className="carousel-item tour-card"
                style={{
                  backgroundImage: `url(${
                    !!secondTour.childImageSharp ? secondTour.childImageSharp.fluid.src : secondTour
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-caption tour-caption d-none d-md-block">
                  <h3 className="title is-2 is-size-4-mobile t-yellow">Tour 3 islas Holbox</h3>
                  <div className="indicators">
                    <span>
                      <i className="fas fa-clock"></i>
                      <p>6 horas</p>
                    </span>
                    <span>
                      <i className="fas fa-utensils"></i>
                    </span>
                    <span>
                      <i className="icons"><img src={snorkel.childImageSharp.fluid.src} alt="snorkel"/></i>
                    </span>
                    <span>
                      <i className="icons"><img src={vest.childImageSharp.fluid.src} alt="vest" /></i>
                    </span>
                    <span>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <p className="is-hidden-mobile">
                    Recorre en lancha los 3 de los lugares más populares de Holbox: <br/>
                    • Yalahau; un ojo de agua dulce.<br/>
                    • Isla pájaros; un santuario de aves en anidación.<br/>
                    • Isla pasión; un lugar con aguas azul multicolor y bancos de arena en donde usualmente llegan a alimentarse los flamingos.
                  </p>
                  <button className="button">Ver Más</button>
                </div>
              </div>
              <div className="carousel-item tour-card"
                style={{
                  backgroundImage: `url(${
                    !!thirdTour.childImageSharp ? thirdTour.childImageSharp.fluid.src : thirdTour
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-caption tour-caption d-none d-md-block is-rounded">
                  <h3 className="title is-2 is-size-4-mobile t-yellow">Experiencia Tiburón ballena</h3>
                  <div className="indicators">
                    <span>
                      <i className="fas fa-clock"></i>
                      <p>6 horas</p>
                    </span>
                    <span>
                      <i className="fas fa-utensils"></i>
                    </span>
                    <span>
                      <i className="icons"><img src={snorkel.childImageSharp.fluid.src} alt="snorkel"/></i>
                    </span>
                    <span>
                      <i className="icons"><img src={vest.childImageSharp.fluid.src} alt="vest" /></i>
                    </span>
                    <span>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <p className="is-hidden-mobile">
                    De junio a septiembre, te ofrecemos una experiencia en donde podrás nadar y hacer snorkel con el tiburón ballena en su hábitat natural. 
                    En este tour llegamos, a Cabo Catoche para ver al tiburón ballena y nadar junto a él. 
                    Posteriormente, hacemos una parada en los cuevones frente a Cabo Catoche para snorkelear y disfrutar de la vida marina; 
                    para finalizar en los manglares de Santa Paula, donde disfrutaremos de un ceviche.
                  </p>
                  <button className="button">Ver Más</button>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <Img className="divider-bottom" fluid={divider.childImageSharp.fluid} />
    </section>

    <div className="container" style={{backgroundColor: '#f1f1f1', boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'}}>
    
      <section>

        <div className="tour-type-section">
          <h2 className="title t-yellow is-size-1-desktop has-text-centered space-1" style={{marginBottom: '50px'}}>
           <span><i className="fas fa-route"></i></span>Nuestros Tours
          </h2>
          <div className="tour-type-container">
            <div className="tour-type ">
              <Img className="tour-type-rounded" fluid={culturales.childImageSharp.fluid} />
              <div className="overlay is-hidden-tablet" style={{backgroundColor: `#422e6a`}}>
                <span className="icon is-large">
                  <i class="fas fa-3x fa-gopuram"></i>
                </span>
                <p>Tours Culturales</p>
              </div>
              <div className="content is-hidden-mobile">
                <h3 className="title">Tours Culturales</h3>
                <p className="description has-text-white has-text-justified">
                  México, es uno de los países con mayor riqueza cultural, geográfica e histórica. 
                  En nuestros tours culturales, comprenderás y disfrutarás el conjunto de rasgos y elementos distintivos, espirituales, materiales 
                  y afectivos que caracterizan a un destino específico.
                </p>
                <span></span>
                <Link className="button has-text-white" to="tours">Ver Tours</Link>
              </div>
            </div>
            <div className="tour-type">
              <Img className="tour-type-rounded" fluid={acuaticos.childImageSharp.fluid} />
              <div className="overlay is-hidden-tablet" style={{backgroundColor: `#eab92a`}}>
                <span className="icon is-large">
                  <i class="fas fa-3x fa-water"></i>
                </span>
                <p>Tours Acuáticos</p>
              </div>
              <div className="content is-hidden-mobile">
                <h3 className="title">Tours Acuaticos</h3>
                <p className="description has-text-white has-text-justified">
                  El Caribe Mexicano, es famoso por sus maravillosas playas y aguas azul turquesa, haciendo de este un destino ideal
                  para los amantes de la práctica de actividades acuáticas como: buceo, snorkel, pesca, nado con delfines, paseos con en barco, entre otros. 
                </p>
                <span></span>
                <Link className="button has-text-white" to="tours">Ver Tours</Link>
              </div>
            </div>
            <div className="tour-type">
              <Img className="tour-type-rounded" fluid={vacacionales.childImageSharp.fluid} />
              <div className="overlay is-hidden-tablet" style={{backgroundColor: `#4d1dad`}}>
                <span className="icon is-large">
                  <i class="fas fa-3x fa-map-marked-alt"></i>
                </span>
                <p>Tours de Aventura</p>
              </div>
              <div className="content is-hidden-mobile">
                <h3 className="title">Tours de Aventura</h3>
                <p className="description has-text-white has-text-justified">
                  México, es un territorio rico en condiciones biológicas, climatológicas y geográficas que permiten al turista encontrar
                  una amplia gama de posibilidades de recreación en entornos naturales. Aventúrate y desafía tus habilidades, 
                  con experiencias de liberación física y esparcimiento en la naturaleza. 
                </p>
                <span></span>
                <Link className="button has-text-white" to="tours">Ver Tours</Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>

    <section>
      <h2 className="title t-yellow has-text-centered is-size-1-mobile" style={{fontSize: '5rem', margin: '8rem 0'}}><span><i className="fas fa-percent"></i></span>Ofertas</h2>
      <div className="animatable"
          style={{
            backgroundImage: `url(${
              !!animatable.childImageSharp ? animatable.childImageSharp.fluid.src : animatable
            })`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'repeat-x',
          }} 
      >
        <div className="discount-card-container" style={{padding: '50px 0', backgroundColor: 'rgba(71, 50, 120, .9)'}}> 
          <div className="card-columns tour-type-container">
            <Link to="/tours">
              <div className="card no-border" 
              style={{
                height: '150px',
                backgroundImage: `url(${
                    !!snorkel.childImageSharp ? snorkel.childImageSharp.fluid.src : snorkel
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }}
              >
                <div className="discount-overlay">
                  <h4 className="title has-text-white has-text-centered">Tour Laguna de 7 colores de Bacalar</h4>
                  <p className="discount-number has-text-centered has-text-white">30%</p>
                  <p className="has-text-white has-text-centered">de descuento</p>
                </div>
              </div>
            </Link>
            <Link to="/tours">
              <div className="card no-border" 
                style={{
                  height: '150px',
                  backgroundImage: `url(${
                    !!acuaticos.childImageSharp ? acuaticos.childImageSharp.fluid.src : acuaticos
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="discount-overlay">
                  <h4 className="title has-text-white has-text-centered">Tour 3 islas Holbox</h4>
                  <p className="discount-number has-text-centered has-text-white">30%</p>
                  <p className="has-text-white has-text-centered">de descuento</p>
                </div>
              </div>
            </Link>
            <Link to="/tours">
              <div className="card no-border" 
                style={{
                  height: '150px',
                  backgroundImage: `url(${
                    !!vacacionales.childImageSharp ? vacacionales.childImageSharp.fluid.src : vacacionales
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="discount-overlay">
                  <h4 className="title has-text-white has-text-centered">Experiencia Tiburón ballena</h4>
                  <p className="discount-number has-text-centered has-text-white">30%</p>
                  <p className="has-text-white has-text-centered">de descuento</p>
                </div>
              </div>
            </Link>  
          </div>
        </div>
      </div>  
    </section>

    <section style={{padding: '5rem 0',}}>
      <div className="container">
        <h2 style={{marginBottom: '5rem'}} className="title t-yellow is-size-1-desktop has-text-centered">Contáctanos</h2>
        <div className="columns">
          <div className="column is-half-desktop is-12-mobile">
            <form>
              <div className="field">
                <div className="control has-icons-left">
                  <input className="input is-large" type="text" placeholder="Nombre" />
                  <span className="icon is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">  
                <div className="control has-icons-left">
                  <input className="input is-large" type="text" placeholder="E-mail" />
                  <span className="icon is-left">
                    <i className="fas fa-at"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control has-icons-left">
                  <input className="input is-large" type="text" placeholder="Teléfono" />
                  <span className="icon is-left">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                </div>
              </div>
              <div className="field">  
                <div className="control">
                  <textarea className="textarea has-fixed-size is-large" placeholder="Mensaje"></textarea>
                </div>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <span class="select">
                    <select>
                      <option selected>Tours</option>
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
            </form>
          </div>
          <div className="column is-half-desktop is-12-mobile">
            <div 
              style={{
                backgroundImage: `url(${
                  !!vacacionales.childImageSharp ? vacacionales.childImageSharp.fluid.src : vacacionales
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div style={{animationDuration: '1.5s'}} className="contact-info-container">
                <a className="has-text-white" href="mailto:contacto@capptour.com" target="_blank" rel="noopener noreferrer">contacto@capptour.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const divider = data.divider
  const mvBackground = data.mvBackground
  const tour = data.tour
  const secondTour = data.secondTour
  const thirdTour = data.third
  const culturales = data.culturales
  const acuaticos = data.acuaticos
  const vacacionales = data.vacacionales
  const cancun = data.cancun
  const snorkel = data.snorkel
  const animatable = data.animatable
  const snorkel = data.snorkel
  const vest = data.vest

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        divider={divider}
        mostVisitedBack={mvBackground}
        tour={tour}
        secondTour={secondTour}
        thirdTour={thirdTour}
        cancun={cancun}
        acuaticos={acuaticos}
        culturales={culturales}
        vacacionales={vacacionales}
        snorkel={snorkel}
        animatable={animatable}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    animatable: file(relativePath: { eq: "background-animatable.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cancun: file(relativePath: { eq: "cancun.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    acuaticos: file(relativePath: { eq: "arrecife.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vacacionales: file(relativePath: { eq: "aventura.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    culturales: file(relativePath: { eq: "culturales.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    snorkel: file(relativePath: { eq: "snorkel.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tour: file(relativePath: { eq: "bacalar-laguna.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondTour: file(relativePath: { eq: "holbox-cenote.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    third: file(relativePath: { eq: "tiburonballena.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mvBackground: file(relativePath: { eq: "most-visited-back.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    divider: file(relativePath: { eq: "separador.png" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    snorkel: file(relativePath: { eq: "dive.svg" }){
      childImageSharp {
        fluid(maxWidth: 20) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vest: file(relativePath: { eq: "chaleco-salvavidas.svg" }){
      childImageSharp {
        fluid(maxWidth: 20) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
