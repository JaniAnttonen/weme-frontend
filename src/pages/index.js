import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

import { BigCard, SmallCard } from '../components/card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <div className="container mx-auto w-full max-w-xl pt-8 px-2 flex flex-wrap justify-stretch">
      <BigCard color="orange" />
      <BigCard color="green" />
      <BigCard color="red" />
      <BigCard color="red-dark" />
    </div>
    <div className="container mx-auto w-full max-w-xl px-2 flex flex-wrap justify-stretch">
      <SmallCard color="red-light" />
      <SmallCard color="blue-light" />
      <SmallCard color="yellow-light" />
      <SmallCard color="orange-light" />
    </div>
  </Layout>
)

export default IndexPage
