import React , {useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ProfilePhoto from "../../../../Global/images/default_profile_image.jpg"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProfileGestionnaire({toggleDrawer}) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [profile, setProfile] = useState(null)
  const getData = () => {
    fetch("http://127.0.0.1:8000/api/auth-gestionnaire/profile", requestOptions)
    .then(response => response.json())
    .then(result => setProfile(result))
    .catch(error => console.log('error', error));
  }
    useEffect(() => {
      getData()
    }, [])

    if(profile!==null){
      return (
        <>    
            {profile.photo===null?
              <img src={ProfilePhoto} alt="default images profile" style={{margin:"2% 18%" , borderRadius:"50%", width:"200px", height:"200px"}}/>: 
              <img src={`http://127.0.0.1:8000/storage/images/gestionnaire/${profile.photo}`} style={{margin:"2% 18%" , borderRadius:"50%", width:"200px", height:"200px"}} alt="gestionnaire image"/>
            } 
            <ul style={{fontSize:"16px", margin:"20px"}}>
                <li><b>Nom :</b> {profile.nom}</li>
                <li><b>Prenom :</b>{profile.prenom}</li>
                <li><b>CIN :</b>{profile.CIN}</li>
                <li><b>Numero téléphone :</b> {profile.numero_telephone}</li>
                <li><b>Email : </b>{profile.email}</li>
                <li><b>Adresse :</b>{profile.adresse}</li>
            </ul>
            <Link to ="/gestionnaire/profile" style={{color:"white"}}>
                <Button  onClick={toggleDrawer} sx={{ position: 'relative', width:"100%", top:"10px", justifyContent:"center"}} color="primary" variant="contained">
                Modifier profile
                </Button> 
            </Link>    
        </>
      )
    }else {
      return (
        <Box sx={{padding:"1px 30px"}}>
              <Skeleton  sx={{height:"250px", width:"250px"}}  variant="circular"/>     
              <Skeleton sx={{height:60}} />
              <Skeleton animation="wave" sx={{height:60}} />                      
              <Skeleton sx={{height:60}} />
              <Skeleton animation="wave" sx={{height:60}} />                      
              <Skeleton sx={{height:60}} />
        </Box>
      )
    }


}
