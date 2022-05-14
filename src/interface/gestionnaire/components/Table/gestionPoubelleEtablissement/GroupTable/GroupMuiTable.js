import React, { useState,   useCallback, useEffect , useRef} from 'react';
import MaterialTable from 'material-table';
import {tableIcons ,localization} from './style'
export default function GroupMuiTable() {
    const [tableZone, setTableZone] =  useState([]);
    const url = `https://reschoolecology.tech/api/region-map`
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
                                                                                                        { title: 'bloc_poubelle_id ', field: 'bloc_poubelle_id'},
                                                                                                        { title: 'nom', field: 'nom' },                                                           
                                                                                                        { title: 'compteur', field: 'compteur' },                                                           
                                                                                                        { title: 'capacite_poubelle', field: 'capacite_poubelle' },                                                                                                                                                                              { title: 'type', field: 'type' },                                                           
                                                                                                        { title: 'Etat', field: 'Etat' },                                                           
                                                                                                        { title: 'temps_remplissage', field: 'temps_remplissage' },                                                           
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
  
