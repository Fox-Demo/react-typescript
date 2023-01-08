import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";
import "./style.css";
import { links } from './links';


type Props = {
}

const Mobile = (props: Props) => {
  const linksRef = useRef(null);
  const logo = require("./logo.svg");
  const [isDisplay, setIsDisplay] = useState<boolean>(false)

  return (
    <>
      <header className="navbar__header">
        <main className='navbar__main'>
          <div className='navbar__item'>
            <img className='navbar__logo' src={logo.default} alt='Logo' />
          </div>
          <button onClick={() => setIsDisplay(!isDisplay)} className='navbar__icon--button'>
            <FaBars />
          </button>
        </main>
      </header>
      <section ref={linksRef} className={`navbar__list ${isDisplay ? "show" : "hide"}`}>
        {links.map((link) => {
          return <p className='navbar__link mr-left'>{link}</p>
        })}
      </section>
    </>
  )
}

export default Mobile