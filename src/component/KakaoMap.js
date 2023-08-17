import { useEffect, useState } from 'react';
import React from 'react';

const { kakao } = window;

function KakaoMap() {
    useEffect(() => {
      const container = document.getElementById('map');
  
      // 사용자의 현재 위치를 가져오는 함수
      const getCurrentPosition = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 3,
              };
              const map = new kakao.maps.Map(container, options);
  
              // 사용자의 현재 위치에 마커 추가
              const markerPosition = new kakao.maps.LatLng(latitude, longitude);
              const marker = new kakao.maps.Marker({
                position: markerPosition,
              });
              marker.setMap(map);
            },
            (error) => {
              console.error('Error getting current position:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
  
      getCurrentPosition();
    }, []);
  
    return (
      <div className='map-container' id='map'></div>
    );
  }

export default KakaoMap;