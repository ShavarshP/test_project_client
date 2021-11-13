import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import Form from "../components/form";
// import Form from "./components/form";
// import Button from "@mui/material/Button";
// import Form from "./components/form";

interface loginForm {
  userName: string;
  email: string;
  password: string;
}
interface dataForm {
  userName: boolean;
  email: boolean;
  password: boolean;
}

const SignUp: React.FC = () => {
  const [valid, setValid] = useState<dataForm>({
    userName: false,
    email: false,
    password: false,
  });
  const { registration } = useActions();

  const onSubmit = (data: loginForm) => {
    if (!valid.email && !valid.password && !valid.userName) {
      registration(data.email, data.userName, data.password);
    } else {
      alert("invalid data");
    }
  };

  const isValid = (form: loginForm) => {
    const name = /^([A-Za-zéàë]{2,40} ?)+$/;
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nameValue = name.test(form.userName) || form.userName === "";
    const passwordValue = password.test(form.password) || form.password === "";
    const emailValue = email.test(form.email) || form.email === "";
    console.log(nameValue);

    setValid({
      userName: !nameValue,
      email: !emailValue,
      password: !passwordValue,
    });
    console.log(valid);
  };

  return (
    <Form isLogin={true} onSubmit={onSubmit} isValid={isValid} valid={valid} />
  );
};

export default SignUp;
