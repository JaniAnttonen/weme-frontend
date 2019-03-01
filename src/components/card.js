import React from 'react'
import { Link } from 'gatsby'

export const BigCard = props => {
  const { color, icon, right, children } = props
  return (
    <div
      className={`container relative max-w-full md:w-1/3 sd:w-full mb-8 flex-no-shrink flex-grow bg-white shadow rounded min-h-card${
        !right ? ' mr-8' : ''
      }`}
    >
      <div
        className={`bg-${
          color ? color : 'red'
        } w-2 h-full absolute pin-y pin-x rounded-l`}
      />
      <div className="pl-10 py-9 pr-10 relative flex flex-col h-full">
        <div className="flex w-full h-1/2 flex-no-shrink">
          {icon && <img src={icon} className="cardImg" alt="big card icon" />}
        </div>
        <div className="flex w-full h-1/2 flex-no-shrink flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}

export const SmallCard = props => {
  const { color, icon, right, children } = props
  return (
    <div
      className={`container relative max-w-1/2 md:w-1/5 sd:w-1/2 mb-8 flex-no-shrink flex-grow bg-white shadow rounded min-h-48${
        !right ? ' mr-8' : ''
      }`}
    >
      <div
        className={`bg-${
          color ? color : 'red'
        } w-2 h-full absolute pin-y pin-x rounded-l`}
      />
      <div className="pl-10 py-9 pr-10 relative flex flex-col h-full">
        <div className="flex w-full flex-no-shrink flex-col pt-6">
          {children}
        </div>
        <div className="flex w-full flex-no-shrink">
          {icon && <img src={icon} className="cardImg" alt="small card icon" />}
        </div>
      </div>
    </div>
  )
}
