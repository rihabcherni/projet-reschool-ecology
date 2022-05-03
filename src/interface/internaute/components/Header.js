import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FaRecycle } from "react-icons/fa";

export default function Header() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item xs={3}>
                      <FaRecycle/>  RE:SCHOOL Ecology
                    </Grid>
                    <Grid>Accueil</Grid>
                    <Grid>Produits</Grid>
                    <Grid>Mission</Grid>
                    <Grid>Partenaires</Grid>
                    <Grid>A Propos</Grid>
                    <Grid>Contact</Grid>
                    <Grid><Button sx={{}}>Espace Client</Button></Grid>
                    <Typography></Typography>

                </Grid>

            </Toolbar>
        
        </AppBar>
    
    </div>
  )
}
