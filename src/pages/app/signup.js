import React, { useState } from 'react'
import { Link } from 'gatsby'

import * as api from '../../api'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Main from '../../components/main'

const SignUp = () => {
  const [state, setState] = useState({ email: '', password: '' })
  const onSubmit = () => api.signUp(state).then(console.log)
  return (
    <Layout>
      <SEO title="Sign In" keywords={[`weme`, `SignUp`]} />
      <Main className="py-10">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-heading">Sign up</h1>
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
              onChange={e => setState({ ...state, password: e.target.value })}
            />
            <a>Forgot password?</a>
            <button
              className="bg-teal hover:bg-green hover:border-green text-white py-2 px-10 border border-teal rounded no-underline mt-10 mb-2 shadow"
              onClick={() => onSubmit()}
            >
              Sign up
            </button>
            <div>
              Already have an account? Please,{' '}
              <Link to="/app/signin">sign in</Link>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  )
}

export default SignUp
