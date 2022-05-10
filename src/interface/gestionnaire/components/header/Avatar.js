import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { ListItemIcon } from '@mui/material';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    // boxShadow: 0 0 0 2px ${theme.palette.background.paper},
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.😎',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function BadgeAvatars() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
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
            <IconButton size="large" aria-label="show 4 new mails" color="secondary" id="inbox-button" aria-controls={openInbox ? 'inbox-menu' : undefined} 
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


            <Tooltip title="Account settings">
              <Button id="fade-button" aria-controls={open?'fade-menu':undefined} aria-haspopup="true" aria-expanded={open ?'true':undefined} onClick={handleClick} color='secondary'>
                <StyledBadge overlap="circular" anchorOrigin={{vertical:'bottom',horizontal:'right'}} variant="dot">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>    
              </Button>
            </Tooltip>
            <Menu  id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button'}} anchorEl={anchorEl} open={open}  onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}> <Avatar />Mon Profile  </MenuItem>
                <MenuItem onClick={handleClose}>Se Déconnecter</MenuItem>
                <MenuItem> <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon> Settings </MenuItem>
                <MenuItem> <ListItemIcon> <Logout   fontSize="small" /> </ListItemIcon>  Logout  </MenuItem>
            </Menu>
    </Box>
  );
}
