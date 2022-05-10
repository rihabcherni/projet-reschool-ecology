import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etablissement","etablissement_id"],
            ["bloc etablissement","nom_bloc_etablissement"],
           ];    
export default function EtablissementTable() {
  const initialValue = { zone_travail_id:"",responsable_etablissement_id:"",nom_etablissement:"", nbr_personnes:"",adresse:"",longitude:"",latitude:""
 ,quantite_dechets_plastique:"",quantite_dechets_composte:"",quantite_dechets_papier:"",quantite_dechets_canette:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/etablissement`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "zone travail", field: "zone_travail_id", maxWidth: 135 },
    { headerName: "responsable etablissement", field: "responsable_etablissement_id", maxWidth: 240 },
    { headerName: "nom etablissement", field: "nom_etablissement", maxWidth: 195 },
    { headerName: "nombre personnes", field: "nbr_personnes", maxWidth: 185 },
    { headerName: "adresse", field: "adresse" , maxWidth: 120 },
    { headerName: "longitude", field: "longitude", maxWidth: 130  },
    { headerName: "latitude", field: "latitude", maxWidth: 130 },
    { headerName: "quantite dechets plastique", field: "quantite_dechets_plastique" , maxWidth: 250 },
    { headerName: "quantite dechets composte", field: "quantite_dechets_composte" , maxWidth: 250 },
    { headerName: "quantite dechets papier", field: "quantite_dechets_papier", maxWidth: 230  },
    { headerName: "quantite dechets canette", field: "quantite_dechets_canette", maxWidth: 230  },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Etablissement</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}