import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Circuits = ({
	circuitsBackground,
	circuits,
}) => (
  <Layout>
    { console.log(circuits) }
    <h1>Circuitos</h1>
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
    allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "circuit-page"}}}) {
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
