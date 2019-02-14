import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

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
        <div className="mx-0 p-0 bg-grey">
        {children}
        </div>
        <footer className="p-0 w-screen bg-white shadow-md h-48">
          <div className="w-screen max-w-xl mx-auto">© {new Date().getFullYear()}WeMe Project</div>
        </footer>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
