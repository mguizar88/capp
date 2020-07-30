import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import '@fortawesome/fontawesome-free/css/all.css'
import './main.scss'

import whatsapp from '../../static/img/whatsapp.png'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div style={{position: "relative",}} >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <a 
        style={{
          position: "fixed",
          width: "80px",
          bottom: "30px",
          right: "30px",
          zIndex: "9999999",
        }}
        href="https://wa.me/5219981098729"
        target="_BLANK"
      >
        <img className="w-100" src={whatsapp} alt="Whatsapp Logo" />
      </a>
      <Footer />
      <Footer />
    </div>
  )
}

export default TemplateWrapper
