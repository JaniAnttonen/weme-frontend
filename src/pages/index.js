import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Main from '../components/main'

import { BigCard, SmallCard } from '../components/card'

import calendarImg from '../assets/images/calendar.png'
import vrImg from '../assets/images/vr-glasses.png'
import infoImg from '../assets/images/info.png'
import speechBubbles from '../assets/images/speech-bubble.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Main className="pt-8">
      <BigCard color="orange">
        <h2 className="font-heading">
          How to deal with social isolation and loneliness?
        </h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="green" icon={calendarImg} right>
        <h2 className="font-heading">Personal calendar and events</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="red" icon={vrImg}>
        <h2 className="font-heading">VR games</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
      <BigCard color="red-dark" right>
        <h2 className="font-heading">
          What is social isolation? What about loneliness?
        </h2>
        <p>
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system.
        </p>
      </BigCard>
    </Main>
    <Main>
      <SmallCard color="red-light" icon={infoImg}>
        <h2 className="font-heading">ABOUT US</h2>
      </SmallCard>
      <SmallCard color="blue-light" icon={speechBubbles}>
        <h2 className="font-heading">CHAT & CALLS</h2>
      </SmallCard>
      <SmallCard color="yellow-light">
        <h2 className="font-heading">THE PLAN</h2>
      </SmallCard>
      <SmallCard color="orange-light" right>
        <h2 className="font-heading">THE HEAD</h2>
      </SmallCard>
    </Main>
  </Layout>
)

export default IndexPage
