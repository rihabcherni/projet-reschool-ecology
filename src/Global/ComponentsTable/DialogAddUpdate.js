import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, FormHelperText } from '@mui/material';
import Select from 'react-select';

export default function DialogCrudUpdate({open,handleClose,data,onChange,handleFormSubmit,  validation, show}) {
  const [selectedOption, setSelectedOption] = useState(null);

 const {id}=data
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
    let rows2 = [];
    for (let i = 0; i < show.length; i++) {
      if(id){
            if( (show[i][1]=="quantite_total_collecte_plastique")||(show[i][1]=="quantite_total_collecte_composte")||
                (show[i][1]=="quantite_total_collecte_papier")||(show[i][1]=="quantite_total_collecte_canette")){
                rows2.push(
                  <>
                      <TextField id={show[i][1]} value={data[show[i][1]]}  onChange={e=>onChange(e)} placeholder={show[i][1]}  
                        error={!!validation[show[i][1]]} label={show[i][1]} variant="outlined" margin="dense" fullWidth />
                        <FormHelperText error={true}>
                          {validation[show[i][1]]}        
                      </FormHelperText> 
                  </>
                );
            }
       }else{
                if( (show[i][1]=="quantite_total_collecte_plastique")||(show[i][1]=="quantite_total_collecte_composte")||
                (show[i][1]=="quantite_total_collecte_papier")||(show[i][1]=="quantite_total_collecte_canette")){
                rows2.push(
                  <>
                      <TextField id={show[i][1]} value={data[show[i][1]]}  onChange={e=>onChange(e)} placeholder={show[i][1]}  
                        error={!!validation[show[i][1]]} label={show[i][1]} variant="outlined" margin="dense" fullWidth />
                        <FormHelperText error={true}>
                          {validation[show[i][1]]}        
                      </FormHelperText> 
                  </>
                );
            }
        }
      }


  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"  aria-describedby="alert-dialog-description"  fullWidth>
      <DialogTitle id="alert-dialog-title" sx={{backgroundColor: 'white', color:"green" , textAlign:"center", fontWeight:'bold'}}>{id?"modifier des données ":"créer un nouveau "}</DialogTitle>
      <DialogContent sx={{backgroundColor: 'white'}}>
            <form >  
                {rows}
                {show.length!==0?(show.map((sh, key) =>  
                    ((sh[1]!=="id" 
                       && sh[1]!=="quantite_total_collecte_plastique" 
                       && sh[1]!=="quantite_total_collecte_composte" 
                       && sh[1]!=="quantite_total_collecte_papier" 
                       && sh[1]!=="quantite_total_collecte_canette" && sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo")?(
                        <>
                          <TextField key={key} id={sh[1]} value={data[sh[1]]}  onChange={e=>onChange(e)} placeholder={sh[1]}  error={!!validation[sh[1]]} label={sh[1]} variant="outlined" margin="dense" fullWidth />
                            <FormHelperText error={true}>
                            {validation[sh[1]]}        
                          </FormHelperText> 
                          
                        </>): null)
                     
                )):null
                }
                {rows2}
                
            </form>
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button sx={{color:"green"}} color="primary" onClick={handleClose}  variant="outlined">
          Annuler
          </Button>
          <Button sx={{color:"white"}} color="success" onClick={()=>handleFormSubmit()} variant="contained">
          {id?"modifier":"envoyer"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}