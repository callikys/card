import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import User from "../component/User";
import axios from 'axios';
import "../css/MyPage.css";
import "../css/CardBox.css";
import { Link } from 'react-router-dom';

function MyPageCard() {
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
            const cardRes = await axios.get('http://localhost:8080/mypage/mycard', config);
            setData(cardRes.data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <User username={username} />
            <div className="cpbox">
                <span className="selected">내 카드</span>
                <Link to="/mypage/mystore">
                    <span>즐겨찾기</span>
                </Link>
            </div>
            {data && data.map((card, index) => (
  <Link to={`/cardlist/detail/${encodeURIComponent(card.cardid)}`} key={index}>
    <Card name={card.card_name} cardImg={card.card_image} />
  </Link>
))}
        </div>
    );
}

export default MyPageCard;