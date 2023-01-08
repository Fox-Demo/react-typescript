import React from 'react'
import { AiOutlineCheck } from "react-icons/ai"
import "./style.css"

type Props = {}

const Animation = (props: Props) => {
  return (
    <div>
      <main className='animation__main'>
        <p id="spinner"></p>
        <button id="submit-btn">
          <span id='btn-text'>submit</span>
          <span id="btn-symbol">X</span>
        </button>
      </main>
    </div>
  )
}

export default Animation