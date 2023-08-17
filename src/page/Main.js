import Header from '../component/Header';
import Button from '../component/Button';
import Mobile from '../component/Mobile';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        // 서버로 GET 요청 보내기
        axios.get('http://localhost:8080/login') // 실제 API 엔드포인트로 변경
            .then(response => {
                // 요청 성공 시 응답 데이터 처리
                setResponseData(response.data);
            })
            .catch(error => {
                // 요청 실패 시 에러 처리
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <Mobile>
            <div>
                <Header></Header>
                <input type='text' placeholder='장소를 검색하세요.'/>
                <button>검색</button>
                    <Button title='카페' />
                    <Button title='음식점' />
                    <Button title='영화관' />
                    <Button title='테마파크' />
                    <Button title='통신사' />
                    <Button title='미용실' />
                    <Button title='주유소' />
                    <Button title='도서' />
                    <Button title='기타' />
            </div>
        </Mobile>
    );
}

export default Main;
