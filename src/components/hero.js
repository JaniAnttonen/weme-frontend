import React from 'react'
import { Link } from 'gatsby'
import heroBg from '../assets/images/hero.jpg'

const Hero = () => (
  <div
    className="hero m-0 w-screen h-screen min-h-hero max-h-70vh flex flex-col bg-cover justify-center items-center py-8"
    style={{ backgroundImage: `url("${heroBg}")`, backgroundPosition: "top center" }}
  >
    <div className="container relative max-w-xl mx-auto flex flex-row justify-between items-center text-white">
      <div className="container md:w-1/2">
        <h1 className="my-4">Accessing social isolation in elders together</h1>
        <p className="my-4">
          WeMe project is a platform to attract social attention to the social
          isolation and loneliness among elders.
        </p>
        <p className="my-4">
          We aim to improve the elders
          living quality and social satisfaction in Finland and China by proving a
          modular system with partners' services, educational materials and an
          event calendar for patients.
        </p>
        <div className="flex flex-row flex-wrap mt-8">
          <Link to="/" className="bg-transparent hover:bg-teal text-white font-semibold hover:text-white py-3 px-5 mr-4 border border-white hover:border-transparent rounded no-underline">
          Become a user
          </Link>
          <Link to="/" className="bg-transparent hover:bg-teal text-white font-semibold hover:text-white py-3 px-5 border border-white hover:border-transparent rounded no-underline">
          Become a partner
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
