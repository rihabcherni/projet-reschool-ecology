import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
        ["Identifiant","id"],
        ["type dechet","type_dechet"],
        ["prix unitaire (Kg)","prix_unitaire"],
       ];    
export default function MecanicienTable() {
  const initialValue = { photo:"",nom:"", prenom:"",CIN:"", numero_telephone:"", email:"",adresse:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};    
    const url = `https://reschoolecology.tech/api/mecanicien` 

    const columnDefs = [
      { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "photo", field: "photo", cellRenderer: (params) =>
      <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
            src={`https://reschoolecology.tech/storage/images/mecanicien/${params.data.photo}`}alt="mecanicien" />},
      { headerName: "nom", field: "nom"},
      { headerName: "prenom", field: "prenom"},
      { headerName: "CIN", field: "CIN"},
      { headerName: "numero_telephone", field: "numero_telephone" },
      { headerName: "email", field: "email" },
      { headerName: "adresse", field: "adresse"},
      { headerName: "mot_de_passe", field: "mot_de_passe"}
    ]
    return (
        <div style={{width:"100%"}}>
              <h2 align="center">Mecanicien</h2>
              <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
        </div>
    );
  }
      




