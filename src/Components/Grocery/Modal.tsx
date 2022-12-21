import React, { useEffect } from 'react'
import { ModalAction } from './Reducer'

type Props = {
  color: "green" | "red"
  text: string;
  modalDispatch: React.Dispatch<ModalAction>;
}

const Modal = ({ color, text, modalDispatch }: Props) => {

  useEffect(() => {
    const time = setTimeout(() => {
      modalDispatch({ type: "close" })
    }, 3000)
    return () => clearTimeout(time);
  }, [text])

  return (
    <div className={`grocery__modal ${color == "red" ? "red" : "green"}`}>
      <p className='grocery__modal--text'>{text}</p>
    </div>
  )
}

export default Modal