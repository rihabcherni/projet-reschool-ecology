import React, { useState } from 'react'
import { Segment, Grid, Header, Form, Input} from 'semantic-ui-react'
import axios from 'axios';
import { GoogleMap, useLoadScript,Marker } from '@react-google-maps/api';
import Swal from 'sweetalert';
import { FormControl, FormHelperText, InputAdornment, InputLabel, Button, OutlinedInput,Box, TextareaAutosize } from '@mui/material';
import { PersonPinCircleOutlined } from '@material-ui/icons';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { height } from '@mui/system';
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
                Swal("Success", "Votre message a bien été envoyé "+ res.data.data.nom+' '+res.data.data.prenom ,"success")
                setTimeout(function(){
                    window.location.reload(1);
                 }, 3000);
            }else{
                setcontactInput({...contactInput,error_list:res.data.validation_error});
                console.log(res.data.validation_error)
                Swal("Erreur", "Vérifiez votre champ de saisie " ,"error")
            }
          }) 
        
      };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyCM_y_hH1jw8ucuvhzfmGdKMloxPwBjbAo" ,
      });
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <Segment id='contact' style={{ padding: '10em 0em', height:"100vh" }} vertical>
        <p className='title-section' > Contact  </p>

        <Grid  container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={8} textAlign='left'>  
                    <p style={{ fontSize: '1.2em', marginLeft:'40px' }}>N'hésitez pas à nous contacter ! Nous sommes à votre service. </p>     
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>                  
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
                    </GoogleMap>
                </Grid.Column>
                <Grid.Column floated='right' width={8}>
                    <form onSubmit={contactSubmit}>
                        <div style={{display:'grid',rowGap:'1rem', marginTop:"50px"}}>
                            <Box sx={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', columnGap: '1rem'}}>
                                <FormControl fullWidth variant="outlined" color="success">
                                    <InputLabel htmlFor="Nom" sx={{width:"200px"}} >Nom</InputLabel>
                                    <OutlinedInput id="nom" type='text' name="nom" value={contactInput.nom}
                                    onChange={handleInput} placeholder='Entrer votre nom'
                                    startAdornment={<InputAdornment position="start"><PersonPinCircleOutlined/></InputAdornment> }  
                                    error={!!contactInput.error_list.nom} label="Nom" 
                                    />
                                    <FormHelperText error={true}>
                                    {contactInput.error_list.nom}           
                                    </FormHelperText> 
                                </FormControl>
                            
                                <FormControl fullWidth variant="outlined" color="success">
                                    <InputLabel htmlFor="prenom" sx={{width:"200px"}} >Prénom</InputLabel>
                                    <OutlinedInput id="prenom" type='text' name="prenom" value={contactInput.prenom}
                                    onChange={handleInput} placeholder='Entrer votre prénom'
                                    startAdornment={<InputAdornment position="start"><PersonPinCircleOutlined/></InputAdornment> }  
                                    error={!!contactInput.error_list.prenom} label="prenom" 
                                    />
                                    <FormHelperText error={true}>
                                    {contactInput.error_list.prenom}           
                                    </FormHelperText> 
                                </FormControl>
                            </Box>
                            <FormControl fullWidth variant="outlined" color="success">
                                <InputLabel htmlFor="Email" sx={{width:"200px"}} >Adresse Email</InputLabel>
                                <OutlinedInput id="email" type='email' name="email" value={contactInput.email}
                                onChange={handleInput} placeholder='Entrer votre email'
                                startAdornment={<InputAdornment position="start"><AlternateEmailIcon/></InputAdornment> }  
                                error={!!contactInput.error_list.email} label="Adresse Email" 
                                />
                                <FormHelperText error={true}>
                                {contactInput.error_list.email}           
                                </FormHelperText> 
                            </FormControl>

                            <FormControl fullWidth variant="outlined" color="success">
                                <InputLabel htmlFor="numero_telephone" sx={{width:"200px"}} >Numero telephone</InputLabel>
                                <OutlinedInput id="numero_telephone" type='text' name="numero_telephone" value={contactInput.numero_telephone}
                                onChange={handleInput} placeholder='Entrer votre numero telephone'
                                startAdornment={<InputAdornment position="start"><LocalPhoneIcon/></InputAdornment> }  
                                error={!!contactInput.error_list.numero_telephone} label="numero_telephone" 
                                />
                                <FormHelperText error={true}>
                                {contactInput.error_list.numero_telephone}           
                                </FormHelperText> 
                            </FormControl>

                            <FormControl fullWidth variant="outlined" color="success">
                                <TextareaAutosize  id="message" minRows={4} type='text' name="message" value={contactInput.message}
                                    onChange={handleInput} placeholder='Entrer votre message'
                                    startAdornment={<InputAdornment position="start"><PersonPinCircleOutlined/></InputAdornment> }  
                                    error={!!contactInput.error_list.message} label="message" fullWidth
                                    style={{padding:"10px", borderRadius:"5px", border:"1px solid #BEBEBE"}}
                                />                                                
                                <FormHelperText error={true}>
                                {contactInput.error_list.message}           
                                </FormHelperText> 
                            </FormControl>
                        </div>
                        <Button type='submit' color='success'  variant="contained"  sx={{float:" right"}}> Confirmer </Button>
                    </form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>    
  )
}
