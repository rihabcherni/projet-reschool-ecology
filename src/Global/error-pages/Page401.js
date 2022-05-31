import React from 'react'
import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import Image401 from '../../Global/images/401.png'
import Logo from '../../Global/images/reschool-blanc.png'
export default function Page401() {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor:'#f9f9fb', height:"100vh"}}>
      <img src={Logo} alt="logo" style={{borderRadius:"50%", margin:'10px 10px -60px '}}/>
          <div style={ {textAlign:"center" }}>
          <img src={Image401} alt="Image 401" />
          <p style={{fontSize:"70px", fontFamily:"Fredoka"}}>Non autorisé  </p>
          <h3 style={{color:"#64ad02", fontFamily:"Fredoka", marginTop:'-7px'}}> 
              Désolé, il vous est interdit de visiter cette page, essayez d'abord de vous connecter 
          </h3>

              <Button color="success" variant="contained"  sx={{textTransform:"none",backgroundColor:"#64ad02", marginRight:"20px"}}> 
                <Link to="/gestionnaire/login"  style={{color:"white"}}>Connectez-vous en tant que gestionnaire</Link> 
              </Button> 

              <Button color="success" variant="contained"  sx={{textTransform:"none",backgroundColor:"#64ad02", marginRight:"20px"}}> 
                <Link to="/responsable-etablissement/login"  style={{color:"white"}}>Connectez-vous en tant que responsable </Link> 
              </Button> 

          </div>
    </div>
  )
}

