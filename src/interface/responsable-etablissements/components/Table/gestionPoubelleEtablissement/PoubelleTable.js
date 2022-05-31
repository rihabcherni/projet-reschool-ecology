import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
import styled from 'styled-components'

const ProgressStyle = styled.div`
	background-color: #d8d8d8;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 100%;
`
const ProgressDone = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
  padding-left:10px ;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
  `
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	const [color, setColor] = React.useState("");
	const [colorNumber, setColorNumber] = React.useState("");
	
	setTimeout(() => {
    if(done< 25){
      setColor("green")
      setColorNumber("black")
    }else if (done>=25 && done<50){
      setColor("yellow")
      setColorNumber("black")
    }else if (done>=50 && done<75){
      setColor("orange")
      setColorNumber("white")
    }else if (done>=75 && done<100){
      setColor("red")
      setColorNumber("white")
    }
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
      backgroundColor:`${color}`,
      boxShadow: `0 3px 3px -5px ${color}, 0 2px 5px ${color}`,
      color: `${colorNumber}` 
		}
		
		setStyle(newStyle);
	}, 100);
	
	return (
		<ProgressStyle>
			<ProgressDone style={style}>
         {done}%
			</ProgressDone>
		</ProgressStyle>
	)
}
const show=[
            ["Identifiant","id"],
            ["responsable Etablissement","responsable_etablissement_id"],
            ["quantite","quantite"],
            ["montant_total","montant_total"],
            ["date_commande","date_commande"],
            ["date_livraison","date_livraison"],
  ];    
export default function PoubelleTable() {
  const initialValue = { bloc_poubelle_id:"", nom:"",qrcode:"", capacite_poubelle:"", type:"",Etat:"",temps_remplissage:"",created_at:"", updated_at:"",error_list:[]}
  const url = `http://127.0.0.1:8000/api/auth-responsable-etablissement/poubelle-responsable`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Bloc etablissement", field: "nom_bloc", maxWidth:300, minWidth:100},
    { headerName: "Etage", field: "nom_etage", maxWidth:300, minWidth:100},
    { headerName: "Bloc poubelle", field: "bloc_poubelle_id", maxWidth:300, minWidth:100},
    { headerName: "Poubelle", field: "nom", maxWidth:300, minWidth:100},
    { headerName: "Nombre dechet", field: "compteur", maxWidth:300, minWidth:100},
    { headerName: "Capacite", field: "capacite_poubelle" , maxWidth:300, minWidth:100},
    { headerName: "Type", field: "type" , maxWidth:300, minWidth:100},
    { headerName: "Etat de remplissage", field: "Etat", maxWidth:200, minWidth:150, cellRenderer: (params) =>
    <Progress done={`${params.data.Etat}`} />, maxWidth:300, minWidth:100},
    { headerName: "Temps de remplissage", field: "temps_remplissage", type: ['dateColumn', 'nonEditableColumn'],maxWidth: 135}
  ]
 
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Poubelle</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}        

 













