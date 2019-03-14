import React from 'react'
import { Link } from 'gatsby'

const Wrapper = props => props.to ? <Link
className={props.classNames}
to={props.to}
>{props.children}</Link> : <div className={props.classNames}>{props.children}</div>

export const BigCard = props => {
  const { color, icon, right, link, children } = props
  return (
    <Wrapper
      classNames={`card container relative max-w-full md:w-1/3 sd:w-full mb-8 flex-no-shrink flex-grow bg-white shadow rounded min-h-card${
        !right ? ' mr-8' : ''
      }`}
      to={link}
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
    </Wrapper>
  )
}

export const SmallCard = props => {
  const { color, icon, right, wide, link, children } = props
  return (
    <Wrapper
      classNames={`card container relative ${
        wide ? 'max-w-full md:w-1/3 sd:w-1/2 min-w-1/2' : 'max-w-full md:max-w-1/4 md:w-1/5 sd:w-1/2 min-w-1/5'
      } mb-8 flex flex-no-shrink flex-grow bg-white shadow rounded min-h-56${
        !right ? ' mr-8' : ''
      }`}
      to={link}
    >
      <div
        className={`bg-${
          color ? color : 'red'
        } w-2 h-full absolute pin-y pin-x rounded-l`}
      />
      <div className="pl-10 pt-9 pr-3 pb-3 relative flex flex-col h-full w-full">
        <div className="flex w-full flex-no-shrink flex-grow flex-col pt-6">
          {children}
        </div>
        <div className="flex w-full flex-no-shrink flex-grow items-end justify-end">
          {icon && <img src={icon} className="cardImg" alt="small card icon" />}
        </div>
      </div>
    </Wrapper>
  )
}
