import React, {useState} from 'react'
import Counter from '../components/RightSidebar/Counter';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'dark' ?  '#77D970' :theme.palette.common.black,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.white   :theme.palette.common.white,
    fontSize: 16,
    fontFamily:'Fredoka'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily:'Fredoka',
    backgroundColor: theme.palette.mode === 'dark' ? '#F6F6F6'  : '#4E9F3D'  ,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.black : theme.palette.common.black,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function PanierResponsable() {
  let data= JSON.parse(localStorage.getItem("panier"));
  const removeItem=({child})=>{   
      let panier= JSON.parse(localStorage.getItem("panier"));
      let index1 =  panier.findIndex(object => {
        return object.id === child.id;
      });
      let newarray = panier.filter(data => data.id != child.id);      
      localStorage.setItem('panier',JSON.stringify(newarray)); 
      setTimeout(function(){
        window.location.reload(1);
     }, 2000);
  }

  const removeAll=()=>{   
    let panier= JSON.parse(localStorage.getItem("panier"));
      
    localStorage.setItem('panier',JSON.stringify([])); 
    setTimeout(function(){
      window.location.reload(1);
   }, 2000);}

  let total=[];
    return (
      <div >
       <h1 style={{textAlign:"center"}}>Panier</h1>
      {data ?data.map((child, key) => (
       <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
              <TableRow>
                  <StyledTableCell align="center">image</StyledTableCell>
                  <StyledTableCell align="center">produit</StyledTableCell>
                  <StyledTableCell align="center">capacité</StyledTableCell>
                  <StyledTableCell align="center">remise</StyledTableCell>
                  <StyledTableCell align="center">prix avant remsie</StyledTableCell>
                  <StyledTableCell align="center">prix avec remise</StyledTableCell>
                  <StyledTableCell align="center">supprimer</StyledTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
          
          {data.map((row) => (
              <StyledTableRow key={row.id}>
                  <StyledTableCell align="center"><img src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${child.photo}`} style={{height:"100px", width:"100px"}}/>
                  </StyledTableCell>
                  <StyledTableCell align="center">poubelle {child.type_poubelle}</StyledTableCell>
                  <StyledTableCell align="center">{child.capacite_poubelle} Litre</StyledTableCell>
                  <StyledTableCell>-{child.pourcentage_remise}%</StyledTableCell>
                  <StyledTableCell align="center"> <li style={{textDecoration: "line-through"}}>{child.prix_unitaire} TND</li></StyledTableCell>
                  <StyledTableCell align="center">{child.prix_unitaire -((child.prix_unitaire * child.pourcentage_remise)/100)} TND</StyledTableCell>
                  <StyledTableCell>
                    <button style={{height:"30px", marginLeft:"50px",width:"40px",borderRadius:"50%", border:"none",backgroundColor:"red",color:"white"}} onClick={()=>removeItem({child})}>
                      <ClearIcon/>
                    </button>
                  </StyledTableCell>
              </StyledTableRow>
          ))}
              </TableBody>
          </Table>
             </TableContainer>     
      )) :<p>vide</p>}
      </div>
  )}
