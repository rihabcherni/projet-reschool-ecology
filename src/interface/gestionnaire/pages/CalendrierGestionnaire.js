import { Box, LinearProgress } from '@mui/material';
import React, {useState} from 'react';
import CalendrierBody from '../components/Calender/Calendrier';

export default  function CalendrierGestionnaire()  {
  return (
    <>
        <CalendrierBody />  
        <Box sx={{ width: '100%',color: '#75f'}}>
          <LinearProgress  sx={{ height:"40px"}} color='inherit'  variant='determinate' value={80} ><h1>jjjjjjjjjj</h1></LinearProgress>
        </Box>
    </>

  
  );
}
   