import React from 'react'
import PoubelleTable from '../../components/Table/gestionPoubelleEtablissement/Poubelle/PoubelleTable'
import ZoneTravailTable from "../../components/Table/gestionPoubelleEtablissement/ZoneTravail/ZoneTravailTable"
import EtablissementTable from "../../components/Table/gestionPoubelleEtablissement/Etablissement/EtablissementTable"
import BlocEtablissementTable from "../../components/Table/gestionPoubelleEtablissement/BlocEtablissement/BlocEtablissementTable"
import EtageEtablissementTable from "../../components/Table/gestionPoubelleEtablissement/EtageEtablissement/EtageEtablissementTable"
import BlocPoubelleTable from "../../components/Table/gestionPoubelleEtablissement/BlocPoubelle/BlocPoubelleTable"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
export default function Poubelles() {
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
                <Tab label="Zone travail" value="1" />
                <Tab label="Etablissement" value="2" />
                <Tab label="Blocs Etablissement" value="3" />
                <Tab label="Etages Etablissement" value="4" />
                <Tab label="Blocs Poubelles" value="5" />
                <Tab label="Poubelles" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1"><ZoneTravailTable/></TabPanel>
            <TabPanel value="2"> <EtablissementTable/> </TabPanel>
            <TabPanel value="3"><BlocEtablissementTable/></TabPanel>
            <TabPanel value="4"><EtageEtablissementTable/></TabPanel>
            <TabPanel value="5"><BlocPoubelleTable/></TabPanel>
            <TabPanel value="6"><PoubelleTable/></TabPanel>
          </TabContext>
        </Box>
    </>

    )
}
