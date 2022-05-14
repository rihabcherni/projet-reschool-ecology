import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etage_etablissement_id","etage_etablissement_id"],
  ];    
export default function BlocPoubelleTable() {
  const initialValue = {id:"", etage_etablissement_id: "",error_list:[]};    
  const url = `https://reschoolecology.tech/api/bloc-poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "etage etablissement", field: "etage_etablissement_id", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Bloc Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
} 