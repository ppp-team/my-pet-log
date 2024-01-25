"use client";

import React from "react";
import { usePagination, PaginationItemType } from "@nextui-org/react";
import { container, ul, li, button, activeButton } from "./styles.css";

const Pagination = () => {
  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: 6,
    showControls: true,
    siblings: 10,
    boundaries: 10,
  });

  return (
    <div>
      <div className={container}>
        <p>Active page: {activePage}</p>
        <div>어쩌구저쩌구~~~ </div>
        <ul className={ul}>
          {range.map((page) => {
            if (page === PaginationItemType.NEXT) {
              return (
                <li key={page} aria-label="next page" className={li}>
                  <button className={button} onClick={onNext}></button>
                </li>
              );
            }

            if (page === PaginationItemType.PREV) {
              return (
                <li key={page} aria-label="previous page" className={li}>
                  <button className={button} onClick={onPrevious}></button>
                </li>
              );
            }

            if (page === PaginationItemType.DOTS) {
              return (
                <li key={page} className={li}>
                  ...
                </li>
              );
            }

            return (
              <li key={page} aria-label={`page ${page}`} className={li}>
                <button className={`${button} ${activePage === page ? activeButton : ""}`} onClick={() => setPage(page)}></button>
              </li>
            );
          })}
        </ul>
      </div>
      <button>다음</button>
    </div>
  );
};

export default Pagination;
