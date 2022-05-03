import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
export default function DialogCommandeDechet({open,handleClose,data,onChange,handleFormSubmit}) {
  const {id,client_id,quantite,prix,date_commande,date_livraison}=data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"modifier commande":"créer un nouveau commande"}</DialogTitle>
        <DialogContent>
         <form>
              <TextField id="client_id" value={client_id} onChange={e=>onChange(e)} placeholder="Entrer id client" label="client_id" variant="outlined" margin="dense" fullWidth />
              <TextField id="quantite" value={quantite} onChange={e=>onChange(e)} placeholder="Entrer quantite" label="quantite" variant="outlined" margin="dense" fullWidth />
              <TextField id="prix" value={prix} onChange={e=>onChange(e)} placeholder="Enter prix" label="prix" variant="outlined" margin="dense" fullWidth />       
              <TextField id="date_commande" value={date_commande} onChange={e=>onChange(e)} placeholder="Entrer date commande" label="date commande" variant="outlined" margin="dense" fullWidth />
              <TextField id="date_livraison" value={date_livraison} onChange={e=>onChange(e)} placeholder="Entrer date livraison" label="date livraison" variant="outlined" margin="dense" fullWidth />
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