import React from 'react'

const Footer = () => (
  <footer className="p-0 w-full bg-white h-48 text-lg">
    <div className="w-screen max-w-xl mx-auto px-2">
      <div className="flex flex-row justify-between py-8">
        <div className="flex flex-col">
          <a className="pb-5">Privacy Policy</a>
          <a>Terms and Conditions</a>
        </div>
        <div className="flex flex-col">
          <span>Developed by University of Turku and Fudan University</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
