import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Circuits = ({
	circuitsBackground,
	{ edges: circuits } = circuits,
}) => (
  <Layout>
    <div>
      <div
		  className="full-width-image margin-top-0"
		  style={{
		  	backgroundImage: `url(${
	          !!circuitsBackground.childImageSharp ? circuitsBackground.childImageSharp.fluid.src : circuitsBackground
	        })`,
		    backgroundPosition: `center`,
		    backgroundSize: 'cover',
		    height: '400px'
		  }}
		>
		  <div style={{backgroundColor: 'rgba(68, 53, 117, 0.9)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
			      <input className="button is-large" style={{backgroundColor: '#eab92a', color: '#fff'}} type="submit" value="Buscar" />
			    </form>
			  </div>
		  </div>
	  </div>
		<div className="container"
			style={{
				paddingTop: '50px',
				paddingBottom: '50px',
				backgroundColor: '#f1f1f1',
				boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'
			}}
		>
			<div className="columns">
				<div className="column">
					<div className="tours-container">
            {circuits &&
              circuits.map(({ node: circuit }) => (
                <div className="tour has-text-white" key={circuit.id}>
                  <div className="relative tour-wrapper is-flex-tablet">
                    <div className="tour-image"
                      style={{
                        backgroundImage: `url(${
                              !!circuit.frontmatter.image.childImageSharp ?circuit.frontmatter.image.childImageSharp.fluid.src : circuit.frontmatter.image
                            })`
                      }}
                    >
                    </div>
                    <div className="tour-info">
                      <h3 className="title has-text-white is-size-4">
                        circuit.frontmatter.title
                      </h3>
                      <p>
                        circuit.frontmatter.description
                      </p>
                      <div className="indicators">
                        <div>
                          <span>
                                      <i className="fas fa-clock"></i>
                                      <p>? horas</p>
                                    </span>
                                    <span>
                                      <i className="fas fa-utensils"></i>
                                    </span>
                                    <span>
                                      <i className="fas fa-shuttle-van"></i>
                                    </span>
                                    <span className="stars">
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </span>
                                  </div>
                                  <div className="price ">
                                    <p className="is-size-3 has-text-right">
                                      <span>desde</span>
                                      $
                                    </p>
                          <Link 
                            to={circuit.fields.slug}
                            className="button is-rounded"
                            style={{
                              backgroundColor: 'rgb(234, 185, 42)'
                            }}
                          >
                              Detalles
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
					</div>
          
					<nav className="pagination is-centered" role="navigation" aria-label="pagination">
					  <a href="#" className="pagination-previous">Previous</a>
					  <a href="#" className="pagination-next">Next page</a>
					  <ul className="pagination-list">
					    <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
					    <li><span className="pagination-ellipsis">&hellip;</span></li>
					    <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
					    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
					    <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
					    <li><span className="pagination-ellipsis">&hellip;</span></li>
					    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
					  </ul>
					</nav>
				</div>
			</div>
		</div>
    </div>
  </Layout>
)

export default class CircuitsPage extends React.Component {
	render() {
		return(
			<Circuits
				circuitsBackground={this.props.data.circuitsBackground}
				circuits={this.props.data.allMarkdownRemark}
			/>
		)
	}
}

export const pageQuery = graphql`
  query {
    circuitsBackground: file(relativePath: { eq: "bacalar.webp" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "circuit-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
