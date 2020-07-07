import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Tours = ({
	toursBack,
	tulumImage
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
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  Tours culturales y temáticos (8)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Excursiones de un día (6)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Actividades al aire libre (9)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Tour y lugares de interés (5)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Deportes acuáticos (3)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Apto para todo público (5)
	                </Link>
	                <h3 className="title has-text-white">Precios</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  $ 0 - $500
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $500 - $900
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $950 - $2000
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $2000 - $5000
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $5000 - $10,000
	                </Link>
	                <h3 className="title has-text-white">Populares</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  Tours culturales y temáticos (8)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Excursiones de un día (6)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Actividades al aire libre (9)
	                </Link>
	                <h3 className="title has-text-white">Especiales</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  Oferta especial (0) 
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  De 4 horas a 1 día (15)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Más de 3 días (5)
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
						<div className="tour has-text-white">
							<div className="relative tour-wrapper is-flex-tablet">
								<div className="tour-image"
									style={{
										backgroundImage: `url(${
								          !!tulumImage.childImageSharp ? tulumImage.childImageSharp.fluid.src : tulumImage
								        })`
									}}
								>
								</div>
								<div className="tour-info">
									<h3 className="title has-text-white is-size-4">
										Experiencia Isla Mujeres
									</h3>
									<p>
										Salida de Cancún en diferentes horarios la capacidad máxima es de 15 personas. El tour tiene una duración de 6 horas, se rodea la Isla, se hace una breve visita por fuera del parque Garrafón para estar en contacto con las especies que habitan esta área. Posteriormente se visita la playa punta norte, catalogada como una de las mejores playas en el mundo.	
									</p>
									<div className="indicators">
										<div>
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
					                    		$120
					                    	</p>
											<Link 
												to="/tours/experiencia-isla-mujeres/"
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
						<div className="tour has-text-white">
							<div className="relative tour-wrapper is-flex-tablet">
								<div className="tour-image"
									style={{
										backgroundImage: `url(${
								          !!tulumImage.childImageSharp ? tulumImage.childImageSharp.fluid.src : tulumImage
								        })`
									}}
								>
								</div>
								<div className="tour-info">
									<h3 className="title has-text-white is-size-4">
										Experiencia Isla Mujeres
									</h3>
									<p>
										Salida de Cancún en diferentes horarios la capacidad máxima es de 15 personas. El tour tiene una duración de 6 horas, se rodea la Isla, se hace una breve visita por fuera del parque Garrafón para estar en contacto con las especies que habitan esta área. Posteriormente se visita la playa punta norte, catalogada como una de las mejores playas en el mundo.	
									</p>
									<div className="indicators">
										<div>
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
					                    		$120
					                    	</p>
											<Link 
												to="/tours/experiencia-isla-mujeres/"
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

export default class ToursPage extends React.Component {
	render() {
		return(
			<Tours 
				toursBack={this.props.data.toursBack}
				tulumImage={this.props.data.tulum}
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
    tulum: file(relativePath: { eq: "isla-mujeres.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
