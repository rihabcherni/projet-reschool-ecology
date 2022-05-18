import React, { useState, useEffect } from 'react'
import '../../css/dechetCard.css'
import Typography from '@mui/material/Typography'
import { Icon, Statistic } from 'semantic-ui-react'
import { FaTrashAlt,FaUserAlt,FaBuilding ,FaTrash, FaUserTie,FaShoppingBasket,FaTruckMoving } from "react-icons/fa";
import { MdOutlineRecycling} from "react-icons/md";
import { TiSpanner} from "react-icons/ti";

import EngineeringIcon from '@mui/icons-material/Engineering';
import ZoneDepotImg from '../../../../Global/images/zoneDepot.svg'
import EtageImg from '../../../../Global/images/etage.svg'
import PlastiqueDechet from '../../../../Global/images/plastique.PNG'
import PapierDechet from '../../../../Global/images/papier.PNG'
import CanetteDechet from '../../../../Global/images/canette.PNG'
import ComposteDechet from '../../../../Global/images/composte.PNG'

import ApartmentIcon from '@mui/icons-material/Apartment';
import PinDropIcon from '@mui/icons-material/PinDrop';
const CardStatistique =( {data , nom ,icon})=>{
 return (
    <div>
            <div style={{display:"flex" , justifyContent:"center"}}>
               
               { icon}
                <Typography color="primary" variant='h4' >{data}</Typography>  
            </div>
            <Typography color="primary">{nom}</Typography>
    </div>
 )
}

