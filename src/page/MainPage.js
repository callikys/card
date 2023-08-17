import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Button from '../component/Button';
import KakaoMap from '../component/KakaoMap';
import Mobile from '../component/Mobile';

function MainPage() {
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
                <KakaoMap></KakaoMap>
                <Button title='대형마트' id="MT1" data-order="0"/>
                <Button title='편의점' id="CS2" data-order="0"/>
                <Button title='문화시설' id="CT1" data-order="0"/>
                <p></p>
                <Button title='푸드' id="FD6" data-order="0"/>
                <Button title='카페' id="CE7" data-order="0"/>
                <Button title='주유소/충전소' id="OL7" data-order="0"/>

                {responseData && (
                    <div>
                        {/* 서버에서 받은 데이터를 화면에 표시 */}
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </Mobile>
    );
}

export default MainPage;
