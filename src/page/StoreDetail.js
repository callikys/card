import React from "react";
import Header from "../component/Header";
import StoreName from "../component/StoreName";
import Card from "../component/Card";
import "../css/StoreDetail.css"

function StoreBenefit() {
    
    return (
      <div className='App'>
        <Header/>
        <StoreName name={store.store_name}/>
            <IoIosAddCircle className='addicon'/>
        <Card />
      </div>
    );
  }
  
  export default StoreBenefit;