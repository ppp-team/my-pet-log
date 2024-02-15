"use client";

import LogItem from "@/app/_components/LogList/LogItem";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { LogListType, LogsType } from "@/app/_types/log/types";
import EmptyHealthLog from "@/app/healthlog/_components/EmptyHealthLog";
import React from "react";
import * as styles from "./style.css";

const LogList: React.FC<LogListType> = ({ logsData }) => {
  const [selectedLog, setSelectedLog] = React.useState<LogsType | null>(null);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleDelete = (logItem: LogsType) => {
    setSelectedLog(logItem);
    openModalFunc();
  };

  const confirmDelete = () => {
    closeModalFunc();
    if (selectedLog) {
      // 삭제 로직
      console.log(`Deleting log with id: ${selectedLog.logId}`);
    }
  };

  return (
    <>
      <div>
        <p className={styles.date}>{logsData.date}</p>
        {logsData.logs && logsData.logs.length > 0 ? (
          <ul>
            {logsData.logs.map((logItem) => (
              <LogItem logItem={logItem} key={logItem.logId} onDelete={() => handleDelete(logItem)} />
            ))}
          </ul>
        ) : (
          <EmptyHealthLog />
        )}
      </div>
      {isModalOpen && <Modal text="정말 삭제하시겠습니까?" buttonText="확인" onClick={confirmDelete} onClose={closeModalFunc} />}
    </>
  );
};

export default LogList;
