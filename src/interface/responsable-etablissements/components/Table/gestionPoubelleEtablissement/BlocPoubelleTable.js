import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etage_etablissement_id","etage_etablissement_id"],
  ];    
export default function BlocPoubelleTable() {
  const initialValue = {id:"", etage_etablissement_id: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/auth-responsable-etablissement/bloc-poubelle-responsable`
  const columnDefs = [
    { headerName: "Numero bloc poubelle", field: "id", maxWidth:200, minWidth:50, pinned: 'left' },
    { headerName: "bloc etablissement", field: "nom_bloc", },
    { headerName: "etage etablissement", field: "nom_etage", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Bloc Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}   