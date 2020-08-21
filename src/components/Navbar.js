import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/capptour.webp'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div>
        <nav
          className="navbar brand-nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Capptour" style={{ width: '188px' }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end flex-vertical-align has-text-centered">
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/carrito">
                  <span className="icon is-small has-text-white">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  Carrito
                </Link>
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/contact/">
                  <span className="icon is-small has-text-white">
                    <i className="far fa-comments"></i>
                  </span>
                  Contacto
                </Link>
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/nosotros/">
                  <span className="icon is-small has-text-white">
                    <i className="fas fa-users"></i>
                  </span>
                  Nosotros
                </Link>
                <a className="navbar-item secondary-links column-direction has-text-white" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/capptour/">
                  <span className="icon is-small has-text-white">
                    <i className="fab fa-facebook"></i>
                  </span>
                  Facebook
                </a>
                <a className="navbar-item secondary-links column-direction has-text-white" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/capptour/">
                  <span className="icon is-small has-text-white">
                    <i className="fab fa-instagram"></i>
                  </span>
                  Instagram
                </a>
              </div>
              <div className="navbar-end flex-vertical-align">
                <input className="input is-rounded" type="text" placeholder="Buscar"/>
              </div>
            </div>
          </div>
        </nav>
        <nav
          className="navbar is-hidden-mobile"
          role="navigation"
          aria-label="main-navigation"
          style={{backgroundColor: 'white' }}
        >
          <div className="container">
            <div
              id="navMenu"
              className="navbar-menu navbar-centered"
            >
              <div className="is-flex flex-vertical-align has-text-centered">
                <Link className="navbar-item is-purple" to="/">
                  Inicio
                </Link>
                <Link className="navbar-item is-purple" to="/hotels">
                  Hoteles
                </Link>
                <Link className="navbar-item is-purple" to="/transportacion">
                  Transportación
                </Link>
                <Link className="navbar-item is-purple" to="/circuitos">
                  Circuitos
                </Link>
                <Link className="navbar-item is-purple" to="/experiencias">
                  Experiencias
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
