import React from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import CirculairePourcentage from '../../../../Global/CirculairePourcentage/CirculairePourcentage';
import { Box } from '@mui/material';

export default function CardGlobalDechet({color,color2,color3,type_dechet_nombre, type,quantite_dechets ,nbr_poubelle, pourcentage_qt_poubelle, image, 
    somme_qt_dechet,compteur_somme_poubelle,min_qt_poubelle, max_qt_poubelle, compteur_max_poubelle, compteur_min_poubelle, compteur_moy_poubelle}) {
    const BoxCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? color3:  color,
        borderRadius:"10px", 
        textAlign:"center", 
        padding:"10px", 
        color:'white',
        margin:"3px 0px",
    })
);
  return (
    <div className="card-dashboard" style={{borderLeft:`8px solid ${color}`}}>
        <div className="flip-card" style={{width:"100%", height:'330px'}}>
            <div className="flip-card-inner" >
                <div className="flip-card-front" style={{padding:"5px"}}>
                    <Typography variant='h6' sx={{textAlign:'center' , color:{color} , fontFamily:"Fredoka"}}>{type}</Typography>
                    <div className='container2'>
                        <BoxCard>
                            <Typography variant='h5' >{nbr_poubelle}</Typography>  
                            <Typography variant='body2'>Nombre poubelles</Typography>
                        </BoxCard>  
                        <BoxCard>
                            <Typography variant='h5' >{quantite_dechets} KG</Typography>  
                            <Typography variant='body2'>Quantités totales collectées</Typography>
                        </BoxCard>
                </div>
                <div className='container2'>
                        <div>
                            <BoxCard>
                                <CirculairePourcentage percentage={pourcentage_qt_poubelle} image={image} color={color2}/>
                                <Typography variant='body2'>Taux de remplissage actuel des poubelles</Typography>
                            </BoxCard>                                     
                        </div> 

                        <div>
                            <BoxCard>
                                <Typography variant='h5' >{somme_qt_dechet} KG</Typography>  
                                <Typography variant='body2'>Quantités actuellement collectées</Typography>
                            </BoxCard> 
                            <BoxCard>
                                <Typography variant='h5' >{compteur_somme_poubelle}</Typography>  
                                <Typography variant='body2'>Nombre actuel de {type_dechet_nombre}</Typography>
                            </BoxCard>  
                        </div>
                    </div>
                
                </div>
    
                <div className={`flip-card-back flip-card-back-color-${type}`} style={{padding:"10px"}}>
                    <div>
                        <Typography variant='h5' sx={{fontFamily:"Fredoka" , textAlign:"center", color:"white"}} >Taux de remplissage actuel des poubelles:</Typography>  
                        <div className='container2'>
                            <BoxCard>
                                <Typography variant='h5' >{min_qt_poubelle} KG</Typography>  
                                <Typography variant='body2'>Minimale</Typography>
                            </BoxCard> 

                            <BoxCard>
                                <Typography variant='h5' >{max_qt_poubelle} KG</Typography>  
                                <Typography variant='body2'>Maximale</Typography>
                            </BoxCard>
                    </div>         
                    </div>
                    <div>    
                        <Typography variant='h5' sx={{fontFamily:"Fredoka" , textAlign:"center", color:"white"}} >Nombre actuel des {type_dechet_nombre}:</Typography> 
                        <div className='card-div'>
                            <BoxCard>
                                <Typography variant='h6' >{compteur_max_poubelle} KG</Typography>  
                                <Typography variant='body2'>Maximale</Typography>
                            </BoxCard>  
                            <BoxCard>
                                <Typography variant='h6' >{compteur_min_poubelle} KG</Typography>  
                                <Typography variant='body2'>Minimale</Typography>
                            </BoxCard>  
                            <BoxCard>
                                <Typography variant='h6' >{compteur_moy_poubelle} KG</Typography>  
                                <Typography variant='body2'>Moyenne</Typography>
                            </BoxCard>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
