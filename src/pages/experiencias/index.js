import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const _ = require('lodash')

const Experiences = ({
	background,
	experiences,
}) => (
  <Layout>
  	<div className="full-width-image margin-top-0" style={{
		backgroundImage: `url(${
		    !!background.childImageSharp ? background.childImageSharp.fluid.src : background
		})`,
		backgroundPosition: `center`,
		backgroundSize: 'cover',
		height: '400px'
        }}>
	    <div
		style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
		    Experiencias
		  </h1>
	    </div>
	</div>
	<div className="container" style={{
		    paddingTop: '50px',
		    paddingBottom: '50px',
		    backgroundColor: '#f1f1f1',
		    boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'
		}}>
	    <div className="columns">
		<div className="column">
		    <div className="tours-container">
			{experiences &&
				experiences.map(({ node: experience }) => (
					<div className="tour has-text-white" key={experience.id}>
					    <div className="relative tour-wrapper is-flex-tablet">
						<div className="tour-image" style={{
						    backgroundImage: `url(${
							!!experience.frontmatter.image.childImageSharp ?experience.frontmatter.image.childImageSharp.fluid.src : experience.frontmatter.image
						    })`
						}}>
						</div>
						<div className="tour-info">
						    <h3 className="title has-text-white is-size-4">
							{ experience.frontmatter.title }
						    </h3>
						    <p>
							{ experience.frontmatter.description }
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
							    <Link 
								to={_.deburr(experience.fields.slug)} 
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
  </Layout>
)

export default class ExperiencesPage extends React.Component {
	render() {
		return(
			<Experiences
				background={this.props.data.circuitsBackground}
				experiences={this.props.data.allMarkdownRemark.edges}
			/>
		)
	}
}

export const pageQuery = graphql`
  query {
    circuitsBackground: file(relativePath: { eq: "experiencias.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "experience-page"}}}) {
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
