import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  PiTrendUpDuotone,
  PiStudentDuotone,
  PiHandCoinsDuotone,
  PiGenderFemaleDuotone,
  PiMegaphoneSimpleDuotone,
  PiMosqueDuotone,
  PiAlarmDuotone,
   PiHeartDuotone ,
} from "react-icons/pi";

export default function ScrollableTabsButtonForce({
  name,
  label,
  icone
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const col = {
  //   bor: "#FF9F0A",
  // };

  return (
    <Box sx={{ maxWidth: { xs: 620, sm: 1440 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        sx={{
          "& .Mui-selected": {
            background: "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
            color: "white !important",
            textTransform: "capitalize",
            fontSize: "18px !important",

            "& .icon": {
              color: "white !important",
            },
          },
          "& .MuiButtonBase-root": { textTransform: "capitalize" },
          fontSize: "20px !important",

        }}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        indicatorColor="transparent"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiTrendUpDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Trending
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            fontFamily: "Satoshi",
            fontSize: "18px",
            marginLeft: "0.5rem",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiStudentDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Scholarship
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            fontFamily: "Satoshi",
            fontSize: "18px",
            marginLeft: "0.5rem",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiHandCoinsDuotone
                style={{ color: "red"}}
                className="icon pr-2 w-7 h-7"
              />
              Most Supported
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            fontFamily: "Satoshi",
            marginLeft: "0.5rem",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiGenderFemaleDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Women Empowerment
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiMegaphoneSimpleDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              NGO Initiatives
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiMosqueDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Religious Studies
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiAlarmDuotone style={{ color: "red" }} className="icon pr-2 w-7 h-7" />
              Expiring Soon
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              < PiHeartDuotone  style={{ color: "red" }} className="icon pr-2 w-7 h-7" />
              Needs Love
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontSize: "18px",
            fontFamily: "Satoshi",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiTrendUpDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Trending
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiTrendUpDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Trending
            </Box>
          }
        />
        <Tab
          style={{
            color: "var(--cool-grey-cool-grey-10, #383A42)",
            borderRadius: "var(--Spacing-24, 50px)",
            border: "1.5px solid rgb(248, 85, 85)",
            marginLeft: "0.5rem",
            fontFamily: "Satoshi",
            fontSize: "18px",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiTrendUpDuotone
                style={{ color: "red" }}
                className="icon pr-2 w-7 h-7"
              />
              Trending
            </Box>
          }
        />
      </Tabs>
    </Box>
  );
}

