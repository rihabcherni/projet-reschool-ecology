import React from 'react';
import '../../../../../../App.css'
import Api from '../../ComponentsTable/Api';

 const show=[
  ["Identifiant","id"],
  ["Region","region"],
  ["Quantité total collecté plastique","quantite_total_collecte_plastique"],
  ["Quantité total collecté composte","quantite_total_collecte_composte"],
  ["Quantité total collecté papier","quantite_total_collecte_papier"],
  ["Quantité total collecté canette","quantite_total_collecte_canette"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
 ];

export default function ZoneTravailTable() {
  const initialValue = { region: "",quantite_total_collecte_plastique: "" ,quantite_total_collecte_composte: "",quantite_total_collecte_papier: "",quantite_total_collecte_canette: "", created_at: "", updated_at: "", error_list:[]};
  const url = `http://127.0.0.1:8000/api/zone-travail`
  const columnDefs = [
      { headerName: "ID", field:'id', maxWidth: 75},
      { headerName: "region", field: "region", maxWidth: 100},
      { headerName: "Quantité plastique", field: "quantite_total_collecte_plastique",maxWidth: 250 },
      { headerName: "Quantité composte", field: "quantite_total_collecte_composte", maxWidth: 250},
      { headerName: "Quantité papier", field: "quantite_total_collecte_papier",maxWidth: 250 },
      { headerName: "Quantité canette", field: "quantite_total_collecte_canette",maxWidth: 250 },
      { headerName: "Date d'ajout", field: "created_at", type: ['dateColumn', 'nonEditableColumn'],maxWidth: 135},
      { headerName: "Date de mise à jour", field: "updated_at", type: ['dateColumn', 'nonEditableColumn'],maxWidth: 210},
]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Zone de travail</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}


