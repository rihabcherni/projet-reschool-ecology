import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["nom_etablissement","nom_etablissement"],
  ["nom_responsable","nom_responsable"],
  ["numero_telephone","numero_telephone"],
  ["email","email"],
  ["mot de passe","mot_de_passe"],
  ["adresse","adresse"],
  ["numero_fixe","numero_fixe"],
 ];

export default function ResponsableTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/responsable-etablissement`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "nom_etablissement", field: "nom_etablissement", maxWidth: 135 },
    { headerName: "nom_responsable", field: "nom_responsable", maxWidth: 135 },
    { headerName: "numero_telephone", field: "numero_telephone", maxWidth: 135 },
    { headerName: "numero_fixe", field: "numero_fixe" , maxWidth: 135 },
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


