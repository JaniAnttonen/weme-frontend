import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

import { BigCard, SmallCard } from '../components/card'

import calendarImg from '../assets/images/calendar.png'
import vrImg from '../assets/images/vr-glasses.png'
import infoImg from '../assets/images/info.png'
import speechBubbles from '../assets/images/speech-bubble.png'

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
      <BigCard color="green" icon={calendarImg}>
        <h2>Personal calendar and events</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="red" icon={vrImg}>
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
      <SmallCard color="red-light" icon={infoImg}>
        <h2>ABOUT US</h2>
      </SmallCard>
      <SmallCard color="blue-light" icon={speechBubbles}>
        <h2>CHAT & CALLS</h2>
      </SmallCard>
      <SmallCard color="yellow-light">
        <h2>THE PLAN</h2>
      </SmallCard>
      <SmallCard color="orange-light">
        <h2>THE HEAD</h2>
      </SmallCard>
    </div>
  </Layout>
)

export default IndexPage
