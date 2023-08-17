import { useState, useEffect } from 'react';
import CardButton from '../component/CardButton';
import Header from '../component/Header';
import '../css/CardList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Mobile from '../component/Mobile';
import axios from 'axios';

function CardList({}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredCardData, setFilteredCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cardlist'); // 서버 엔드포인트에 맞게 URL 업데이트
        if (Array.isArray(response.data)) {
          setFilteredCardData(response.data);
        } else {
          console.error('서버에서 반환된 데이터가 배열 형태가 아닙니다.');
        }
      } catch (error) {
        console.error('카드 데이터 불러오기 오류:', error);
      }
    };

    fetchCardData();
  }, []);

  // 추가: 검색어 입력 시 상태를 업데이트하는 함수
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  // 추가: 검색 버튼을 클릭하면 검색어와 선택된 옵션에 따라 카드 데이터를 필터링하여 결과를 업데이트하는 함수
  const handleSearchClick = () => {
    const filteredCards = filteredCardData.filter(
      (card) =>
        card.card_name.includes(searchKeyword) &&
        (card.card_company === selectedOption || selectedOption === '')
    );
    setFilteredCardData(filteredCards);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === '') {
        setFilteredCardData(filteredCardData); // filteredCardData로 변경
      } else {
        const filteredCards = filteredCardData.filter((card) => card.card_company === selectedValue);
        setFilteredCardData(filteredCards);
      }
  };

  return (
    <Mobile>
      <div>
        <Header />
        <input
          type='text'
          placeholder='카드를 검색하세요.'
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchClick}>검색</button>
        <select className='.select' name='factory' onChange={handleSelectChange}>
          <option value=''>전체보기</option>
                <option value='KB국민카드'>KB국민카드</option>
                <option value='삼성카드'>삼성카드</option>
                <option value='롯데카드'>롯데카드</option>
                <option value='우리카드'>우리카드</option>
                <option value='신한카드'>신한카드</option>
                <option value='현대카드'>현대카드</option>
                <option value='NH농협카드'>NH농협카드</option>
                <option value='IBK기업은행'>IBK기업은행</option>
                <option value='하나카드'>하나카드</option>
                <option value='카카오뱅크'>카카오뱅크</option>
                </select>
                {filteredCardData.map((card, index) => (
        <Link to={`/cardlist/detail/${encodeURIComponent(card.cardid)}`} key={index}>
          <CardButton
            className='.cardButton'
            title={card.card_name}
            image={card.card_image}
            cardId={card.cardid} // Pass the cardId as a prop
          />
        </Link>
      ))}
      </div>
    </Mobile>
  );
}

export default CardList;