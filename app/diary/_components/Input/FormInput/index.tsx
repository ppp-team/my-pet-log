import ErrorMessage from "@/app/_components/ErrorMessage";
import * as styles from "@/app/diary/_components/Form/CreateForm/style.css";
import { FormInput } from "@/app/diary/_components/Form/EditForm";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<FormInput>;
  watch: UseFormWatch<FormInput>;
  errors: FieldErrors<FormInput>;
}

export const MAX_LENGTH = { title: 15, content: 500 };

export const TitleInput = ({ register, watch, errors }: InputProps) => {
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
      <div className={styles.hintContainer}>
        <div>{errors.title && <ErrorMessage message={errors.title.message?.toString()} />}</div>
        <p className={styles.p}>
          {watch("title")?.length ?? "0"}/ {MAX_LENGTH.title}
        </p>
      </div>
    </div>
  );
};

export const ContentInput = ({ register, watch, errors }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
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
      <div className={styles.hintContainer}>
        <div>{errors.content && <ErrorMessage message={errors.content.message?.toString()} />}</div>
        <p className={styles.p}>
          {watch("content")?.length ?? "0"}/ {MAX_LENGTH.content}
        </p>
      </div>
    </div>
  );
};
