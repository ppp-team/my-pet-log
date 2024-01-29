// import { SubmitHandler, useForm } from "react-hook-form";
// import * as styles from "./style.css";

// interface IFormInput {
//   nickname: string;
//   email: string;
//   password: string;
//   changePassword: string;
//   changePasswordCheck: string;
// }

const Page = () => {
  // const { register, handleSubmit } = useForm<IFormInput>();
  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <label>닉네임</label>
    //     <input defaultValue="이슬" {...register("nickname", { required: true, maxLength: 10 })} />

    //     <label>이메일</label>
    //     <input defaultValue="seul9085@naver.com" {...register("email")} />

    //     <label>비밀번호</label>
    //     <input {...register("password")} />

    //     <label>변경 비밀번호</label>
    //     <input {...register("changePassword")} />

    //     <label>변경 비밀번호 확인</label>
    //     <input {...register("changePasswordCheck")} />

    //     {/*
    // <input {...register("exampleRequired", { required: true })} />
    // {errors.exampleRequired && <span>This field is required</span>} */}

    //     <button type="submit">확인</button>
    //   </form>
    <div>프로필, 닉네임 변경하는 인풋</div>
  );
};

export default Page;
