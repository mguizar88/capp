import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const AcuaticTours = ({
	toursBack,
	tours
}) => (
  <Layout>
    <div>
      <div
		  className="full-width-image margin-top-0"
		  style={{
		  	backgroundImage: `url(${
	          !!toursBack.childImageSharp ? toursBack.childImageSharp.fluid.src : toursBack
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
				<div className="column is-one-fifth is-hidden-mobile"
					style={{
						paddingTop: '5rem',
						paddingBottom: '5rem',
						backgroundColor: '#443575',
						borderRadius: '20px'
					}}
				>
					<h3 className="title has-text-white">Tours</h3>
					<Link className="filter-links has-text-white has-text-left" to="/tours">
            Tours culturales y temáticos (2)
          </Link>
          <Link className="filter-links has-text-white has-text-left" to="/tours">
            Actividades al aire libre (2)
          </Link>
          <Link className="filter-links has-text-white has-text-left" to="/tours">
            Apto para todo público (2)
          </Link>
          <h3 className="title has-text-white">Populares</h3>
					<Link className="filter-links has-text-white has-text-left" to="/tours">
            Tours culturales y temáticos (2)
          </Link>
          <Link className="filter-links has-text-white has-text-left" to="/tours">
            Excursiones de un día (2)
          </Link>
          <Link className="filter-links has-text-white has-text-left" to="/about">
            Actividades al aire libre (2)
          </Link>
     
				</div>
				<div className="column is-four-fifths">
					<div className="order-filter is-flex has-text-white"
						style={{
							backgroundColor: '#443575',
							padding: '1rem',
							borderRadius: '20px',
						}}
					>
						<p style={{marginRight: '10px'}}>Ordenar por:</p>
						<ul className="is-flex is-hidden-mobile">
							<li>
								<a className="has-text-white order-links">Predeterminado</a>
							</li>
							<li>
								<a className="has-text-white order-links">Precio más bajo</a>
							</li>
							<li>
								<a className="has-text-white order-links">A-Z</a>
							</li>
						</ul>
						<div className="control">
					        <div className="select">
					          <select className="is-hovered">
					            <option>Predeterminado</option>
					            <option>Precio más bajoWith options</option>
					            <option>A-Z</option>
					          </select>
					        </div>
					    </div>
					</div>
					<div className="tours-container">
						{tours &&
							tours.map(({ node: tour }) => (
								<div className="tour has-text-white" key={tour.id}>
								    <div className="relative tour-wrapper is-flex-tablet">
									<div className="tour-image" style={{
									    backgroundImage: `url(${
										!!tour.frontmatter.image.childImageSharp ?tour.frontmatter.image.childImageSharp.fluid.src : tour.frontmatter.image
									    })`
									}}>
									</div>
									<div className="tour-info">
									    <h3 className="title has-text-white is-size-4">
										{ tour.frontmatter.title }
									    </h3>
									    <p>
										{ tour.frontmatter.description }
									    </p>
									    <div className="indicators">
										<div>
										    <span>
											<i className="fas fa-clock"></i>
											<p>? horas</p>
										    </span>
										    <span className="stars">
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
										    </span>
										</div>
										<div className="price ">
										    <Link 
											to={tour.fields.slug} 
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
							))
						}
					</div>
				</div>
			</div>
		</div>
    </div>
  </Layout>
)

export default class AcuaticToursPage extends React.Component {
	render() {
		return(
			<AcuaticTours 
				toursBack={this.props.data.toursBack}
				tours={this.props.data.allMarkdownRemark.edges}
			/>
		)
	}
}

export const pageQuery = graphql`
  query {
    toursBack: file(relativePath: { eq: "tours-cover.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "tour-page"}, tourType: {eq: "acuatico"}}}) {
    	edges {
		node {
			id
			fields {
				slug
			}
			frontmatter{
				title
				description
				image {
					childImageSharp{
						fluid (maxWidth: 800, quality:100) {
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
