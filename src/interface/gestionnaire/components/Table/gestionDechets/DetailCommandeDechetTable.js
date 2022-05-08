import React from 'react';
import '../../../../../App.css'
import Api from '../ComponentsTable/Api';   
  const show=[
        ["Identifiant","id"],
        ["type dechet","type_dechet"],
        ["prix unitaire (Kg)","prix_unitaire"],
       ];    
export default function DetailCommandeDechetTable() {
    const initialValue = { commande_dechet_id:"", dechet_id:"", quantite:"",created_at:"", updated_at:"",error_list:[]};    
    const url = `http://127.0.0.1:8000/api/detail-commande-dechets` 
    const columnDefs = [
      { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "commande dechet", field: "commande_dechet_id"},
      { headerName: "dechet", field: "dechet_id"},
      { headerName: "quantite", field: "quantite"},
    ]  
    return (
        <div style={{width:"100%"}}>
              <h2 align="center">details commandes dechets</h2>
              <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
        </div>
    );
  }
      