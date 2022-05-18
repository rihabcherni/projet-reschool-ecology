import './style2.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card ,CardGroup,Button} from 'react-bootstrap'
import Client from "./images/Client.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone  , faBuilding, faUser, faAt, faAddressCard ,faBriefcase, faTruck} from '@fortawesome/free-solid-svg-icons'
export default function Carte2() {
  const [ouvriers, setOuvrier] = useState('');
  const url= 'http://127.0.0.1:8000/api/'
  useEffect(()=>{
    getALLOuvrier();
  },[])
  const getALLOuvrier= ()=>{
    axios.get(`${url}ouvrier`)
    .then((response)=>{
      const allOuvrier = response.data.data;
      setOuvrier(allOuvrier);
    })
    .catch(error=> console.error(`Error: ${error}`))
  }
  return (
    <div className="App">
      <div>Ouvrier</div>
      <Row style={{margin: "10px", fontSize:"14px"}}  xs={1} md={4} className="g-4">
        {
          ouvriers.length ? (
            ouvriers.map((ouvrier, index) => 
              <Col key={index}>
                        <div className="card-template card-template-1">
                            <div className="left-part">
                                <img src={`http://127.0.0.1:8000/storage/images/ouvrier/${ouvrier.photo}`}  alt="Avatar"/>
                                <h5> <i>{ouvrier.poste}</i></h5>    
                            </div>
                            <div className="right-part">
                                <h4>{ouvrier.nom +' '+ ouvrier.prenom}</h4>
                                <ul style={{listStyle:"none" , marginLeft:"-10px"}}>
                                    <li> <FontAwesomeIcon icon={faTruck} /><strong style={{marginLeft:"10px"}}>Camion:</strong>{' '+ ouvrier.id_camion}</li> 
                                    <li> <FontAwesomeIcon icon={faAddressCard}/><strong style={{marginLeft:"10px"}}>CIN:</strong>{' '+ouvrier.CIN}  </li> 
                                        <li> <FontAwesomeIcon icon={faBuilding}/><strong  style={{marginLeft:"10px"}}>Address:</strong>{' '+ouvrier.CIN} </li> 
                                        <li> <FontAwesomeIcon icon={faPhone} /><strong  style={{marginLeft:"10px"}}>Telephone:</strong>{' '+ouvrier.numero_telephone} </li> 
                                        <li> <FontAwesomeIcon icon={faAt} /><strong  style={{marginLeft:"10px"}}> Email:</strong>{' '+ouvrier.email} </li> 
                                </ul> 
                            </div>
                        </div>
               </Col>                 
)
  )
    : <li> No Message Found </li>
}
</Row>
</div>
);
}