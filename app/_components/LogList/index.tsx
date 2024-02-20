"use client";

import { deleteLog } from "@/app/_api/log";
import LogItem from "@/app/_components/LogList/LogItem";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { GetLogsListType, LogsType } from "@/app/_types/log/types";
import EmptyHealthLog from "@/app/healthlog/_components/EmptyHealthLog";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import * as styles from "./style.css";

interface LogListPropsType extends GetLogsListType {
  petId: number;
}

const LogList: React.FC<LogListPropsType> = ({ petId, logsData: initialLogsData }) => {
  const [selectedLog, setSelectedLog] = useState<LogsType | null>(null);
  const [logsData, setLogsData] = useState(initialLogsData);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const deleteLogMutation = useMutation({
    mutationFn: (logId: number) => deleteLog(petId, logId),
    onSuccess: () => {
      setLogsData((prevLogsData) => ({
        ...prevLogsData,
        logs: prevLogsData.logs.filter((log) => log.logId !== selectedLog?.logId),
      }));
      closeModalFunc();
    },
  });

  const handleDelete = (logItem: LogsType) => {
    setSelectedLog(logItem);
    openModalFunc();
  };

  const confirmDelete = () => {
    if (selectedLog) {
      deleteLogMutation.mutate(selectedLog.logId);
    }
  };

  return (
    <>
      <div>
        <p className={styles.date}>{logsData.date}</p>
        {logsData.logs && logsData.logs.length > 0 ? (
          <ul>
            {logsData.logs.map((logItem) => (
              <LogItem petId={petId} logItem={logItem} key={logItem.logId} onDelete={() => handleDelete(logItem)} />
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
