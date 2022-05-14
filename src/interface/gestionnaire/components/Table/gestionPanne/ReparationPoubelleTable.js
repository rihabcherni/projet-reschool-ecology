import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
const show=[
    ["Identifiant","id"],
    ["type dechet","type_dechet"],
    ["prix unitaire (Kg)","prix_unitaire"],
  ];    
export default function ReparationPoubelleTable() {
  const initialValue = { id_poubelle:"", id_reparateur_poubelle:"", description_panne:"", cout:"",date_debut_reparation:"",date_fin_reparation:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `https://reschoolecology.tech/api/reparation-poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "poubelle", field: "poubelle_id"},
    { headerName: "reparateur poubelle ", field: "reparateur_poubelle_id"},
    { headerName: "description_panne", field: "description_panne" },
    { headerName: "cout", field: "cout" },
    { headerName: "date_debut_reparation", field: "date_debut_reparation"},
    { headerName: "date_fin_reparation", field: "date_fin_reparation"},
  ]
  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Reparation Poubelle</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}
      
