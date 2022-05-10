import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["client_dechet_id","client_dechet_id"],
  ["quantite","quantite"],
  ["montant_total","montant_total"],
  ["date_commande","date_commande"],
  ["date_livraison","date_livraison"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
 ];

 export default function CommandeDechetTable() {
  const initialValue = { client_dechet_id:"", quantite:"", montant_total:"", date_commande:"", date_livraison:"",created_at:"", updated_at:"", error_list:[]};

  const url = `http://127.0.0.1:8000/api/commande-dechet`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "client", field: "client_dechet_id"},
    { headerName: "quantite", field: "quantite"},
    { headerName: "montant total", field: "montant_total"},
    { headerName: "date commande", field: "date_commande"},
    { headerName: "date livraison", field: "date_livraison"}
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">commande dechet</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}











