import React from 'react';
import '../../../../../App.css'
import Api from '../ComponentsTable/Api';   
  const show=[
            ["Identifiant","id"],
            ["etablissement","bloc_etablissement_id"],
            ["etage etablissement","nom_etage_etablissement"],
           ];    
export default function EtageEtablissementTable() {
  const initialValue = {capacite_poubelle:"", quantite_disponible_plastique: "", quantite_disponible_canette: "",quantite_disponible_composte: "", quantite_disponible_papier: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/etage-etablissement`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "bloc_etablissement_id", field: "bloc_etablissement_id", },
    { headerName: "etage etablissement", field: "nom_etage_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Etage Etablissement</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}