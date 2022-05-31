import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["Etablissement","etablissement_id"],
            ["Bloc etablissement","nom_bloc_etablissement"],
           ];    
export default function BlocEtablissementTable() {
  const initialValue = {etablissement_id:"", nom_bloc_etablissement: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/bloc-etablissement`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Etablissement", field: "etablissement_id", },
    { headerName: "Bloc etablissement", field: "nom_bloc_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Bloc Etablissement</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}