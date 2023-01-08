import React, { useState, useEffect } from 'react';
import "./style.css";
import Desktop from './Desktop';
import Mobile from './Mobile';


type Props = {

}

const Navbar = (props: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handle = () => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handle);
    return (() => window.removeEventListener('resize', handle));
  }, [])

  return (
    <div className='navbar'>
      {isMobile ? <Mobile /> : <Desktop />}
    </div >
  )
}

export default Navbar