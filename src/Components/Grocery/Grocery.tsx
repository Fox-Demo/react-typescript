
import React, { useReducer, useRef, useState } from 'react';
import Item from './Item';
import Modal from './Modal';
import { itemsReducer, modalReducer, ModalAction } from './Reducer';
import "./style.css";

const Grocery = () => {
  const [item, setItem] = useState<string>("");
  const [state, dispatch] = useReducer(itemsReducer, { items: [], isEdit: false })
  const [modalState, modalDispatch] = useReducer(modalReducer, { isModal: false, modalText: "", color: "green" })
  const inputRef = useRef<HTMLInputElement>(null)

  const openModal = (modalType: ModalAction) => {
    modalDispatch({ type: "open" })
    modalDispatch(modalType);
  }

  const addItems = (e: React.FormEvent): void => {
    e.preventDefault();
    if (state.isEdit) {
      dispatch({ type: "edit", text: item })
      dispatch({ type: "edit mode", bool: false, id: 0 })
      openModal({ type: "edit" })
    } else {
      dispatch({ type: "add", text: item })
      openModal({ type: "add" })
    }
    setItem("");
  }

  return (
    <div className='grocery'>
      <main className='grocery__main'>
        <header className='grocery__header' onSubmit={(e) => addItems(e)}>
          {modalState.isModal && <Modal color={modalState.color} modalDispatch={modalDispatch} text={modalState.modalText} />}
          <p className='grocery__header--title'>Grocery Bud</p>
          <form className='grocery__form'>
            <input
              ref={inputRef}
              placeholder='e.g. eggs'
              className='grocery__form--input'
              value={item}
              onChange={(e) => setItem(e.target.value)} />
            <button className='grocery__form--submit' type='submit'>{state.isEdit ? "Edit" : "Submit"}</button>
          </form>
        </header>
        <article className='grocery__list'>
          {state.items.map((item, index) => <Item id={index} name={item} setItem={setItem} dispatch={dispatch} openModal={openModal} inputRef={inputRef} />)}
        </article>

        {state.items.length !== 0 && <p className='grocery__btn--clear' onClick={() => {
          dispatch({ type: "clear" })
          openModal({ type: "clear" })
        }}>Clear Items</p>}
      </main>
    </div>
  )
}

export default Grocery

//use useReducer