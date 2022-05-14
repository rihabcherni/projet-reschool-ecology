import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["Nom entreprise","nom_entreprise"],
  ["Nom responsable","nom_responsable"],
  ["Matricule_fiscale","matricule_fiscale"],
  ["Numero_telephone","numero_telephone"],
  ["Numero_fixe","numero_fixe"],
  ["Email","email"],
  ["Mot de passe","mot_de_passe"],
  ["Adresse","adresse"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
 ];

export default function ClientTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `https://reschoolecology.tech/api/client`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id",  maxWidth:100,minWidth:80, pinned: 'left' },
    { headerName: "nom_entreprise", field: "nom_entreprise", minWidth: 135},
    { headerName: "nom_responsable", field: "nom_responsable", minWidth: 135 },
    { headerName: "matricule_fiscale", field: "matricule_fiscale", minWidth: 135 },
    { headerName: "numero_telephone", field: "numero_telephone" , minWidth: 135 },
    { headerName: "Numero_fixe", field: "numero_fixe", minWidth: 135 },
    { headerName: "email", field: "email", minWidth: 135  },
    { headerName: "adresse", field: "adresse" , minWidth: 135 },
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Client dechet</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}


