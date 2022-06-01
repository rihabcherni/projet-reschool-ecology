import React, {useState , useEffect } from 'react'
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
export default function PannePoubelleEtablissement() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 3|qRrjW79F37pHr8srU3Vzmn6tz6oKMuxwT1TrQoaH");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const [panne, setPanne] = useState(null)
    const getData = () => {
      fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/panne-etablissement-poubelle-responsable", requestOptions)
      .then(response => response.json())
      .then(result => setPanne(result))
      .catch(error => console.log('error', error));
      }
      useEffect(() => {
        getData()
      }, [])
      if(panne!==null){
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Historique Panne poubelle</h1>
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
            <TableRow>
                <StyledTableCell align="center">Numero panne</StyledTableCell>
                <StyledTableCell align="center">image</StyledTableCell>
                <StyledTableCell align="center">poubelle_id</StyledTableCell>
                <StyledTableCell align="center">reparateur_poubelle_id</StyledTableCell>
                <StyledTableCell align="center">description_panne</StyledTableCell>
                <StyledTableCell align="center">cout</StyledTableCell>
                <StyledTableCell align="center">date_debut_reparation</StyledTableCell>
                <StyledTableCell align="center">date_fin_reparation</StyledTableCell>

            </TableRow>
        </TableHead>
        <TableBody>
        
        {panne.map((row) => (
            <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>

                <StyledTableCell align="center"><img src={`http://127.0.0.1:8000/storage/images/pannePoubelle/panne1.jfif`} style={{height:"100px", width:"100px"}}/>
                </StyledTableCell>
                <StyledTableCell align="center">poubelle {row.poubelle_id}</StyledTableCell>
                <StyledTableCell align="center">poubelle {row.reparateur_poubelle_id}</StyledTableCell>
                <StyledTableCell align="center">{row.description_panne}</StyledTableCell>
                <StyledTableCell>{row.cout}</StyledTableCell>
                <StyledTableCell>{row.date_debut_reparation}</StyledTableCell>
                <StyledTableCell>{row.date_fin_reparation}</StyledTableCell>

            </StyledTableRow>
        ))}
            </TableBody>
        </Table>
           </TableContainer>     
    
    </div>
  )
}else{
  return <></>
}
} 