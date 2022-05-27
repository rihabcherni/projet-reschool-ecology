import React, { useState } from 'react'
import { Segment, Grid, Header, Button, Form, Input} from 'semantic-ui-react'
import axios from 'axios';
import { GoogleMap, useLoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '95%',
    height: '42vh'
  };
const center = {
    lat: 36.79707659935575,
    lng:  10.198563045367104
  };
  const position = {
      lat: 36.841488984544000000000000000,
      lng: 10.205499186074000000000000000
    }
export default function Contact() {
    const [contactInput, setcontactInput] = useState({
        nom: '',
        prenom: '',
        email: '',
        numero_telephone: '',
        message: '',
        error_list:[],
    });
    const handleInput =  (e) => {
        e.persist();
        setcontactInput({ ...contactInput, [e.target.name]: e.target.value });
    };
    const contactSubmit = (e) => {
        e.preventDefault();
        const data = {
            nom: contactInput.nom,
            prenom:contactInput.prenom,
            email:contactInput.email,
            numero_telephone:contactInput.numero_telephone,
            message:contactInput.message,
        }
          axios.post(`api/contact-us`,data).then(res =>{
            if(res.data.success === true){
                console.log(res.data.data)

            }else{
              setcontactInput({...contactInput,error_list:res.data.validation_error});
              console.log(res.data.validation_error)

            }
          }) 
        
      };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyCM_y_hH1jw8ucuvhzfmGdKMloxPwBjbAo" ,
      });
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <Segment id='contact' style={{ padding: '8em 0em' }} vertical>
    <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
        Contact
    </Header>
    <p style={{ fontSize: '1.2em', marginLeft:'40px' }}> 
    N'hésitez pas à nous contacter ! Nous sommes à votre service.
    </p>     
    <Grid  container stackable verticalAlign='middle'>
        <Grid.Row>
         <Grid.Column width={8} textAlign='left'>  
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}>                  
                    <>
                        <Marker  
                            icon={{ 
                                path: "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z",
                                fillColor: "red",
                                fillOpacity: 1,
                                scale: 1.2,
                                strokeColor: "white",
                                strokeWeight: 2,
                            }}
                            position={position}>                                                   
                        </Marker>             
                    </>
                </GoogleMap>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
                {<Form onSubmit={contactSubmit}>
                    <Form.Group widths={2}>
                        <Form.Field>
                            <label>Nom</label>
                            <Input fluid 
                                placeholder='Nom' 
                                type='text'
                                name="nom"
                                value={contactInput.nom}
                                onChange={handleInput}
                            />
                           <p style={{color:"red" , fontWeight:"bolder"}}>{contactInput.error_list.nom}</p>           
                        </Form.Field>
                        <br/>
                        <Form.Field>
                            <label>Prénom</label>
                            <Input fluid placeholder='Prénom'  
                            type='text'
                            name="prenom"
                            value={contactInput.prenom}
                            onChange={handleInput}
                        />
                        <p style={{color:"red" , fontWeight:"bolder"}}>{contactInput.error_list.prenom}</p>           

                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                       <Form.Field>
                            <label>Email</label>
                            <Input fluid 
                            placeholder='Email'
                            type='email'
                            name="email"
                            value={contactInput.email}
                            onChange={handleInput}
                        />
                        <p style={{color:"red" , fontWeight:"bolder"}}>{contactInput.error_list.email}</p>           

                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Field>
                         <label>numero telephone</label>
                         <Input fluid 
                         placeholder='numero telephone'
                         type='phone'
                         name="numero_telephone"
                         value={contactInput.numero_telephone}
                         onChange={handleInput}
                     />
                     <p style={{color:"red" , fontWeight:"bolder"}}>{contactInput.error_list.numero_telephone}</p>           
                     </Form.Field>
                 </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.TextArea 
                        label='Message'
                        placeholder='...' 
                        type='text'
                        name="message"
                        value={contactInput.message}
                        onChange={handleInput}
                    />
                </Form.Group>
                <p style={{color:"red" , fontWeight:"bolder"}}>{contactInput.error_list.message}</p>           
                    <Button type='submit' color='green'>Submit</Button>
                </Form>}
            </Grid.Column>
        </Grid.Row>
    </Grid>
</Segment>    
  )
}
