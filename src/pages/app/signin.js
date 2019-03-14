import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'

import { AuthProvider } from '../../stores/AuthContext'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Main from '../../components/main'

const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' })
  return (
    <AuthProvider.Consumer>
      {auth => (
        <Layout>
          <SEO title="Sign In" keywords={[`weme`, `SignIn`]} />
          <Main className="py-10">
            <div className="container flex flex-col items-center justify-center">
              <h1 className="font-heading">Sign in</h1>
              <div className="flex flex-col items-center md:w-1/3 sm:w-1/2 mt-10">
                <input
                  type="text"
                  className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
                  placeholder="Email*"
                  value={state.email}
                  onChange={e => setState({ ...state, email: e.target.value })}
                />
                <input
                  type="password"
                  className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
                  placeholder="Password*"
                  value={state.password}
                  onChange={e =>
                    setState({ ...state, password: e.target.value })
                  }
                />
                <a>Forgot password?</a>
                <button
                  className="bg-teal hover:bg-green hover:border-green text-white py-2 px-10 border border-teal rounded no-underline mt-10 mb-2 shadow"
                  onClick={() => auth.signin(state)}
                >
                  Sign in
                </button>
                <div>
                  Do not have an account? Please,{' '}
                  <Link to="/app/signup">sign up</Link>
                </div>
              </div>
            </div>
          </Main>
        </Layout>
      )}
    </AuthProvider.Consumer>
  )
}

export default SignIn
