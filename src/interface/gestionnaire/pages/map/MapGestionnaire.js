import React,{useState, useEffect} from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Marker, InfoWindow ,Traf} from '@react-google-maps/api';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import '../../assets/css/map.css'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import etage from '../../../../Global/images/etage.svg'
import Camion from '../../../../Global/images/camion.svg'
import ZoneDepotImage from '../../../../Global/images/zoneDepot.svg'
import '../../../../../src/App.css';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import EtablissementIcon from "../../../../Global/images/etablissement-icon.svg"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {CardMapDetails} from '../../../../style';
import { Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone  , faBuilding, faUser, faAt, faAddressCard ,faBriefcase, faTruck} from '@fortawesome/free-solid-svg-icons'

const containerStyle = {
  width: '100%',
  height: '84vh',
  marginRight:"20px"
};
const center = {
  lat: 36.79707659935575,
  lng:  10.198563045367104
};
const divStyle = {
  background: `white`,
  padding: 2,
  width:150,
  height:30, 
}
export default function MapGestionnaire() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyCM_y_hH1jw8ucuvhzfmGdKMloxPwBjbAo" ,
  });
  const [etablissements, setEtablissements] = useState([]);
  const [camions, setCamions] = useState([]);
  const [zoneDepots, setZoneDepots] = useState([]);

  const [uniqueEtablissements, setUniqueEtablissements] = useState([]);
  const [uniquecamions, setUniqueCamions] = useState([]);
  const [uniqueZoneDepot, setUniqueZoneDepot] = useState([]);
  
  const [showUniqueEtablissement, setShowUniqueEtablissement] = useState(null);
  const [showUniqueCamion, setShowUniqueCamion] = useState(null);
  const [showUniqueZoneDepot, setShowUniqueZoneDepot] = useState(null);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/google-map")
      .then((e) => {
        return e.json();
      })
      .then((data) => {
          setEtablissements(data);
      });
    fetch("http://127.0.0.1:8000/api/google-map-camion")
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        setCamions(data);
        console.log(data)
      });

      fetch("http://127.0.0.1:8000/api/zone-depot")
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        setZoneDepots(data.data);
        console.log(data.data)
      });
    },[])
    const [activeMarkerEtablissement, setActiveMarkerEtablissement] = useState(null);
    async function handleActiveMarkerEtablissement  (marker) {
      if (marker === activeMarkerEtablissement) {
        return;
      }
        setActiveMarkerEtablissement(marker);
          if(marker!==null){

          await fetch(`http://127.0.0.1:8000/api/google-map/${marker+1}`)
          .then((e) => {
            return e.json();
          })
          .then((data) => {
            setUniqueEtablissements(data);
          })}
    };

    const [activeMarkerCamion, setActiveMarkerCamion] = useState(null);
    async function handleActiveMarkerCamion  (marker) {
      if (marker === activeMarkerCamion) {
        return;
      }
      setActiveMarkerCamion(marker);
          if(marker!==null){
          await fetch(`http://127.0.0.1:8000/api/google-map-camion/${marker}`)
          .then((e) => {
            return e.json();
          })
          .then((data) => {
            setUniqueCamions(data);
          })}
    };

    const [activeMarkerZoneDepot, setActiveMarkerZoneDepot] = useState(null);
    async function handleActiveMarkerZoneDepot  (marker) {
      if (marker === activeMarkerZoneDepot) {
        return;
      }
      setActiveMarkerZoneDepot(marker);
          if(marker!==null){
          await fetch(`http://127.0.0.1:8000/api/zone-depot/${marker}`)
          .then((e) => {
            return e.json();
          })
          .then((data) => {
            setUniqueZoneDepot(data.data);
            console.log(data.data.adresse)
          })}
    };


  if (!isLoaded) return <div><Skeleton sx={{ height:500 }} animation="wave" variant="rectangular" /></div>;
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>    
      <GoogleMap mapContainerStyle={containerStyle} onMouseOver={() =>{ setActiveMarkerEtablissement(null); setUniqueEtablissements(null) ;setShowUniqueEtablissement(true);setActiveMarkerCamion(null); setUniqueCamions(null) ;setShowUniqueCamion(true);setActiveMarkerZoneDepot(null); setUniqueZoneDepot(null) ;setShowUniqueZoneDepot(true);}} center={center} zoom={11.2}>                  
              {etablissements.length!==0?(etablissements.map((etb, id) =>
                  <>
                      <Marker key={id} onClick={() => handleActiveMarkerEtablissement(id)}
                              icon={ EtablissementIcon}
                          position={ {lat:etb.latitude, lng:etb.longitude} }>                                                   
                      </Marker>     
                      {activeMarkerEtablissement === id ? ( 
                      <InfoWindow onCloseClick={() => setActiveMarkerEtablissement(null)}  position={ {lat:etb.latitude+0.025, lng:etb.longitude}}>
                        <div style={divStyle}> <p>{etb.nom_etablissement}</p> </div>
                      </InfoWindow>
                     ) : null}
                  </>             
              )):(<div style={{color:"red"}}>pas des etablissements</div>)}

              {  camions.length!==0?(camions.map((camion, id) =>
                <>
                    <Marker key={id} onClick={() => handleActiveMarkerCamion(camion.camion.id)}
                        icon={Camion}
                        position={ {lat:camion.camion.latitude, lng:camion.camion.longitude} }>                                                   
                    </Marker>     
                  {activeMarkerCamion === camion.camion.id ? ( 
                    <InfoWindow onCloseClick={() => setActiveMarkerCamion(null)} position={ {lat:camion.camion.latitude+0.025, lng:camion.camion.longitude}} >
                      <div style={divStyle}> <p>{camion.camion.matricule}</p> </div>
                    </InfoWindow>
                   ) : null}
                </> ) ):(<div style={{color:"red"}}>pas des camions</div>) }
              
              { zoneDepots.length!==0?(zoneDepots.map((zone, id) =>
                  <>
                      <Marker key={id} onClick={() => handleActiveMarkerZoneDepot(zone.id)}
                          icon={ZoneDepotImage}
                          position={ {lat:zone.latitude, lng:zone.longitude} }>                                                   
                      </Marker>     
                    {activeMarkerZoneDepot === zone.id ? ( 
                      <InfoWindow onCloseClick={() => setActiveMarkerZoneDepot(null)} position={ {lat:zone.latitude+0.025, lng:zone.longitude}} >
                        <div style={divStyle}> <p>{zone.adresse}</p> </div>
                      </InfoWindow>
                     ) : null}
                  </> ) ):(<div style={{color:"red"}}>pas des zones</div>) }
             
      </GoogleMap>   
      
      { (uniqueEtablissements!==null)&&(showUniqueEtablissement===true)?
          <div style={{alignSelf: 'center'}}>
                    <div className='scroller' style={{minWidth:354, maxWidth: 700,maxHeight:605, minHeight:605,  border:"1px solid #f0f0f0"}}>
                        <h3 style={{color:"green", textAlign:"center",paddingTop:"20px"}}>{uniqueEtablissements[0].type_etablissement}: {uniqueEtablissements[0].nom_etablissement} </h3>
                           <ul>
                                <li><b>adresse:</b> {uniqueEtablissements[0].adresse}</li>
                                <li><b>nombre personnes:</b>  {uniqueEtablissements[0].nbr_personnes}</li>
                                <li><b>longitude:</b>  {uniqueEtablissements[0].longitude}</li>
                                <li><b>latitude:</b>  {uniqueEtablissements[0].latitude}</li>
                                <li style={{textAlign:"center"}}><b>responsable etablissement:</b></li>
                            </ul>
                            <Col>
                              <div className="card-template card-template-1">
                                <div className="left-part">
                                         <img src={`http://127.0.0.1:8000/storage/images/ouvrier/${uniqueEtablissements[5].photo}`}  alt="Avatar"/>
                                     </div>
                                     <div className="right-part">
                                         <h3 style={{textAlign:'center'}}><i>{uniqueEtablissements[5].nom +" " + uniqueEtablissements[5].prenom}</i></h3>
                                             <li> <FontAwesomeIcon icon={faAddressCard} className="icon-card"/><strong style={{marginLeft:"10px"}}>CIN: </strong>{ uniqueEtablissements[5].CIN}  </li> 
                                             <li> <FontAwesomeIcon icon={faBuilding} className="icon-card"/><strong  style={{marginLeft:"15px"}}>Adresse: </strong> { uniqueEtablissements[5].adresse} </li> 
                                             <li> <FontAwesomeIcon icon={faPhone} className="icon-card"/><strong  style={{marginLeft:"10px"}}>Telephone: </strong>{ uniqueEtablissements[5].numero_telephone} </li> 
                                             <li> <FontAwesomeIcon icon={faAt} className="icon-card"/><strong  style={{marginLeft:"10px"}}> Email: </strong> { uniqueEtablissements[5].email}</li>    
                                </div>
                              </div>
                            </Col>   
                        <div>
                        <div className="row">
                        <div className="column">
                        <div className="card">
                          <div className='plastique' style={{textAlign:"center"}}>Plastique</div>
                              <div>
                                    <li><b>quantite dechets:</b>{`${uniqueEtablissements[0].quantite_dechets_plastique}`}</li>
                                    <li><b>nombre total poubelle:</b> {uniqueEtablissements[1].nombre_poubelle_plastique}</li>
                                    <li><b>nombre poubelle +75% :</b> {`${uniqueEtablissements[1].nbr_poubelle_plastique_rempli_plus_75}`}</li>
                                    <li><b>somme total:</b> {uniqueEtablissements[1].somme_total_plastique.toFixed(3)}KG</li>
                                    <li><b>moyenne poubelle:</b> {uniqueEtablissements[1].moyenne_poubelle_plastique.toFixed(3)}</li>
                                    <li><b>pourcentage poubelle:</b> {uniqueEtablissements[1].moyenne_pourcentage_plastique.toFixed(2)}%</li>
                              </div>          
                          </div>
                        </div>
                            
                              <div className="column">
                                <div className="card">
                                    <div>
                                        <div className='papier' style={{textAlign:"center"}}>Papier</div>
                                        <div>
                                              <li><b>quantite dechets:</b>{`${uniqueEtablissements[0].quantite_dechets_papier}`}</li>
                                              <li><b>nombre total poubelle:</b> {uniqueEtablissements[2].nombre_poubelle_papier}</li>
                                              <li><b>nombre poubelle +75% :</b> {`${uniqueEtablissements[2].nbr_poubelle_papier_rempli_plus_75}`}</li>
                                              <li><b>somme total:</b> {uniqueEtablissements[2].somme_total_papier.toFixed(3)}KG</li>
                                              <li><b>moyenne poubelle:</b> {uniqueEtablissements[2].moyenne_poubelle_papier.toFixed(3)}</li>
                                              <li><b>pourcentage poubelle:</b> {uniqueEtablissements[2].moyenne_pourcentage_papier.toFixed(2)}%</li>
                                        </div>          
                                    </div>
                                </div>
                              </div>
                              
                                <div className="column">
                                  <div className="card">
                                    <div className='composte' style={{textAlign:"center"}}>Composte</div>
                                        <div>
                                              <li><b>quantite dechets:</b>{`${uniqueEtablissements[0].quantite_dechets_composte}`}</li>
                                              <li><b>nombre total poubelle:</b> {uniqueEtablissements[4].nombre_poubelle_composte}</li>
                                              <li><b>nombre poubelle +75% :</b> {`${uniqueEtablissements[4].nbr_poubelle_composte_rempli_plus_75}`}</li>
                                              <li><b>somme total:</b> {uniqueEtablissements[4].somme_total_composte.toFixed(3)}KG</li>
                                              <li><b>moyenne poubelle:</b> {uniqueEtablissements[4].moyenne_poubelle_composte.toFixed(3)}</li>
                                              <li><b>pourcentage poubelle:</b> {uniqueEtablissements[4].moyenne_pourcentage_composte.toFixed(2)}%</li>
                                        </div>          
                                    </div>
                                </div>
                              
                                <div className="column">
                                <div className="card">
                                  <div className='canette' style={{textAlign:"center"}}>Canette</div>
                                      <div>
                                            <li><b>quantite dechets:</b>{`${uniqueEtablissements[0].quantite_dechets_canette}`}</li>
                                            <li><b>nombre total poubelle:</b> {uniqueEtablissements[3].nombre_poubelle_canette}</li>
                                            <li><b>nombre poubelle +75% :</b> {`${uniqueEtablissements[3].nbr_poubelle_canette_rempli_plus_75}`}</li>
                                            <li><b>somme total:</b> {uniqueEtablissements[3].somme_total_canette.toFixed(3)}KG</li>
                                            <li><b>moyenne poubelle:</b> {uniqueEtablissements[3].moyenne_poubelle_canette.toFixed(3)}</li>
                                            <li><b>pourcentage poubelle:</b> {uniqueEtablissements[3].moyenne_pourcentage_canette.toFixed(2)}%</li>
                                      </div>          
                                  </div>
                                </div>
                        </div>
                        </div>
                        {uniqueEtablissements[0].bloc_etablissements.length!==0?(uniqueEtablissements[0].bloc_etablissements.map(blocsEtb =>
                          <Accordion sx={{backgroundColor:'#D3D3D3'}}>
                                  <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                          <ListItemIcon>
                                              <ViewCarouselIcon  />
                                          </ListItemIcon>
                                          <Typography>{blocsEtb.nom_bloc_etablissement}</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                          {blocsEtb.etage_etablissements.length!==0?(blocsEtb.etage_etablissements.map(etageEtb =>
                                              <Accordion>
                                                      <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#E0E0E0"}}>
                                                              <ListItemIcon>
                                                                  <img src={etage}  alt="etage" width="30px" height="30px" />
                                                              </ListItemIcon>
                                                                  <span>{etageEtb.nom_etage_etablissement}</span>
                                                      </AccordionSummary>
                                                      <AccordionDetails  sx={{backgroundColor:"#E8E8E8"}}>
                                                              {etageEtb.bloc_poubelles.length!==0?(etageEtb.bloc_poubelles.map(blocPoubelle =>
                                                                  <Accordion>
                                                                      <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                                                              <ListItemIcon>
                                                                              <DeleteIcon/>
                                                                              </ListItemIcon>
                                                                                  <span>bloc poubelle {blocPoubelle.id}</span>
                                                                      </AccordionSummary>
                                                                      <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}>                 
                                                                              <AwesomeSlider >
                                                                                  {blocPoubelle.poubelles.length!==0?(blocPoubelle.poubelles.map(poubelle =>
                                                                                      <div>
                                                                                      <p>poubelle: {poubelle.type} </p>
                                                                                      <p>{poubelle.nom}</p>
                                                                                      <p>capacité : {poubelle.capacite_poubelle}</p>
                                                                                      </div>)
                                                                                  ):(<div style={{marginTop:"10px", color:"red"}}>pas des poubelles</div>)}
                                                                              </AwesomeSlider>
                                                                      </AccordionDetails>
                                                                  </Accordion>  
                                                          )
                                                          ):(<div style={{color:"red"}}>pas des bloc poubelle</div>)
                                                              }
                                                      </AccordionDetails>
                                              </Accordion>  
                                              )
                                              ):(<div style={{color:"red"}}>pas des etages etablissements</div>)
                                          }
                                  </AccordionDetails>
                          </Accordion>                     
                          )
                          ):(  <div style={{color:"red"}}>pas des blocs etablissements</div>)
                        }         
                   </div>
          </div> 
          :
          <div style={{alignSelf: 'center'}}>
                {etablissements.length!==0?(
                  <CardMapDetails>
                  <CardActions disableSpacing sx={{marginBottom:"-20px"}}>
                    <h3 style={{color:'red', padding:" 0 14%"}}>Détails des établissements :</h3>
                  </CardActions>
                  <CardContent>
                          <div className="scroller" style={{height:'540px', padding:"10px"}}> 
                              <h4 style={{color:"green"}}>nombre des établissements :{etablissements.length} </h4>                       
                              {etablissements.length!==0?(etablissements.map(etb =>    
                                <div key={etb.id} style={{ marginBottom:"0px"}}>
                                    <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                            <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={EtablissementIcon} alt='etablissement-icon'/>
                                            <p style={{marginTop:"7px", textAlign:"left"}}><b>{etb.nom_etablissement}:</b> {`${etb.type_etablissement}`}</p>
                                        </AccordionSummary>
                                        <AccordionDetails  sx={{backgroundColor:"#F0F0E0", padding:"0 8px 3px 2px"}}>  
                                            <p><b>nombre des personnes: </b>{`${etb.nbr_personnes}`} </p>               
                                            <p><b style={{color:"green"}}>quantité dechets collectés :</b></p>
                                            <div className='data'>
                                                <div className='plastique'>
                                                  <div>Plastique</div>
                                                  <div>{`${etb.quantite_dechets_plastique}`}</div>
                                                </div>
                                                <div className='papier'>
                                                  <div>Papier</div>
                                                  <div>{`${etb.quantite_dechets_papier}`}</div>
                                                </div>
                                                <div className='composte'>
                                                  <div>Composte</div>
                                                  <div> {`${etb.quantite_dechets_composte}`}</div>
                                                </div>
                                                <div className='canette'>
                                                  <div >Canette</div>
                                                  <div>{`${etb.quantite_dechets_canette}`}</div>
                                                </div>
                                            </div>                                         
                                            <div style={{margin:"0 0px 0 5px"}} component="nav" aria-labelledby="nested-list-subheader">         
                                            {etb.bloc_etablissements.length!==0?(etb.bloc_etablissements.map(blocsEtb =>
                                              <Accordion sx={{backgroundColor:'#D3D3D3'}}>
                                                      <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                                              <ListItemIcon>
                                                                  <ViewCarouselIcon  />
                                                              </ListItemIcon>
                                                              <Typography>{blocsEtb.nom_bloc_etablissement}</Typography>
                                                      </AccordionSummary>
                                                      <AccordionDetails>
                                                              {blocsEtb.etage_etablissements.length!==0?(blocsEtb.etage_etablissements.map(etageEtb =>
                                                                  <Accordion>
                                                                          <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#E0E0E0"}}>
                                                                                  <ListItemIcon>
                                                                                      <img src={etage}  alt="etage" width="30px" height="30px" />
                                                                                  </ListItemIcon>
                                                                                      <span>{etageEtb.nom_etage_etablissement}</span>
                                                                          </AccordionSummary>
                                                                          <AccordionDetails  sx={{backgroundColor:"#E8E8E8"}}>
                                                                                  {etageEtb.bloc_poubelles.length!==0?(etageEtb.bloc_poubelles.map(blocPoubelle =>
                                                                                      <Accordion>
                                                                                          <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                                                                                  <ListItemIcon>
                                                                                                  <DeleteIcon/>
                                                                                                  </ListItemIcon>
                                                                                                      <span>bloc poubelle {blocPoubelle.id}</span>
                                                                                          </AccordionSummary>
                                                                                          <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}>                 
                                                                                                  <AwesomeSlider >
                                                                                                      {blocPoubelle.poubelles.length!==0?(blocPoubelle.poubelles.map(poubelle =>
                                                                                                          <div>
                                                                                                          <p>poubelle: {poubelle.type} </p>
                                                                                                          <p>{poubelle.nom}</p>
                                                                                                          <p>capacité : {poubelle.capacite_poubelle}</p>
                                                                                                          </div>)
                                                                                                      ):(<div style={{marginTop:"10px", color:"red"}}>pas des poubelles</div>)}
                                                                                                  </AwesomeSlider>
                                                                                          </AccordionDetails>
                                                                                      </Accordion>  
                                                                              )
                                                                              ):(<div style={{color:"red"}}>pas des bloc poubelle</div>)
                                                                                  }
                                                                          </AccordionDetails>
                                                                  </Accordion>  
                                                                  )
                                                                  ):(<div style={{color:"red"}}>pas des etages etablissements</div>)
                                                              }
                                                      </AccordionDetails>
                                              </Accordion>                     
                                              )
                                              ):(<div style={{color:"red"}}>pas des blocs etablissements</div>)
                                            }
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>  
                                </div>)
                              ):(<div style={{color:"red"}}>pas des établissements</div>)}   
                          </div>
                          <br/>
                      
                  </CardContent>
                </CardMapDetails>
              ):(<CardMapDetails>
                   <Box sx={{padding:3 ,width: 354 }}>
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />                      
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />                      
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />
                   </Box>
                  </CardMapDetails>)}
          </div>       
      }
      <div className='scroller' style={{minWidth:354, maxWidth: 700,maxHeight:605, minHeight:605, border:"1px solid #f0f0f0"}}>
            {(uniquecamions!==null)&&(showUniqueCamion===true)?
                <div style={{alignSelf: 'center'}}>
                              <div className='scroller' style={{minWidth:354, maxWidth: 700,maxHeight:705, minHeight:605,  border:"1px solid #f0f0f0"}}>
                                <h3 style={{color:"green", textAlign:"center",paddingTop:"20px"}}> <b>Camion de matricule:</b> {uniquecamions[0].camion.matricule}</h3>
                                <ul style={{marginTop:"0px", textAlign:"left"}}>
                                  <li><b>region:</b> {uniquecamions[0].camion.region[0].region}</li>
                                  <li><b>longitude:</b> {uniquecamions[0].camion.longitude}</li>
                                  <li><b>latitude:</b> {uniquecamions[0].camion.latitude}</li>
                                  <li><b>heure sortie:</b> {uniquecamions[0].camion.heure_sortie}</li>
                                  <li><b>heure entrer:</b> {uniquecamions[0].camion.heure_entree}</li>
                                  <li><b>volume maximale camion:</b>  {uniquecamions[0].camion.volume_maximale_camion}</li>
                                  <li><b>volume carburant consomme:</b>  {uniquecamions[0].camion.volume_carburant_consomme}</li>
                                  <li><b>Kilometrage:</b>  {uniquecamions[0].camion.Kilometrage}</li>                      
                                </ul>                
                              <b  style={{ color:"red", marginLeft:'10%'}}>quantité dechets collectés de cette camion :</b>
                              <div className='data'>
                                  <div className='plastique'>
                                    <div>Plastique</div>
                                    <div>{`${uniquecamions[0].camion.volume_actuelle_plastique}`}</div>
                                  </div>
                                  <div className='papier'>
                                    <div>Papier</div>
                                    <div>{`${uniquecamions[0].camion.volume_actuelle_papier}`}</div>
                                  </div>
                                  <div className='composte'>
                                    <div>Composte</div>
                                    <div> {`${uniquecamions[0].camion.volume_actuelle_composte}`}</div>
                                  </div>
                                  <div className='canette'>
                                    <div >Canette</div>
                                    <div>{`${uniquecamions[0].camion.volume_actuelle_canette}`}</div>
                                  </div>
                              </div>
                              
                          <b  style={{ color:"red", margin:"0 25%"}}>ouvriers de cette camion :</b>
                              {uniquecamions[0].ouvrier.length!==0?(uniquecamions[0].ouvrier.map(ouvrier => 
                                <Col>
                                    <div className="card-template card-template-1">
                                        <div className="left-part">
                                                  <img src={`http://127.0.0.1:8000/storage/images/ouvrier/${ouvrier.photo}`}  alt="Avatar"/>
                                                  <h3> <i>{ouvrier.poste}</i></h3>    
                                              </div>
                                              <div className="right-part">
                                                  <h3 style={{textAlign:'center'}}><i>{ouvrier.nom +' '+ ouvrier.prenom}</i></h3>
                                                      <li> <FontAwesomeIcon icon={faAddressCard} className="icon-card"/><strong style={{marginLeft:"10px"}}>CIN:</strong>{' '+ouvrier.CIN}  </li> 
                                                      <li> <FontAwesomeIcon icon={faBuilding} className="icon-card"/><strong  style={{marginLeft:"15px"}}>Adresse:</strong>{' '+ouvrier.adresse} </li> 
                                                      <li> <FontAwesomeIcon icon={faPhone} className="icon-card"/><strong  style={{marginLeft:"10px"}}>Telephone:</strong>{' '+ouvrier.numero_telephone} </li> 
                                                      <li> <FontAwesomeIcon icon={faAt} className="icon-card"/><strong  style={{marginLeft:"10px"}}> Email:</strong>{' '+ouvrier.email} </li>    
                                              </div>
                                          </div>
                                </Col>   
                                )):(<div style={{color:"red"}}>pas des ouvriers</div>)}   
                          
                              </div>
                </div> 
                :
                <div style={{alignSelf: 'center'}}>
                      {etablissements.length!==0?(
                        <CardMapDetails  sx={{minWidth:354, maxWidth: 700,maxHeight:300, minHeight:300,  border:"1px solid #f0f0f0"}}>
                        <CardActions disableSpacing sx={{marginBottom:"-20px"}}>
                          <h3 style={{color:'red', padding:" 0 24%"}}>Détails des camions :</h3>
                        </CardActions>
                        <CardContent>
                                <div className="scroller" style={{height:'260px', padding:"10px 20px"}}> 
                                    <h4 style={{color:"green"}}>nombre des camions :{camions.length} </h4>                       
                                    {camions.length!==0?(camions.map(camion =>    
                                      <div key={camion.camion.id} style={{ marginBottom:"0px"}}>
                                          <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                                              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                                  <LocalShippingIcon/>
                                                  <p style={{marginLeft:"10px",textAlign:"left"}}><b>matricule:</b> {camion.camion.matricule}</p>
                                              </AccordionSummary>
                                              <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}> 
                                              <ul style={{marginTop:"0px", textAlign:"left"}}>
                                                  <li><b>region:</b> {camion.camion.region[0].region}</li>
                                                  <li><b>heure sortie:</b> {camion.camion.heure_sortie}</li>
                                                  <li><b>heure entrer:</b> {camion.camion.heure_entree}</li>
                                                  <li><b>volume maximale camion:</b>  {camion.camion.volume_maximale_camion}</li>
                                                  <li><b>volume carburant consomme:</b>  {camion.camion.volume_carburant_consomme}</li>
                                                  <li><b>Kilometrage:</b>  {camion.camion.Kilometrage}</li>                      
                                              </ul>                

                                                  <b  style={{ color:"red"}}>quantité dechets collectés de cette camion :</b>
                                                  <div className='data'>
                                                      <div className='plastique'>
                                                        <div>Plastique</div>
                                                        <div>{`${camion.camion.volume_actuelle_plastique}`}</div>
                                                      </div>
                                                      <div className='papier'>
                                                        <div>Papier</div>
                                                        <div>{`${camion.camion.volume_actuelle_papier}`}</div>
                                                      </div>
                                                      <div className='composte'>
                                                        <div>Composte</div>
                                                        <div> {`${camion.camion.volume_actuelle_composte}`}</div>
                                                      </div>
                                                      <div className='canette'>
                                                        <div >Canette</div>
                                                        <div>{`${camion.camion.volume_actuelle_canette}`}</div>
                                                      </div>
                                                  </div>
                                                  <b  style={{ color:"red"}}>ouvriers de cette camion :</b>
                                                  {camion.ouvrier.length!==0?(camion.ouvrier.map(ouvrier => 
                                                    <div>
                                                        <span><b style={{color:"green"}}> {ouvrier.poste}:</b></span>  {ouvrier.nom} {ouvrier.prenom}
                                                    </div>)):(<div style={{color:"red"}}>pas des ouvriers</div>)}   
                                              </AccordionDetails>

                                          </Accordion>  
                                      </div>)
                                    ):(<div style={{color:"red", marginTop:"20%"}}><b>pas encore des camions...</b></div>)}  
                                    <br/>   <br/> 
                                </div>
                        </CardContent>
                      </CardMapDetails>
                    ):(<CardMapDetails>
                        <Box sx={{padding:3 ,width: 354 }}>
                            <Skeleton sx={{height:60}} />
                            <Skeleton animation="wave" sx={{height:60}} />                      
                            <Skeleton sx={{height:60}} />
                            <Skeleton animation="wave" sx={{height:60}} />                      
                            <Skeleton sx={{height:60}} />
                            <Skeleton animation="wave" sx={{height:60}} />
                            <Skeleton sx={{height:60}} />
                            <Skeleton animation="wave" sx={{height:60}} />
                        </Box>
                        </CardMapDetails>)}
                </div>       
            } 

            { (uniqueZoneDepot!==null)&&(showUniqueZoneDepot===true)?
                <div style={{alignSelf: 'center'}}>
                        <div className='scroller' style={{minWidth:354, maxWidth: 700,maxHeight:250, minHeight:250, border:"1px solid #f0f0f0"}}>
                          <h3 style={{color:"green", textAlign:"center",paddingTop:"20px"}}> zone depot : {uniqueZoneDepot.id}</h3>
                          <ul style={{marginTop:"0px", textAlign:"left"}}>
                              <li><b>adresse:</b> {uniqueZoneDepot.adresse}</li>
                              <li><b>longitude:</b> {uniqueZoneDepot.longitude}</li>
                              <li><b>latitude:</b> {uniqueZoneDepot.latitude}</li>
                              <li><b>quantite depot maximale:</b> {uniqueZoneDepot.quantite_depot_maximale}</li>                         
                          </ul>                
                        <b  style={{ color:"red", marginLeft:'15%'}}>quantité dechets collectés par type :</b>
                        <div className='data'>
                            <div className='plastique'>
                              <div>Plastique</div>
                              <div>{`${uniqueZoneDepot.quantite_depot_actuelle_plastique}`}</div>
                            </div>
                            <div className='papier'>
                              <div>Papier</div>
                              <div>{`${uniqueZoneDepot.quantite_depot_actuelle_papier}`}</div>
                            </div>
                            <div className='composte'>
                              <div>Composte</div>
                              <div> {`${uniqueZoneDepot.quantite_depot_actuelle_composte}`}</div>
                            </div>
                            <div className='canette'>
                              <div >Canette</div>
                              <div>{`${uniqueZoneDepot.quantite_depot_actuelle_canette}`}</div>
                            </div>
                        </div>
                              
                        </div>
                </div> 
                :
                <div style={{alignSelf: 'center'}}>
                {etablissements.length!==0?(
                  <CardMapDetails  sx={{minWidth:354, maxWidth: 700,maxHeight:300, minHeight:300, border:"1px solid #f0f0f0"}}>
                  <CardActions disableSpacing sx={{marginBottom:"-20px"}}>
                    <h3 style={{color:'red', padding:" 0 22%"}}>Détails zones depots :</h3>
                  </CardActions>
                  <CardContent>
                          <div className="scroller" style={{height:'260px', padding:"10px 20px"}}> 
                              <h4 style={{color:"green"}}>nombre des camions :{camions.length} </h4>                       
                              {zoneDepots.length!==0?(zoneDepots.map(zone =>    
                                <div key={zone.id} style={{ marginBottom:"0px"}}>
                                    <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                            <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={ZoneDepotImage} alt='etablissement-icon'/>
                                            <p style={{marginLeft:"10px",textAlign:"left"}}><b>zone depot:</b> {zone.id}</p>
                                        </AccordionSummary>
                                        <AccordionDetails  sx={{backgroundColor:"#F0F0E0",textAlign:"left"}}> 
                                            <li><b>adresse:</b> {zone.adresse}</li>
                                            <li><b>longitude:</b> {zone.longitude}</li>
                                            <li><b>latitude:</b> {zone.latitude}</li>
                                            <li><b>quantite depot maximale:</b> {zone.quantite_depot_maximale}</li>                         
                                        <b  style={{ color:"red", marginLeft:'15%'}}>quantité dechets collectés par type :</b>
                                        <div className='data'>
                                            <div className='plastique'>
                                              <div>Plastique</div>
                                              <div>{`${zone.quantite_depot_actuelle_plastique}`}</div>
                                            </div>
                                            <div className='papier'>
                                              <div>Papier</div>
                                              <div>{`${zone.quantite_depot_actuelle_papier}`}</div>
                                            </div>
                                            <div className='composte'>
                                              <div>Composte</div>
                                              <div> {`${zone.quantite_depot_actuelle_composte}`}</div>
                                            </div>
                                            <div className='canette'>
                                              <div >Canette</div>
                                              <div>{`${zone.quantite_depot_actuelle_canette}`}</div>
                                            </div>
                                        </div>
                                            
                                        </AccordionDetails>

                                    </Accordion>  
                                </div>)
                              ):(<div style={{color:"red", marginTop:"20%"}}><b>pas encore des zone depots...</b></div>)}  
                              <br/>   <br/> 
                          </div>
                  </CardContent>
                  </CardMapDetails>
              ):(<CardMapDetails>
                  <Box sx={{padding:3 ,width: 354 }}>
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />                      
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />                      
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />
                  </Box>
                  </CardMapDetails>)}
                </div>       
            } 
      </div>
    </div>
  )
}
