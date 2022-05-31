import React , {useEffect, useState} from 'react'
import InterHeader from './components/Header/InterHeader';
import Interfooter from './components/Footer/InterFooter';
import InterMain from './components/InterMain';
import Drawer from 'react-modern-drawer'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Menu,  Sidebar} from 'semantic-ui-react'
import styled from 'styled-components'
import { Button , Icon} from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { IconButton } from '@mui/material';
import  { FaBars } from 'react-icons/fa'

const MobileIcon= styled.div`
    display: none;
    @media screen and (max-width: 700px){
        display: block;
        position: absolute;
        right: 25px;
        top:40px;
        padding : 5px;
        transform: translate (-100%, 60%);
        font-size: 1.8rem;
        z-index:101;
        cursor: pointer;
        background-color:green;
        color:white;
        box-shadow: 0 0 10px 5px;
    }
`
export default function InterfaceInternaute() {
  const [visible, setVisible] = useState(false)


  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 800;
  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize); 
   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);
  const [activeItem, setActiveItem] = useState('accueil');
  return (
    <>
        {width > breakPoint? (
          <>
            <InterHeader/>
            <InterMain/>
            <Interfooter/>
          </>
        ) : (
       <>   
       <MobileIcon style={{borderRadius:"5px" , backgroundColor:"#32CD32"}} >
          <IconButton size="medium" onClick={toggleDrawer} > <FaBars style={{color:"white"}}/> </IconButton>
        </MobileIcon>
      
          <Drawer open={isOpen} direction='right' size={170} style={{padding:"10px"}} >
          <Sidebar  as={Menu}  animation='overlay' icon='labeled' inverted  onHide={() => setVisible(false)} vertical visible='true'  width='300px'>
            <Button color='green' onClick={toggleDrawer} style={{color:"white", backgroundColor:"#1b1c1d" , margin:"10px 100px 10px 0 "}}><CloseIcon /></Button>
            <Container >
            <Menu.Item as='a' href='#accueil' name='accueil' active={activeItem === 'accueil'}  onClick={() => setActiveItem("accueil")}  ><Icon name='home' /> Accueil </Menu.Item>  
            <Menu.Item as='a' href='#a-propos' name='a-propos'  active={activeItem === 'a-propos'}  onClick={() => setActiveItem("a-propos")}    ><Icon name='list'/> A Propos</Menu.Item>
            <Menu.Item as='a' href='#produits' name='produits' active={activeItem === 'produits'}  onClick={() => setActiveItem("produits")}  ><Icon name='cart'/>Produits </Menu.Item>
            <Menu.Item as='a' href='#statistique' name='statistique'  active={activeItem === 'statistique'}  onClick={() => setActiveItem("statistique")} ><Icon name='dashboard'/> Statistique </Menu.Item>
            <Menu.Item as='a' href='#mission' name='mission'  active={activeItem === 'mission'}  onClick={() => setActiveItem("mission")}> <Icon name='list alternate outline'/>Mission</Menu.Item>
            <Menu.Item as='a' href='#contact' name='contact'  active={activeItem === 'contact'}  onClick={() => setActiveItem("contact")}> <Icon name='envelope'/> Contact</Menu.Item>
            <Menu.Item >  <Button as={Link} to="/responsable-etablissement/login"  color='green'> Se connecter </Button> </Menu.Item>
         </Container>
            </Sidebar>
            </Drawer>
          <Sidebar.Pushable>     
          <Sidebar.Pusher dimmed={visible} >
            <InterHeader/>
            <InterMain/>
            <Interfooter/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>   
        </>      )}

                
     
        

    </> 
  )
}
