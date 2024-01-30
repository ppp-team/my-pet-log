import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
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
  useEffect(() => {
    // 카카오 맵 스크립트 로딩
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      // 지도 생성
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        // 장소 검색 로직
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch("이태원 맛집", (data: Place[], status: Status) => {
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

    return () => {
      document.head.removeChild(script);
    };
  }, [appKey]);

  // 마커 표시 함수
  const displayMarker = (place: Place, map: any) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    kakao.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name}</div>`);
      infowindow.open(map, marker);
    });
  };

  return <div id="map" style={{ width: "100%", height: "30rem" }} />;
};

export default SearchLocation;
