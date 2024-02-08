"use client";

import LogItem, { TasksType } from "@/app/_components/LogList/LogItem";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { useState } from "react";
import { sampleLogList } from "./sampleLogList";
import * as styles from "./style.css";

const LogList = () => {
  const [selectedTask, setSelectedTask] = useState<TasksType | null>(null);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleDelete = (task: TasksType) => {
    setSelectedTask(task);
    openModalFunc();
  };

  const confirmDelete = () => {
    closeModalFunc();
    if (selectedTask) {
      // 삭제 로직
      console.log(`Deleting task with id: ${selectedTask.logId}`);
    }
  };

  return (
    <>
      <ul>
        {sampleLogList.map((log, index) => (
          <div key={index}>
            <p className={styles.date}>{log.date}</p>
            <ul>
              {log.tasks.map((taskItem, taskIndex) => (
                <LogItem taskItem={taskItem} key={taskIndex} onDelete={() => handleDelete(taskItem)} />
              ))}
            </ul>
          </div>
        ))}
      </ul>
      {isModalOpen && <Modal text="정말 삭제하시겠습니까?" buttonText="확인" onClick={confirmDelete} onClose={closeModalFunc} />}
    </>
  );
};

export default LogList;