export default function GlobalStatistiques() {
    const dashboardURL = 'http://127.0.0.1:8000/api/dashboard'
    const [data, setData] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
          const vdata = await fetch(dashboardURL)
          const vjson = await vdata.json()
    
          setTimeout(getStatus, 60000)
          setData(vjson)
        })()
      }, [])
    //   style={{color:`${"#" +Math.floor(Math.random()*16777215).toString(16)}`}}
  return (
    <div>

    <div className="container2">
        <div className="card" style={{backgroundColor:'white'}}>
        <Typography color="orange" variant='h6'>Gestion des stocks poubelles</Typography>
                <div className="card-div4">
                    <CardStatistique data={50} nom=' poubelle plastique'
                        icon={ <img src={PlastiqueDechet} className='card-icon' style={{color:"green" , width:'70px'}}/>}/>
                    <CardStatistique data={70} nom='poubelle papier'
                        icon={ <img src={PapierDechet} className='card-icon' style={{color:"green" , width:'75px'}}/>}/>
                    <CardStatistique data={20} nom='poubelle composte'
                        icon={ <img src={ComposteDechet} className='card-icon' style={{color:"green" , width:'60px'}}/>}/>
                    <CardStatistique data={30} nom='poubelle canette'
                        icon={ <img src={CanetteDechet} className='card-icon' style={{color:"green" , width:'55px'}}/>}/>
                    </div>    
            </div>
            <div className="card" style={{backgroundColor:'white'}}>
                <Typography color="orange" variant='h6'>Gestion des stocks dechets (kg)</Typography>
                <div className="card-div4">
                    <CardStatistique data={500} nom='dechet plastique'
                        icon={ <img src={PlastiqueDechet} className='card-icon' style={{color:"green" , width:'70px'}}/>}/>
                    <CardStatistique data={600} nom='dechets papier '
                        icon={ <img src={PapierDechet} className='card-icon' style={{color:"green" , width:'75px'}}/>}/>
                    <CardStatistique data={200} nom='dechet composte'
                        icon={ <img src={ComposteDechet} className='card-icon' style={{color:"green" , width:'60px'}}/>}/>
                    <CardStatistique data={50} nom='dechets canette '
                        icon={ <img src={CanetteDechet} className='card-icon' style={{color:"green" , width:'55px'}}/>}/>
                        
                </div>    
            </div> 
    </div>
   
    <div className="container">
        <div className="card" style={{backgroundColor:'white'}}>
            <Typography color="orange" variant='h6'>Gestion ressources humaines</Typography>
            <div className="card-div">
                <CardStatistique data={data.nbr_ouvrier} nom='Ouvriers' 
                    icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
                <CardStatistique data={data.nbr_client_dechet} nom='Client Dechet'
                    icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                <CardStatistique data={data.nbr_fournisseur} nom='Mécanicien'
                    icon={ <EngineeringIcon className='card-icon' sx={{color:'red', fontSize:"60px "}}/>}/>
                <CardStatistique data={data.nbr_fournisseur} nom='Fournisseurs'
                    icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
            
                <CardStatistique data={8} nom='Responsable Etablissment'
                    icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                <CardStatistique data={4} nom='Réparateurs Poubelle'
                    icon={ <EngineeringIcon className='card-icon' sx={{color:'red',fontSize:"60px "}}/>}/>

            </div>    
        </div>
        <div className="card" style={{backgroundColor:'white'}}>
            <Typography color="orange" variant='h6'>Gestion Etablissement</Typography>
            <div className="card-div">
                <CardStatistique data={data.nbr_zone_travail} nom='Zones de travail'
                    icon={ <PinDropIcon className='card-icon' sx={{fontSize:"50px",color:'gray'}}/>}/>

                <CardStatistique data={data.nbr_etablissement} nom='Etablissements'
                    icon={  <ApartmentIcon className='card-icon' style={{fontSize:"50px",color:'gray'}}/>}/>

                <CardStatistique data={data.nbr_bloc_etablissement} nom='Blocs etablissements'
                    icon={ <FaBuilding className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                <CardStatistique data={data.nbr_etage_etablissement} nom='Etage Etablissment'
                    icon={ <img src={EtageImg}  className='card-icon' style={{width:"50px",color:'gray'}}/>}/>

                <CardStatistique data={data.nbr_bloc_poubelle} nom='Bloc Poubelles'
                    icon={ <FaTrashAlt className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                <CardStatistique data={data.nbr_poubelle_vendus} nom='Poubelles Vendues'
                    icon={ <FaTrash className='card-icon' style={{width:"40px",color:'gray'}}/>}/>
            </div>    
        </div>
        
        <div className="card" style={{backgroundColor:'white'}}>
            <Typography color="orange" variant='h6'>Gestion Transport déchets</Typography>
            <div className="card-div">
                <CardStatistique data={data.nbr_fournisseur} nom='Zones de depots'
                    icon={ <PinDropIcon className='card-icon' sx={{fontSize:"50px", color:'purple'}}/>}/>
                <CardStatistique data={data.nbr_ouvrier} nom='depots'
                    icon={ <img src={ZoneDepotImg} className='card-icon' style={{width:"55px" , margin:"5px 0 -10px",color:'purple'}}/>}/>
                <CardStatistique data={data.nbr_camion} nom='camion'
                    icon={ <FaTruckMoving className='card-icon' style={{color:'purple'}}/>}/>
            </div> 
            
            <div style={{display:'flex' , justifyContent:"space-around"}}>
                <Typography color="orange" variant='h6'>Gestion  commandes </Typography>
                <Typography color="orange" variant='h6'>Gestion  pannes</Typography>
        </div> 

            <div className="card-div4">
                <CardStatistique data={data.nbr_commande_poubelle} nom='commandes poubelles'
                    icon={ <FaShoppingBasket className='card-icon' style={{color:'green'}}/>}/>
                <CardStatistique data={data.nbr_commande_dechet} nom='commandes dechets'
                    icon={ <MdOutlineRecycling className='card-icon' style={{color:'green'}}/>}/>
    
                <CardStatistique data={data.nbr_panne_poubelle} nom='pannes poubelles'
                    icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
                <CardStatistique data={data.nbr_panne_camion} nom='pannes camions'
                    icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
            </div>    
        </div>
    </div>























<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>






            <Statistic.Group>
                <Statistic color='green'>
                    <Statistic.Value>
                        <Icon name='trash' />
                        <Typography color="primary">{data.nbr_bloc_poubelle}</Typography> 
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Bloc Poubelle</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='yellow'>
                    <Statistic.Value>
                        <Icon name='building' />
                        <Typography color="primary">{data.nbr_etablissement}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Etablissement</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='orange'>
                    <Statistic.Value>
                        <Icon name='map marker alternate' />
                        <Typography color="primary">{data.nbr_zone_travail}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Zone de Travail</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='blue'>
                    <Statistic.Value>
                        <Icon name='truck' />
                        <Typography color="primary">{data.nbr_camion}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Camion</Typography></Statistic.Label>
                </Statistic>

                <Statistic  color='violet'>
                    <Statistic.Value>
                        <Icon name='trash alternate' />
                        <Typography color="primary">{data.nbr_poubelle_vendus}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Poubelle vendue</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='brown'>
                    <Statistic.Value>
                        <Icon name='trash alternate' />
                        <Typography color="primary">{data.nbr_poubelle_stock}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Poubelle en Stock</Typography></Statistic.Label>
                </Statistic>
           
                <Statistic color='olive'> 
                    <Statistic.Value>
                        <Icon name='recycle' />
                        <Typography color="primary">{data.nbr_commande_dechet}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Commande Dechet</Typography></Statistic.Label>
                </Statistic>
                <Statistic color='orange'>
                    <Statistic.Value>
                        <Icon name='shopping basket'/>
                        <Typography color="primary">{data.nbr_commande_poubelle}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Commande Poubelle</Typography></Statistic.Label>
                </Statistic>
            </Statistic.Group>
        
        
        
            <div className="container">
            <div className="card">
                <i className="fab fa-quora"></i>
                Nombre Bloc Poubelle
                <div>0</div>
    
            </div>
            <div className="card">
                <FaTrashAlt/>
                Nombre Total Poubelle
                <div>0</div>
    
            </div>
            <div className="card">
                <FaUserAlt/>
                Nombre personnes
                <div className="number" data-target-number="7500">0</div>
             </div>
        </div>
        <div className="container">
            <div className="card">
                <i className="fas fa-code"></i>
                Total Plastique collecté
                <div className="number" data-target-number="100000">0</div>
            </div>
            <div className="card">
                <i className="fas fa-check"></i>
                Total Papier collecté           
                <div className="number" data-target-number="100000">0</div>
            </div>
            <div className="card">
                <i className="fas fa-check"></i>
                Total Canette collecté
                <div>0</div>
            </div>
            <div className="card">
                <i className="fas fa-check"></i>
                <div>0</div>
                    Total Composte collecté
            </div>
        </div>
        <div className="container">
            <div className="card">
                <i className="fas fa-code"></i>
                <div className="number" data-target-number="100000">0</div>
                    nombre poubelle Plastique remplis
            </div>
            <div className="card">
                <i className="fas fa-check"></i>
                <div>0</div>
                    nombre poubelle Papier remplis
            </div>
            <div className="card">
                <i className="fas fa-check"></i>
                <div>0</div>
                nombre poubelle Canette remplis
            </div>
            <div className="card">
                <i className="fas fa-check"></i>
                <div>0</div>
                nombre poubelle Composte remplis
            </div>
        </div>
    </div>
  )
}
