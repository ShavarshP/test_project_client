import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import Form from "../components/form";

interface loginForm {
  email: string;
  password: string;
}
interface dataForm {
  userName: boolean;
  fullName: boolean;
  email: boolean;
  password: boolean;
}

const LogIn: React.FC = () => {
  const [valid, setValid] = useState<dataForm>({
    userName: false,
    fullName: false,
    email: false,
    password: false,
  });
  const { loginUser, setLoading } = useActions();

  const onSubmit = async (data: loginForm) => {
    if (!valid.email && !valid.password && !valid.userName && !valid.fullName) {
      await setLoading(false);
      loginUser(data.email, data.password);
    } else {
      alert("invalid data");
    }
  };

  const isValid = (form: loginForm) => {
    // eslint-disable-next-line no-useless-escape
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordValue = password.test(form.password) || form.password === "";
    const emailValue = email.test(form.email) || form.email === "";

    setValid({
      userName: false,
      fullName: false,
      email: !emailValue,
      password: !passwordValue,
    });
  };

  return (
    <Form isLogin={false} onSubmit={onSubmit} isValid={isValid} valid={valid} />
  );
};

export default LogIn;
