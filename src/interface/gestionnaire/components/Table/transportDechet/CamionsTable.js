import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etablissement","bloc_etablissement_id"],
            ["etage etablissement","nom_etage_etablissement"],
           ];    
export default function CamionsTable() {
  const initialValue = { zone_travail_id:"",qrcode:"", matricule:"", longitude:"", latitude:"",heure_sortie:"",heure_entree:"",volume_maximale_poubelle:"",
  volume_actuelle_plastique:"",volume_actuelle_papier:"",volume_actuelle_composte:"",volume_actuelle_canette:"",volume_carburant_consomme:"",Kilometrage:"",created_at:"", updated_at:"",error_list:[]};    
   
  const url = `http://127.0.0.1:8000/api/camion`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "zone de travil", field: "zone_travail_id"},
    { headerName: "matricule", field: "matricule"},
    { headerName: "longitude", field: "longitude"},
    { headerName: "latitude", field: "latitude"},
    { headerName: "heure sortie", field: "heure_sortie"},
    { headerName: "heure entree", field: "heure_entree"},
    { headerName: "volume maximale poubelle", field: "volume_maximale_poubelle"},
    { headerName: "volume actuelle plastique", field: "volume_actuelle_plastique"},
    { headerName: "volume actuelle papier", field: "volume_actuelle_papier"},
    { headerName: "volume actuelle composte", field: "volume_actuelle_composte"},
    { headerName: "volume actuelle canette", field: "volume_actuelle_canette"},
    { headerName: "volume carburant consomme  (L)", field: "volume_carburant_consomme"},
    { headerName: "Kilometrage  (KM)", field: "Kilometrage"}
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Camions</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}
 