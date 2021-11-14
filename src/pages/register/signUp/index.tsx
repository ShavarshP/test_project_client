import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import Form from "../components/form";

interface loginForm {
  userName: string;
  fullName: string;
  email: string;
  password: string;
}
interface dataForm {
  userName: boolean;
  fullName: boolean;
  email: boolean;
  password: boolean;
}

const SignUp: React.FC = () => {
  const [valid, setValid] = useState<dataForm>({
    userName: false,
    fullName: false,
    email: false,
    password: false,
  });
  const { registration } = useActions();

  const onSubmit = (data: loginForm) => {
    if (!valid.email && !valid.password && !valid.userName && !valid.fullName) {
      registration(
        data.email,
        data.userName,
        data.password,
        data.fullName,
        "standard"
      );
    } else {
      alert("invalid data");
    }
  };

  const isValid = (form: loginForm) => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nameValue = name.test(form.fullName) || form.fullName === "";
    const passwordValue = password.test(form.password) || form.password === "";
    const emailValue = email.test(form.email) || form.email === "";
    const fullNameValue = name.test(form.fullName) || form.fullName === "";

    setValid({
      userName: !nameValue,
      fullName: !fullNameValue,
      email: !emailValue,
      password: !passwordValue,
    });
  };

  return (
    <Form isLogin={true} onSubmit={onSubmit} isValid={isValid} valid={valid} />
  );
};

export default SignUp;
