import React from "react";
import Header from "../component/Header";
import StoreName from "../component/StoreName";
import Card from "../component/Card";
import "../css/StoreDetail.css"
import { IoIosAddCircle } from "react-ionicons";

function StoreDetail() {
    return (
      <div className='App'>
        <Header/>
        <StoreName name={store.store_name}/>
            <IoIosAddCircle className='addicon'/>
        <Card name={card.card_name} cardImg={card.card_image}/>
      </div>
    );
  }
  
  export default StoreDetail;