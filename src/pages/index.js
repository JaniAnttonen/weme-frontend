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
      <h2 className="font-heading w-full pb-4">
        A senior? Here's your toolbox.
      </h2>
      <SmallCard color="teal" link="/app/signin">
        <h2 className="font-heading">SIGN IN</h2>
      </SmallCard>
      <SmallCard color="teal" link="/app/signup">
        <h2 className="font-heading">JOIN AND USE</h2>
      </SmallCard>
      <SmallCard color="teal" right wide>
        <h2 className="font-heading">I feel lonely. How could I develop my communication?</h2>
        <p>
          We aim to improve the elders living quality and social satisfaction. Learn how to assess these conditions in an easy way.
        </p>
      </SmallCard>
    </Main>
    <div className="bg-black pt-8">
      <Main>
        <h2 className="font-heading w-full text-white pb-4">
          Want to know more about the project?
        </h2>

        <SmallCard color="teal" wide>
          <h2 className="font-heading">My family member feels isolated and I want to know how to help.</h2>
          <p>
            Learn what are the consequences of social isolation and find answers to the most personal questions in case your family member is affected.
          </p>
        </SmallCard>
        <SmallCard color="teal" wide right>
          <h2 className="font-heading">How every business and person can help with social isolation?</h2>
          <p>
            Improve living quality and social satisfaction in Finland and China by providing your service. Learn more about the condition, system and benefits of using it.
          </p>
        </SmallCard>

        <SmallCard color="teal" wide>
          <h2 className="font-heading">Healthcare perspective on social isolation and future studies.</h2>
          <p>Investigate the latest professional research conducted in the field and join our community of healthcare experts to improve the elders' quality of living together.</p>
        </SmallCard>
        <SmallCard color="teal" icon={infoImg}>
          <h2 className="font-heading">ABOUT US</h2>
        </SmallCard>
        <SmallCard color="teal" icon={calendarImg} right>
          <h2 className="font-heading">MY CALENDAR</h2>
        </SmallCard>

        <SmallCard color="teal" icon={vrImg}>
          <h2 className="font-heading">VR GAMES</h2>
        </SmallCard>
        <SmallCard color="teal" icon={speechBubbles}>
          <h2 className="font-heading">CHAT & CALLS</h2>
        </SmallCard>
        <SmallCard color="teal">
          <h2 className="font-heading">TOURS</h2>
        </SmallCard>
        <SmallCard color="teal" right>
          <h2 className="font-heading">COURSES</h2>
        </SmallCard>
      </Main>
    </div>
  </Layout>
)

export default IndexPage
