import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar'

const Header = ({ siteTitle }) => (
  <div className="hero">
      <Navbar />
      <h1>
      {siteTitle}
      </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
