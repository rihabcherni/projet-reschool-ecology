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
export default function PoubelleTable() {
  const initialValue = { bloc_poubelle_id:"", nom:"",qrcode:"", capacite_poubelle:"", type:"",Etat:"",temps_remplissage:"",created_at:"", updated_at:"",error_list:[]}
  const url = `http://127.0.0.1:8000/api/poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "bloc poubelle", field: "bloc_poubelle_id"},
    { headerName: "nom", field: "nom"},
    { headerName: "compteur", field: "compteur"},
    { headerName: "capacite de poubelle", field: "capacite_poubelle" },
    { headerName: "type", field: "type" },
    { headerName: "etat de remplissage", field: "Etat"},
    { headerName: "temps de remplissage", field: "temps_remplissage"}
  ]
 
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}        

 













