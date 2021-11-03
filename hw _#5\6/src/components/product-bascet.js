import React from 'react';
import{useState}  from 'react'
import {setState} from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import {createStore} from 'redux'
import Checkout from './validation-form'

function Card (props){
    const [cardOpen, setCardOpen] = useState(false)
    const [remuveItem,setRemuveItem] = useState(true)

 const remuveItemBascet = ()=>{
   setRemuveItem({remuveItem:false})
 }



  const  openBascet=()=>{
      setCardOpen({cardOpen:true})

    
    }
    const closeBascet=()=>{
        setCardOpen()
       
    }
  return (

<>
    <div className="btn-open" onClick={openBascet} >Card  </div>
    {cardOpen&&<div className="card-buscet">
    {remuveItem&&<div>{props.items}</div>}
            
            {/* <button onClick ={remuveItemBascet} >Remuve Item</button> */}
            <Checkout></Checkout>
        <div onClick = {closeBascet} className="btn-ok">OK</div>
        
        
     </div>} 
    
     
</>
  )
    
}
  export default Card

