import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, FormHelperText } from '@mui/material';

export default function DialogCrudUpdate({open,handleClose,data,onChange,handleFormSubmit,  validation, show}) {
 const {id}=data
 console.log(validation)


  let rows = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo"){
      rows.push(
        <>
            <input type="file" name={show[i][0]} id={show[i][0]} onChange={e=>onChange(e)} value={data[show[i][0]]} /> 
            <FormHelperText error={true}>
            {validation[show[i][0]]}        
            </FormHelperText> 
        </>
      );
    }
    }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description"  fullWidth>
      <DialogTitle id="alert-dialog-title" sx={{backgroundColor: 'white', color:"green" , textAlign:"center", fontWeight:'bold'}}>{id?"modifier des données ":"créer un nouveau "}</DialogTitle>
      <DialogContent sx={{backgroundColor: 'white'}}>
            <form >  
            {rows}
                {show.length!==0?(show.map(sh => 
                  
                    ((sh[1]!="id" && sh[1]!="created_at" && sh[1]!="updated_at" && sh[1]!="photo")?(
                        <>
                                <TextField id={sh[1]} value={data[sh[1]]} onChange={e=>onChange(e)} placeholder={sh[0]}  error={!!validation[sh[1]]} label={sh[0]} variant="outlined" margin="dense" fullWidth />
                                <FormHelperText error={true}>
                                {validation[sh[1]]}        
                                </FormHelperText> 
                        </>): null)
                     
                )):null
                }
            </form>
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button sx={{color:"green"}} color="primary" onClick={handleClose}  variant="outlined">
          Annuler
          </Button>
          <Button sx={{color:"white"}} color="primary" onClick={()=>handleFormSubmit()} variant="contained">
          {id?"modifier":"envoyer"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}