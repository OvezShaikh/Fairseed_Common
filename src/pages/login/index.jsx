import { Box, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputs/InputField";
import PrimaryButton from "../../components/inputs/PrimaryButton";
import AuthContext from "../../context/authContext/AuthContext";
import { useCreateOrUpdate } from "../../hooks";
import MedelaLogo from "../../images/MedelaLogo.png";
import LoginLeftEllipse from "../../images/top.png";
import LoginRightEllipse from "../../images/Ellipse 5.png";
import * as yup from "yup";

import { normalizeError } from "./utils/MSUtils";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { useIsAuthenticated } from "@azure/msal-react";
import { callMsGraph } from "./graph";

const LogIn = () => {
  const isAuthenticated = useIsAuthenticated();
  const [graphData, setGraphData] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { instance, accounts } = useMsal();
  const { Login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function RequestProfileDataAndLogin() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        serverSideLogin(response.accessToken);
        callMsGraph(response.accessToken).then((response) => {
          console.log(response);
          setGraphData(response);
          localStorage.setItem("userObjectMsal", JSON.stringify(response));
        });
      });
  }

  const handleLogin = (loginType) => {
    localStorage.setItem("serverSideLogin", 0);
    setIsLoading(true);
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
        setIsLoading(false);
        enqueueSnackbar(normalizeError(e).message, {
          variant: "error",
          preventDuplicate: true,
        });
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
        setIsLoading(false);
        enqueueSnackbar(normalizeError(e).message, {
          variant: "error",
          preventDuplicate: true,
        });
      });
    }
  };
  if (isAuthenticated && !parseInt(localStorage.getItem("serverSideLogin"))) {
    RequestProfileDataAndLogin();
  }
  const serverSideLogin = async (accessToken) => {
    setIsLoading(true);
    localStorage.setItem("serverSideLogin", 1);
    let msalSessions = {
      accessToken: accessToken,
    };
    mutate(msalSessions, {
      onSuccess: (data) => {
        const LoggedIn = Login(data?.data?.data);
        if (LoggedIn) {
          navigate("/all-numbers");
        }
      },
    });
  };

  const { mutate } = useCreateOrUpdate({
    url: `/auth/login`,
  });

  const validations = yup.object({
    email: yup
      .string()
      .email()
      .trim("This field cannot include leading and trailing spaces")
      .strict(true)
      .required("Email is required!"),
  });
  return (
    <>
      <Box
        className="login-page"
        style={{ isolation: "isolate", background: "#fafafa" }}
      >
        <img
          src={LoginRightEllipse}
          alt="right ellipse  svg"
          className="position-absolute"
          style={{
            // zIndex: "-1",
            bottom: "0",
            right: "0",
            backdropFilter: `blur(81.9296px)`,
            background: `rgba(255, 255, 255, 0.59)`,
          }}
        />
        <img
          src={LoginLeftEllipse}
          alt="left ellipse svg"
          className="position-absolute "
          style={{
            // zIndex: "-1",
            top: "0",
            left: "75px",
          }}
        />

        <Box
          style={{
            width: "623px",
            boxShadow: `0px 54px 54px rgba(245, 130, 32, 0.05), 1px 4px 104px rgba(20, 20, 43, 0.04), 0px 98px 66px rgba(19, 18, 66, 0.02)`,
            borderRadius: "24px",
            background: `linear-gradient(72.95deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)`,
          }}
          className="p-5 d-flex flex-column align-items-center text-center position-relative"
        >
          <img
            src={MedelaLogo}
            alt="Logo"
            style={{ height: "30px", width: "150px" }}
            className="mb-3"
          />
          <Typography variant="h4" color={"#171717"} className="mb-2 fw-4">
            Medela Identity and Access Management (IAM)
          </Typography>
          <Typography
            variant="p"
            color={"#F58220"}
            fontWeight="400"
            className="mb-3"
          >
            {process.env.REACT_APP_VERSION_TEXT}
          </Typography>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validations}
            onSubmit={(values) => {
              mutate(values, {
                onSuccess: (data) => {
                  const LoggedIn = Login(data?.data?.data);
                  if (LoggedIn) {
                    navigate("/all-numbers");
                  }
                },
              });
            }}
          >
            {() => (
              <Form style={{ width: "100%" }}>
                <Grid
                  container
                  spacing={2}
                  className="d-flex justify-content-center"
                >
                  <Grid item xs={8}>
                    {process.env.REACT_APP_ENVIRONMENT === "development" && (
                      <InputField name="email" placeholder="Email" />
                    )}
                  </Grid>
                  <Grid item xs={8}>
                    {process.env.REACT_APP_ENVIRONMENT === "development" ? (
                      <PrimaryButton
                        sx={{
                          background: `linear-gradient(260.91deg, rgba(249, 170, 86, 0.8) -0.29%, #FEDCA5 99.71%, #FFD300 99.71%)`,
                          color: "#171717",
                          borderRadius: "6px",
                          padding: "12px 40px",
                        }}
                        type="submit"
                      >
                        LOGIN
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton
                        isLoading={isLoading}
                        sx={{
                          background: `linear-gradient(260.91deg, rgba(249, 170, 86, 0.8) -0.29%, #FEDCA5 99.71%, #FFD300 99.71%)`,
                          color: "#171717",
                          borderRadius: "6px",
                          padding: "12px 40px",
                        }}
                        type="button"
                        onClick={() => handleLogin("redirect")}
                      >
                        LOGIN
                      </PrimaryButton>
                    )}{" "}
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
