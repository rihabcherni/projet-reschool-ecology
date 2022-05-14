import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogZoneTravailShow({open,handleClose,data, show}) {
  let rows = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo"){
      rows.push(
        <img  style={{height:"100px", width:"100px", borderRadius:"50%"}} 
        src={`https://reschoolecology.tech/storage/images/gestionnaire/${data[show[i][0]]}`} alt="gestionnaire"/>
      );
    }
    }
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title" sx={{backgroundColor: 'white', textAlign:"center", color:"green"}}><h1>affichage des données</h1></DialogTitle>
        <DialogContent  sx={{backgroundColor: 'white'}}
        >
        {rows}
                <ul>
                    {show.length!==0?(show.map(sh =>   
                      ((sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo" && sh[1]!=="qrcode"  && sh[1]!=="mot_de_passe")?(

                        <li><b>{sh[0]}:</b>{data[sh[1]]}</li>
                        ): null)
                    )):null
                    }
                </ul>     
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button onClick={handleClose} sx={{color:"white"}} color="success" variant="contained">
          Annuler
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}