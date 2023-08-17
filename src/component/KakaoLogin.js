import React from 'react';
import '../css/KakaoLogin.css';

const KakaoLogin = () => {
  const Rest_api_key = 'REST API KEY'; // REST API KEY
  const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=08f9abe5909da9904362e0b56a882b7d&redirect_uri=https://localhost:3000/&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <button className="button1" onClick={handleLogin}>
        카카오 로그인
      </button>
    </>
  );
};

export default KakaoLogin;
