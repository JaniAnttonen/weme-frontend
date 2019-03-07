import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Main from '../../components/main'

const Login = () => (
  <Layout>
    <SEO title="Sign In" keywords={[`weme`, `login`]} />
    <Main className="py-8">
      <h1>Login!</h1>
    </Main>
  </Layout>
)

export default Login
