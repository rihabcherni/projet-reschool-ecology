import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["type dechet","type_dechet"],
  ["prix unitaire (Kg)","prix_unitaire"],
 ];

 export default function DechetsTable() {
  const initialValue = { type_dechet:"", prix_unitaire:"",error_list:[]};

  const url = `https://reschoolecology.tech/api/dechets`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "type_dechet", field: "type_dechet"},
    { headerName: "prix_unitaire (Kg)", field: "prix_unitaire"},
  ]
  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Dechet</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}











