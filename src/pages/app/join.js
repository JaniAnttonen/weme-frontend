import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Main from '../../components/main'

const Join = () => (
  <Layout>
    <SEO title="Sign In" keywords={[`weme`, `Join`]} />
    <Main className="py-8">
      <h1 className="font-heading mx-auto">Join!</h1>
    </Main>
  </Layout>
)

export default Join
