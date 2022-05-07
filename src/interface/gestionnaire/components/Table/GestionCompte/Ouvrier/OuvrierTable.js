import React from 'react';
import '../../../../../../App.css'
import Api from '../../ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["zone_travail_id","zone_travail_id"],
  ["camion_id","camion_id"],
  ["qrcode","qrcode"],
  ["poste","poste"],
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

export default function OuvrierTable() {
  const initialValue = { zone_travail_id:"", camion_id:"",photo:"",qrcode:"", qrcode:"", nom:"",prenom:"",CIN:"",numero_telephone:"",email:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};
  const url = `http://127.0.0.1:8000/api/ouvrier`
  const columnDefs = [
    { headerName: "ID", field: "id", width:"100",headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true},
    { headerName: "zone_travail_id", field: "zone_travail_id"},
    { headerName: "camion_id", field: "camion_id"},
    { headerName: "photo", field: "photo", cellRenderer: (params) =>
      <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/ouvrier/${params.data.photo}`} alt="ouvrier" />},
    { headerName: "poste", field: "poste"},
    { headerName: "nom", field: "nom"},
    { headerName: "prenom", field: "prenom"},
    { headerName: "CIN", field: "CIN"},
    { headerName: "numero_telephone", field: "numero_telephone" },
    { headerName: "email", field: "email" },
    { headerName: "created_at", field: "created_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 135 },
    { headerName: "updated_at", field: "updated_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 135 },
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Ouvrier</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}