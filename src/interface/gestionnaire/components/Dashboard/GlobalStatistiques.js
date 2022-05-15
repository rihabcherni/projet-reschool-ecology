import React, { useState, useEffect } from 'react'
import '../../css/dechetCard.css'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Icon, Statistic } from 'semantic-ui-react'
import { FaTrashAlt,FaUserAlt } from "react-icons/fa";

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

  return (
    <div>
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
                <Statistic color='teal'>
                    <Statistic.Value>
                        <Icon name='user' />
                        <Typography color="primary">{data.nbr_ouvrier}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Ouvriers</Typography></Statistic.Label>
                </Statistic>
                <Statistic  color='red'>
                    <Statistic.Value>
                        <Icon name='user' />
                        <Typography color="primary">{data.nbr_fournisseur}</Typography>
                    </Statistic.Value>
                    <Statistic.Label><Typography color="primary">Fournisseurs</Typography></Statistic.Label>
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
            </Statistic.Group>
            <Statistic.Group>
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
