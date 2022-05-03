import React,{useState, useEffect} from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Marker, InfoWindow ,TrafficLayer,Autocomplete} from '@react-google-maps/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import '../assets/css/map.css'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import etage from '../../../Global/images/etage.svg'
import '../../../../src/App.css';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import EtablissementIcon from "../../../Global/images/etablissement-icon.svg"
import { height } from '@mui/system';
const containerStyle = {
  width: '95%',
  height: '77vh'
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
  const [uniqueEtablissements, setUniqueEtablissements] = useState([]);
  const [showUnique, setShowUnique] = useState(null);
  useEffect(() => {
    fetch("https://ami.monconstat.tech/api/google-map")
      .then((e) => {
        return e.json();
      })
      .then((data) => {
          setEtablissements(data);
      });
    },[])
    const [activeMarker, setActiveMarker] = useState(null);
    async function handleActiveMarker  (marker) {
      if (marker === activeMarker) {
        return;
      }
          setActiveMarker(marker);
          if(marker!==null){

          await fetch(`http://127.0.0.1:8000/api/google-map/${marker+1}`)
          .then((e) => {
            return e.json();
          })
          .then((data) => {
            setUniqueEtablissements(data);
            console.log(data[0])
          })}
    };
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>    
      <GoogleMap mapContainerStyle={containerStyle} onClick={() =>{ setActiveMarker(null); setUniqueEtablissements(null) ;setShowUnique(true)}} center={center} zoom={10}>                  
        {etablissements.length!=0?(etablissements.map((etb, id) =>
            <>
              <Marker key={id} onClick={() => handleActiveMarker(id)}
                icon={{ path: "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z",
                        fillColor: "green", fillOpacity: 1, scale: 1,  strokeColor: "green", strokeWeight: 2,}}
                position={ {lat:etb.latitude, lng:etb.longitude} }>                                                   
                      </Marker>     
                      {activeMarker === id ? ( 
                      <InfoWindow
                        onCloseClick={() => setActiveMarker(null)}
                        position={ {lat:etb.latitude, lng:etb.longitude}}
                      >
                        <div style={divStyle}>
                      <p>{etb.nom_etablissement}</p>
                        
                        </div>
                  </InfoWindow>
                  ) : null}
            </>             
          )
          ):(<div style={{color:"red"}}>pas des bloc poubelle</div>)
              }
 
          </GoogleMap>
          { (uniqueEtablissements!==null)&&(showUnique===true)?
                <div style={{alignSelf: 'center'}}>
                    <div className='scroller' style={{minWidth:354, maxWidth: 700,maxHeight:560, minHeight:560, backgroundColor:"white", border:"1px solid #f0f0f0"}}>
                        <h2  style={{textAlign:"center"}}>{uniqueEtablissements[0].type_etablissement}: {uniqueEtablissements[0].nom_etablissement} </h2>
                        <ul>
                            <li><b>adresse:</b> {uniqueEtablissements[0].adresse}</li>
                            <li><b>nombre personnes:</b>  {uniqueEtablissements[0].nbr_personnes}</li>
                            <li><b>longitude:</b>  {uniqueEtablissements[0].longitude}</li>
                            <li><b>latitude:</b>  {uniqueEtablissements[0].latitude}</li>
                            <li style={{textAlign:"center"}}><b>responsable etablissement:</b></li>
                            <li><b>nom et prénom</b>  {uniqueEtablissements[5].nom +" " + uniqueEtablissements[5].prenom}</li>
                            <li><b>CIN:</b>  { uniqueEtablissements[5].CIN}</li>
                            <li><b>phone:</b>  { uniqueEtablissements[5].numero_telephone}</li>
                            <li><b>email:</b>  { uniqueEtablissements[5].email}</li>
                            <li><b>adresse:</b>  { uniqueEtablissements[5].adresse}</li>
                          
                        </ul>   
                        <div>
                        <div class="row">
                        <div class="column">
                        <div class="card">
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
                            
                              <div class="column">
                                <div class="card">
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
                              
                                <div class="column">
                                  <div class="card">
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
                              
                                <div class="column">
                                <div class="card">
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
                        {uniqueEtablissements[0].bloc_etablissements.length!=0?(uniqueEtablissements[0].bloc_etablissements.map(blocsEtb =>
                          <Accordion sx={{backgroundColor:'#D3D3D3'}}>
                                  <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                          <ListItemIcon>
                                              <ViewCarouselIcon  />
                                          </ListItemIcon>
                                          <Typography>{blocsEtb.nom_bloc_etablissement}</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                          {blocsEtb.etage_etablissements.length!=0?(blocsEtb.etage_etablissements.map(etageEtb =>
                                              <Accordion>
                                                      <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#E0E0E0"}}>
                                                              <ListItemIcon>
                                                                  <img src={etage}  alt="etage" width="30px" height="30px" />
                                                              </ListItemIcon>
                                                                  <span>{etageEtb.nom_etage_etablissement}</span>
                                                      </AccordionSummary>
                                                      <AccordionDetails  sx={{backgroundColor:"#E8E8E8"}}>
                                                              {etageEtb.bloc_poubelles.length!=0?(etageEtb.bloc_poubelles.map(blocPoubelle =>
                                                                  <Accordion>
                                                                      <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                                                              <ListItemIcon>
                                                                              <DeleteIcon/>
                                                                              </ListItemIcon>
                                                                                  <span>bloc poubelle {blocPoubelle.id}</span>
                                                                      </AccordionSummary>
                                                                      <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}>                 
                                                                              <AwesomeSlider >
                                                                                  {blocPoubelle.poubelles.length!=0?(blocPoubelle.poubelles.map(poubelle =>
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
                  <Card sx={{minWidth:450, maxWidth: 555,maxHeight:555, minHeight:520, backgroundColor:"white", border:"1px solid #f0f0f0"}} style={{textAlign:"center"}}>
                  <CardActions disableSpacing sx={{marginBottom:"-20px"}}>
                    <h4 style={{marginLeft:'17%'}}>nombre des établissements :{etablissements.length} </h4>
                  </CardActions>
                  <CardContent>
                    <div className="scroller" style={{height:'510px', padding:"10px"}}>                        
                        {etablissements.length!=0?(etablissements.map(etb =>
                          
                          <div key={etb.id} style={{ marginBottom:"0px"}}>
                              <Accordion sx={{ border:"0.5px solid #C8C8C8"}}>
                                  <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                          <ListItemIcon>
                                              <img style={{width:"30px", height:"30px"}} src={EtablissementIcon} alt='etablissement-icon'/>
                                          </ListItemIcon>
                                          <p style={{marginTop:"7px"}}>{etb.nom_etablissement}</p>
                                  </AccordionSummary>
                                  <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}>                 
                                      <p> {`${etb.nom_etablissement}`} : {`${etb.type_etablissement}`},  {`${etb.nbr_personnes}`} personnes</p>
                                      <p>quantité dechets collectés :</p>
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
                                      
                                      <div style={{margin:"0 15px 0 10px"}} component="nav" aria-labelledby="nested-list-subheader">   
                                      
                                      {etb.bloc_etablissements.length!=0?(etb.bloc_etablissements.map(blocsEtb =>
                                        <Accordion sx={{backgroundColor:'#D3D3D3'}}>
                                                <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                                        <ListItemIcon>
                                                            <ViewCarouselIcon  />
                                                        </ListItemIcon>
                                                        <Typography>{blocsEtb.nom_bloc_etablissement}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                        {blocsEtb.etage_etablissements.length!=0?(blocsEtb.etage_etablissements.map(etageEtb =>
                                                            <Accordion>
                                                                    <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#E0E0E0"}}>
                                                                            <ListItemIcon>
                                                                                <img src={etage}  alt="etage" width="30px" height="30px" />
                                                                            </ListItemIcon>
                                                                                <span>{etageEtb.nom_etage_etablissement}</span>
                                                                    </AccordionSummary>
                                                                    <AccordionDetails  sx={{backgroundColor:"#E8E8E8"}}>
                                                                            {etageEtb.bloc_poubelles.length!=0?(etageEtb.bloc_poubelles.map(blocPoubelle =>
                                                                                <Accordion>
                                                                                    <AccordionSummary   expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{backgroundColor:"#F0F0F0"}}>
                                                                                            <ListItemIcon>
                                                                                            <DeleteIcon/>
                                                                                            </ListItemIcon>
                                                                                                <span>bloc poubelle {blocPoubelle.id}</span>
                                                                                    </AccordionSummary>
                                                                                    <AccordionDetails  sx={{backgroundColor:"#F0F0E0"}}>                 
                                                                                            <AwesomeSlider >
                                                                                                {blocPoubelle.poubelles.length!=0?(blocPoubelle.poubelles.map(poubelle =>
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
                  </CardContent>
                </Card>
              ):(<Card sx={{minWidth:450, maxWidth: 555,maxHeight:555, minHeight:520, backgroundColor:"white", border:"1px solid #f0f0f0"}} style={{textAlign:"center"}}>
                   <div>pas des etablissement</div>
                   <Box sx={{padding:3 ,width: 440 }}>
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />                      
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />                      
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />
                      <Skeleton sx={{height:60}} />
                      <Skeleton animation="wave" sx={{height:60}} />
                   </Box>

                  </Card>)}
                </div>       
           }
    </div>
  )
}
