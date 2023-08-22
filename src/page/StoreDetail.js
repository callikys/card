import React from "react";
import Header from "../component/Header";
import StoreName from "../component/StoreName";
import Card from "../component/Card";
import "../css/StoreDetail.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 

function StoreDetail() {
  const { storeId } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log('로그인 여부: ', !!token);
    const fetchData = async () => {
      if (isLoggedIn) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            `http://localhost:8080/store/detail/${storeId}`,
            config // config 객체를 axios 요청에 전달
          );
          setStoreData(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("로그인이 필요합니다.");
      }
    };

    fetchData();
  }, [storeId, isLoggedIn]);
    return (
      <div className='App'>
        <Header/>
        {storeData && <StoreName name={storeData.store_name} />}
            
      </div>
    );
  }
  
  export default StoreDetail;