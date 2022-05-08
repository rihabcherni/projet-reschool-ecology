 
import React from 'react';
import '../../../../../App.css'
import Api from '../ComponentsTable/Api';   
  const show=[
            ["Identifiant","id"],
            ["etablissement","bloc_etablissement_id"],
            ["etage etablissement","nom_etage_etablissement"],
           ];    
export default function DepotTable() {
  const initialValue = { id_zone_depot:"", camion_id:"", date_depot:"", quantite_depose_plastique:"", quantite_depose_papier:"", quantite_depose_canette:"", quantite_depose_composte:"", prix_total:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/depot`
    const columnDefs = [
      { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "zone depot", field: "zone_depot_id"},
      { headerName: "camion", field: "camion_id"},
      { headerName: "date depot", field: "date_depot"},
      { headerName: "quantite depose plastique", field: "quantite_depose_plastique"},
      { headerName: "quantite depose papier", field: "quantite_depose_papier"},
      { headerName: "quantite depose canette", field: "quantite_depose_canette"},
      { headerName: "quantite depose composte", field: "quantite_depose_composte"},
      { headerName: "prix total", field: "prix_total"}
    ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Depot</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}