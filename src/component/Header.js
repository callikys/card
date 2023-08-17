import React, { useEffect, useState } from 'react';
import '../css/Header.css';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;  
  justify-content: center;
  width: 100%;
  height: 50px;
  display: inline-block;
  text-align: center;
  background: #222;
  border-color: #000;
  color: #fff;
  border: none;
  font-size: 20px;
  text-decoration: none;
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    if(window.confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('token');
      setIsLoggedIn(false);
      setMenuOpen(false);
    }
  };

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
       <input type='checkbox' id='menuicon' checked={menuOpen} onChange={() => {}} />
      <label htmlFor='menuicon' onClick={handleMenuIconClick}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className='sidebar' style={{ flex: 1 }}>
        {isLoggedIn ? (
          <>
            <StyledLink to='/mypage/mycard' className='button1'>마이페이지</StyledLink>
            <StyledLink onClick={handleLogout} className='button3'>로그아웃</StyledLink>
          </>
        ) : (
          <>
            <StyledLink to='/join' className='button1'>회원가입</StyledLink>
            <StyledLink to='/login' className='button3'>로그인</StyledLink>
          </>
        )}
        <StyledLink to='/cardlist' className='button2'>카드리스트</StyledLink>
      </div>
      <Link to='/' className='mainlink'>Card Panda</Link>
    </header>
  );
}

export default Header;
