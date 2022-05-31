import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { ListItemIcon } from '@mui/material';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from 'react-modern-drawer'
import CloseIcon from '@mui/icons-material/Close';
import { Link  , Outlet,useNavigate} from 'react-router-dom';
import Swal from "sweetalert";
import axios from "axios";
import {StyledBadge} from '../../../../style'
import Panier from '../RightSidebar/Panier';


export default function BadgeAvatars() {
  
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
/**                logout                   */

  const logoutSubmit= (e)=>{
    e.preventDefault();
    axios.post(`api/auth-responsable-etablissement/logout`).then(res=>{
      if(res.data.status===200){
        localStorage.removeItem('auth_token_responsable');
        localStorage.removeItem('auth_email');
        Swal('Success',res.data.message,"success")
        navigate("/")   
      }
    })
  }
  var AuthButtons='';
    if(localStorage.getItem('auth_token_responsable')){
      AuthButtons=( <li onClick={logoutSubmit}>Se Déconnecter</li> )
  }
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
/*------------- Message --------------*/
  const [inbox, setInbox] = React.useState(null);
  const openInbox = Boolean(inbox);
  const clickInbox = (event) => {
    setInbox(event.currentTarget);
  };
  const closeInbox = () => {
    setInbox(null);
  };
/*------------- Notification --------------*/
  const [notification, setNotification] = React.useState(null);
  const openNotification = Boolean(notification);
  const clickNotification = (event) => {
    setNotification(event.currentTarget);
  };
  const closeNotification = () => {
    setNotification(null);
  };
  return (
     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <Tooltip title="Panier">
              <IconButton size="large" aria-label="visualiser panier" color="secondary" id="inbox-button" aria-controls={openInbox ? 'inbox-menu' : undefined} 
                  aria-haspopup="true" aria-expanded={openInbox ? 'true' : undefined} onClick={toggleDrawer}>
                    <Badge badgeContent={1} color="error">
                      <ShoppingCartIcon fontSize='large' />
                    </Badge>
              </IconButton>
          </Tooltip>
          <Drawer open={isOpen} direction='right' size={350} >
            <Button onClick={toggleDrawer}><CloseIcon /></Button>
            <Panier/>
          </Drawer>











            <IconButton size="large" aria-label="show  messages" color="secondary" id="inbox-button" aria-controls={openInbox ? 'inbox-menu' : undefined} 
               aria-haspopup="true" aria-expanded={openInbox ? 'true' : undefined} onClick={clickInbox}>
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
            </IconButton>
            <Menu id="inbox-menu"  MenuListProps={{ 'aria-labelledby': 'inbox-button' }} anchorEl={inbox} open={openInbox}  onClose={closeInbox} TransitionComponent={Fade} >
              <MenuItem onClick={closeInbox}>Message 1</MenuItem>
              <MenuItem onClick={closeInbox}>Message 2</MenuItem>
              <MenuItem onClick={closeInbox}>Message 3</MenuItem>
              <MenuItem onClick={closeInbox}>Message 4</MenuItem>
            </Menu> 


            <IconButton  size="large"  aria-label="show 17 new notifications" color="secondary" id="notification-button" aria-controls={openNotification ? 'notification-menu' : undefined} 
            aria-haspopup="true" aria-expanded={openNotification ? 'true' : undefined} onClick={clickNotification}>
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
            </IconButton>
            <Menu id="notification-menu"  MenuListProps={{ 'aria-labelledby': 'notification-button' }} anchorEl={notification} open={openNotification}  onClose={closeNotification} TransitionComponent={Fade} >
              <MenuItem onClick={closeNotification}>Notification 1</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 2</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 3</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 4</MenuItem>
            </Menu> 


            <Tooltip title="Profile">
              <Button id="fade-button" aria-controls={open?'fade-menu':undefined} aria-haspopup="true" aria-expanded={open ?'true':undefined} onClick={handleClick} color='secondary'>
                <StyledBadge overlap="circular" anchorOrigin={{vertical:'bottom',horizontal:'right'}} variant="dot">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>    
              </Button>
            </Tooltip>
            <Menu  id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button'}} anchorEl={anchorEl} open={open}  onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>
                    <Link to ="/responsable-etablissement/profile">
                        <ListItemIcon > <Avatar sx={{width:"20px",height:"20px"}}/></ListItemIcon>
                        Mon Profile 
                    </Link> 
                </MenuItem>
                <MenuItem> <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon> Settings </MenuItem>
                <MenuItem onClick={handleClose}> <ListItemIcon> <Logout   fontSize="small" /> </ListItemIcon>  {AuthButtons}  </MenuItem>
            </Menu>
    </Box>
  );
}
