import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TablePanne from './TablePanne';
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
        <Box sx={{ p: 1}}>
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
export default function TopTablePannePoubelle({tableData}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    if(tableData!==null){
  return (
    <>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Durée" {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                    <Tab label="Coût" {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
                </Tabs>
            </Grid>
          </Grid>
        </Box>
        <TabPanel value={value} index={0}>
           <TablePanne typeFiltrage="nbjours" Panne="poubelle" data={tableData.top_panne_poubelles_nbr_jours}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <TablePanne typeFiltrage="cout" Panne="poubelle" data={tableData.top_panne_poubelles_cout}/>
        </TabPanel>
     </>
    );}
  else{return <></>}
}
