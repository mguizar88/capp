
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const TransportationTemplate = ({ data }) => {

    const { frontmatter } = data.markdownRemark
    const title = frontmatter.title
    const img = frontmatter.image
    const heading = frontmatter.heading

    return (
        <Layout>
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    backgroundImage: `url(${img.childImageSharp.fluid.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    marginBottom: '150px',
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
                    {title}
                </h1>
            </div>
            <div className="container">
                <form style={{ padding: '5rem 0' }}>
                    <div class="field">
                        <p class="control has-icons-left">
                            <span class="select">
                                <select>
                                    <option selected>Origen</option>
                                    <option>Cancún centro</option>
                                    <option>Cancún aeropuerto</option>
                                    <option>Puerto Morelos</option>
                                    <option>Playa del Carmen</option>
                                    <option>Tulúm</option>
                                    <option>Mahahual</option>
                                    <option>Bacalar</option>
                                    <option>Chiquilá</option>
                                    <option>Chetumal centro</option>
                                    <option>Chetumal aeropuerto</option>
                                    <option>Mérida</option>
                                    <option>Valladolid</option>
                                    <option>Cobá</option>
                                </select>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control has-icons-left">
                            <span class="select">
                                <select>
                                    <option selected>Origen</option>
                                    <option>Cancún centro</option>
                                    <option>Cancún aeropuerto</option>
                                    <option>Puerto Morelos</option>
                                    <option>Playa del Carmen</option>
                                    <option>Tulúm</option>
                                    <option>Mahahual</option>
                                    <option>Bacalar</option>
                                    <option>Chiquilá</option>
                                    <option>Chetumal centro</option>
                                    <option>Chetumal aeropuerto</option>
                                    <option>Mérida</option>
                                    <option>Valladolid</option>
                                    <option>Cobá</option>
                                    <option>Felipe Carrillo Puerto</option>
                                </select>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control has-icons-left">
                            <span class="select">
                                <select>
                                    <option selected>Número de personas</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                </select>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="far fa-male"></i>
                            </span>
                        </p>
                    </div>


                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" placeholder="Nombre" />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" placeholder="Teléfono" />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" placeholder="Correo" />
                        </div>
                    </div>
			      
			    </form>
			</div>
		</Layout >

	)

}

export default TransportationTemplate

export const transportationQuery = graphql`
	query transportationPage($id: String!){
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image{
					childImageSharp{
						fluid(maxWidth: 1920) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
			}
		}
	}
`
