import React ,{useEffect, useState} from 'react'
import { Grid, Typography , Paper ,Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import TopTablePanneCamion from './TopTablePanneCamion';
import Top3 from '../../../../../Global/images/top3.PNG'
import ChartImg from '../../../../../Global/images/chart.png'
import TopTablePannePoubelle from './TopTablePannePoubelle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import  ChartPanne  from './ChartPanne';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
        <Box sx={{ p:  1}}>
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
export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ? "#000" : "#FFF",
      border: ' #FFF solid 3px',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      margin: theme.spacing(0.5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  )
);

export  function Right({tableData ,type}){
  const [value1, setValue1] = React.useState(0);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  return(<div>     
        <Box sx={{margin :"-80px 0 0 0"}}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Tabs value={value1} onChange={handleChange1} aria-label="basic tabs example">
                        <Tab label={<img src={ChartImg} alt="Chart" width="30px"/>} {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                        <Tab label={<img src={Top3} alt="top3" width="30px"/>} {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
                    </Tabs>
                </Grid>
            </Grid>
        </Box>
        {(type==="camion")?
          <>
                <TabPanel value={value1} index={0}>
                    <ChartPanne url='http://127.0.0.1:8000/api/pannes-camion-mois' labelNbr='Nombre panne camion' labelCout='Cout panne camion' titre="nombre pannes totales par mois/année"/>         
                </TabPanel>
                <TabPanel value={value1} index={1}>
                  <Typography sx={{color:"green"}}> Filtrage des pannes camions selon durée et cout :</Typography>
                    <TopTablePanneCamion  tableData={tableData}/> 
                    <Link to="/gestionnaire/pannes-camions">
                        <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">plus d'information <ArrowRightAltIcon/></Button>
                    </Link>  
                </TabPanel>
          </>:
          <>
              <TabPanel value={value1} index={0}>
                  <ChartPanne url='http://127.0.0.1:8000/api/pannes-poubelle-mois' labelNbr='Nombre panne poubelle' labelCout='Cout panne poubelle' titre="nombre pannes totales par mois/année"/>         
              </TabPanel>
              <TabPanel value={value1} index={1}>
                  <Typography sx={{color:"green"}}> Filtrage des pannes poubelles selon durée et cout :</Typography>
                  <TopTablePannePoubelle  tableData={tableData}/> 
                  <Link to="/gestionnaire/pannes-poubelles">
                      <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">plus d'information <ArrowRightAltIcon/></Button>
                  </Link>  
              </TabPanel>
          </>
        }
    </div>);
}
export default function Pannes() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const [tableData, setTableData] = useState(null)
  const getData = () => {

  fetch("http://127.0.0.1:8000/api/pannes-dashboard", requestOptions)
    .then(response => response.json())
    .then(result => setTableData(result))
    .catch(error => console.log('error', error));

  }
  useEffect(() => {
    getData()
  }, [])

  console.log(tableData)
  if(tableData!==null){
 return (<>
        <Box>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Pannes Poubelles" {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                        <Tab label="Pannes Camions " {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
                        <Item sx={{marginLeft:"5.6%"}}> Coût total de panne : {tableData.cout_total_panne} Dinars</Item>
                    </Tabs>
                </Grid>
            </Grid>
        </Box>
        <TabPanel value={value} index={0}>
              <Grid container spacing={3}>
                <Grid item sx={{width:"57%"}}>
                      <Grid container spacing={1}>
                          <Grid item sx={{width:"50%"}}>
                            <Item> <Typography variant='h6' sx={{color:"green"}}>nombre<br/> </Typography>{tableData.nbr_panne_poubelle}</Item>
                          </Grid>
                          <Grid item sx={{width:"50%"}}>
                            <Item> <Typography variant='h6' sx={{color:"green"}}>Pourcentage<br/></Typography> {tableData.pourcentage_panne_poubelle} %</Item>
                          </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                          <Grid item sx={{width:"50%"}}>
                          <Item> 
                              <Typography variant='h6' sx={{color:"red"}}>Coût</Typography> 
                              <Grid container spacing={1} >
                                    <Grid item sx={{width:"50%"}}>
                                        <Item> Coût total:<br/>{tableData.cout_panne_poubelles} D</Item>
                                        <Item> Coût moyenne:<br/>{tableData.moy_cout_panne_poubelles} D</Item>
                                    </Grid>
                                    <Grid item sx={{width:"50%"}}>
                                        <Item>Coût maximale:<br/>{tableData.max_cout_panne_poubelles} D</Item>
                                        <Item>Coût minimale:<br/>{tableData.min_cout_panne_poubelles} D</Item>
                                    </Grid>
                              </Grid>
                            </Item>
                          </Grid>
                          <Grid item sx={{width:"50%"}}>
                              <Item> 
                                  <Typography variant='h6' sx={{color:"red"}}>Durée</Typography> 
                                    <Grid container spacing={1}>
                                          <Grid item sx={{width:"50%"}}>
                                            <Item>Durée maximale :<br/> {tableData.max_duree_panne_poubelle} Jours</Item>
                                            <Item>Durée minimale :<br/> {tableData.min_duree_panne_poubelle} Jours</Item>
                                          </Grid>
                                          <Grid item sx={{width:"50%"}}>
                                            <Item>Durée total :<br/>{tableData.sum_duree_poubelles} Jours</Item>
                                            <Item>Durée moyenne :<br/> {tableData.moy_duree_poubelles} Jours</Item>
                                          </Grid>
                                    </Grid>
                              </Item>
                          </Grid>
                      </Grid>
                </Grid>
                <Grid item  sx={{width:"43%"}}>          
                     <Right tableData={tableData} type='poubelle'/> 
                </Grid>  
              </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
                <Grid item sx={{width:"57%"}}>
                      <Grid container spacing={1}>
                          <Grid item sx={{width:"50%"}}>
                            <Item> <Typography variant='h6' sx={{color:"green"}}>nombre<br/> </Typography>{tableData.nbr_panne_camion}</Item>
                          </Grid>
                          <Grid item sx={{width:"50%"}}>
                            <Item> <Typography variant='h6' sx={{color:"green"}}>Pourcentage<br/></Typography> {tableData.pourcentage_panne_camion} %</Item>
                          </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                          <Grid item sx={{width:"50%"}}>
                          <Item> 
                              <Typography variant='h6' sx={{color:"red"}}>Coût</Typography> 
                              <Grid container spacing={1} >
                                    <Grid item sx={{width:"50%"}}>
                                        <Item> Coût total:<br/>{tableData.cout_panne_camions} D</Item>
                                        <Item> Coût moyenne:<br/>{tableData.moy_cout_panne_camions} D</Item>
                                    </Grid>
                                    <Grid item sx={{width:"50%"}}>
                                        <Item>Coût maximale:<br/>{tableData.max_cout_panne_camions} D</Item>
                                        <Item>Coût minimale:<br/>{tableData.min_cout_panne_camions} D</Item>
                                    </Grid>
                              </Grid>
                            </Item>
                          </Grid>
                          <Grid item sx={{width:"50%"}}>
                              <Item> 
                                  <Typography variant='h6' sx={{color:"red"}}>Durée</Typography> 
                                    <Grid container spacing={1}>
                                          <Grid item sx={{width:"50%"}}>
                                            <Item>Durée maximale :<br/> {tableData.max_duree_panne_camion} Jours</Item>
                                            <Item>Durée minimale :<br/> {tableData.min_duree_panne_camion} Jours</Item>
                                          </Grid>
                                          <Grid item sx={{width:"50%"}}>
                                            <Item>Durée total :<br/>{tableData.sum_duree_camion} Jours</Item>
                                            <Item>Durée moyenne :<br/> {tableData.moy_duree_camion} Jours</Item>
                                          </Grid>
                                    </Grid>
                              </Item>
                          </Grid>
                      </Grid>
                </Grid>
                <Grid item  sx={{width:"43%"}}>  
                      <Right tableData={tableData} type='camion' /> 
                </Grid>  
          </Grid>
        </TabPanel> 
  </>)
}else{
    return (
     <>vide</>
    );
  };
}
