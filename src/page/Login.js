import Header from "../component/Header";
import '../css/Join.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });

      // 반환된 토큰을 세션 저장소에 저장
      const authToken = response.data.accessToken;
      console.log('받아온 토큰값: ', authToken);
      sessionStorage.setItem('token', authToken);

      // 메인 화면으로 이동
      navigate('/');
    } catch (error) {
      alert('로그인에 실패했습니다: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <h2>이메일</h2>
      <div className='textboxStyle'>
        <input
          type='text'
          className="custom-input"
          placeholder='이메일을 입력하세요.'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <h2>비밀번호</h2>
      <div className='textboxStyle'>
        <input
          type='password'
          className="custom-input"
          placeholder='비밀번호를 입력하세요.'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to='/join'><h6>아직 계정이 없나요? 회원가입하러가기</h6></Link>
      <button className='checkbutton' onClick={handleLogin}>Login</button>
      </div>
  )
}

export default Login;
