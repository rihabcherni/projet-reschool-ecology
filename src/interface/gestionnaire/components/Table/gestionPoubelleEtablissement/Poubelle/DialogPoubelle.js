import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function DialogPoubelle({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,bloc_poubelle_id,compteur,nom,qrcode,capacite_poubelle,type,Etat,temps_remplissage,error_list}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{id?"modifier etablissement":"créer un nouveau etablissement"}</DialogTitle>
      <DialogContent>
         <form>
                <TextField id="bloc_poubelle_id" value={bloc_poubelle_id} onChange={e=>onChange(e)} placeholder="Entrer id bloc poubelle" label="id bloc poubelle" variant="outlined" margin="dense" fullWidth />
                <TextField id="nom" value={nom} onChange={e=>onChange(e)} placeholder="Entrer nom poubelle" label="nom poubelle" variant="outlined" margin="dense" fullWidth />
                <TextField id="qrcode" value={qrcode} onChange={e=>onChange(e)} placeholder="Entrer qrcode" label="qrcode" variant="outlined" margin="dense" fullWidth />
                <TextField id="compteur" value={compteur} onChange={e=>onChange(e)} placeholder="Entrer compteur" label="compteur" variant="outlined" margin="dense" fullWidth />
                <TextField id="capacite_poubelle" value={capacite_poubelle} onChange={e=>onChange(e)} placeholder="Enter capacite du poubelle" label="la capacite du poubelle" variant="outlined" margin="dense" fullWidth />       
                <TextField id="type" value={type} onChange={e=>onChange(e)} placeholder="Enter type du poubele" label="type de poubelle" variant="outlined" margin="dense" fullWidth />       
                <TextField id="Etat" value={Etat} onChange={e=>onChange(e)} placeholder="Entrer Etat" label="Etat poubelle" variant="outlined" margin="dense" fullWidth />
                <TextField id="temps_remplissage" value={temps_remplissage} onChange={e=>onChange(e)} placeholder="Enter temps_remplissage" label="temps_remplissage" variant="outlined" margin="dense" fullWidth />       
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
          Annuler
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
          {id?"modifier":"envoyer"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}