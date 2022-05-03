import React from 'react'
import CommandePoubelleTable from '../../components/Table/gestionPoubelleEtablissement/CommandePoubelle/CommandePoubelleTable'
import DetailCommandePoubelleTable from '../../components/Table/gestionPoubelleEtablissement/DetailCommandePoubelle/DetailCommandePoubelleTable'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CommandePoubelle() {
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
            <Tab label="Cammande poubelle" value="1" />
            <Tab label="Detail Commande Poubelle" value="2" />

              <Link to ="/gestionnaire/production/stock-poubelles">
                 <Button sx={{ width:"140px", marginRight:"10px", color:"white",marginTop:"7px"}}  variant="contained">Stock poubelle </Button>
              </Link>
           
          </TabList>
        </Box>
        <TabPanel value="1"><CommandePoubelleTable/></TabPanel>
        <TabPanel value="2"> <DetailCommandePoubelleTable/> </TabPanel>
      </TabContext>
    </Box>
    </>
  )
}
