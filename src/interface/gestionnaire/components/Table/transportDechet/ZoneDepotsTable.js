 import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etablissement","bloc_etablissement_id"],
            ["etage etablissement","nom_etage_etablissement"],
           ];    
export default function ZoneDepotsTable() {
  const initialValue = { adresse:"" ,longitude:"" ,latitude:"", quantite_depot_maximale:"",quantite_depot_actuelle_plastique:"",
  quantite_depot_actuelle_papier:"",quantite_depot_actuelle_composte:"",quantite_depot_actuelle_canette:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `https://reschoolecology.tech/api/zone-depot`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "adresse", field: "adresse"},
    { headerName: "longitude", field: "longitude"},
    { headerName: "latitude", field: "latitude"},
    { headerName: "quantite depot maximale", field: "quantite_depot_maximale"},
    { headerName: "quantite depot actuelle plastique", field: "quantite_depot_actuelle_plastique"},
    { headerName: "quantite depot actuelle papier", field: "quantite_depot_actuelle_papier"},
    { headerName: "quantite depot actuelle composte", field: "quantite_depot_actuelle_composte"},
    { headerName: "quantite depot actuelle canette", field: "quantite_depot_actuelle_canette"}
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Zone Depot</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}