import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link, json } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import serverAPI from '../../config/serverAPI';
import images from '../../constants/images';
import { useGetAll } from '../../Hooks';



export default function ProfileAvatar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function logout() {
    // Remove the 'token' item from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user_info');
    console.log(localStorage.getItem('token'))
    window.location.href = '/Home';
    toast.error("Logout Successful !", {
      position: "top-center"
    })
  }


  const [user, setUser] = React.useState({})

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let userData = localStorage.getItem('user_info')
  let Data = JSON.parse(userData)
  // console.log(Data)
  let role = Data?.user_role;
  let image = Data?.profile_pic; 
  
  let img = `${process.env.REACT_APP_API_URL}`+ image;
  console.log(img , '<======')


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={img}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          role === 'Admin' && (
            <>
              <MenuItem onClick={handleClose}>
                <Link to="/AdminPanel">
                  <ListItemIcon>
                    <Avatar 
                    src={img}
                    />
                  </ListItemIcon>
                  AdminPanel
                </Link>
              </MenuItem>
               <Divider />
               </>
          )
        }
 
        <MenuItem onClick={handleClose}>
          <Link to={"/User"}>
            <ListItemIcon>
              <img src={images.Dashboard} alt="" />
            </ListItemIcon>
            Dashboard
          </Link>
        </MenuItem>


        <MenuItem onClick={handleClose}>
          <Link to={"/account-settings"}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <button
            onClick={() => logout()}
          >
            Logout
          </button>
        </MenuItem>

      </Menu>
    </React.Fragment>
  );
}