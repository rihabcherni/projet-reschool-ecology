import React , {useState , useEffect} from 'react'
import {  Segment } from 'semantic-ui-react'
import Carousel from 'react-material-ui-carousel'
import { random } from '@mui/x-data-grid-generator';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';

export default function ProduitDechet() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const [produit, setProduit] = useState(null)
    const getData = () => {
    fetch("http://127.0.0.1:8000/api/dechets", requestOptions)
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
                    return  ( <div className='card' key={index.toString()} item={da} style={{textAlign:"center" , margin:"0 20px"}}>
                        <img src={`http://127.0.0.1:8000/storage/images/dechet/${da.photo}`} style={{height:"150px", width:"150px"}}/>
                        <Rating name="text-feedback" value={random(0,5)}  readOnly precision={0.1} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                        <li style={{color:"green", fontSize:"18px"}}>Dechet {da.type_dechet}</li>
                    </div>) ;
                  })}
                
              </div>
            );
          }
        }
  return (
    <Carousel height="250px">
    {items}             
    </Carousel>
 )

}else{
    return <></>
}
} 