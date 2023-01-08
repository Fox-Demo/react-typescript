import React from 'react'
import "./style.css";
import { FaTimes } from "react-icons/fa"

type Props = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarModal = (props: Props) => {
  return (
    <section className='sidebar-modal'>
      <button onClick={() => props.setIsModal(false)} className="sidebar-modal__close-button">
        <FaTimes />
      </button>
      <main className='sidebar-modal__main'>Modal Content</main>
    </section >
  )
}

export default SidebarModal