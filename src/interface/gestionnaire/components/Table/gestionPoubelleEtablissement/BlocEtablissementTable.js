import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etablissement","etablissement_id"],
            ["bloc etablissement","nom_bloc_etablissement"],
           ];    
export default function BlocEtablissementTable() {
  const initialValue = {capacite_poubelle:"", quantite_disponible_plastique: "", quantite_disponible_canette: "",quantite_disponible_composte: "", quantite_disponible_papier: "",error_list:[]};    
  const url = `https://reschoolecology.tech/api/bloc-etablissement`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "etablissement", field: "etablissement_id", },
    { headerName: "bloc etablissement", field: "nom_bloc_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Bloc Etablissement</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}