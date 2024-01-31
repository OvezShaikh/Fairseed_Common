import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  PiTrendUpDuotone,
  PiStudent,
  PiHandCoins,
  PiGenderFemale,
  PiMegaphone,
  PiMosque,
  PiAlarm,
  PiHeart,
} from "react-icons/pi";




export default function ScrollableTabsButtonForce() {


 


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const col = {
    bor: "#FF9F0A",
  };

  return (
    <Box sx={{ maxWidth: { xs: 250, sm: 500 ,md:'90%', lg :'92%' },bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        sx={{

          maxWidth: 1740,

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
            marginLeft: "0.5rem",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiStudent
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
            marginLeft: "0.5rem",
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiHandCoins
                style={{ color: "red" }}
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
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiGenderFemale
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
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiMegaphone
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
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiMosque
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
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiAlarm style={{ color: "red" }} className="icon pr-2 w-7 h-7" />
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
            fontStyle: "normal",
          }}
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PiHeart style={{ color: "red" }} className="icon pr-2 w-7 h-7" />
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
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// // import images from '../../constants/images';
// import { PiTrendUpDuotone,  PiStudent } from "react-icons/pi";

// export default function ScrollableTabsButtonForce() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const col= {
//     bor: '#FF9F0A'
//   }

//   const tabStyles = {
//     color: (theme) => (value === 0 ? theme.palette.common.white + ' !important': theme.palette.text.primary),
//     borderRadius: 'var(--Spacing-24, 50px)',
//     border: '1.5px solid rgb(248, 85, 85)',
//     fontFamily: 'Satoshi',
//     fontSize: '16px',
//     fontStyle: 'normal',
//     textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },
//   };

//   return (
//     <Box sx={{ maxWidth: { sm: 600, md: 774, lg: 1450 }, bgcolor: 'background.paper' }}>
//     <Tabs
//       value={value}
//       onChange={handleChange}
//       variant="scrollable"
//       scrollButtons
//       allowScrollButtonsMobile
//       aria-label="scrollable force tabs example"
//       indicatorColor="transparent"
//       sx={{
//         "& .Mui-selected": {
//           background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)',
//           color: 'white',
//         },
//       }}
//      >
//       <Tab
//         label={
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <PiTrendUpDuotone style={{ marginRight: '4px' }}/>
//             Trending
//           </Box>
//         }
//         sx={tabStyles}
//         style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satosh',marginLeft:'0.5rem',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}
//       />

//       <Tab
//         label={
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <PiStudent style={{ marginRight: '4px' }}/>
//             Scholarship
//           </Box>
//         }
//         sx={tabStyles}
//         style={{color: (theme) => (value === 1 ? theme.palette.text.primary: theme.palette.common.white),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satosh',marginLeft:'0.5rem',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}
//       />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satosh',marginLeft:'0.5rem',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}  label="Most Supported" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',fontFamily:'Satosh',marginLeft:'0.5rem',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Women Empowerment" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="NGO Initiatives" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Religious Studies" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Expiring Soon" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Needs Love" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Newly added" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Item Three" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Item Seven" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="trending" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}   label="Newly added" />

//         <Tab style={{color: (theme) => (value === 1 ? theme.palette.common.white : theme.palette.text.primary),borderRadius: 'var(--Spacing-24, 50px)',border: '1.5px solid rgb(248, 85, 85)',marginLeft:'0.5rem',fontFamily:'Satosh',fontSize:'16px',fontStyle:'normal',textTransform: 'capitalize',
//     '&:first-letter': {
//       textTransform: 'uppercase',
//     },}}     label="Item Three" />

//       </Tabs>
//     </Box>
//   );
// }
