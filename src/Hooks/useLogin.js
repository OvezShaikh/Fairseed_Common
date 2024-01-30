import * as Yup from "yup";
import serverAPI from "../config/serverAPI";
import { toast } from "react-toastify";

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
    try {
      const res = await serverAPI.post("/accounts/login/nt/", data);
      console.log("response Login ", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userRole", res.data.user_info.user_role);
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("userRole"));
    } catch (error) {
      console.log(error, "error from catch");
    }
  };

  return {
    loginData,
    Initial_value,
    formValidation,
  };
};

export default useLogin;
