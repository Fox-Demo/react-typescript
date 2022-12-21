import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Actions, ModalAction } from './Reducer';
import "./style.css";

type Props = {
  id: number;
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
  dispatch: React.Dispatch<Actions>;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  openModal: (type: ModalAction) => void;
}

const Item = ({ id, name, setItem, dispatch, openModal, inputRef }: Props) => {
  return (
    <section key={id} className='grocery__item'>
      <p className='grocery__item--text'>{name}</p>
      <div className='item__btn-container'>
        <FaEdit onClick={() => {
          inputRef.current?.focus();
          setItem(name);
          dispatch({ type: "edit mode", bool: true, id: id })
        }} className='item__btn--edit' color={"#6be675"} />
        <AiFillDelete onClick={() => {
          openModal({ type: "remove" })
          dispatch({ type: "remove", text: name })
        }} className='item__btn--delete' color={"#e66b6b"} />
      </div>
    </section>
  )
}

export default Item