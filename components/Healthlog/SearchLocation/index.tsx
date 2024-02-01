import React, { useState, useEffect } from "react";
import * as styles from "./style.css";

declare global {
  interface Window {
    kakao: any;
  }
}

interface SearchLocationProps {
  appKey: string;
}

interface Place {
  y: number;
  x: number;
  place_name: string;
}

type Status = "OK" | "ZERO_RESULT" | "ERROR";

const SearchLocation = ({ appKey }: SearchLocationProps) => {
  const [inputText, setInputText] = useState<string>("");
  const [selectedPlace, setSelectedPlace] = useState<string>("");

  useEffect(() => {
    // 카카오 맵 스크립트 로딩
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        new kakao.maps.Map(container, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [appKey]);

  const searchPlaces = () => {
    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer, options);
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(inputText, (data: Place[], status: Status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i], map);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          map.setBounds(bounds);
        }
      });
    });
  };

  const displayMarker = (place: Place, map: any) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, "click", () => {
      setSelectedPlace(place.place_name);
    });
  };

  return (
    <div className={styles.container}>
      <input className={styles.inputBox} type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="검색어를 입력하세요" />
      <button className={styles.searchButton} onClick={searchPlaces}>
        검색
      </button>
      <div id="map" style={{ width: "100%", height: "30rem" }} />
      <input className={styles.inputBox} type="text" value={selectedPlace} placeholder={"산책 장소"} readOnly />
    </div>
  );
};

export default SearchLocation;
