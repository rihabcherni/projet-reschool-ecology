import React, { useState } from 'react';
import { Button, FormHelperText,TextField } from '@mui/material';
export default function InputUpdate() {
    const initialValue = { nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
    const [validation, setValidation] = useState([])
    const [data, setData] = useState(initialValue)
    const show=[ ["Nom","nom"],  ["Prénom","prenom"], ["Carte d'identité nationnale","CIN"],  ["Numero de telephone","numero_telephone"], ["Email","email"], ["Adresse","adresse"],];
    const handleFormSubmit= (e) =>  {
              fetch("http://127.0.0.1:8000/api/auth-gestionnaire/modifier-profile-gestionnaire", {
                method: "put", 
                body: JSON.stringify(data), 
                headers: {
                  'content-type': "application/json",
                  'Accept': 'application/json',
                  "Authorization":`Bearer ${localStorage.getItem('auth_token')}`
                }
              }).then(resp => resp.json())
                .then(resp => {                    
                  if(resp.validation_error){
                    setValidation(resp.validation_error)
                  }else{
                     setData(resp.gestionnaire) 
                     window.location.reload();
                     Swal('Success',resp.message,"success")  
                     localStorage.setItem('auth_email',resp.gestionnaire.email);
                     localStorage.setItem('auth_nom',resp.gestionnaire.nom);
                     localStorage.setItem('auth_prenom',resp.gestionnaire.prenom);
                     localStorage.setItem('auth_adresse',resp.gestionnaire.adresse);
                     localStorage.setItem('auth_CIN',resp.gestionnaire.CIN);
                     localStorage.setItem('auth_numero_telephone',resp.gestionnaire.numero_telephone);
                  }
                }).catch(err => {
                  console.log("Error Reading data " + err);
                });       
        }
    const onChange = (e) => {
        const { value, id } = e.target
        setData({ ...data, [id]: value })
        console.log(data)
    }
  return (
    <>
        {show.length!==0 ?(show.map(sh =>               
            ((sh[1]!=="id" && sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo")?(
                <>
                  <TextField id={sh[1]}  onChange={e=>onChange(e) } focused placeholder={localStorage.getItem("auth_"+`${sh[1]}`)}  
                    error={!!validation[sh[1]]} label={sh[0]} variant="outlined" margin="dense" fullWidth />
                  <FormHelperText error={true}>
                    {validation[sh[1]]}        
                  </FormHelperText>                
                </>): null)
        )):null
      }
        <Button variant="contained" className='tableIcon' color="primary" onClick={()=>handleFormSubmit()}>modifier</Button>     
    </>
  )
}
