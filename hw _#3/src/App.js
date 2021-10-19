import React from 'react';
import{useState}  from 'react'
import {useEffect} from 'react'
import App from './App.css'
import ConfirmModal from './components/confirm-modal'
import Card from './components/product-bascet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createStore } from 'redux'




function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems]=useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [iconColor, setIconColor] = useState(false)

  const  modalwillOpen = (id,price)=>{
    setModalOpen({modalOpen: true})
    // const addedItems=  setCardItems((items) => items.map((item) => item.id ))
    setCardItems([...cardItems, id,price])
    console.log(id);
    
    
   
    
  }
  useEffect(() => {
    fetch("product-list.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
               <div className="header">
              <Card items={cardItems}></Card> 
                  </div>
                  {modalOpen&&<ConfirmModal></ConfirmModal>}
               <div className="product_container">            
               {items.map(item => (
                 
                    <div className="product_list" key={item.id}>
                        <img className="product_picture" width="230" height="350px" src={item.url} alt=""></img> 
                        <div className="product_prise">{item.name} {item.price} 
                    <img  onClick={()=>{setIconColor(true)}} style={{backgroundColor:iconColor===true?"orange":""}}className="product_icon"height="20px" width="20px" src={item.logo} alt=""></img>
                         </div>
                      <div onClick={()  =>modalwillOpen(item.name,item.price,)} className="product_card"> Add to Card</div>
                     
                    </div>
                  ))}
                 
                  
                </div>
               
               
                </>
              );
            }
          }
        
export default MyComponent;

MyComponent.defaultProps = {
 items: []
}











