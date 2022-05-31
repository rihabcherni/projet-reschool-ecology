import React ,{useState , useEffect, useLayoutEffect} from "react";
import { Outlet} from 'react-router-dom';
import { MenuItem,DrawerHeader,AppBar,Drawer } from "../../Global/SideBarFunction";
import { linkDetailsGestionnaire } from "./components/sideBar/LinkGestionnaire";
import {Toolbar,Box,Button, List, IconButton} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderRightIcon from "./components/header/HeaderRightIcon";
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme,experimental_extendTheme} from '@mui/material/styles';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import { grey } from '@mui/material/colors';
import Logo from '../../Global/images/reschool-blanc.png'
/*   dark-light  components */
const DarkLightMode = () => {
      const { mode, setMode } = useColorScheme();
      const [mounted, setMounted] = useState(false);
      useEffect(() => {setMounted(true);}, []);
      if (!mounted) {  return null;}
      return (
          <Button variant="contained" onClick={() => {if (mode === 'light') {  setMode('dark');} else { setMode('light'); }}} >
              {mode === 'light' ?  <Sun sx={{color:"white"}} /> :<Moon  sx={{color:"white"}}/>}
          </Button>
      );
};
const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
        palette: { 
            primary: {main: '#4bae4f'},
            secondary: { main: '#fff'},
            text: {  primary: grey[900], secondary:  grey[600] },
        },
    },
    dark: {
        palette: {
            primary: {main: '#4bae4f' },
            secondary: { main: '#fff'},
            text: { primary:grey[800], secondary: grey[500]},
        },
    },
  },
});
const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
/*    dark-light  components                        */
export default function InterfaceGestionnaire() {
  const [color, setColor] = useState(null);
  useEnhancedEffect(() => { setColor(document.getElementById('css-vars-custom-theme'));}, []);
  
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  return (
      <div id="css-vars-custom-theme">
        <CssVarsProvider theme={theme} colorSchemeNode={color || null} colorSchemeSelector="#css-vars-custom-theme" colorSchemeStorageKey="custom-theme-color-scheme" modeStorageKey="custom-theme-mode">
            <Box bgcolor="background.paper" sx={{ p: 1 }}>
                  <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} sx={{backgroundColor:"#4bae4f"}}>
                        <Toolbar>
                              <Box sx={{marginRight: 5, ...(open && { display: 'none' })  }}>
                                  <div  style={{fontWeight:"bold", color:"white" ,margin:"0 0 0 -15px",fontFamily: 'Fredoka'}}>
                                      <img src={Logo} style={{verticalAlign: "middle",marginRight:"20px", width:"40px", borderRadius:"50%"}}/>               
                                      <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" ><MenuIcon sx={{ fontSize: 25 }} /> </IconButton>
                                  </div>
                              </Box>               
                              <Box sx={{ flexGrow: 1 }} />      
                              <DarkLightMode />
                              <HeaderRightIcon/>             
                        </Toolbar>  
                    </AppBar>
                    <Drawer PaperProps={{sx:{backgroundColor:"#4bae4f"}}} variant="permanent" open={open}>
                                <div  style={{fontWeight:"bold", color:"white" ,margin:"9px 10px",fontFamily: 'Fredoka'}}>
                                  <img src={Logo} style={{verticalAlign: "middle", width:"40px", borderRadius:"50%"}}/>
                                  <span style={{fontSize:"20px"}} > RE:School Ecology </span>
                                  <IconButton onClick={handleDrawerClose}><MenuIcon sx={{ fontSize: 25 }}/></IconButton>
                                </div>
                            <List> {linkDetailsGestionnaire.map((lien, key)=> <><MenuItem key={key} item={lien} open={open}/></>)}</List>
                    </Drawer>              
                        <Box component="main" sx={{ flexGrow: 1,p:2 }}>
                            <DrawerHeader />
                            <Outlet/>
                        </Box>            
                  </Box>

                  <Box open={open}  sx={{ backgroundColor: 'lightgrey',position:"fixed",bottom:0,width:'100%',height:30,textAlign:'center'}}>
                      <Box>
                        Re school ecology © 2022    
                        <a  href='https://www.facebook.com/RESCHOOL.EDUCATION/'> facebook</a>
                        <a  href='https://www.facebook.com/RESCHOOL.EDUCATION/'> website</a>
                      </Box>
                  </Box>
            </Box>
        </CssVarsProvider>
    </div>
  );
}
