import { Button, CircularProgress } from "@mui/material";

import React from "react";

const SecondaryButton = ({
  children,
  startIcon,
  color = "text.primary",
  variant = "outlined",
  loaderColor,
  sx,
  isLoading,
  ...otherProps
}) => {
  return (
    <Button
      sx={{
        color: 'black',
        // height: "36px",
        // fontSize: {
        //   xs: "0.6rem",
        //   md: "0.8rem",
        // },
        // alignItems: "center",
        // background: "black",
        WebkitBackgroundClip: "text",
        display: "flex",
        alignitems: "flex-start",
        textTransform: "none",
        borderRadius: "3px",
        border: "1px solid var(--Linear-BG, #FF9F0A)",

        fontStyle: "normal",
        fontFamily: "satoshi",
        ...sx,
      }}
      {...otherProps}
    >
      {isLoading && (
        <CircularProgress
          color={loaderColor ? loaderColor : color}
          size={20}
          className="me-2 "
        />
      )}{" "}
      {startIcon} {children}
    </Button>
  );
};

export default SecondaryButton;
