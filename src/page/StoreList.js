import '../App.css';
import { useState, useEffect } from 'react';
import Header from '../component/Header';
import axios from 'axios';
import Store from '../component/Store';


function StoreList() {
//   const [searchTerm, setSearchTerm] = useState("");

  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/store'); // 서버 엔드포인트에 맞게 URL 업데이트
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
  }, []);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };


  return (
    <div className='App'>
      <Header/>
      {/* <MySearchBar onSearch={handleSearch} /> */}
      {/* <StoreList searchTerm={searchTerm} /> */}
      {stores.map((store) => (
        <Store name={store.store_name} category={store.store_category}/>
      ))}
    </div>
  );
}

export default StoreList;
