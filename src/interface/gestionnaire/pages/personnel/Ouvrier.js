import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import OuvrierTable from '../../components/Table/GestionCompte/OuvrierTable'
import CarteOuvrier from '../../components/ListeCarte/CarteOuvrier'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableChartIcon from '@mui/icons-material/TableChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function Ouvrier() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
      <Grid container spacing={3}>
        <Grid item xs>
           <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label={<TableChartIcon/>} {...a11yProps(0)} />
              <Tab label={<CreditCardIcon/>} {...a11yProps(1)} />
              <Button sx={{ position: 'relative', width:"80px", marginRight:"10px", marginLeft:"20px"}} color="primary" variant="contained"><Link to ="/gestionnaire/camions" style={{color:"white"}}>Camion</Link></Button>
              <Button sx={{ position: 'relative', width:"80px"}} color="primary" variant="contained"><Link to ="/gestionnaire/poubelles" style={{color:"white"}}>Zone</Link></Button>  
            </Tabs>
        </Grid>
      </Grid>
      </Box>
        <TabPanel value={value} index={0}>
          <OuvrierTable/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <CarteOuvrier/>
        </TabPanel>
    </>    
  )
}
