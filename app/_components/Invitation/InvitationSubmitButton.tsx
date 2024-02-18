import * as styles from "./InvitationSubmitButton.css";

const InvitationSubmitButton = ({ isDisable }: { isDisable: boolean }) => {
  return (
    <button className={styles.button} type="submit" disabled={isDisable}>
      등록
    </button>
  );
};

export default InvitationSubmitButton;
