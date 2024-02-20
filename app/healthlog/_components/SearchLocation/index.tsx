import React, { useState, useEffect } from "react";
import * as styles from "./style.css";

declare global {
  interface Window {
    kakao: any;
  }
}

interface SearchLocationProps {
  appKey: string;
  onSelectPlace: (place: Place) => void;
  selectedPlaceId?: number | null;
  selectedPlacePosition?: { y: number; x: number } | null;
  initialSubType?: string;
}

export interface Place {
  y: number;
  x: number;
  place_name: string;
  id: number;
}

type Status = "OK" | "ZERO_RESULT" | "ERROR";

const SearchLocation = ({ appKey, onSelectPlace, selectedPlaceId, selectedPlacePosition, initialSubType }: SearchLocationProps) => {
  const [inputText, setInputText] = useState<string>("");
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        const initialMap = new window.kakao.maps.Map(container, options);
        setMap(initialMap);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [appKey]);

  useEffect(() => {
    if (selectedPlacePosition && map) {
      const center = new window.kakao.maps.LatLng(selectedPlacePosition.y, selectedPlacePosition.x);
      map.setCenter(center);
      new window.kakao.maps.Marker({
        map: map,
        position: center,
      });
    }
  }, [selectedPlacePosition, map]);

  const searchPlaces = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, options);
      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(inputText, (data: Place[], status: Status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i], map);
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          }
          map.setBounds(bounds);
        }
      });
    });
  };

  const displayMarker = (place: Place, map: any) => {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(place.y, place.x),
    });

    window.kakao.maps.event.addListener(marker, "click", () => {
      setInputText(place.place_name);
      onSelectPlace(place);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input className={styles.inputWrapper} type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder={initialSubType || "장소를 검색해보세요"} />
        <button type="button" className={styles.searchButton} onClick={searchPlaces}>
          검색
        </button>
      </div>
      <div id="map" style={{ width: "100%", height: "30rem" }} />
    </div>
  );
};

export default SearchLocation;
