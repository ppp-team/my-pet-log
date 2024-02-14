"use client";

import { getPetLogs } from "@/app/_api/log";
import LogItem, { LogsType } from "@/app/_components/LogList/LogItem";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { useState } from "react";
import { useQuery } from "react-query";
import QueryProvider from "../QueryProvider";
import * as styles from "./style.css";

interface LogListProps {
  petId: number;
  year: number;
  month: number;
  day: number;
}

const LogList: React.FC<LogListProps> = ({ petId, year, month, day }) => {
  const { data: logs, isLoading, error } = useQuery(["petLogs", petId, year, month, day], () => getPetLogs(petId, year, month, day));
  const [selectedLog, setSelectedLog] = useState<LogsType | null>(null);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  if (isLoading) return <div>Loading...</div>;
  if (error || !logs) return <div>Error</div>;

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
        <p className={styles.date}>{logs.date}</p>
        <ul>
          {logs.logs.map((logItem: any, index: number) => (
            <LogItem logItem={logItem} key={index} onDelete={() => handleDelete(logItem)} />
          ))}
        </ul>
      </div>
      {isModalOpen && <Modal text="정말 삭제하시겠습니까?" buttonText="확인" onClick={confirmDelete} onClose={closeModalFunc} />}
    </>
  );
};

export default LogList;
