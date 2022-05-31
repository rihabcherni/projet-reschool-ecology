import React , {useState ,useEffect} from 'react';
import '../../../App.css'
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

const show=[
            ["Identifiant","id"],
            ["responsable etablissement","responsable_etablissement_id"],
            ["type_paiment","type_paiment"],
            ["montant_total","montant_total"],
            ["date_commande","date_commande"],
            ["date_livraison","date_livraison"],
           ];    
export default function HistoriqueCommande() {
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_responsable')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const [data, setData] = useState(null)
const getData = () => {
fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/commande-responsable", requestOptions)
  .then(response => response.json())
  .then(result => setData(result))
  .catch(error => console.log('error', error));
}
  useEffect(() => {
    getData()
  }, [])

  if(data!==null){
    return (
      <div style={{width:"100%"}}> 
          <h2 align="center">Historique Commande responsable</h2>   
          <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                      <TableRow>
                          <StyledTableCell align="center">photo</StyledTableCell>

                          <StyledTableCell align="center">Numéro commande</StyledTableCell>
                          <StyledTableCell align="center">type_poubelle</StyledTableCell>
                          <StyledTableCell align="center">capacite_poubelle</StyledTableCell>
                          <StyledTableCell align="center">pourcentage_remise</StyledTableCell>

                          <StyledTableCell align="center">quantite</StyledTableCell>
                          <StyledTableCell align="center">prix unitaires</StyledTableCell>
                          <StyledTableCell align="center">Type paiment</StyledTableCell>
                          <StyledTableCell align="center">Montant Total</StyledTableCell>
                          <StyledTableCell align="center">Date Commande</StyledTableCell>
                          <StyledTableCell align="center">Date  Livraison</StyledTableCell>

                      </TableRow>
                  </TableHead>
                  <TableBody>
                
                  {data.map((row) => (
                          <StyledTableRow key={row.id}>
                          <StyledTableCell align="center"> 
                            <img  style={{height:"57px", width:"77px"}} 
                              src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${row.produits.photo}`}alt="poubelle stock" />
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.commande.id}</StyledTableCell>

                          <StyledTableCell align="center">{row.produits.type_poubelle}</StyledTableCell>
                          <StyledTableCell align="center">{row.produits.capacite_poubelle}</StyledTableCell>
                          <StyledTableCell align="center">{row.produits.pourcentage_remise}</StyledTableCell>

                          <StyledTableCell align="center">{row.commande.detail_commande_poubelle.quantite}</StyledTableCell>
                          <StyledTableCell align="center">{row.commande.detail_commande_poubelle.prix_unitaires}</StyledTableCell>

                          <StyledTableCell align="center">{row.commande.type_paiment}</StyledTableCell>
                          <StyledTableCell align="center">{row.commande.montant_total}</StyledTableCell>

                          <StyledTableCell align="center">{row.commande.date_commande}</StyledTableCell>
                          <StyledTableCell align="center">{row.commande.date_livraison}</StyledTableCell>
                            
                      </StyledTableRow>
                  ))}
                      </TableBody>
                  </Table>
          </TableContainer>  
      </div>   
    )
  }else{
    return (
      <>
        <div >
            <Skeleton variant="rectangular"  height={20}/>
            <Skeleton variant="rectangular"  height={20}/>
            <Skeleton variant="rectangular"  height={20}/>
            <Skeleton variant="rectangular"  height={20}/>
        </div>
      </>
    );
  }
}