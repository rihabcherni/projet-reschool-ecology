import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Image404 from '../../Global/images/404.PNG'
import Logo from '../../Global/images/reschool-blanc.png'
export default function Page404() {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor:'#f9f9fb', height:"100vh"}}>
      <img src={Logo} alt="logo" style={{borderRadius:"50%", margin:'10px 10px -60px '}}/>
          <div style={ {textAlign:"center" }}>
              <img src={Image404} alt='404 image' style={{display:'block', margin: "auto"}}/>
              <h1 style={{fontSize:"70px", fontFamily:"Fredoka"}}>Page non trouvée</h1>
              <h3 style={{color:"#64ad02", fontFamily:"Fredoka", marginTop:'-7px'}}>Désolé, la page que vous recherchez est introuvable  </h3>

              <Button color="success" variant="contained"  sx={{textTransform:"none",backgroundColor:"#64ad02", marginRight:"20px"}}> 
              
            {localStorage.getItem('role')==='gestionnaire' ? <Link to="/gestionnaire"> Revenir à la page principale  </Link>  :  
                       <Link to="/responsable-etablissement" style={{color:"white"}}> Revenir à la page principale  </Link> } 
              
              </Button> 
              <Button color="success"  onClick={() => navigate(-1)} variant="contained"  sx={{backgroundColor:"#64ad02",textTransform:"none"}}> Allons à la dernière page visitée  </Button>  
          </div>
    </div>
  )
}

