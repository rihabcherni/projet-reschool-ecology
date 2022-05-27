import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function MessagesGestionnaire() {
  return (
      <div style={{borderRadius:"20px", height:'85vh' , border:"3px solid #3bae40" }}>
        <div style={{backgroundColor:'black',  borderTopLeftRadius:"18px",  borderTopRightRadius:"18px", padding:"20px",color:"white",height:'70px'}}> <Typography  sx={{ fontFamily:"Fredoka" , fontSize:"20px"}}>Chat de membres</Typography></div>
   
        <div style={{padding:"10px"}}>
            
            <Typography sx={{color:"#3bae40", fontWeight:"500", textAlign:"center" , fontFamily:"Fredoka"}}>Bienvenue sur Chat de memberes ! Ici , discutez en privé avec d'autres membres du site</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                secondary={
                    <React.Fragment>
                    <Typography  sx={{ display: 'inline' }}  component="span" variant="body2" color="text.primary">
                        from Alex  
                    </Typography>
                    <br/>
                    {"Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />

            </List>

        </div>
       </div>
  );
}