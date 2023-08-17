import './App.css';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page import
import Main from './page/Main';
import CardList from './page/CardList';
import CardListDetail from './page/CardListDetail';
import Join from './page/Join';
import Login from './page/Login';
import StoreList from './page/StoreList';
import MyPageCard from './page/MyPageCard';
import MyPageStore from './page/MyPageStore';

// 반응형(모바일)
const Mobile  = ({children}) => {
  const isMobile  = useMediaQuery({minWidth: 320, maxWidth: 767 })
  return isMobile  ? children : null
}

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/cardlist" element={<CardList />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/cardlist/detail/:cardId" element={<CardListDetail />} />
        <Route exact path="/store" element={<StoreList />} />
        <Route exact path="/mypage/mystore" element={<MyPageStore />} />
        <Route exact path="/mypage/mycard" element={<MyPageCard />} />
      </Routes>
    // </BrowserRouter>  
  );
}

export default App;
