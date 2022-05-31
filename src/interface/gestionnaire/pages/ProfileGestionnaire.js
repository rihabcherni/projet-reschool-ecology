import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../../../Global/CSS/profile.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Swal from "sweetalert";
import InputUpdateGestionnaire from '../components/profilePage/InputUpdateGestionnaire';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f2f2f2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function ProfileGestionnaire() {
  const [profile, setProfile]=React.useState([]);
  const [profileImg, setProfileImg]=React.useState("");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_gestionnaire')}`); 
  var requestOptions = { method: 'GET',  headers: myHeaders }; 
  
  const getStatus =()=> {
   fetch("http://127.0.0.1:8000/api/auth-gestionnaire/profile", requestOptions)
   .then(response => response.json()).then(result => {setProfile(result)  })
   .catch(error => console.log('error', error)); }
  
  useEffect(() => {getStatus(); }, [])
  
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{ if(reader.readyState === 2){  setProfileImg(reader.result) } }
    reader.readAsDataURL(e.target.files[0])
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_gestionnaire')}`);
    var formdata = new FormData();
    formdata.append("photo", e.target.files[0], e.target.files[0].name);
    var requestOptions = {  method: 'POST', headers: myHeaders, body: formdata,};
  
    fetch("http://127.0.0.1:8000/api/auth-gestionnaire/updateImage", requestOptions)
      .then(response => response.json()).then(result =>     
        {  window.location.reload();
          Swal('Success',result.message,"success")
        }).catch(error => console.log('error', error)); }

  useEffect(() => {
    ;(async function getStatus() {
       await fetch("http://127.0.0.1:8000/api/auth-gestionnaire/profile", requestOptions)
      .then(response => response.json()).then(result => {  setProfile(result)})
      .catch(error => console.log('error', error));
      })() }, [])

	return (
    <Box sx={{ width: '100%', padding:5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} sx={{height:"100%" ,alignSelf: 'center'}}>
          <Item >
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                  <div className="label">
                    <label className="image-upload" htmlFor="input"><AddAPhotoIcon sx={{color:'black', marginTop:"4px"}}/></label>
                  </div>
                </div>
                          
                <div className="avatar-preview">
                  {profileImg!==null ? 
                    <img src={`http://127.0.0.1:8000/storage/images/gestionnaire/${profile.photo}`} className="img" alt="Avatar"/> :
                    <img src={profileImg} alt="" id="img" className="img" />}       
                </div>
              </div>        
          </Item>  
        </Grid>
        <Grid item xs={8} sx={{alignSelf: 'stretch'}}>
          <Item> {profileImg!==null ?   <InputUpdateGestionnaire/>:null} </Item>
        </Grid>
      </Grid>
    </Box>
	);
}
