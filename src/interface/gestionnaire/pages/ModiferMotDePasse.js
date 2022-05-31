import React , {useState , useEffect}  from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,FormControl,FormHelperText,InputLabel,OutlinedInput,InputAdornment ,IconButton} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';
import styled from 'styled-components'
import LogoImage from '../../../Global/images/reschool-blanc.png'

const paperStyle={
  padding :40,height:400,width:400, margin:"10% auto"
}
const avatarStyle={
  backgroundColor:'#21BA45',width:60,height:60
} 
const btnstyle={
  backgroundColor:'#21BA45',
  margin:'8px 0'
}
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
export default function ModiferMotDePasse() {    
  const [data, setData] = useState(null)
  const [validation, setValidation] = useState([])
  const show=[
    ["mot_de_passe","ancien mot de passe"],
    ["nouveau_mot_de_passe","nouveau mot de passe"],
   ];
const handleFormSubmit= (e) =>  {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_gestionnaire')}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
      fetch("http://127.0.0.1:8000/api/auth-gestionnaire/modifier-gestionnaire-password", requestOptions)
      .then(response => response.json())
      .then(resp => {                    
        console.log(resp)

      if(resp.validation_error){
        setValidation(resp.validation_error)
      }else{ 
        setData(resp)
      }})
      .catch(error => console.log('error', error));
    

  console.log(data)}
  const onChange = (e) => {
    const { value, id } = e.target
    setData({ ...data, [id]: value })
    console.log(data)
  }


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; 
  return (
    <Grid>
    <Logo>
         <img width='100px' src={LogoImage} />
    </Logo>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
             <h2 style={{paddingBottom:"30px", marginTop:"5px"}}>Modifier mot de passe</h2>
        </Grid>
    {show.length!==0 ?(show.map(sh => 
                  
        (
            <form>                                      
                    <FormControl focused fullWidth margin="dense" sx={{ marginTop: 2 }} variant="outlined" color="success" >
                        <InputLabel htmlFor="mot_de_passe" >{sh[1]}</InputLabel>
                        <OutlinedInput 
                           id={sh[0]} type='text'  name="mot_de_passe"  onChange={e=>onChange(e)}
                            placeholder={sh[1]}
                            startAdornment={
                              <InputAdornment position="start">
                                <LockIcon/>
                              </InputAdornment>
                            }
                            error={validation[sh[1]]}   label={sh[1]}/> 
                          <FormHelperText error={true}>
                                  {validation[sh[0]]}        
                          </FormHelperText>       
                    </FormControl>
            </form>)
    )):null
  }
    <Button variant="contained" className='tableIcon' onClick={()=>handleFormSubmit()} 
    sx={{margin:"10px 0 0 120px" , width:"200px" ,color:"white", fontWeight:"bold" ,backgroundColor:'#21BA45'}}>modifier</Button>     
    </Paper>
        
    </Grid>
  )
}
