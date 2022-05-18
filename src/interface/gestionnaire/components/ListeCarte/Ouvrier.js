import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carte from './Carte';
import { Row, Col, Card ,CardGroup,Button} from 'react-bootstrap'
import Client from "./images/Client.jpg"
import './carte.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone  , faBuilding, faUser, faAt, faAddressCard ,faBriefcase, faTruck} from '@fortawesome/free-solid-svg-icons'
import Carte2 from './Carte2';
export default function Ouvrier1() {
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
    <>
      <div>Ouvrier</div>
      <Carte2/>
      <Row style={{margin: "10px", fontSize:"14px"}}  xs={1} md={4} className="g-4">
        {
          ouvriers.length ? (
            ouvriers.map((ouvrier, index) => 
              <Col key={index}>
                          <Card style={{   borderRadius:"5%", textAlign:"left" , backgroundColor:"#dcdcdc", border:"2px solid #808080"}} key={ouvrier.id}>
                            <Card.Body> 
                             <div className="d-flex">  
                                 <div className='align-self-center' style={{textAlign:"center"}}>
                                    <img src={`http://127.0.0.1:8000/storage/images/ouvrier/${ouvrier.photo}`} alt="" style={{width:"100px", height:"100px", border:"4px solid #8d9db6", borderRadius:"50%"}}/>
                                    <p> <i>{ouvrier.poste}</i></p>
                                </div>   
                                <div>
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
                            </Card.Body>
                          </Card>
              </Col>                 
        )
          )
            : <li> No Message Found </li>
        }
      </Row>
      <Carte/>
   </>
  );
}
