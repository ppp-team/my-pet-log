import * as styles from "@/app/diary/_components/CreateForm/style.css";
import { FormInput } from "@/app/diary/_components/EditForm";
import { UseFormRegister, UseFormSetError, UseFormStateProps, UseFormWatch } from "react-hook-form";
const MAX_LENGTH = { title: 15, content: 500 };

interface InputProps {
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
}
export const TitleInput = ({ register, watch }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="title" className={styles.label}>
        일기 제목 *
      </label>
      <input
        {...register("title", { required: "제목을 입력해주세요.", maxLength: { value: MAX_LENGTH.title, message: `최대 ${MAX_LENGTH.title}자까지 작성할 수 있습니다.` } })}
        id="title"
        className={styles.input}
      />
      {
        <p className={styles.p}>
          {watch("title")?.length ?? "0"}/ {MAX_LENGTH.title}
        </p>
      }
    </div>
  );
};

export const ContentInput = ({ register, watch }: InputProps) => {
  return (
    <>
      <label htmlFor="content" className={styles.label}>
        내용 *
      </label>
      <textarea
        {...register("content", {
          required: "내용을 입력해주세요.",
          maxLength: { value: MAX_LENGTH.content, message: `최대 ${MAX_LENGTH.content}자까지 작성할 수 있습니다.` },
        })}
        id="content"
        className={styles.input}
        style={{ height: "10rem" }}
      />
      {
        <p className={styles.p}>
          {watch("content")?.length ?? "0"}/ {MAX_LENGTH.content}
        </p>
      }
    </>
  );
};
