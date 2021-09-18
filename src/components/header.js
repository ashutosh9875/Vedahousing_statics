import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    ><StaticImage 
          src="../images/icon.png" 
          alt={siteTitle} 
          style={{
            color: `white`,
            width: "120px"
          }}
        />
        
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
