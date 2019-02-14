import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../assets/images/logo.png'

const Header = ({ siteTitle }) => (
  <nav className="bg-white header shadow-md relative w-full">
    <div className="flex flex-wrap items-center justify-between w-full max-w-xl max-h-full relative p-2 mx-auto">
      <Link to="/" className="logo">
        <img
          src={logo}
          className="h-full relative"
          alt="WeMe logo"
        />
      </Link>

      <button className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
        <div className="text-sm">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block md:inline-block mt-4 md:mt-0 no-underline text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
