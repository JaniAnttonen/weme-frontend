import React from 'react'

const Main = props => {
  const { children, className } = props
  return (
    <main
      className={`container mx-auto w-full max-w-xl px-2 flex flex-wrap justify-stretch${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </main>
  )
}

export default Main
