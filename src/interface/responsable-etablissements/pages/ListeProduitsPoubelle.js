import React , {useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Card} from '@mui/material';
import { random } from '@mui/x-data-grid-generator';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
export default function ListeProduitsPoubelle() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_responsable')}`);
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
    
    let dataPanier=[];
    const AjoutPanier=(produit)=>{
      if(produit.quantite_disponible!==0 ){         
        dataPanier.push(produit)
        localStorage.setItem("panier", JSON.stringify(dataPanier));
        console.log(dataPanier)
      }else{
        console.log("error")
      }
     
    }
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)',  gridGap: '30px'}}>
        {
          produit.length!==0?(produit.map(p => 
            <Card sx={{padding:"20px"}}>
              <div  style={{textAlign:"center" , margin:"0 20px"}}>
                <div className='container2'>
                    <p className='remise-value'>-{p.pourcentage_remise} %</p>
                    <li> <Box sx={{  width: 100, display: 'flex', alignItems: 'center'}} >
                        <Rating name="text-feedback" value={random(0,5)}  readOnly precision={0.1} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                    </Box></li>
                  </div>
                    <img src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${p.photo}`} style={{height:"180px", width:"200px"}}/>
                    <div style={{height:"130px"}}>
                        {p.pourcentage_remise!==0 ?
                            <>
                                <li><b style={{color:"green", fontSize:"18px"}}>{p.prix_unitaire -((p.prix_unitaire * p.pourcentage_remise)/100)} TND</b></li>
                                <li style={{textDecoration: "line-through"}}>{p.prix_unitaire} TND</li>
                            </>:<li><b style={{color:"green", fontSize:"18px"}}>{p.prix_unitaire } TND</b></li>}
                        <li>poubelle {p.type_poubelle}</li>
                        <li>capacité: {p.capacite_poubelle} Litre</li>
                        {p.quantite_disponible!==0?  <li style={{color:"green", fontSize:"18px", fontWeight:"bold"}}>En stock</li> :  <li style={{color:"red", fontSize:"18px", fontWeight:"bold"}}>Hors stock</li>}
                    </div>
                    {p.quantite_disponible!==0? 
                      <button className='button-card' onClick={() => AjoutPanier(p)} >Ajouter panier</button>:
                      <button  disabled>Ajouter panier</button>
                    }
                </div>
            </Card>
          )) : <p>vide</p> 
        }  
    </div>
  )  }  
  else {
    return (
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)',  gridGap: '30px'}}>
        <div>
           <Skeleton variant="rectangular" sx={{height:'450px', width:"400px", marginBottom:"15px"}} />
        </div>
        <div>
           <Skeleton variant="rectangular" animation="wave" sx={{height:'450px', width:"400px"}} />                      
        </div>
        <div>
            <Skeleton variant="rectangular" sx={{height:'450px', width:"400px", margin:"0px"}} />
        </div>
        <div>
            <Skeleton variant="rectangular" animation="wave" sx={{height:'450px', width:"400px"}} />                      
        </div>
        <div>
            <Skeleton variant="rectangular" sx={{height:'450px', width:"400px"}}/>
        </div>
        <div>
            <Skeleton variant="rectangular" sx={{height:'450px', width:"400px"}}/>
        </div>
        <div>
            <Skeleton variant="rectangular" sx={{height:'450px', width:"400px"}}/>
        </div>
        <div>
            <Skeleton variant="rectangular" animation="wave" sx={{height:'450px', width:"400px",  marginBottom:"35px"}} />                      
        </div>                
      </div>
    )
  }

}