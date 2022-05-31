import React, { useState,   useCallback, useEffect , useRef} from 'react';
import MaterialTable from 'material-table';
import {tableIcons ,localization} from './style'
import styled from 'styled-components'

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


export default function GroupMuiTable() {
    const [tableZone, setTableZone] =  useState([]);
    const url = `http://127.0.0.1:8000/api/region-map`
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        fetch(url).then(resp => resp.json()).then(resp => {setTableZone(resp);  })
    }
    if(tableZone!==null){
        return (
            <div className='Group-table'>
                <MaterialTable icons={tableIcons}  title="Details  par zone travail"  localization={localization} data={tableZone}
                    columns={[
                        { title: 'Id', field: 'id' },
                        { title: 'Region', field: 'region' ,type:'string'},
                        { title: 'Quantite total collecte plastique', field: 'quantite_total_collecte_plastique' },
                        { title: 'Quantite total collecte papier', field: 'quantite_total_collecte_papier' },
                        { title: 'Quantite total collecte composte', field: 'quantite_total_collecte_composte' },
                        { title: 'Quantite total collecte canette', field: 'quantite_total_collecte_canette'},  
                        { title: 'created_at', field: 'created_at', type: 'date' }, 
                        { title: 'updated_at', field: 'updated_at', type: 'date' }, 
                    ]}
                    detailPanel={rowData => {
                        return (
                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                <MaterialTable icons={tableIcons}  title="Details établissement" localization={localization} data={rowData.etablissements}
                                    columns={[
                                        { title: 'Id', field: 'id' },
                                        { title: 'zone travail ', field: 'zone_travail_id'},
                                        { title: 'responsable etablissement', field: 'responsable_etablissement_id' },
                                        { title: 'nom etablissement', field: 'nom_etablissement', type: 'string'  },
                                        { title: 'type etablissement', field: 'type_etablissement', type: 'string'  },
                                        { title: 'nbr personnes', field: 'nbr_personnes'}, 
                                        { title: 'adresse', field: 'adresse', type: 'string' }, 
                                        { title: 'longitude', field: 'longitude'}, 
                                        { title: 'latitude', field: 'latitude'}, 
                                        { title: 'quantite dechets plastique', field: 'quantite_dechets_plastique'}, 
                                        { title: 'quantite dechets composte', field: 'quantite_dechets_composte'}, 
                                        { title: 'quantite dechets papier', field: 'quantite_dechets_papier' }, 
                                        { title: 'quantite dechets canette', field: 'quantite_dechets_canette'}, 
                                        { title: 'created at', field: 'created_at', type: 'date' }, 
                                        { title: 'updated at', field: 'updated_at', type: 'date' }, 
                                    ]}
                                    detailPanel={rowData => {
                                        return (
                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                <MaterialTable icons={tableIcons}  title="Details Bloc etablissements" localization={localization}  data={rowData.bloc_etablissements}
                                                    columns={[
                                                        { title: 'Id', field: 'id' },
                                                        { title: 'etablissement_id ', field: 'etablissement_id'},
                                                        { title: 'nom_bloc_etablissement', field: 'nom_bloc_etablissement' },                                                           
                                                        { title: 'created at', field: 'created_at', type: 'date' }, 
                                                        { title: 'updated at', field: 'updated_at', type: 'date' }, 
                                                    ]}
                                                    detailPanel={rowData => {
                                                        return (
                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                <MaterialTable   icons={tableIcons}  title="Details etage établissement" localization={localization} data={rowData.etage_etablissements}
                                                                    columns={[
                                                                       { title: 'Id', field: 'id' },
                                                                       { title: 'bloc_etablissement_id ', field: 'bloc_etablissement_id'},
                                                                       { title: 'nom_etage_etablissement', field: 'nom_etage_etablissement' },                                                           
                                                                       { title: 'created at', field: 'created_at', type: 'date' }, 
                                                                       { title: 'updated at', field: 'updated_at', type: 'date' }, 
                                                                    ]}
                                                                    detailPanel={rowData => {
                                                                        return (
                                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                                <MaterialTable  icons={tableIcons}  title="Details bloc poubelles"  localization={localization}  data={rowData.bloc_poubelles}
                                                                                    columns={[
                                                                                        { title: 'Id', field: 'id' },
                                                                                        { title: 'etage_etablissement_id ', field: 'etage_etablissement_id'},
                                                                                        { title: 'created at', field: 'created_at', type: 'date' }, 
                                                                                        { title: 'updated at', field: 'updated_at', type: 'date' }, 
                                                                                    ]}
                                                                                    detailPanel={rowData => {
                                                                                        return (
                                                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                                                <MaterialTable icons={tableIcons}  title="Details poubelles" localization={localization}  data={rowData.poubelles}
                                                                                                    columns={[
                                                                                                        { title: 'Id', field: 'id' },
                                                                                                        { title: 'Poubelle', field: 'nom' },                                                           
                                                                                                        { title: 'Nombre de déchets', field: 'compteur' },                                                           
                                                                                                        { title: 'Capacite poubelle', field: 'capacite_poubelle' },                                                                                                                                                                              { title: 'type', field: 'type' },                                                           
                                                                                                        { title: 'Etat', field: 'Etat' ,render: rowData =>   <Progress done={`${rowData.Etat}`} />,  
                                                                                                        cellStyle: {
                                                                                                           width:"200px"
                                                                                                          }},                                                           
                                                                                                        { title: 'Temps remplissage', field: 'temps_remplissage' },                                                           
                                                                                                        { title: 'created at', field: 'created_at', type: 'date' }, 
                                                                                                        { title: 'updated at', field: 'updated_at', type: 'date' }, 
                                                                                                    ]}
                                                                                                     onRowClick={(event, rowData, togglePanel) => togglePanel()}/>
                                                                                            </div>
                                                                                        )
                                                                                    }}
                                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}  />
                                                                            </div>
                                                                        )
                                                                    }}
                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}  />
                                                            </div>
                                                        )
                                                    }}
                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
                                            </div>
                                        )
                                    }}
                                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
                            </div>
                        )
                    }}
                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
            </div>
        )
    }else {
        return "vide"
    }
  }
  
