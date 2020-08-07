import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Circuits = ({
	circuitsBackground,
	
}) => (
  <Layout>
    <h1>Circuitos</h1>
  </Layout>
)

export default class CircuitsPage extends React.Component {
	render() {
		return(
			<Circuits
				circuitsBackground={this.props.data.circuitsBackground}
				
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
  }
`
