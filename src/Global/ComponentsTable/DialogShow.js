import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Camion from "../../Global/images/camion.PNG"
export default function DialogZoneTravailShow({open,handleClose,data, show}) {
  let rows = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo"){
      rows.push(
        <img  style={{height:"200px", width:"200px", borderRadius:"50%"}} 
        src={`http://127.0.0.1:8000/storage/images/ouvrier/${data[show[i][0]]}`} alt="gestionnaire"/>
      );}
    }
  return (
    <div>
      <Dialog fullWidth  open={open}  onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" sx={{backgroundColor: 'white', textAlign:"center", color:"green"}}><h1>affichage des données</h1></DialogTitle>
        <DialogContent  sx={{backgroundColor: 'white',display:"flex" }}>
          <div>{rows}</div> 
          <div><img  src={Camion} width="250px" style={{marginTop:"70px"}}/></div> 
        <ul >
                    {show.length!==0?(show.map((sh, key) =>   
                      ((sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo" && sh[1]!=="qrcode"  && sh[1]!=="mot_de_passe")?(
                        <li key={key}><b>{sh[0]}:</b>{data[sh[1]]}</li>
                        ): null)
                    )):null
                    }
                </ul>     
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button onClick={handleClose} sx={{color:"white"}} color="success" variant="contained">Annuler </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}