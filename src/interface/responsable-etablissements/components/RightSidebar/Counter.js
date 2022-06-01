import { ButtonGroup, Button } from '@mui/material';
import React, {useState} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
export default function Counter({child}) {
  const [counter, setCounter] = useState(1); 

  return (
    <div style={{display:"grid", gridTemplateColumns:"82% 50%"}}>
        <ButtonGroup size="small" aria-label="small outlined button group">
            <Button sx={{backgroundColor:"#98FB98", fontSize:"18px"}} disabled={counter >= child.quantite_disponible} onClick={()=> 
                {setCounter(counter+1)}}>+</Button>
            {<Button sx={{color:"red", fontSize:"18px"}}>{counter}</Button>}

            {<Button sx={{backgroundColor:"#FA8072",fontSize:"20px"}} disabled={counter <= 1} onClick={() => {
            setCounter(counter - 1)
            }}><RemoveIcon/></Button>}
        </ButtonGroup>
        <p style={{fontFamily:"Fredoka", fontWeight:"600",fontSize:"16px", marginTop:"10px"}}>
            {(child.prix_unitaire -((child.prix_unitaire * child.pourcentage_remise)/100))* counter} TND
        </p>
    </div>
  )
}
