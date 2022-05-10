import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

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

export default function ResponsableTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/responsable-etablissement`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "photo", field: "photo", cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/responsable_etablissement/${params.data.photo}`} alt="responsable etablissement"/>},
    { headerName: "nom", field: "nom", maxWidth: 135 },
    { headerName: "prenom", field: "prenom", maxWidth: 135 },
    { headerName: "CIN", field: "CIN", maxWidth: 135 },
    { headerName: "numero_telephone", field: "numero_telephone" , maxWidth: 135 },
    { headerName: "email", field: "email", maxWidth: 135  },
    { headerName: "adresse", field: "adresse" , maxWidth: 135 },
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">responsable etablissement</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}


