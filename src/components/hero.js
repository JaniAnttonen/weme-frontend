import React from 'react'
import { Link } from 'gatsby'
import heroBg from '../assets/images/hero.jpg'

const Hero = () => (
  <div
    className="hero m-0 w-full h-screen min-h-hero md:max-h-50vh sd:max-h-full flex flex-col bg-cover justify-center items-center py-8"
    style={{
      backgroundImage: `url("${heroBg}")`,
      backgroundPosition: 'top center',
    }}
  >
    <div className="container relative max-w-xl mx-auto px-2 flex flex-row justify-between items-center text-white">
      <div className="container md:w-1/2">
        <h1 className="my-4 font-heading">
          Tackling social isolation in elders together
        </h1>
        <p className="my-4">
          WeMe project is a platform to attract social attention to the social
          isolation and loneliness among elders.
        </p>
        <p className="my-4">
          We aim to improve the elders living quality and social satisfaction in
          Finland and China by proving a modular system with partners' services,
          educational materials and an event calendar for patients.
        </p>
        <div className="flex flex-row flex-wrap mt-8" />
      </div>
    </div>
  </div>
)

export default Hero
