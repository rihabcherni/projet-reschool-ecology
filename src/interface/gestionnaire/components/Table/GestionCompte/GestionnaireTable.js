import React from 'react';
import '../../../../../App.css'
import Api from '../ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["numero_telephone","numero_telephone"],
  ["email","email"],
  ["mot de passe","mot_de_passe"],
  ["adresse","adresse"],
  ["photo","photo"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
 ];

export default function GestionnaireTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/gestionnaire`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "photo", field: "photo", minWidth:70, minWidth:30, cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/gestionnaire/${params.data.photo}`} alt="gestionnaire"/>},
    { headerName: "nom", field: "nom", maxWidth: 135, minWidth:50 },
    { headerName: "prenom", field: "prenom", maxWidth: 135, minWidth:50 },
    { headerName: "CIN", field: "CIN", maxWidth: 135, minWidth:50 },
    { headerName: "numero_telephone", field: "numero_telephone" , maxWidth: 135 , minWidth:50},
    { headerName: "email", field: "email", maxWidth: 200, minWidth:50 },
    { headerName: "adresse", field: "adresse" , maxWidth: 250 , minWidth:50},
  ]

  return (
    <>
        <h2 align="center">gestionnaire</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </>
  );
}



