import {useState} from 'react';
import Backdrop from './Backdrop.js';
import Modal from './Modal.js';
function Todo(props) {
 const [modalIsOpen, setModalIsOpen]= useState(false);
  function deleteHandler(){
    setModalIsOpen(true);
    console.log("Clicked!");
    console.log(props.text);


  }
  function closeModal(){
    setModalIsOpen(false);
  }

  return (
     <div className='card'>
    <h2>{props.text}</h2>
    <div className='action'>

    <button className='btn'onClick={deleteHandler}>Delete</button>
    </div>
    {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/> }
    {modalIsOpen && <Backdrop onCancel={closeModal}/>}


</div>

  );
}

export default Todo;