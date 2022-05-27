import React from 'react';
import {Typography , Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import GlobalStatistiques from '../components/DashboardResponsable/GlobalStatistiques';
import TablePoubellePlusRemplis from '../components/DashboardResponsable/TablePoubellePlusRemplis';
import TableTopPrixCommande from '../components/DashboardResponsable/TableTopPrixCommande';
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
export default function DashboardResponsable() {
  return (
    <div className="container_dashboard">
        <Typography variant='h3' sx={{color:"green"}}>Tableau de bord</Typography>
        <Typography variant='h6' sx={{color:"gray"}}>Bonjour, <b style={{color:"green"}}> {localStorage.getItem("auth_nom")} {localStorage.getItem("auth_prenom")} </b> bienvenue dans votre tableau de bord</Typography>
        
        <div > 
            <div>
                <Item>
                    <Typography variant='h5'>Statistiques générales </Typography>
                    <GlobalStatistiques/>                
                </Item>
                <Item>
                    <Typography variant='h5'>Poubelles les plus remplis dans l'etablissement </Typography>
                    <TablePoubellePlusRemplis/> 
                </Item>               
                <Item>
                    <Typography variant='h5'>Commande plus chers</Typography>
                    <TableTopPrixCommande/> 
                </Item>
              </div>
        </div>
    </div>
  )
}
