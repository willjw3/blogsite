import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Twitter from "../images/twitter.svg"
import "../styles/header.scss"



const Header = ({ siteTitle }) => {
  return (
    <div className="header">
      <div className="header-content">
          <div className="header-content-title">
              <Link to="/" className="header-content-title-link"><h1>THE CONDEMNATION GAME</h1></Link>
          </div>
      </div>
      <div className="header-links">
        <div className="header-links-internal">
          <Link className="header-links-internal-link" to="/tags/philosophy">Philosophy</Link>
          <Link className="header-links-internal-link" to="/tags/psychology">Psychology</Link>
          <Link className="header-links-internal-link" to="/tags/geopolitics">Politics</Link>
          <Link className="header-links-internal-link" to="/tags/science">Science</Link>
        </div>
      </div>
    </div>
  )
} 
  


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
