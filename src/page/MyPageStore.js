import React from "react";
import Header from "../component/Header";
import Store from "../component/Store";
import User from "../component/User";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "../css/MyPage.css"

function MyPageStore() {
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
      async function fetchData() {
          const authToken = sessionStorage.getItem('token');
          
          const config = {
              headers: {
                  Authorization: `Bearer ${authToken}`,
              },
          };

          // 사용자 정보를 가져오는 API를 호출
          const userRes = await axios.get('http://localhost:8080/mypage', config);
          setUsername(userRes.data.name);

          // 로그인한 사용자의 카드를 가져오는 API를 호출
          const storeRes = await axios.get('http://localhost:8080/mypage/mystore', config);
          setData(storeRes.data);
      }

      fetchData();
  }, []);
    return (
        <div>
            <Header/>
            <User username={username} />
            <div className="cpbox">
            <Link className="no-underline"  to = '/mypage/mycard' ><span>내 카드</span></Link>
            <span className="selected">즐겨찾기</span>
            </div>
            {data && data.map((store) => (
  <Link className="no-underline" 
    key={store.storeid} 
    to={`/store/detail/${store.storeid}`}
  >
    <Store name={store.store_name} />
  </Link>
))}
            
        </div>
        
    );
}

export default MyPageStore;