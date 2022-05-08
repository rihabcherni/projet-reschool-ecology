import React from 'react';
import '../../../../../App.css'
import Api from '../ComponentsTable/Api';   
  const show=[
            ["Identifiant","id"],
            ["responsable Etablissement","responsable_etablissement_id"],
            ["quantite","quantite"],
            ["montant_total","montant_total"],
            ["date_commande","date_commande"],
            ["date_livraison","date_livraison"],
  ];    
export default function CommandePoubelleTable() {
  const initialValue = { responsable_etablissement_id: "", quantite: "",montant_total: "", date_commande: "",date_livraison:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/commande-poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "responsable etablissement", field: "responsable_etablissement_id", },
    { headerName: "quantite", field: "quantite", },
    { headerName: "montant total", field: "montant_total", },
    { headerName: "date commande", field: "date_commande", },
    { headerName: "date livraison", field: "date_livraison", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Commande Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}      