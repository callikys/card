import '../App.css';
import { useState, useEffect } from 'react';
import Header from '../component/Header';
import axios from 'axios';
import Store from '../component/Store';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function StoreList() {
//   const [searchTerm, setSearchTerm] = useState("");

  const [stores, setStores] = useState([]);
  const { category_number } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log('로그인 여부: ', !!token);
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/store/${category_number}`); // 서버 엔드포인트에 맞게 URL 업데이트
        if (Array.isArray(response.data)) {
          setStores(response.data);
        } else {
          console.error('서버에서 반환된 데이터가 배열 형태가 아닙니다.');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category_number,  setIsLoggedIn]);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };


  return (
    <div className='App'>
      <Header/>
      {/* <MySearchBar onSearch={handleSearch} /> */}
      {/* <StoreList searchTerm={searchTerm} /> */}
      {stores.map((store) => (
        <Link 
          key={store.storeid} 
          to={isLoggedIn ? `/store/detail/${store.storeid}` : '/login'} 
          onClick={() => !isLoggedIn && alert('로그인 후 카드 혜택을 확인 할 수 있습니다!')}
        >
          <Store
            id={store.storeid}
            name={store.store_name}
            category={store.store_category}
          />
        </Link>
      ))}
    </div>
  );
}

export default StoreList;
