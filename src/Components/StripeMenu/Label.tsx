import React from 'react'
import "./style.css"
import { Link } from './data'

type Props = {
  link: Link;
  offset: number;
}

const Label = ({ link }: Props) => {
  const offset: number = link.offset;

  return (
    <div className='label' style={{ left: `${offset}px` }}>
      <h3>{link.title}</h3>
      <div className='label__subLinks'>
        {link.subLinks.map((subLink) => {
          return (
            <p>{subLink}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Label