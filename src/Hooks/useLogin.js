import * as Yup from "yup";
import React from "react";
import serverAPI from "../config/serverAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useLogin = () => {
  const Initial_value = {
    email: "",
    password: "",
  };

  const formValidation = Yup.object().shape({
    email: Yup.string()
      .email("invalid email! please enter correct email")
      .required("email is required")
      .nullable(),
    password: Yup.string().required("password is required").nullable(),
  });

  const loginData = async (data) => {
    console.log(data, "dadata");
    try {
      const res = await serverAPI.post("/accounts/login/nt/", data);
      // console.log("response Login ",data);
      // alert("Login Successful")
      toast.success("Logged in Successfully ", {
        position: "top-center",
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_role", res.data.user_info.user_role);
      window.location.href = "/Home";
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("userRole"));
    } catch (error) {
      console.log(error, "error from catch");
      toast.error("please enter valid credentials", {
        position: "top-center",
      });
    }
  };

  return {
    loginData,
    Initial_value,
    formValidation,
  };
};

export default useLogin;
