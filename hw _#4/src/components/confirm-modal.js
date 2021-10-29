import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  function ConfirmModal(props){
      const [modalIsOpen, setModalOpen] = useState(true)
  const modalWillClose=()=>{
      setModalOpen();
      
  }

    return(
      <>
   {modalIsOpen&&<div className="confirm-modal"> Ваш товар успешно добавлен в корзину
    <div onClick={modalWillClose} className="modal-ok">OK</div>
    
    </div>}
    </>
    
)
}



export default ConfirmModal