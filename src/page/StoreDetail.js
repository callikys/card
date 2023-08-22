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
        <StoreName test={store.store_name}/>
            <IoIosAddCircle className='addicon'/>
        <Card />
      </div>
    );
  }
  
  export default StoreDetail;