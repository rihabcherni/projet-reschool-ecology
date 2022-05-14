import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
        ["Identifiant","id"],
        ["type dechet","type_dechet"],
        ["prix unitaire (Kg)","prix_unitaire"],
       ];    
export default function ReparationCamionTable() {
  const initialValue = { camion_id:"", id_mecanicien:"", description_panne:"", cout:"",date_debut_reparation:"",date_fin_reparation:"",created_at:"" ,error_list:[]};    
  const url = `http://127.0.0.1:8000/api/reparation-camion`

  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "camion", field: "camion_id"},
    { headerName: "mecanicien", field: "mecanicien_id"},
    { headerName: "description_panne", field: "description_panne" },
    { headerName: "cout", field: "cout" },
    { headerName: "date_debut_reparation", field: "date_debut_reparation"},
    { headerName: "date_fin_reparation", field: "date_fin_reparation"},
  ]

    return (
        <div style={{width:"100%"}}>
              <h2 align="center">Reparateur Camion</h2>
              <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
        </div>
    );
  }
      










