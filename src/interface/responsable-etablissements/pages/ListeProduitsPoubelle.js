import React , {useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Card, Typography } from '@mui/material';
import { random } from '@mui/x-data-grid-generator';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
export default function ListeProduitsPoubelle() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const [produit, setProduit] = useState(null)
  const getData = () => {
  fetch("http://127.0.0.1:8000/api/stock-poubelle", requestOptions)
    .then(response => response.json())
    .then(result => setProduit(result.data))
    .catch(error => console.log('error', error));
  }
    useEffect(() => {
      getData()
    }, [])
  if(produit!==null){
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)',  gridGap: '30px'}}>
        {
          produit.length!==0?(produit.map(p => 
            <Card sx={{padding:"20px"}}>
                <img  style={{height:"100px", width:"100px", borderRadius:"50%"}} 
                src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${p.photo}`} alt="gestionnaire"/>  
                <Typography>type : {p.type_poubelle} </Typography>   
                <Typography>quantité disponible en stock : {p.quantite_disponible}</Typography>
                <Typography>Capacité poubelle : {p.capacite_poubelle}  </Typography> 
                <Typography>remise : {p.pourcentage_remise}% </Typography>     	         
                <Box sx={{  width: 200, display: 'flex', alignItems: 'center', }} >
                  <Rating name="text-feedback" value={random(0,5)}  readOnly precision={0.1} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                </Box>
            </Card>
          )) : <p>vide</p> 
        }  
    </div>
  )  }
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  else {
    return (
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)',  gridGap: '10px'}}>
        <div>
           <Skeleton variant="rectangular" sx={{height:'300px', width:"400px", marginBottom:"15px"}} />
        </div>
        <div>
           <Skeleton variant="rectangular" animation="wave" sx={{height:'300px', width:"400px"}} />                      
        </div>
        <div>
            <Skeleton variant="rectangular" sx={{height:'300px', width:"400px", margin:"0px"}} />
        </div>
        <div>
            <Skeleton variant="rectangular" animation="wave" sx={{height:'300px', width:"400px"}} />                      
        </div>
        <div>
            <Skeleton variant="rectangular" sx={{height:'300px', width:"400px"}}/>
        </div>
        <div>
            <Skeleton variant="rectangular" animation="wave" sx={{height:'300px', width:"400px",  marginBottom:"35px"}} />                      
        </div>                
      </div>
    )
  }

}