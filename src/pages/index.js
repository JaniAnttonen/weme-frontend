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
      <BigCard color="orange">
        <h2>How to deal with social isolation and loneliness?</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="green">
        <h2>Personal calendar and events</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="red">
        <h2>VR games</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="red-dark">
        <h2>What is social isolation? What about loneliness?</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
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
