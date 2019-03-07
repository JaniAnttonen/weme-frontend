import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Main from '../../components/main'

const Join = () => (
  <Layout>
    <SEO title="Sign In" keywords={[`weme`, `Join`]} />
    <Main className="py-10">
      <div className="container flex flex-col items-center">
        <h1 className="font-heading mx-auto">Sign up</h1>
        <div className="flex flex-row flex-wrap md:w-3/5 sd:w-full">
          <button className="bg-teal hover:bg-green hover:border-green text-white py-2 px-10 border border-teal rounded no-underline shadow flex-1 flex-no-shrink sd:w-full mt-6 md:mr-2">
            Become a partner
          </button>
          <button className="bg-transparent hover:bg-green hover:border-green text-teal py-2 px-10 border border-teal rounded no-underline shadow flex-1 flex-no-shrink sd:w-full mt-6 md:ml-2">
            Create a user's account
          </button>
        </div>
        <div className="flex flex-row flex-wrap mt-8 md:w-3/5 sd:w-full">
          <div className="flex flex-col mr-2 flex-1 flex-grow flex-no-shrink sd:w-full">
            <input
              type="text"
              className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="Company or person name*"
            />
            <input
              type="text"
              className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="Phone number*"
            />
            <input
              type="text"
              className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="Street address*"
            />
            <input
              type="text"
              className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="ZIP*"
            />
          </div>
          <div className="flex flex-col ml-2 flex-1 flex-grow flex-no-shrink sd:w-full">
            <input
              type="text"
              className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="Email*"
            />
            <select className="mb-4 p-2 rounded-input w-full border border-grey-dark">
              <option defaultChecked>Finland</option>
            </select>
            <input
              type="text"
              className="mb-4 p-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="City*"
            />
          </div>
        </div>
        <div className="flex flex-col md:w-3/5 sd:w-full mt-2 justify-start align-start">
          <span>
            Please, explain what kind of services you are going to offer
          </span>
          <textarea className="mb-4 p-2 mt-4 shadow-inner rounded-input w-full border border-grey-dark" />
        </div>
        <div className="flex flex-col md:w-3/5 sd:w-full mt-2 justify-start align-start">
          <span>
            Create and save your password. It will be required to access the
            system.
          </span>
          <div className="flex flex-row mt-4">
            <input
              type="text"
              className="mb-4 p-2 mr-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="Password*"
            />
            <input
              type="text"
              className="mb-4 p-2 ml-2 shadow-inner rounded-input w-full border border-grey-dark"
              placeholder="Confirm your password*"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <input type="checkbox" id="agreedTerms" />
          <label for="agreedTerms" className="mt-2 ml-2">
            I agree with the terms and conditions
          </label>
        </div>
        <div className="flex flex-col justify-center">
          <button className="bg-teal hover:bg-green hover:border-green text-white py-2 px-10 border border-teal rounded no-underline shadow my-2">
            Create an account
          </button>
          <div>
            Have an account? Please <Link to="/app/login">sign in</Link>
          </div>
        </div>
      </div>
    </Main>
  </Layout>
)

export default Join
