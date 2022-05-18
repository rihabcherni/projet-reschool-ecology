import React  from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,FormControl,FormHelperText,InputLabel,OutlinedInput,InputAdornment ,IconButton} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert"
import styled from 'styled-components'
import {Image} from "semantic-ui-react"
import LogoImage from '../../../Global/images/reschool.png'
const Logo= styled.div`
  // padding-top: 30px;  
  padding-left: 40px;  
  font-size: 20px;
  font-weight: bold;
  font-family: berlin;
  color: #21BA45;
  weight: 10%;
  height: 10px;
`
axios.defaults.baseURL= "http://127.0.0.1:8000/api/auth-gestionnaire";
let token='';
if(localStorage.getItem('auth_token')!==''){
	 token=localStorage.getItem('auth_token');
	 axios.interceptors.request.use(function(config){
		config.headers.Authorization = token ? `Bearer ${token}` : '' ; 
		return config;
    });
}
const LoginGestionnaire=()=>{
  function onChange(value) {
    console.log("Captcha value:", value);
  }
    const navigate = useNavigate();
    const [loginInput, setLoginInput] = React.useState({email: '',mot_de_passe: '',showPassword: false,error_list:[],
    });
    const handleInput =  (e) => {
      e.persist();
      setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    };
    const loginSubmit = (e) => {
      e.preventDefault();
      const data = {
        email: loginInput.email,
        mot_de_passe:loginInput.mot_de_passe,
      }
      axios.get('sanctum/csrf-cookie').then(response => {
        axios.post(`api/auth-gestionnaire/login`,data).then(res =>{
          if(res.data.status === 200){
            localStorage.setItem('auth_token',res.data.token);
            localStorage.setItem('auth_email',res.data.gestionnaire.email);
            localStorage.setItem('auth_nom',res.data.gestionnaire.nom);
            localStorage.setItem('auth_prenom',res.data.gestionnaire.prenom);
            localStorage.setItem('auth_adresse',res.data.gestionnaire.adresse);
            localStorage.setItem('auth_CIN',res.data.gestionnaire.CIN);
            localStorage.setItem('auth_numero_telephone',res.data.gestionnaire.numero_telephone);
            window.location.reload();   
            navigate("/gestionnaire");  
            Swal('Success',res.data.message,"success");
          }else if(res.data.status === 401){
            console.log(res.data.validation_errors)
            Swal ( 'Oops' ,  res.data.validation_errors ,"error" )
            setLoginInput({...loginInput,error_list:res.data.validation_errors});
          }
        }) 
      })
    };
    const handleClickShowPassword = () => {
      setLoginInput({
        ...loginInput,
        showPassword: !loginInput.showPassword,
      });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };    
    const paperStyle={
      padding :40,height:550,width:400, margin:"5% auto"
    }
    const avatarStyle={
      backgroundColor:'#21BA45',width:60,height:60
    } //#338037
    const btnstyle={
      backgroundColor:'#21BA45',
      margin:'8px 0'
    }
    return(
        <Grid>
            <Logo>  <img width='100px' src={LogoImage} /> </Logo>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                     <h2 style={{paddingBottom:"30px", marginTop:"5px"}}>Espace Gestionnaire</h2>
                </Grid>
                <form onSubmit={loginSubmit}>
                      <FormControl fullWidth variant="outlined" color="success">
                          <InputLabel htmlFor="Email" sx={{width:"200px"}} >Adresse Email</InputLabel>
                          <OutlinedInput id="email" type='email' name="email" value={loginInput.email}
                            onChange={handleInput} placeholder='Entrer votre email'
                            startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                            error={!!loginInput.error_list.email}  label="Adresse Email" 
                          />
                            <FormHelperText error={true}>
                            {loginInput.error_list.email}           
                          </FormHelperText> 
                      </FormControl>
                      
                      <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined" color="success" >
                          <InputLabel htmlFor="mot_de_passe" >Mot de passe</InputLabel>
                          <OutlinedInput 
                            id="mot_de_passe"
                            type={loginInput.showPassword ? 'text' : 'password'}
                            value={loginInput.mot_de_passe}
                            name="mot_de_passe"
                            onChange={handleInput}
                            placeholder='Entrer votre mot de passe'
                            startAdornment={
                              <InputAdornment position="start">
                                <LockIcon/>
                              </InputAdornment>
                            }
                            endAdornment={<InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword}
                                              onMouseDown={handleMouseDownPassword}
                                              edge="end" >
                                                {loginInput.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                          </InputAdornment>
                            }
                            error={!!loginInput.error_list.mot_de_passe}

                            label="mot de passe" /> 
                            <FormHelperText error={true}>
                            {loginInput.error_list.mot_de_passe}           
                          </FormHelperText> 
                      </FormControl>


                      <FormControlLabel control={ <Checkbox name="Souvenez de moi" color="success"/>} label="Souvenez de moi" />
                      <ReCAPTCHA
                          sitekey='6LcApHsfAAAAAHz09e3JvjZHKzd-8xV4d3BhmeQH'
                          
                          onChange={onChange}
                        />
                                      
                      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth> Se connecter </Button>
                      <Typography sx={{textAlign:"center"}}>
                        <Link href="/gestionnaire/oublier-mot-de-passe" >
                          Avez-vous oublier votre mot de passe ?
                        </Link>
                      </Typography>
                </form>
            </Paper>
        
        </Grid>
    )
}

export default LoginGestionnaire;
