import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["etablissement","bloc_etablissement_id"],
            ["etage etablissement","nom_etage_etablissement"],
           ];    
export default function MateriauxPrimairesTable() {
  const initialValue = { id_fournisseur: "", nom_materiel: "",prix_unitaire: "", quantite: "",prix_total:"",error_list:[]};    
  const url = `https://reschoolecology.tech/api/materiaux-primaires`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "fournisseur", field: "fournisseur_id", },
    { headerName: "nom materiel", field: "nom_materiel", },
    { headerName: "prix unitaire", field: "prix_unitaire", },
    { headerName: "quantite", field: "quantite", },
    { headerName: "prix total", field: "prix_total", },
  ]
  
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">  Materiaux Primaires</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}