import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Navbar from "./Navbar";
import DrawerBody from "./DrawerBody";
import Navbar from "../navbar";
import AdminNavbar from '../AdminNavbar'


export function SideBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = React.useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{
          width: "273px",
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container.current}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "273px",
            },
          }}
        >
          <DrawerBody />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `273px`,
              top: '58px'
            },
          }}
          open
        >
          <DrawerBody />
        </Drawer>
      </Box>
    </Box>
  );
}
