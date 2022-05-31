import React , {useState , useEffect} from 'react'
import {  Segment } from 'semantic-ui-react'
import Carousel from 'react-material-ui-carousel'
import { random } from '@mui/x-data-grid-generator';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';

export default function ProduitPoubelle() {
    var requestOptions = {
      method: 'GET',
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
        const sliderItems = produit.length > 4 ? 4 : produit.length;
        const items = [];
      
        for (let i = 0; i < produit.length; i += sliderItems) {
          if (i % sliderItems === 0) {
            items.push(
              <div  className='card-div4' key={i.toString()}>
                  {produit.slice(i, i + sliderItems).map((da, index) => {
                    return  ( 
                    <div className='card' key={index.toString()} item={da} style={{textAlign:"center" , margin:"0 20px"}}>
                        <li ><img src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${da.photo}`} style={{height:"200px", width:"200px"}}/></li>
                        <li style={{color:"green", fontSize:"18px"}}>Poubelle {da.type_poubelle}</li>
                        <li style={{color:"green", fontSize:"14px"}}>Capacité: {da.capacite_poubelle} Litre</li>
                        <Rating name="text-feedback" value={random(0,5)}  readOnly precision={0.1} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />  
                    </div>) ;
                  })}            
              </div>
            );
          }
        }
  return (          
    <Carousel height="300px">
    {items}             
    </Carousel> )

}else{
    return <></>
}
} 