import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationResponsable from './NotificationResponsable';
import ProfileResponsable from './ProfileResponsable';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessagesResponsable from './MessageResponsable';

function TabPanel(props) {
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
        <Box sx={{ p: 1 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function RightSideBarResponsable() {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
            <IconButton color="secondary" size="medium" onClick={toggleDrawer}>
                 <MoreVertIcon/>
            </IconButton>
            <Drawer open={isOpen} direction='right' size={350} >
              <Button onClick={toggleDrawer}><CloseIcon /></Button>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab sx={{width:"33%"}}  icon={<ChatIcon />}  aria-label="messages"  {...a11yProps(0)} />
                      <Tab  sx={{width:"33%"}}  icon={<NotificationsActiveIcon />}  aria-label="notifications"  {...a11yProps(1)} />
                      <Tab  sx={{width:"33%"}} icon={<PersonPinIcon />}  aria-label="profile"  {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} >
                  <MessagesResponsable/>
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <NotificationResponsable/>
                </TabPanel>
                <TabPanel value={value} index={2} >
                  <ProfileResponsable toggleDrawer={toggleDrawer}/>      
                </TabPanel>
              </Box>
            </Drawer>
        </>
  )
}


