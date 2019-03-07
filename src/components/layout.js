import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import '../assets/fonts/AvenirNextLTPro-Regular.otf'
import '../assets/fonts/AvenirNextLTPro-Bold.otf'
import '../assets/css/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="mx-0 p-0 pt-header bg-grey">{children}</div>
        <footer className="p-0 w-full bg-white h-48">
          <div className="w-screen max-w-xl mx-auto px-2">
            © {new Date().getFullYear()}WeMe Project
          </div>
        </footer>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
