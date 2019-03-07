import React from 'react'

const Main = props => {
  const { children, className } = props
  return (
    <div
      className={`container mx-auto w-full max-w-xl px-2 flex flex-wrap justify-stretch${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Main
