import LogItem from "@/components/@common/LogList/LogItem";
import { sampleLogList } from "./sampleLogList";
import * as styles from "./style.css";

const LogList = ({ pageType }: { pageType: string }) => {
  return (
    <ul>
      {sampleLogList.map((log, index) => (
        <div key={index}>
          <p className={styles.date}>{log.date}</p>
          <ul>
            {log.tasks.map((taskItem, taskIndex) => (
              <LogItem taskItem={taskItem} key={taskIndex} pageType={pageType} />
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
};

export default LogList;
