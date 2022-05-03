import React, { useState } from "react";
import Swal from "sweetalert";
import axios from "axios";
import { Link  , Outlet,useNavigate} from 'react-router-dom';
import { hasChildren,DrawerHeader,AppBar,Drawer } from "./components/sideBar/SideBarFunction";
import RightSideBarGestionnaire from './components/RightSidebar/RightSideBarGestionnaire';
import { linkDetailsGestionnaire } from "./components/sideBar/LinkGestionnaire";
import { styled, useTheme } from '@mui/material/styles';
import {Tooltip,Typography,Toolbar,Box,Button,ThemeProvider,createTheme, List, ListItem, IconButton,ListItemButton ,ListItemText,ListItemIcon,Collapse} from "@mui/material";
import {baseTheme,theme1} from "../../style";
import { deepmerge } from "@mui/utils";
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import { MdOutlineRecycling } from "react-icons/md";
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function InterfaceGestionnaire() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [theme2, setTheme2] = useState(baseTheme);
  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme2, whichTheme);
    setTheme2(createTheme(newTheme));
  };
  const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };
  const SingleLevel = ({ item }) => {
    return (
      <Link key={item.id}   to={item.path}> 
          <ListItemButton   sx={{ maxHeight:35, justifyContent: open ? 'initial' : 'center',  px: 1}}>
              <Tooltip title={item.name}  placement="right" arrow>
                  <ListItemIcon sx={{  minWidth: 0, mr: open ? 1 :'auto',  justifyContent: 'center', }}  >
                  <IconButton color="secondary"
                  size="medium"
                >
                          {item.icon } 
                </IconButton>
                  </ListItemIcon> 
                  </Tooltip>

                  <ListItemText component="div" color="secondary" sx={{ opacity: open ? 1 : 0, color:"white", textDecoration:"none"}}> {item.name}</ListItemText>
          </ListItemButton>
     </Link>
    );
  };
  const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [openSubmenu, setOpenSubmenu] = useState(false);
  
    const handleClick = () => {
      setOpenSubmenu((prev) => !prev);
    };
    return (
      <React.Fragment>
        <ListItem button onClick={handleClick}>
        <Tooltip title={item.name}  placement="right" arrow>
          <ListItemIcon sx={{fontSize:"20px", color:"white"}} >
            {item.icon}
          </ListItemIcon>
          </Tooltip>
          <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0, color:"white",marginLeft:-1.5, textDecoration:"none"}}  />
          {openSubmenu ? <ExpandLessIcon sx={{ color:'white'}} /> : <ExpandMoreIcon sx={{ color:'white'}} />}
        </ListItem>
        <div style={{marginLeft:8}}>
            <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ color:'red'}} >
                {children.map((child, key) => (
                  <MenuItem key={key} item={child} />
                ))}
              </List>
            </Collapse>
        </div>

      </React.Fragment>
    );
  };
  const navigate = useNavigate();

  const logoutSubmit= (e)=>{
    e.preventDefault();
    axios.post(`api/auth-gestionnaire/logout`).then(res=>{
      if(res.data.status===200){
        localStorage.removeItem('auth_token_gestionnaire');
        localStorage.removeItem('auth_email_gestionnaire');
        Swal('Success',res.data.message,"success")
        navigate("/")   
      }
    })
  }

  var AuthButtons='';
  if(!localStorage.getItem('auth_token_gestionnaire')){
    AuthButtons=(
      <>
        <Link to="/gestionnaire/login">Register Gestionnaire</Link>
        <Link to="/register-gestionnaire">Login Gestionnaire</Link>
      </>   )
  }else{  AuthButtons=( <li><button onClick={logoutSubmit}>LogoutGestionnaire</button></li> )
  }
  const liens = linkDetailsGestionnaire.map((lien, key)=> <><MenuItem key={key} item={lien} /></>);     
  return (
    <>
       <ThemeProvider theme={theme2}>
          <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} >
                    <Toolbar>
                        <Box sx={{  marginRight: 5, ...(open && { display: 'none' })  }}>
                                <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" >
                                    <MenuIcon /> 
                                </IconButton>
                                <MdOutlineRecycling/>                
                                RE:SCHOOL Ecology 
                        </Box>               
                        <Box sx={{ flexGrow: 1 }} />
                        <Button onClick={() => setTheme2(baseTheme)} variant="contained" color="primary" > Reset </Button>
                        <Button onClick={() => handleSwitch(theme1)} variant="contained">Theme </Button>
                       {AuthButtons}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                          <IconButton size="large" aria-label="show 4 new mails" color="secondary">
                            <Badge badgeContent={4} color="error">
                              <MailIcon />
                            </Badge>
                          </IconButton>
                          <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="secondary"
                          >
                            <Badge badgeContent={17} color="error">
                              <NotificationsIcon />
                            </Badge>
                          </IconButton>
                          <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="secondary"
                          >
                            <AccountCircle />
                          </IconButton>
                        </Box>
                        <RightSideBarGestionnaire/>
                    </Toolbar>  
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div">
                                <MdOutlineRecycling/>
                                RE:SCHOOL Ecology 
                         </Typography>
                    <IconButton onClick={handleDrawerClose}>
                      <MenuIcon/>
                    </IconButton>
                    </DrawerHeader>
                    <List >
                      {liens}             
                    </List>
                </Drawer>              
                <Box component="main" sx={{ flexGrow: 1,p:2, backgroundColor: 'secondary', }}>
                    <DrawerHeader />
                    <Outlet/>
                </Box>            
          </Box>
          <Box open={open}  sx={{ backgroundColor: 'lightgrey',position:"fixed",bottom:0,width:'100%',height:30,textAlign:'center'}}>
              <Box>
                Re school ecology © 2022    
                <a href='https://www.facebook.com/RESCHOOL.EDUCATION/'> facebook</a>
                <a href='https://www.facebook.com/RESCHOOL.EDUCATION/'> website</a>
              </Box>
          </Box>
      </ThemeProvider>
    </>
  );
}
