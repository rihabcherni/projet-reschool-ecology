import React, { useEffect, useState } from 'react';
import { Button, Paper, FormHelperText,Grid,TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Swal from "sweetalert";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f2f2f2lab',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function InputUpdate() {
    const initialValue = { nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
    const [validation, setValidation] = useState([])
    const [data, setData] = useState(initialValue)
    const show=[
        ["nom","nom"],
        ["prenom","prenom"],
        ["CIN","CIN"],
        ["numero_telephone","numero_telephone"],
        ["email","email"],
        ["adresse","adresse"],
       ];
    const handleFormSubmit= (e) =>  {
              fetch("http://127.0.0.1:8000/api/auth-gestionnaire/modifier-profile-gestionnaire", {
                method: "PUT", 
                body: JSON.stringify(data), 
                headers: {
                  'content-type': "application/json",
                  'Accept': 'application/json',
                  "Authorization":`Bearer ${localStorage.getItem('auth_token')}`
                }
              }).then(resp => resp.json())
                .then(resp => {                    
                    console.log(resp)

                  if(resp.validation_error){
                    setValidation(resp.validation_error)
                  }else{
                    console.log(resp)
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
                  // Do something for an error here
                  console.log("Error Reading data " + err);
                });
                console.log(validation)
       
        }
    const onChange = (e) => {
        const { value, id } = e.target
        setData({ ...data, [id]: value })
        console.log(data)

      }

        
  return (
    <>
    {show.length!==0 ?(show.map(sh => 
                  
        ((sh[1]!="id" && sh[1]!="created_at" && sh[1]!="updated_at" && sh[1]!="photo")?(
            <>
                    <TextField id={sh[1]}  onChange={e=>onChange(e)} focused placeholder={localStorage.getItem("auth_"+`${sh[1]}`)}  error={!!validation[sh[1]]} label={sh[0]} variant="outlined" margin="dense" fullWidth />
                    <FormHelperText error={true}>
                         {validation[sh[1]]}        
                    </FormHelperText>                   
            </>): null)
         
    )):null
    }

    <Button variant="outlined" className='tableIcon' color="primary" onClick={()=>handleFormSubmit()}style={{marginRight:"2px"}}>modifier</Button>

     
    </>
  )
}
