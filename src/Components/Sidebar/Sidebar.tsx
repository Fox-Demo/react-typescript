import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import SidebarModal from './SidebarModal';
import { FaTimes } from 'react-icons/fa';
import { sidebarList, icons } from "./data"

import "./style.css";
type Props = {}

const Sidebar = (props: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);
  const logo = require("./logo.svg");

  return (
    <div>
      <section className='sidebar-project'>
        <header>
          <div className='sidebar__button'>
            <FaBars onClick={() => setIsShowSidebar(true)} />
          </div>
          <section className={`sidebar-main ${isShowSidebar ? "show" : "hide"}`}>
            <header className='sidebar-main__header'>
              <button className='sidebar-main__close-btn' onClick={() => setIsShowSidebar(false)}>
                <FaTimes />
              </button>
              <img className='sidebar-main__logo' src={logo.default} alt='Logo' />
            </header>
            <div>
              {sidebarList.map((item) => {
                return (
                  <div className='sidebar-main__list-section'>
                    {item.icon}
                    <p>{item.title}</p>
                  </div>
                )
              })}
            </div>
            <div className='sidebar-main__icons'>
              {icons.map((icon) => {
                return (
                  <span className='sidebar-main__icon'>
                    {icon}
                  </span>
                )
              })}
            </div>
          </section>
        </header>
        <main className='sidebar__main'>
          <button className='sidebar__show-button' onClick={() => setIsModal(true)}> show modal </button>
          {isModal && <SidebarModal setIsModal={setIsModal} />}
        </main>
      </section>
    </div>
  )
}

export default Sidebar