import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Container, Row, Col, Card ,CardGroup,Button} from 'react-bootstrap'
import Client from "./images/Client.jpg"
import './carte.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone  , faBuilding, faUser, faAt, faAddressCard ,faBriefcase, faTruck} from '@fortawesome/free-solid-svg-icons'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f0f0f0',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function CarteOuvrier() {
  const [ouvriers, setOuvrier] = useState('');
  const url= 'http://127.0.0.1:8000/'
  useEffect(()=>{
    getALLOuvrier();
  },[])
  const getALLOuvrier= ()=>{
    axios.get(`${url}api/ouvrier`)
    .then((response)=>{
      const allOuvrier = response.data.data;
      setOuvrier(allOuvrier);
    })
    .catch(error=> console.error(`Error: ${error}`))
  }
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 10, md: 20}}>
      {ouvriers.length ? (ouvriers.map((ouvrier, index) => 
          <Grid item xs={2} sm={4} md={4} key={index}>
          <Item>
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              {ouvrier.photo!==null ?<img src={`${url}storage/images/ouvrier/${ouvrier.photo}`}  alt="Avatar" className='img-card'/> :<img src={Client} alt="" id="img" className='img-card' />}
              </div>
              <div class="flip-card-back">
                  <h4 style={{textAlign:"center"}}>{ouvrier.nom +' '+ ouvrier.prenom}</h4>
                  <ul style={{listStyle:"none" , marginLeft:"-10px"}}>
                  <li> <FontAwesomeIcon icon={faTruck} style={{fontSize:"15px"}} /><strong style={{marginLeft:"10px"}}>Camion:</strong>{' '+ ouvrier.id_camion}</li> 
                  <li> <FontAwesomeIcon icon={faAddressCard} style={{fontSize:"15px"}}/><strong style={{marginLeft:"10px"}}>CIN:</strong>{' '+ouvrier.CIN}  </li> 
                      <li> <FontAwesomeIcon icon={faBuilding} style={{fontSize:"15px"}}/><strong  style={{marginLeft:"10px"}}>Address:</strong>{' '+ouvrier.CIN} </li> 
                      <li> <FontAwesomeIcon icon={faPhone} style={{fontSize:"15px"}}/><strong  style={{marginLeft:"10px"}}>Telephone:</strong>{' '+ouvrier.numero_telephone} </li> 
                      <li> <FontAwesomeIcon icon={faAt} style={{fontSize:"15px"}} /><strong  style={{marginLeft:"10px"}}> Email:</strong>{' '+ouvrier.email} </li> 
                  </ul> 
              </div>
            </div>
            </div></Item>            
          </Grid>
            )
            )
              : <li> No Message Found </li>
        }

      </Grid>
    </Box>
 </>
  );
}