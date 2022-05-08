import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import OuvrierTable from '../../components/Table/GestionCompte/OuvrierTable'
export default function Ouvrier() {
  return (
    <>
      <OuvrierTable/>
      <Button sx={{ position: 'relative', width:"80px", top:"10px", marginRight:"10px"}} color="primary" variant="contained"><Link to ="/gestionnaire/camions" style={{color:"white"}}>Camion</Link></Button>
      <Button sx={{ position: 'relative', width:"80px", top:"10px"}} color="primary" variant="contained"><Link to ="/gestionnaire/poubelles" style={{color:"white"}}>Zone</Link></Button>
    </>    
  )
}
