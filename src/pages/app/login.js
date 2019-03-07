import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Main from '../../components/main'

const Login = () => (
  <Layout>
    <SEO title="Sign In" keywords={[`weme`, `login`]} />
    <Main className="py-10">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="font-heading">Sign in</h1>
        <div className="flex flex-col items-center md:w-1/3 sm:w-1/2 mt-10">
          <input
            type="text"
            className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
            placeholder="Username*"
          />
          <input
            type="text"
            className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
            placeholder="Password*"
          />
          <a>Forgot password?</a>
          <button className="bg-teal hover:bg-green hover:border-green text-white py-2 px-10 border border-teal rounded no-underline mt-10 mb-2 shadow">
            Login
          </button>
          <div>
            Do not have an account? Please, <Link to="/app/join">sign up</Link>
          </div>
        </div>
      </div>
    </Main>
  </Layout>
)

export default Login
