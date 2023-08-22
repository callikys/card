import React from "react";
import Header from "../component/Header";
import StoreName from "../component/StoreName";
import Card from "../component/Card";
import "../css/StoreDetail.css";
import axios from "axios";
import PlusButton from "../component/PlusButton";
import Benefits from "../component/Benefits";
import MinusButton from "../component/MinusButton";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function StoreDetail() {
  const { storeId } = useParams();
  const [storeData, setStoreData] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
    console.log("로그인 여부: ", !!token);
    const fetchData = async () => {
      if (isLoggedIn) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            `http://localhost:8080/store/detail/${storeId}`,
            config
          );
          setStoreData(response.data);
          const isFavoriteResponse = await axios.get(
            `http://localhost:8080/mypage/mystore`,
            config
          );
          setIsFavorite(isFavoriteResponse.data.isFavorite);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("로그인이 필요합니다.");
      }
    };

    fetchData();
  }, [storeId, isLoggedIn]);

  const addToFavorites = async () => {
    if (isLoggedIn) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        const response = await axios.post(
          `http://localhost:8080/store/addstore/${storeId}`,
          {},
          config
        );

        if (response.status === 201) {
          alert("즐겨찾기에 추가되었습니다!");
          setIsFavorite(true);
        } else {
          alert("즐겨찾기 추가에 실패하였습니다.");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("로그인이 필요한 기능입니다.");
    }
  };

  const removeFromFavorites = async () => {
    if (isLoggedIn) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
        if (window.confirm("즐겨찾기에서 매장을 삭제하시겠습니까?")) {
          const response = await axios.delete(
            `http://localhost:8080/mypage/deletestore/${storeId}`,
            config
          );
          console.log("Store removed:", response);
          alert("매장이 삭제되었습니다.");
          setIsFavorite(false);
        }
      } catch (error) {
        console.error("Error removing store:", error);
        alert("매장 삭제를 실패하였습니다.");
      }
    } else {
      alert("로그인이 필요한 기능입니다.");
    }
  };

  return (
    <div>
      <Header />
      <div className="mainbox">
        <div className="secondbox">
          <div></div>
          <div className="title-container">
            <h1 className="title">{storeData.store_name}</h1>
          </div>
          {isFavorite ? (
            <MinusButton className="button" onClick={removeFromFavorites} />
          ) : (
            <PlusButton className="button" onClick={addToFavorites} />
          )}
        </div>
        <div className="thirdbox">
          <Benefits />
        </div>
      </div>
    </div>
  );
}

export default StoreDetail;
