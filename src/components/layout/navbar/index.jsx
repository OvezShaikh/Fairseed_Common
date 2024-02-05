import React, { useContext, useMemo, } from "react";
import images from "../../../constants/images";
import { Navbar } from "react-bootstrap";
import {
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
// import Dropdown from "./DropDown";
// import AuthContext from "../../../authContext/AuthContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SettingsIcon from "@mui/icons-material/Settings";
import { LuPanelRight } from "react-icons/lu";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";






const NavbarContainer = ({ handleDrawerToggle }) => {

  // const { user } = useContext(AuthContext);
  const sideBar = useMediaQuery("(max-width: 900px)");
  const [alignment, setAlignment] = React.useState("web");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  function handleClick(event, path) {
    navigate(`/${path}`)
    event.preventDefault();
    console.info("You clicked a breadcrumb.");

  }



  let title = useMemo(
    () =>
      `${pathname
        .replace("/", "")
        .replace(/\/*\[[^\]]*]/g, "")
        .replace(/-/g, " ")
        .replace(/\//g, "  ")
        .replace("General Settings", " ")}`,

    [pathname]
  );


  title = title?.split("AdminPanel").reverse()[0]

  return (
    <Navbar
      className="py-2"
      variant="light"
      style={{
        display: "inline-block",
        position: "fixed",
        right: 0,
        top: '58px',
        zIndex: "99",
        padding: '16px 16px  ',
        width: `${sideBar ? "100vw" : "calc(100vw - 273px)"}`,
        height: "77px",
        backgroundColor: `${sideBar ? "rgba(255, 235, 209, 1)" : "#fff"}`,
        backgroundColor: "#fff",
        borderBottom: `1px solid #E2E2E2`,

      }}
    >
      <Grid
        container
        className={`${sideBar
          ? "d-flex justify-content-between pe-1"
          : "d-flex justify-content-between"
          }`}
      >
        <Grid item xs={3} md={7}>
          <Toolbar sx={{ minHeight: "60px !important", width: "100%", padding: 0, }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: "block", md: "none" } }}
            >
              <MenuIcon className="my-auto block " />
            </IconButton>
            {!sideBar && (
              <Box className="d-flex justify-content-between align-items-center w-100 ">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  fontSize={"1rem"}
                  color={"black"}
                  display="flex"
                  alignItems="center"
                  className="text-capitalize text-truncate"
                  title={title}
                >
                  <div
                    className="me-3"
                    onClick={() => navigate(-1)}
                  >
                    <img src={images.account} alt="" />
                  </div>
                  <div className="flex flex-col " style={{ fontFamily: 'satoshi', fontSize: 20, fontWeight: 600 }} >
                    {title ? <>{title}</> : "dashboard"}
                    <Breadcrumbs

                      className="breadcrumbs_title"
                      sx={{
                        color: '#B6BAC3',
                        fontSize: 16,
                        fontFamily: 'Satoshi',
                        fontWeight: 500
                      }}
                      separator={<NavigateNextIcon aria-label="breadcrumb" />}
                      aria-label="breadcrumb"
                    >
                      {/* {breadcrumbs} */}
                      {pathname?.substr(1)?.split('/')?.map((item, i) => {
                        return (
                          <Link
                            underline="hover"
                            style={{ cursor: 'pointer' }}
                            key={i}
                            color="inherit"
                            onClick={(e) => handleClick(e, item)}
                          >
                            {item}
                          </Link>
                        )
                      })}
                    </Breadcrumbs>
                  </div>
                </Typography>
              </Box>

            )}
          </Toolbar>
        </Grid>

        <Grid
          item
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems="center"
          marginRight={'1rem'}
        >
          {/* <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            className="font-light"
            style={{
              fontSize: "0.75rem",
              marginRight: "10px",
              color: "#828282",
              fontWeight: "500",
              width: `${isTab ? (sideBar ? "" : "130%") : "150%"}`,
            }}
          >
            <p className="text-truncate m-0" style={{ maxWidth: "100%" }}>
              {"Username"}
            </p>
            <p className="text-truncate m-0" style={{ maxWidth: "100%" }}>
              {"Designation"}
            </p>
          </Stack>
          <Dropdown>
            <Avatar
              sx={{
                width: 35,
                height: 35,
                marginRight: `15px`,
                color: "#fff",
                background: "#0094AA",
              }}
              className="my-auto"
            />
          </Dropdown> */}
          <ToggleButtonGroup

            size="small"
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="web" aria-label="color">
              <SettingsIcon />
              <ArrowDropDownIcon />
            </ToggleButton>

            <ToggleButton value="underlined" aria-label="underlined">
              <LuPanelRight style={{ fontSize: 27 }} />
            </ToggleButton>
          </ToggleButtonGroup>

        </Grid>


      </Grid>
    </Navbar>
  );
};

export default NavbarContainer;
