import React, { useState, useEffect } from 'react'
import '../../css/dechetCard.css'
import Typography from '@mui/material/Typography'
import { FaTrashAlt,FaUserAlt,FaBuilding ,FaTrash, FaUserTie,FaShoppingBasket,FaTruckMoving } from "react-icons/fa";
import { MdOutlineRecycling} from "react-icons/md";
import { TiSpanner} from "react-icons/ti";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ZoneDepotImg from '../../../../Global/images/zoneDepot.svg'
import EtageImg from '../../../../Global/images/etage.svg'
import PlastiqueDechet from '../../../../Global/images/plastique.png'
import PapierDechet from '../../../../Global/images/papier.png'
import CanetteDechet from '../../../../Global/images/canette.png'
import ComposteDechet from '../../../../Global/images/composte.png'
import ApartmentIcon from '@mui/icons-material/Apartment';
import PinDropIcon from '@mui/icons-material/PinDrop';
const CardStatistique =( {data , nom ,icon})=>{
 return (
    <div>
        <div style={{display:"flex" , justifyContent:"center"}}>   
            {icon}<Typography color="primary" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}} >{data}</Typography>  
        </div>
        <Typography variant='p' sx={{fontSize:"14px",fontWeight:"500", fontFamily:"Fredoka"}} color="primary">{nom}</Typography>
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

        <div className="card-container4">
            <div className="card-dashboard" style={{backgroundColor:'rgb(18, 102, 241)'}}>
                
            </div>

            <div className="card-dashboard" style={{backgroundColor:'rgb(255, 173, 13)'}}>
              
            </div> 

            <div className="card-dashboard" style={{backgroundColor:'rgb(0, 183, 74) '}}>
                
            </div>

            <div className="card-dashboard" style={{backgroundColor:'rgb(249, 49, 84)'}}>
              
            </div> 
            
        </div>

        <br/>
        <div className="container2">
            <div className="card-dashboard">
                <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion des stocks poubelles</Typography>
                <div className="card-div4">
                        <CardStatistique data={data.nbr_poubelle_plastique} nom=' poubelle plastique'
                            icon={ <img src={PlastiqueDechet} className='card-icon' style={{color:"green" , width:'70px'}}/>}/>
                        <CardStatistique data={data.nbr_poubelle_papier} nom='poubelle papier'
                            icon={ <img src={PapierDechet} className='card-icon' style={{color:"green" , width:'75px'}}/>}/>
                        <CardStatistique data={data.nbr_poubelle_composte} nom='poubelle composte'
                            icon={ <img src={ComposteDechet} className='card-icon' style={{color:"green" , width:'60px'}}/>}/>
                        <CardStatistique data={data.nbr_poubelle_canette} nom='poubelle canette'
                            icon={ <img src={CanetteDechet} className='card-icon' style={{color:"green" , width:'55px'}}/>}/>
                </div>    
            </div>
            <div className="card-dashboard" >
                <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion des stocks dechets (kg)</Typography>
                <div className="card-div4">
                        <CardStatistique data={data.qt_dechet_plastique} nom='dechet plastique'
                            icon={ <img src={PlastiqueDechet} className='card-icon' style={{color:"green" , width:'70px'}}/>}/>
                        <CardStatistique data={data.qt_dechet_papier} nom='dechets papier '
                            icon={ <img src={PapierDechet} className='card-icon' style={{color:"green" , width:'75px'}}/>}/>
                        <CardStatistique data={data.qt_dechet_composte} nom='dechet composte'
                            icon={ <img src={ComposteDechet} className='card-icon' style={{color:"green" , width:'60px'}}/>}/>
                        <CardStatistique data={data.qt_dechet_canette} nom='dechets canette '
                            icon={ <img src={CanetteDechet} className='card-icon' style={{color:"green" , width:'55px'}}/>}/>
                            
                </div>    
            </div> 
        </div>
    
        <div className="container">
            <div className="card-dashboard" >
                <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion ressources humaines</Typography>
                <div className="card-div">
                    <CardStatistique data={data.nbr_ouvrier} nom='Ouvriers' 
                        icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
                    <CardStatistique data={data.nbr_client_dechet} nom='Client Dechet'
                        icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_mecanicien} nom='Mécanicien'
                        icon={ <EngineeringIcon className='card-icon' sx={{color:'red', fontSize:"60px "}}/>}/>
                    <CardStatistique data={data.nbr_fournisseur} nom='Fournisseurs'
                        icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
                
                    <CardStatistique data={data.nbr_responsable_etablissement} nom='Responsable Etablissment'
                        icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_reparteur_poubelle} nom='Réparateurs Poubelle'
                        icon={ <EngineeringIcon className='card-icon' sx={{color:'red',fontSize:"60px "}}/>}/>

                </div>    
            </div>
            <div className="card-dashboard" >
                <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion Etablissement</Typography>
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
            
            <div className="card-dashboard" >
                <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion Transport déchets</Typography>
                <div className="card-div">
                    <CardStatistique data={data.nbr_zone_depot} nom='Zones de depots'
                        icon={ <PinDropIcon className='card-icon' sx={{fontSize:"50px", color:'purple'}}/>}/>
                    <CardStatistique data={data.nbr_depot} nom='depots'
                        icon={ <img src={ZoneDepotImg} className='card-icon' style={{width:"55px" , margin:"5px 0 -10px",color:'purple'}}/>}/>
                    <CardStatistique data={data.nbr_camion} nom='camion'
                        icon={ <FaTruckMoving className='card-icon' style={{color:'purple'}}/>}/>
                </div> 
                
                <div className='container2'>
                  <div>
                    <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"8px"}}>Gestion commandes</Typography>
                    <div className="container2">
                        <CardStatistique data={data.nbr_commande_poubelle} nom='commandes poubelles'
                            icon={ <FaShoppingBasket className='card-icon' style={{color:'green'}}/>}/>
                        <CardStatistique data={data.nbr_commande_dechet} nom='commandes dechets'
                            icon={ <MdOutlineRecycling className='card-icon' style={{color:'green'}}/>}/>
                    </div>   
                  </div>
                  <div>
                    <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"8px"}}>Gestion pannes</Typography>
                    <div className="container2">
                        <CardStatistique data={data.nbr_panne_poubelle} nom='pannes poubelles'
                            icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
                        <CardStatistique data={data.nbr_panne_camion} nom='pannes camions'
                            icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
                    </div>  
                   </div> 
                </div> 
 
            </div>
        </div>
    </div>
  )
}
