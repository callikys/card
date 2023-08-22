import Header from '../component/Header';
import Button from '../component/Button';
import Mobile from '../component/Mobile';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineLocalCafe, MdOutlineLocalGroceryStore} from "react-icons/md";
import { GrCafeteria } from "react-icons/gr"; 
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi"; 
import { Ri24HoursFill } from "react-icons/ri"; 
import { TbBuildingCarousel,TbDotsDiagonal } from "react-icons/tb"; 
import { BsBuildings } from "react-icons/bs"; 
import { MdOutlineLocalGasStation } from "react-icons/md"; 
import { FiBookOpen } from "react-icons/fi"; 

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
                <button><BiSearchAlt size="3em"/></button>
                <div className='button-container'>
                    <Button title='카페' icon={() => <MdOutlineLocalCafe size="2em" />} />
                    <Button title='음식점' icon={() => <GrCafeteria size="2em" />} />
                    <Button title='편의점' icon={() => <Ri24HoursFill size="2em" />} />
                    <Button title='영화관' icon={() => <BiCameraMovie size="2em" />} />
                    <Button title='테마파크' icon={() => <TbBuildingCarousel size="2em" />} />
                    <Button title='마트' icon={() => <MdOutlineLocalGroceryStore size="2em" />} />
                    <Button title='백화점' icon={() => <BsBuildings size="2em" />} />
                    <Button title='주유소' icon={() => <MdOutlineLocalGasStation size="2em" />} />
                    <Button title='도서' icon={() => <FiBookOpen size="2em" />} />
                    <Button title='기타' icon={() => <TbDotsDiagonal size="2em"/>} />
                </div>
            </div>
        </Mobile>
    );
}

export default Main;
