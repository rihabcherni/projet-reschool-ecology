import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["type_poubelle","type_poubelle"],
            ["capacite_poubelle","capacite_poubelle"],
            ["quantite_disponible","quantite_disponible"],
            ["pourcentage_remise","pourcentage_remise"],
           ];    
export default function StockPoubelleTable() {
  const initialValue = {type_poubelle: "", capacite_poubelle: "",quantite_disponible: "", pourcentage_remise: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/stock-poubelle`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "image produit", field: "photo", cellRenderer: (params) =>
    <img  style={{height:"57px", width:"77px"}} 
      src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${params.data.photo}`}alt="poubelle stock" />},
    { headerName: "type poubelle", field: "type_poubelle" },
    { headerName: "capacité poubelle", field: "capacite_poubelle", },
    { headerName: "quantité disponible", field: "quantite_disponible", },
    { headerName: "pourcentage remise", field: "pourcentage_remise", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Stock Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}
