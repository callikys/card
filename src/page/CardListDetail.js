import React from "react";
import '../css/CardListDetail.css';
import PlusButton from "../component/PlusButton";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react'; 
import Header from "../component/Header";
import Benefits from "../component/Benefits";
import MinusButton from "../component/MinusButton";

function CardListDetail() {
const { cardId } = useParams();
const [data, setData] = useState('');
const [cardName, setCardName] = useState('');
const [cardImg, setCardImg] = useState('');
const [cardBenefits, setCardBenefits] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userCards, setUserCards] = useState([]);

useEffect(() => {
  const token = sessionStorage.getItem('token');
  setIsLoggedIn(!!token);
  console.log('로그인 여부: ', !!token);
    axios.get(`http://localhost:8080/cardlist/detail/${cardId}`)
      .then(response => {
        const cardDetails = response.data;
        console.log("Card details: ", cardDetails);
        setData(cardDetails);
        setCardName(cardDetails.card_name);
        setCardImg(cardDetails.card_image);
        setCardBenefits(cardDetails.benefits);
      })
      .catch(error => {
        console.log(error);
      })
      if (isLoggedIn) {
        const config = {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        };
        axios.get(`http://localhost:8080/mypage/mycard`, config)
          .then(response => {
            const cards = response.data;
            console.log("User cards: ", cards);
            setUserCards(cards);
          })
          .catch(error => {
            console.log(error);
          })
      }
  }, [cardId, isLoggedIn])

  function isCardInUserCards() {
    return userCards.some((userCard) => userCard.cardid == cardId);
  }

  async function removeCard(cardIdToDelete) {
    const token = sessionStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    if(window.confirm('보유 카드를 삭제하시겠습니까?')) {
        try {
            const response = await axios.delete(`http://localhost:8080/mypage/deletecard/${cardId}`, config);
            console.log("Card removed:", response);
            alert('카드를 삭제하였습니다.');
            setUserCards(userCards.filter((card) => card.cardid !== cardIdToDelete));
          } catch (error) {
            console.log("Error removing card:", error);
            alert('카드 삭제를 실패하였습니다.');
          }
    }
  }
  async function handleAddCard() {
    // 로그인된 사용자의 카드 목록 업데이트
    const token = sessionStorage.getItem('token');
    console.log('sessionStorage 확인: ', sessionStorage);
    console.log('토큰: ', token);
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios.post(
            `http://localhost:8080/cardlist/addcard/${cardId}`, 
            { cardId: cardId }, 
            config
        );
        // 성공적으로 카드가 추가되었을 경우
        console.log('Card added:', response.data);
        alert('카드가 추가되었습니다.');
    } catch (error) {
        // 추가 실패시 에러 처리
        console.error('Error adding card:', error.response);
        alert('카드 추가에 실패했습니다.');
    }
}

return (
    
    <div>
        <Header />
        <div className='mainbox'>
        <div className='secondbox'>
            <div></div>
            <div className='title-container'>
                <h1 className='title'>{cardName}</h1>
            </div>
            {isLoggedIn &&
              (isCardInUserCards() ? (
                <MinusButton
                  className="button"
                   onClick={removeCard}
                />
              ) : (
                <PlusButton className="button" onClick={handleAddCard} />
              ))}
            </div>
            <div className="imgbox">
                <img src={cardImg} />
            </div>
            <div className='thirdbox'>
                <Benefits benefitsData={cardBenefits} />
            </div>
        </div>
    </div>
    
)
} export default CardListDetail;
