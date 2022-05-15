import React, { useState, useEffect } from 'react'
import '../../../../css/dechetCard.css'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const DechetsURL = 'http://127.0.0.1:8000/api/somme-total-dechet-zone-depot'

export default function DechetCollecteDepot() {
    const [dechets, setDechets] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
          const vdata = await fetch(DechetsURL)
          const vjson = await vdata.json()
    
          setTimeout(getStatus, 60000)
          setDechets(vjson)
        })()
      }, [])

    return (
    <>
        <Container>
            <Card sx={{backgroundColor:"#321fdb"}}  className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Plastique</Typography>
                <Typography>
                    {dechets.somme_depot_actuelle_plastique} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#f9b115"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Papier</Typography>
                <Typography>
                    {dechets.somme_depot_actuelle_papier} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#2eb85c"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Composte</Typography>
                <Typography>
                    {dechets.somme_depot_actuelle_composte} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#e55353"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Totale Canette</Typography>
                <Typography>
                    {dechets.somme_depot_actuelle_canette} Kg
                </Typography>
            </Card> 
         
        </Container>
    </>
    )
}