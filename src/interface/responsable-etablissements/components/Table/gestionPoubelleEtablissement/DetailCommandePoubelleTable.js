import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["responsable Etablissement","responsable_etablissement_id"],
            ["quantite","quantite"],
            ["montant_total","montant_total"],
            ["date_commande","date_commande"],
            ["date_livraison","date_livraison"],
  ];    
export default function DetailCommandePoubelleTable() {
  const initialValue = { id_commande_poubelle: "", id_stock_poubelle: "",quantite: "", prix_unitaires: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/detail-commande-poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "commande poubelle", field: "commande_poubelle_id", },
    { headerName: "stock poubelle", field: "stock_poubelle_id", },
    { headerName: "quantite", field: "quantite", },
    { headerName: "prix unitaires", field: "prix_unitaires", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Detail Commande Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}        

