import React , {useState , useEffect} from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Marker, InfoWindow ,Traf} from '@react-google-maps/api';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AwesomeSlider from 'react-awesome-slider';
import etage from '../../../Global/images/etage.svg'
import Camion from '../../../Global/images/camion.svg'
import ZoneDepotImage from '../../../Global/images/zoneDepot.svg'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import EtablissementIcon from "../../../Global/images/etablissement-icon.svg"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {CardMapDetails} from '../../../style';
import Carousel from 'react-material-ui-carousel'

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
export default function MapResponsable() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyCM_y_hH1jw8ucuvhzfmGdKMloxPwBjbAo" ,
  });
  const [etablissement, setEtablissement] = useState([]);
  const [camion, setCamion] = useState([]);
  const [zoneDepot, setZoneDepot] = useState([]);

  const [uniqueEtablissement, setUniqueEtablissement] = useState([]);
  const [uniquecamion, setUniqueCamion] = useState([]);
  const [uniqueZoneDepot, setUniqueZoneDepot] = useState([]);

  const [showUniqueEtablissement, setShowUniqueEtablissement] = useState(null);
  const [showUniqueCamion, setShowUniqueCamion] = useState(null);
  const [showUniqueZoneDepot, setShowUniqueZoneDepot] = useState(null);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_responsable')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
  useEffect(() => {
  fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/responsable-map", requestOptions)
  .then((e) => {return e.json();}).then((data) => { setEtablissement(data.etablissement);setCamion(data.camion);  setZoneDepot(data.zone_depot); });
  },[])

  
  const [activeMarkerEtablissement, setActiveMarkerEtablissement] = useState(null);
  const [activeMarkerCamion, setActiveMarkerCamion] = useState(null);
  const [activeMarkerZoneDepot, setActiveMarkerZoneDepot] = useState(null);

  async function handleActiveMarkerEtablissement  (marker) {
    if (marker === activeMarkerEtablissement) {
      return;
    }
    setActiveMarkerEtablissement(marker);
    if(marker!==null){
      setUniqueEtablissement(etablissement);
    }
  };
  async function handleActiveMarkerCamion  (marker) {
    if (marker === activeMarkerCamion) {
      return;
    }
    setActiveMarkerCamion(marker);
    setUniqueCamion(camion);
  };

  async function handleActiveMarkerZoneDepot  (marker) {
    if (marker === activeMarkerZoneDepot) {
      return;
    }
    setActiveMarkerZoneDepot(marker);
        if(marker!==null){
          setUniqueZoneDepot(zoneDepot);
        };
  };
  console.clear();
  if (!isLoaded) return <div><Skeleton sx={{ height:500 }} animation="wave" variant="rectangular" /></div>;
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}> 
          <GoogleMap mapContainerStyle={containerStyle} onMouseOver={() =>{ setActiveMarkerEtablissement(null); 
              setUniqueEtablissement(null) ;setShowUniqueEtablissement(true);
              setActiveMarkerCamion(null); setUniqueCamion(null) ;setShowUniqueCamion(true);
              setActiveMarkerZoneDepot(null); setUniqueZoneDepot(null) ;setShowUniqueZoneDepot(true);}} center={center} zoom={11.2}>                  
              {etablissement.length!==0?(  
                <>
                  <> 
                    <Marker onClick={() => handleActiveMarkerEtablissement(etablissement[0].id)} 
                      icon={ EtablissementIcon} position={ {lat:etablissement[0].latitude, lng:etablissement[0].longitude} }> </Marker>     
                                {activeMarkerEtablissement === etablissement[0].id ? ( 
                                  <InfoWindow onCloseClick={() => setActiveMarkerEtablissement(null)} 
                                    position={ {lat:etablissement[0].latitude+0.025, lng:etablissement[0].longitude}}>
                                    <div style={divStyle}> <p>{etablissement[0].nom_etablissement}</p> </div>
                                  </InfoWindow>
                                ) : null}
                  </> 
                    <>
                      <Marker  onClick={() => handleActiveMarkerCamion(camion.id)} icon={Camion} position={ {lat:camion.latitude, lng:camion.longitude} }>  </Marker>     
                        {activeMarkerCamion === camion.id ? ( 
                          <InfoWindow onCloseClick={() => setActiveMarkerCamion(null)} position={ {lat:camion.latitude+0.025, lng:camion.longitude}} >
                            <div style={divStyle}> <p>{camion.matricule}</p> </div>
                          </InfoWindow>
                        ) : null}
                    </> 
                  
                      <>
                        <Marker onClick={() => handleActiveMarkerZoneDepot(zoneDepot.id)} icon={ZoneDepotImage}  position={ {lat:zoneDepot.latitude, lng:zoneDepot.longitude} }> </Marker>     
                              {activeMarkerZoneDepot === zoneDepot.id ? ( 
                                <InfoWindow onCloseClick={() => setActiveMarkerZoneDepot(null)} position={ {lat:zoneDepot.latitude+0.025, lng:zoneDepot.longitude}} >
                                  <div style={divStyle}> <p>{zoneDepot.adresse}</p> </div>
                                </InfoWindow>
                               ) : null}
                    </> 
                     
                </>        
              ):null}
          </GoogleMap>  

            
      { (uniqueEtablissement!==null)&&(showUniqueEtablissement===true)?
        <div style={{alignSelf: 'center'}}>
          <div className='scroller' style={{minWidth:354, maxWidth: 700,maxHeight:605, minHeight:605,  border:"1px solid #f0f0f0"}}>
    
              { uniqueEtablissement[0].bloc_etablissements.length!==0?(uniqueEtablissement[0].bloc_etablissements.map(blocsEtb =>
                  <>
                      <ListItemIcon>
                          <ViewCarouselIcon  />
                      </ListItemIcon>
                      <Typography>{blocsEtb.nom_bloc_etablissement}</Typography>
          
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
                  </>
                  )
              ):null  } 
          

          </div>
        </div> 
        :
        <div style={{alignSelf: 'center'}}>
              {etablissement.length!==0?(
                <CardMapDetails>
                <CardContent>
                  <div className="scroller" style={{height:'540px', padding:"10px"}}> 
                    <h3 style={{color:'red', padding:" 0 14%"}}>Détails de mon établissement :</h3>
                      {etablissement.length!==0?  
                        <div key={etablissement[0].id} style={{ marginBottom:"0px"}}>
                            <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                    <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={EtablissementIcon} alt='etablissement-icon'/>
                                    <p style={{marginTop:"7px", textAlign:"left"}}><b>{etablissement[0].nom_etablissement}:</b> {`${etablissement[0].type_etablissement}`}</p>
                                </AccordionSummary>
                                <AccordionDetails  sx={{backgroundColor:"#F0F0E0", padding:"0 8px 3px 2px"}}>  
                                    <p><b>nombre des personnes: </b>{`${etablissement[0].nbr_personnes}`} </p>   
                                    <p><b>adresse:</b> {etablissement[0].adresse} </p>
                                                                                                       
                                 <div>
                                    <Carousel  height="150px">
                                    
                                        <div>
                                          <div className="card">
                                          <div className='plastique' style={{textAlign:"center"}}>Plastique</div>
                                              <div>
                                                    <li><b>quantite dechets:</b>{`${etablissement[0].quantite_dechets_plastique}`}</li>
                                                    <li><b>nombre total poubelle:</b> {etablissement[1].nombre_poubelle_plastique}</li>
                                                    <li><b>nombre poubelle +75% :</b> {`${etablissement[1].nbr_poubelle_plastique_rempli_plus_75}`}</li>
                                                    <li><b>somme total:</b> {etablissement[1].somme_total_plastique.toFixed(3)}KG</li>
                                                    <li><b>moyenne poubelle:</b> {etablissement[1].moyenne_poubelle_plastique.toFixed(3)}</li>
                                                    <li><b>pourcentage poubelle:</b> {etablissement[1].moyenne_pourcentage_plastique.toFixed(2)}%</li>
                                              </div>          
                                          </div>
                                        </div>
                                         
                                        <div>
                                          <div className="card">
                                              <div>
                                                  <div className='papier' style={{textAlign:"center"}}>Papier</div>
                                                  <div>
                                                        <li><b>quantite dechets:</b>{`${etablissement[0].quantite_dechets_papier}`}</li>
                                                        <li><b>nombre total poubelle:</b> {etablissement[2].nombre_poubelle_papier}</li>
                                                        <li><b>nombre poubelle +75% :</b> {`${etablissement[2].nbr_poubelle_papier_rempli_plus_75}`}</li>
                                                        <li><b>somme total:</b> {etablissement[2].somme_total_papier.toFixed(3)}KG</li>
                                                        <li><b>moyenne poubelle:</b> {etablissement[2].moyenne_poubelle_papier.toFixed(3)}</li>
                                                        <li><b>pourcentage poubelle:</b> {etablissement[2].moyenne_pourcentage_papier.toFixed(2)}%</li>
                                                  </div>          
                                              </div>
                                          </div>
                                        </div>
                                        
                                        <div>
                                          <div className="card">
                                            <div className='composte' style={{textAlign:"center"}}>Composte</div>
                                                <div>
                                                      <li><b>quantite dechets:</b>{`${etablissement[0].quantite_dechets_composte}`}</li>
                                                      <li><b>nombre total poubelle:</b> {etablissement[4].nombre_poubelle_composte}</li>
                                                      <li><b>nombre poubelle +75% :</b> {`${etablissement[4].nbr_poubelle_composte_rempli_plus_75}`}</li>
                                                      <li><b>somme total:</b> {etablissement[4].somme_total_composte.toFixed(3)}KG</li>
                                                      <li><b>moyenne poubelle:</b> {etablissement[4].moyenne_poubelle_composte.toFixed(3)}</li>
                                                      <li><b>pourcentage poubelle:</b> {etablissement[4].moyenne_pourcentage_composte.toFixed(2)}%</li>
                                                </div>          
                                            </div>
                                        </div>
                                      
                                        <div>
                                        <div className="card">
                                          <div className='canette' style={{textAlign:"center"}}>Canette</div>
                                              <div>
                                                    <li><b>quantite dechets:</b>{`${etablissement[0].quantite_dechets_canette}`}</li>
                                                    <li><b>nombre total poubelle:</b> {etablissement[3].nombre_poubelle_canette}</li>
                                                    <li><b>nombre poubelle +75% :</b> {`${etablissement[3].nbr_poubelle_canette_rempli_plus_75}`}</li>
                                                    <li><b>somme total:</b> {etablissement[3].somme_total_canette.toFixed(3)}KG</li>
                                                    <li><b>moyenne poubelle:</b> {etablissement[3].moyenne_poubelle_canette.toFixed(3)}</li>
                                                    <li><b>pourcentage poubelle:</b> {etablissement[3].moyenne_pourcentage_canette.toFixed(2)}%</li>
                                              </div>          
                                          </div>
                                        </div>
                                    </Carousel>

                                 </div>
                                </AccordionDetails>
                            </Accordion>  
                        </div>
                        :null
                      } 
                      
                      
                    <h3 style={{color:'red', padding:" 0 14%"}}>Détails camion :</h3>
                      {camion.length!==0?  
                          <div  style={{ marginBottom:"0px"}}>
                            <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                    <LocalShippingIcon/>
                                    <p style={{marginLeft:"10px",textAlign:"left"}}><b>matricule:</b> {camion.matricule}</p>
                                </AccordionSummary>
                                <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}> 
                                  <ul style={{margin:"0px 0 0 -40px", textAlign:"left"}}>
                                      <li><b>Heure de sortie:</b> {camion.heure_sortie}</li>
                                      <li><b>Heure d'entrée:</b> {camion.heure_entree}</li>
                                      <li><b>Volume maximale camion:</b>  {camion.volume_maximale_camion} L</li>
                                      <li><b>Volume carburant consomme:</b>  {camion.volume_carburant_consomme} L</li>
                                      <li><b>kilometrage:</b>  {camion.Kilometrage} KM</li>                      
                                  </ul>  
                                  <b  style={{ color:"red"}}>quantité dechets collectés de cette camion :</b>
                                        <div className='data'>
                                            <div className='plastique'>
                                              <div>Plastique</div>
                                              <div>{`${camion.volume_actuelle_plastique}`}</div>
                                            </div>
                                            <div className='papier'>
                                              <div>Papier</div>
                                              <div>{`${camion.volume_actuelle_papier}`}</div>
                                            </div>
                                            <div className='composte'>
                                              <div>Composte</div>
                                              <div> {`${camion.volume_actuelle_composte}`}</div>
                                            </div>
                                            <div className='canette'>
                                              <div >Canette</div>
                                              <div>{`${camion.volume_actuelle_canette}`}</div>
                                            </div>
                                        </div>
                                                      
                                </AccordionDetails>
                            </Accordion>  
                          </div>
                        :(<div style={{color:"red"}}>pas de camion</div>)
                      }  

                    <h3 style={{color:'red', padding:" 0 14%"}}>Détails zone de depot :</h3>
                    {
                      zoneDepot.length!==0?
                      <div  style={{ marginBottom:"0px"}}>
                      <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                              <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={ZoneDepotImage} alt='etablissement-icon'/>
                              <p style={{marginLeft:"10px",textAlign:"left"}}><b>zone depot:</b> {zoneDepot.id}</p>
                          </AccordionSummary>
                          <AccordionDetails  sx={{backgroundColor:"#F0F0E0",textAlign:"left"}}> 
                              <li><b>adresse:</b> {zoneDepot.adresse}</li>
                              <li><b>longitude:</b> {zoneDepot.longitude}</li>
                              <li><b>latitude:</b> {zoneDepot.latitude}</li>
                              <li><b>quantite depot maximale:</b> {zoneDepot.quantite_depot_maximale}</li>                         
                          <b  style={{ color:"red", marginLeft:'15%'}}>quantité dechets collectés par type :</b>
                          <div className='data'>
                              <div className='plastique'>
                                <div>Plastique</div>
                                <div>{`${zoneDepot.quantite_depot_actuelle_plastique}`}</div>
                              </div>
                              <div className='papier'>
                                <div>Papier</div>
                                <div>{`${zoneDepot.quantite_depot_actuelle_papier}`}</div>
                              </div>
                              <div className='composte'>
                                <div>Composte</div>
                                <div> {`${zoneDepot.quantite_depot_actuelle_composte}`}</div>
                              </div>
                              <div className='canette'>
                                <div >Canette</div>
                                <div>{`${zoneDepot.quantite_depot_actuelle_canette}`}</div>
                              </div>
                          </div>
                              
                          </AccordionDetails>

                      </Accordion>  
                  </div>
                   :null

                    }
                  </div>
                  <br/>


                    
                </CardContent>
              </CardMapDetails>
            ):(
               <CardMapDetails>
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
    )
}

  