import React, { useState , useEffect} from "react";
import Swal from "sweetalert";
import axios from "axios";
import { Link  , Outlet,useNavigate} from 'react-router-dom';
import { MenuItem,DrawerHeader,AppBar,Drawer } from "../../Global/SideBarFunction";
import { LinkResponsableEtablissement } from "./components/SideBar/LinkResponsableEtablissement";
import {Typography,Toolbar,Box,Button, List, IconButton} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import { MdOutlineRecycling } from "react-icons/md";
import HeaderRightIcon from "./components/header/HeaderRightIcon";
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme,experimental_extendTheme} from '@mui/material/styles';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import { teal, deepOrange, orange, cyan ,grey } from '@mui/material/colors';

const ColorSchemePicker = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Button variant="contained"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ?  <Sun color='secondary' /> :<Moon color='secondary'/>}
    </Button>
  );
};
const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#388e3c',
        },
        secondary: {
          main: '#a5d6a7',
        },
        text: {
          primary: grey[900],
          secondary:  grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#212121',
        },
        secondary: {
          main: '#fff',
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      },
    },
  },
});

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function InterfaceResponsableEtablissement() {
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('css-vars-custom-theme'));
  }, []);
  

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const liens = LinkResponsableEtablissement.map((lien, key)=> <><MenuItem key={key} item={lien} open={open}/></>);     
  return (
      <div id="css-vars-custom-theme">
        <CssVarsProvider theme={theme} colorSchemeNode={node || null} colorSchemeSelector="#css-vars-custom-theme" colorSchemeStorageKey="custom-theme-color-scheme" modeStorageKey="custom-theme-mode">
          <Box bgcolor="background.paper" sx={{ p: 1 }}>
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
                          
                            <ColorSchemePicker />
                            <HeaderRightIcon/>             
                        </Toolbar>  
                    </AppBar>
                    <Drawer   PaperProps={{
                      sx: {
                        backgroundColor: "primary.main",
                      }
                    }} variant="permanent" open={open}>
                        <DrawerHeader>
                            <Typography variant="h6" noWrap component="div">
                                    <MdOutlineRecycling/>
                                    RE:SCHOOL Ecology 
                            </Typography>
                            <IconButton onClick={handleDrawerClose}>
                              <MenuIcon/>
                            </IconButton>
                        </DrawerHeader>
                        <List>
                          {liens}             
                        </List>
                    </Drawer>              
                    <Box component="main" sx={{ flexGrow: 1,p:2 }}>
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
            </Box>
        </CssVarsProvider>
    </div>
  );
}
