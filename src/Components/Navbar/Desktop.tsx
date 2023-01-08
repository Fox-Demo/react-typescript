import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin, BsMedium } from "react-icons/bs";
import "./style.css";
import { links } from "./links";
const logo = require("./logo.svg");
type Props = {}

const Desktop = (props: Props) => {
  return (
    <>
      <header className='navbar__header'>
        <main className='navbar__main'>
          <div className='navbar__item'>
            <img className='navbar__logo' src={logo.default} alt='Logo' />
          </div>
          <div className='navbar__item--links'>
            {links.map((link) => {
              return <p className='navbar__link'>{link}</p>
            })}
          </div>
          <div className='navbar__item--icons'>
            <p className='navbar__icon'><BsFacebook /></p>
            <p className='navbar__icon'><BsTwitter /></p>
            <p className='navbar__icon'><BsLinkedin /></p>
            <p className='navbar__icon'><BsMedium /></p>
          </div>
        </main>
      </header>
    </>
  )
}
export default Desktop;