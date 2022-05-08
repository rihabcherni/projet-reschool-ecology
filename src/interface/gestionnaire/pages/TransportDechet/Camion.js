import React from 'react'
import CamionsTable from '../../components/Table/transportDechet/CamionsTable'
import ZoneDepotsTable from '../../components/Table/transportDechet/ZoneDepotsTable'
import DepotTable from '../../components/Table/transportDechet/DepotTable'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Camion() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Camion" value="1" />
                <Tab label="Zone Depots" value="2" />
                <Tab label="Depot" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1"><CamionsTable/></TabPanel>
            <TabPanel value="2"> <ZoneDepotsTable/> </TabPanel>
            <TabPanel value="3"><DepotTable/></TabPanel>
          </TabContext>
        </Box>
     
    </>
  )
}
