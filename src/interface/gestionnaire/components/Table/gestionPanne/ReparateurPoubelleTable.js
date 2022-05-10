import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
        ["Identifiant","id"],
        ["type dechet","type_dechet"],
        ["prix unitaire (Kg)","prix_unitaire"],
       ];    
export default function ReparateurPoubelleTable() {
  const initialValue = {photo:"",nom:"", prenom:"",CIN:"", numero_telephone:"", email:"",adresse:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/reparateur-poubelle`

  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "photo", field: "photo", cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/reparateur_poubelle/${params.data.photo}`}alt="reparateur-poubelle" />},
    { headerName: "nom", field: "nom"},
    { headerName: "prenom", field: "prenom"},
    { headerName: "CIN", field: "CIN"},
    { headerName: "numero_telephone", field: "numero_telephone" },
    { headerName: "email", field: "email" },
    { headerName: "adresse", field: "adresse"},
    { headerName: "mot_de_passe", field: "mot_de_passe"},
  ]

    return (
        <div style={{width:"100%"}}>
              <h2 align="center">Mecanicien</h2>
              <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
        </div>
    );
  }
      




















