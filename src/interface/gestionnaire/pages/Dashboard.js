import React from 'react';
import MapRegion from './mapRegion'
import ChartVendsMois from "../components/Dashboard/Gestion Dechets/ventes/ChartVendusMois";
import TotalDechetCollectéMois from "../components/Dashboard/TotalDechetCollectéMois"
import Piechart from "../components/Dashboard/PieChart"
import DechetCollecteDepot from "../components/Dashboard/Gestion Dechets/collectes/DechetCollecteDepot"
import '../css/Dashboard.css'
import { Grid, Typography , Paper, Container} from '@mui/material'
import { styled } from '@mui/material/styles';
import Pannes from '../components/Dashboard/Gestion pannes/Pannes';
import GlobalStatistiques from '../components/Dashboard/GlobalStatistiques';

export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ?  '#000':'#f0f0f0',
      border:' 2px solid #f0f0f0',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      color: theme.palette.text.secondary,
    }
  )
);
const Dashboard = () => {
    return (
      <div className="container_dashboard">
          <Typography variant='h3' sx={{color:"green"}}>Tableau de bord</Typography>
          <Typography variant='h6' sx={{color:"gray"}}>Bonjour, <b style={{color:"green"}}> {localStorage.getItem("auth_nom")} {localStorage.getItem("auth_prenom")} </b> bienvenue dans votre tableau de bord</Typography>
          
        <Grid  container spacing={1}  > 
            <Grid item sx={{width:"100%"}}>
                <Item>
                    <Typography variant='h5' color="primary">Statistiques générales </Typography>
                    <GlobalStatistiques/>                
                </Item>
            </Grid>
            <Grid  item  sx={{width:"100%"}} >
                <Item>
                    <Grid  container spacing={5}>
                        <Grid  item  sx={{width:"100%"}}>
                          <Typography variant='h5' sx={{color:"red"}}>Gestion des ventes </Typography>
                        </Grid>
                        <Grid  item  sx={{width:"50%"}}>
                            <Item><Typography variant='h6' color="primary">Gestion des ventes et clients des poubelles </Typography></Item>
                        </Grid>
                        <Grid  item  sx={{width:"50%"}}>
                            <Item>
                                <Typography variant='h6' color="primary">Gestion des ventes et clients des dechets </Typography>
                                <ChartVendsMois/> 

                                
                            </Item>           
                        </Grid>
                    </Grid>
                      
                      

                    <Grid  container spacing={5}  > 
                        <Grid  item  sx={{width:"100%"}}>
                            <Typography variant='h5' sx={{color:"red"}}>Gestion des stocks </Typography>
                        </Grid>
                        <Grid  item  sx={{width:"50%"}}>
                            <Item><Typography variant='h6' color="primary">Gestion du stocks poubelles</Typography></Item>
                        </Grid>
                        <Grid  item  sx={{width:"50%"}}>
                            <Item>
                                <Typography variant='h6' color="primary">Gestion des dechets collecte</Typography>
                                <DechetCollecteDepot/>
                                <TotalDechetCollectéMois/> 
                            </Item>          
                        </Grid>
                    </Grid>

                      
                      

                      
                      

                      <Typography variant='h5' sx={{color:"red"}}>Gestion du collecte des dechets dans les etablissement  </Typography>

                      <Item>
                          <Typography variant='h6' color="primary">Gestion des poubelle dans les etablissements</Typography>
                          <MapRegion/>
                          <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>
                      </Item>
                      <Grid  container spacing={5}  > 
                          <Grid  item  sx={{width:"50%"}}>
                            <Item><Typography variant='h6' color="primary">Gestion des camions </Typography></Item>
                          </Grid>
                          <Grid  item  sx={{width:"50%"}}>
                            <Item><Typography variant='h6' color="primary">Gestion des ouvriers </Typography></Item>           
                          </Grid>
                      </Grid>
                </Item>


               
            </Grid>  

            <Grid  item  sx={{width:"100%"}}>
                <Item><Typography variant='h6' color="primary">Gestion des fournisseurs</Typography></Item>
                <Item>
                          <Typography variant='h6' color="primary">Gestion des pannes</Typography>                      
                          <Pannes/>
                </Item>
            </Grid>
        </Grid>  


  
          <Grid container>
  
          </Grid>
          <Grid container>
            <Grid item xs={4}> 
              <Piechart/> 
            </Grid>
          </Grid>
      

      </div>
    );
  };
  
export default Dashboard;