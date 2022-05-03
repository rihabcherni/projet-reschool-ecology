import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { Image ,Segment, Grid, Header, Button, Icon, Divider, Form, Input} from 'semantic-ui-react'
import images from '../assets/images/greys.jpg'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Marker} from '@react-google-maps/api';
import axios from 'axios';

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
export default function InterMain() {
    const [contactInput, setcontactInput] = React.useState({
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
        axios.get('sanctum/csrf-cookie').then(response => {
          axios.post(`api/contact-us`,data).then(res =>{
            if(res.data.status === 200){
              localStorage.setItem('auth_token_gestionnaire',res.data.token);
              localStorage.setItem('auth_email_gestionnaire',res.data.email);       
            }else{
              setcontactInput({...contactInput,error_list:res.data.validation_errors});
            }
          }) 
        })
      };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyCM_y_hH1jw8ucuvhzfmGdKMloxPwBjbAo" ,
      });
      if (!isLoaded) return <div>Loading...</div>;
      return (
        <Container>
            {/* produits*/}
            <Segment  id='produits'  style={{ padding: '8em 0em' }} vertical>
                <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                    Nos Produits
                </Header>   
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <br/>
                        <p style={{ fontSize: '1.33em' }}> 
                            Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.
                        </p>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                            <Button size='huge' color='green'>
                                En savoir plus
                                <Icon name='right arrow' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/* mission*/}
            <Segment id='mission' style={{ padding: '8em 0em' }} vertical>
                <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                    Notre Mission
                </Header>
                <Grid  container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column floated='right' width={3}><Image src={images} size='large' circular /></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/*partenaires */}
            <Segment id='partenaires' style={{padding: '8em 0em' }} vertical>
                 <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                    Partenaires
                </Header>
                <br/><br/>
                <Grid  container stackable verticalAlign='middle'>
                    <Grid.Row>      
                        <Grid.Column width={7} textAlign='center' >
                            <p style={{ fontSize: '1.33em' , textAlign:'left' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
                            </p>
                            {/* <Header as='h3' style={{ fontSize: '2em' }} textAlign='left'>
                                Titre 4
                            </Header> */}
                            <p style={{ fontSize: '1.33em', textAlign:'left' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                            </p>
                            <Grid.Row>
                                <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                                    <Button size='huge' color='green'>
                                        En savoir plus
                                        <Icon name='right arrow' />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={images} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/*  apropos*/}
            <Segment id='a-propos' style={{ padding: '8em 0em' }} vertical>
                        <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                            A Propos
                        </Header>
                        <br/><br/>
                        <p style={{ fontSize: '1.33em' }}> 
                            Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.
                        </p>
            </Segment> 
            {/*contact */}  
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
                                        {contactInput.error_list.nom}  
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
                                    {contactInput.error_list.prenom}  
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
                                    {contactInput.error_list.email}  
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
                                 {contactInput.error_list.numero_telephone}  
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
                                {contactInput.error_list.message}     
                            </Form.Group>
                                <Button type='submit' color='green'>Submit</Button>
                            </Form>}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>           
        </Container>
    )
  }
