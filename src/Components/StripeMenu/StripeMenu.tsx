import React, { useReducer, useState, useRef } from 'react'
import Label from './Label';
import { Link, links } from './data';
import "./style.css";

type Props = {}

const StripeMenu = (props: Props) => {
  const refs = useRef<HTMLParagraphElement[]>([])
  const logo = require("../images/logo.svg")
  const phone = require("../images/phone.svg")

  const [isLabel, setIsLabel] = useState<boolean>(false);
  const [labelData, setLabelData] = useState<Link>({ title: "", subLinks: [], offset: 0 });
  const [offset, setOffset] = useState<number>(0);


  const enter = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, data: Link) => {
    setLabelData(data);
    setIsLabel(true)
  }
  const leave = () => {
    setIsLabel(false)
  }

  return (
    <div className='stripe'>
      <header>
        {isLabel && <Label link={labelData} offset={offset} />}
        <nav className='stripe__nav'>

          <img src={logo.default} alt="logo" />

          <div className='stripe__nav--links'>
            {links.map((item, index) => {
              console.log(index)
              return (
                <p
                  className='stripe__links--link'
                  onMouseEnter={(e) => enter(e, item)}
                  onMouseLeave={() => leave()}
                >
                  {item.title}
                </p>
              )
            })}
          </div>
          <button className='stripe__nav--sign-btn'>
            Sign in
          </button>
        </nav>
      </header>
      <main className='stripe__main'>
        <div className='stripe__main--container'>
          <section className='stripe__main--info-container'>
            <p className='stripe__info-container--title'>
              Payments infrastructure for the internet
            </p>
            <article className='stripe__info-container--des'>
              Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s
              software and APIs to accept payments, send payouts, and manage their businesses online.
            </article>
            <button className='stripe__info-container--start-btn'>start now</button>
          </section>
          <div className='stripe__info-container--image'>
            <img src={phone.default} alt="phone" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default StripeMenu