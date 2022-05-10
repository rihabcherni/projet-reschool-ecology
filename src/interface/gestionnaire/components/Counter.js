import React, { useState, useEffect } from 'react'
import '../css/counter.css'
import axios from 'axios'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { Icon, Statistic } from 'semantic-ui-react'


const dashboardURL = 'https://reschoolecology.tech/api/dashboard'
const DechetsURL = 'https://reschoolecology.tech/api/somme-total-dechet-zone-depot'

export default function Counter() {
    // const [count, setcount] = React.useState([])
    // useEffect(() => {
    //     ;(async function getStatus() {
    //       const vdata = await fetch(DechetsURL)
    //       const vjson = await vdata.json()
    
    //       setTimeout(getStatus, 60000)
    //       setcount(vjson)
    //     })()
    //   }, [])

    const [dechets, setDechets] = React.useState([])
    useEffect(() => {
        ;(async function getStatus() {
          const vdata = await fetch(dashboardURL)
          const vjson = await vdata.json()
    
          setTimeout(getStatus, 60000)
          setDechets(vjson)
        })()
      }, [])

    return (
    <>
        <Container>
             {/* <Card sx={{backgroundColor:"#321fdb"}}  className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Plastique</Typography>
                <Typography>
                    {count.somme_depot_actuelle_plastique} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#f9b115"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Papier</Typography>
                <Typography>
                    {count.somme_depot_actuelle_papier} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#2eb85c"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Composte</Typography>
                <Typography>
                    {count.somme_depot_actuelle_composte} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#e55353"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Canette</Typography>
                <Typography>
                    {count.somme_depot_actuelle_canette} Kg
                </Typography>
            </Card>  */}
            <Statistic.Group>
                <Statistic color='green'>
                    <Statistic.Value>
                        <Icon name='trash' />
                        <Typography color="primary">{dechets.nbr_bloc_poubelle}</Typography> 
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Bloc Poubelle</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='yellow'>
                    <Statistic.Value>
                        <Icon name='building' />
                        <Typography color="primary">{dechets.nbr_etablissement}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Etablissement</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='orange'>
                    <Statistic.Value>
                        <Icon name='map marker alternate' />
                        <Typography color="primary">{dechets.nbr_zone_travail}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Zone de Travail</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='blue'>
                    <Statistic.Value>
                        <Icon name='truck' />
                        <Typography color="primary">{dechets.nbr_camion}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Camion</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='teal'>
                    <Statistic.Value>
                        <Icon name='user' />
                        <Typography color="primary">{dechets.nbr_ouvrier}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Ouvriers</Typography></Statistic.Label>
                </Statistic>
                <Statistic  color='red'>
                    <Statistic.Value>
                        <Icon name='user' />
                        <Typography color="primary">{dechets.nbr_fournisseur}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Fournisseurs</Typography></Statistic.Label>
                </Statistic>
                <Statistic  color='violet'>
                    <Statistic.Value>
                        <Icon name='trash alternate' />
                        <Typography color="primary">{dechets.nbr_poubelle_vendus}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Poubelle vendue</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='brown'>
                    <Statistic.Value>
                        <Icon name='trash alternate' />
                        <Typography color="primary">{dechets.nbr_poubelle_stock}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Poubelle en Stock</Typography></Statistic.Label>
                </Statistic>
            </Statistic.Group>
            <Statistic.Group>
                <Statistic color='olive'> 
                    <Statistic.Value>
                        <Icon name='recycle' />
                        <Typography color="primary">{dechets.nbr_commande_dechet}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Commande Dechet</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='orange'>
                    <Statistic.Value>
                        <Icon name='shopping basket'/>
                        <Typography color="primary">{dechets.nbr_commande_poubelle}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Commande Poubelle</Typography></Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </Container>
    </>
    )
}