import { ButtonGroup, Button } from '@mui/material';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Counter from './Counter';
import ClearIcon from '@mui/icons-material/Clear';
export default function Panier() {
  let data= JSON.parse(localStorage.getItem("panier"));
  const removeItem=({child})=>{   
      let panier= JSON.parse(localStorage.getItem("panier"));
      let index1 =  panier.findIndex(object => {
        return object.id === child.id;
      });
      let newarray = panier.filter(data => data.id != child.id);      
      localStorage.setItem('panier',JSON.stringify(newarray)); 
      setTimeout(function(){
        window.location.reload(1);
     }, 2000);
  }

  const removeAll=()=>{   
    let panier= JSON.parse(localStorage.getItem("panier"));
      
    localStorage.setItem('panier',JSON.stringify([])); 
    setTimeout(function(){
      window.location.reload(1);
   }, 2000);}

  let total=[];
    return (
      <div tyle={{minWidth:354, maxWidth: 700,maxHeight:605, minHeight:605}}>
      
      {data ?data.map((child, key) => (
        <>
          <div style={{display:"grid", gridTemplateColumns:"5% 37% 47% 1%", padding:"7px"}}>          
              <span className='remise-value2'>-{child.pourcentage_remise}%</span>
              <img src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${child.photo}`} style={{height:"150px", width:"150px"}}/>
                <div>
                    <li>poubelle {child.type_poubelle}</li>
                    <li> {child.capacite_poubelle} Litre</li>
                    <li style={{color:"green" , fontWeight:"bold"}}>{child.prix_unitaire -((child.prix_unitaire * child.pourcentage_remise)/100)} TND</li>
                    <li style={{textDecoration: "line-through"}}>{child.prix_unitaire} TND</li>
                    <Counter child={child} />
                    {total.push(child.prix_unitaire -((child.prix_unitaire * child.pourcentage_remise)/100))}
                </div>
              <button style={{height:"30px",width:"40px",borderRadius:"50%", border:"none",backgroundColor:"red",color:"white"}} onClick={()=>removeItem({child})}>
                <ClearIcon/>
              </button>

          </div>
          <hr/>
        </>
      )) :<p>panier cart</p>}
        <>
          <button style={{width:"40%", height:"30px", margin:'0 20px', border:"none", color:"white" ,backgroundColor:"green"}}>Passer Commande</button>
          <button style={{width:"40%",height:"30px", border:"none", color:"white" ,backgroundColor:"red"}} onClick={removeAll}>vider panier</button>
          <button style={{width:"70%",margin:"20px 50px",height:"30px", border:"none", color:"white" ,backgroundColor:"gray"}} > <Link style={{color:"white"}} to="/responsable-etablissement/panier" >Detalis panier</Link></button>
        </>
       
      </div>
  )
}
