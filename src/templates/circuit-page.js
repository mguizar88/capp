import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const CircuitTemplate = ({data}) => {

	const html = data.markdownRemark.html
	const { frontmatter } = data.markdownRemark
	const title = data.markdownRemark.frontmatter.title
	const img = data.markdownRemark.frontmatter.image
	const description = frontmatter.description
  	const adults = frontmatter.price.adults_price
	const children = frontmatter.price.children_price
	const childs = frontmatter.childs
	const underAge = frontmatter.underAge
	const includes = frontmatter.includes
	const recommendations = frontmatter.recommendations
	const info = frontmatter.info
  
	return(
		<Layout>
			<section>
				<div className="container"
					style={{
						padding: '3rem',
						backgroundColor: '#f1f1f1',
						boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'
					}}
				>
					<div className="columns">
						<div className="column is-two-thirds">
							<Img style={{borderRadius: '30px'}} fluid={img.childImageSharp.fluid} />
							<h3 style={{marginTop: '3rem', color: '#462a6c', width: '80%', marginLeft: 'auto', marginRight: 'auto'}} className="has-text-centered title tour-page-description-title">
								{title}
							</h3>
							<div className="tour-page-description" style={{color: '#504e4e'}}>
								<p>
									{description}
								</p>
								<div className="columns" style={{marginTop: '2.1rem'}}>
									{
										underAge?
											<div className="column is-one-third has-text-centered">
												<span>
												  <i className="is-purple fas fa-7x fa-child"></i>
												</span>
												<p className="is-purple" style={{fontSize: '26px', fontWeight: 'bold', margin: '1rem 0'}}>
													Menores
												</p>
												<p>
													{ underAge }
												</p>
											</div>
										: ''
									}
									{
										childs?
											<div className="column is-one-third has-text-centered">
												<span>
												  <i className="is-purple fas fa-7x fa-child"></i>
												  <i className="is-purple fas fa-7x fa-female"></i>
												</span>
												<p className="is-purple" style={{fontSize: '26px', fontWeight: 'bold', margin: '1rem 0'}}>
													Niños
												</p>
												<p>
													{ childs }
												</p>
											</div>
										: ''
									}
								</div>
							</div>

							<ul style={{marginTop: '20px'}} className="nav nav-pills nav-fill info" id="pills-tab" role="tablist">
							  <li className="nav-item">
							    <a className="nav-link flex-sm-fill active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">¿Qué incluye?</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link flex-sm-fill" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Recomendaciones</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link flex-sm-fill" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">información importante</a>
							  </li>
							</ul>

							<div className="tab-content" id="pills-tabContent">
							  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
							  	{ includes }
							  </div>
							  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
							  	{ recommendations }
							  </div>
							  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
							  	{ info }
							  </div>
							</div>	


						</div>
						<div className="column is-one-third">
							<h1 className="title t-yellow is-size-1-desktop has-text-centered" style={{borderBottom: '1px solid #eab92a'}}>
								{title}
							</h1>
							<div className="columns">
								<div className="column is-half">
									<p className="t-yellow is-size-3 has-text-centered has-text-weight-bold">10%<span className="is-size-7">de descuento</span></p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">Adultos</p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">$ MXN</p>
								</div>
								<div className="column is-half">
								<p className="t-yellow is-size-3 has-text-centered has-text-weight-bold">0%<span className="is-size-7">de descuento</span></p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">Niños</p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">$ MXN</p>
								</div>
							</div>
							<form>
								<div className="field">
								  <div className="control">
								    <div style={{width: '100%'}} className="select is-medium">
								      <select style={{width: '100%'}}>
								        <option>Transportación desde:</option>
								        <option>With options</option>
								      </select>
								    </div>
								  </div>
								</div>
								<div className="columns">
									<div className="column is-half-desktop">
										<div className="field">
										  <div className="control">
										    <div className="select is-medium">
										      <select className="full-width">
										        <option>Adultos</option>
										        <option>With options</option>
										      </select>
										    </div>
										  </div>
										</div>
									</div>
									<div className="column is-half-desktop">
										<div className="field">
										  <div className="control">
										    <div className="select is-medium">
										      <select className="full-width">
										        <option>Niños</option>
										        <option>With options</option>
										      </select>
										    </div>
										  </div>
										</div>
									</div>
								</div>
								<div className="field">
								  <div className="control">
								    <div className="is-medium">
								      <input className="input is-medium" type="date" placeholder="Fecha de visita" />
								    </div>
								  </div>
								</div>
								<p className="has-text-centered is-size-3-desktop is-size-4-mobile has-text-weight-bold is-purple">
									Total:
									<span style={{marginLeft: '2rem'}}>${adults} MXN</span>
								</p>
								<input style={{width: '100%', backgroundColor: '#eab92a', color: '#000', marginTop: '30px'}} type="submit" className="button is-large has-text-white" value="COMPRAR" />
							</form>           
						</div>
					</div>
				</div>
			</section>
		</Layout>

	)

}

export default CircuitTemplate

export const circuitQuery = graphql`
	query CircuitPage($id: String!){
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image{
					childImageSharp{
						fluid(maxWidth: 1200) {
							...GatsbyImageSharpFluid
						}
					}
				}
				description
				childs
				underAge
				includes
				recommendations
				info
				price {
		      adults_price
		      children_price
		      q_price
		    }
			}
		}
	}
`
