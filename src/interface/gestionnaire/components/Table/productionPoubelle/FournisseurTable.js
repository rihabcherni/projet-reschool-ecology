import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["Identifiant","id"],
            ["type dechet","type_dechet"],
            ["prix unitaire (Kg)","prix_unitaire"],
           ];    
export default function FournisseurTable() {
  const initialValue = { nom: "", prenom: "",CIN: "", photo: "",numero_telephone:"",email:"",adresse:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/fournisseurs`
  const columnDefs = [
        { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
        { headerName: "photo", field: "photo", cellRenderer: (params) =>
        <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
              src={`http://127.0.0.1:8000/storage/images/fournisseur/${params.data.photo}`} alt="fournisseur"/>},
        { headerName: "nom", field: "nom"},
        { headerName: "prenom", field: "prenom"},
        { headerName: "CIN", field: "CIN"},
        { headerName: "numero telephone", field: "numero_telephone" },
        { headerName: "email", field: "email" },
        { headerName: "adresse", field: "adresse" }
      ] 
        return (
            <div style={{width:"100%"}}>
                  <h2 align="center">Fournisseur</h2>
                  <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
            </div>
        );
      }