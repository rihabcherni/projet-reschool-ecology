import React from 'react';
import '../../../../../App.css'
import Api from '../ComponentsTable/Api';   
  const show=[
            ["Identifiant","id"],
            ["type dechet","type_dechet"],
            ["prix unitaire (Kg)","prix_unitaire"],
           ];    
export default function StockPoubelleTable() {
  const initialValue = {capacite_poubelle:"", quantite_disponible_plastique: "", quantite_disponible_canette: "",quantite_disponible_composte: "", quantite_disponible_papier: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/stock-poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "capacite poubelle", field: "capacite_poubelle", },
    { headerName: "quantite disponible plastique", field: "quantite_disponible_plastique", },
    { headerName: "quantite disponible canette", field: "quantite_disponible_canette", },
    { headerName: "quantite disponible composte", field: "quantite_disponible_composte", },
    { headerName: "quantite disponible papier", field: "quantite_disponible_papier", }
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Stock Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}
