import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import images from "../../constants/images";
import './CampaignsTabs.css'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            // sx={{"& .Mui-selected":{
            //   color:'red'
            // }}}
            style={{ fontFamily: "satoshi", fontSize: 30, fontWeight: 500 }}
            label="STORY"
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontFamily: "satoshi", fontSize: 30, fontWeight: 500 }}
            label="UPDATES"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="flex flex-col w-[80%]">
        <p className="text-black/50">
          The Balkans are our closest Muslim Neighbours. After over 40 years of
          communism, religion had almost been wiped out and as a result left a
          whole generation of Muslims without the required knowledge to practice
          their faith.
        </p>
        <br />
        <p className="text-black/50">
          This project ensures that we are able to revive Islam in the Balkans
          and enable the Muslims to regain their identity and practice their
          faith again.
        </p>
        <br/>
        <h1>EDUCATION PROJECT</h1>
      </div>
      <div className="flex flex-col w-[80%]">
        <p className="text-black/50">
          The Balkans are our closest Muslim Neighbours. After over 40 years of
          communism, religion had almost been wiped out and as a result left a
          whole generation of Muslims without the required knowledge to practice
          their faith.
        </p>
        <br />
        <p className="text-black/50">
          This project ensures that we are able to revive Islam in the Balkans
          and enable the Muslims to regain their identity and practice their
          faith again.
        </p>
        <br/>
        <h1>EDUCATION PROJECT</h1>
      </div>
      <div className="flex flex-col w-[80%]">
        <p className="text-black/50">
          The Balkans are our closest Muslim Neighbours. After over 40 years of
          communism, religion had almost been wiped out and as a result left a
          whole generation of Muslims without the required knowledge to practice
          their faith.
        </p>
        <br />
        <p className="text-black/50">
          This project ensures that we are able to revive Islam in the Balkans
          and enable the Muslims to regain their identity and practice their
          faith again.
        </p>
        <br/>
        <h1>EDUCATION PROJECT</h1>
      </div>      <div className="flex flex-col w-[80%]">
        <p className="text-black/50">
          The Balkans are our closest Muslim Neighbours. After over 40 years of
          communism, religion had almost been wiped out and as a result left a
          whole generation of Muslims without the required knowledge to practice
          their faith.
        </p>
        <br />
        <p className="text-black/50">
          This project ensures that we are able to revive Islam in the Balkans
          and enable the Muslims to regain their identity and practice their
          faith again.
        </p>
        <br/>
        <h1>EDUCATION PROJECT</h1>
      </div>
      <div className="flex flex-col w-[80%]">
        <p className="text-black/50">
          The Balkans are our closest Muslim Neighbours. After over 40 years of
          communism, religion had almost been wiped out and as a result left a
          whole generation of Muslims without the required knowledge to practice
          their faith.
        </p>
        <br />
        <p className="text-black/50">
          This project ensures that we are able to revive Islam in the Balkans
          and enable the Muslims to regain their identity and practice their
          faith again.
        </p>
        <br/>
        <h1>EDUCATION PROJECT</h1>
      </div>
      <div className="flex flex-col w-[80%]">
        <p className="text-black/50">
          The Balkans are our closest Muslim Neighbours. After over 40 years of
          communism, religion had almost been wiped out and as a result left a
          whole generation of Muslims without the required knowledge to practice
          their faith.
        </p>
        <br />
        <p className="text-black/50">
          This project ensures that we are able to revive Islam in the Balkans
          and enable the Muslims to regain their identity and practice their
          faith again.
        </p>
        <br/>
        <h1>EDUCATION PROJECT</h1>
      </div>
      <button className="pt-4 inline-flex">
        <img src={images.share_Tabs} alt="" />
        <h2
          className="pl-1"
          style={{
            color: "#CB804B",
            fontSize: 16,
            fontFamily: "satoshi",
            fontWeight: "500",
            textDecoration: "underline",
          }}
        >
          share
        </h2>
      </button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Updates
      </CustomTabPanel>

    </Box>
  );
}
