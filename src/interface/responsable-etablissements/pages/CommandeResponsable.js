import React , {useState ,useEffect} from 'react';
import '../../../App.css'
const show=[
            ["Identifiant","id"],
            ["responsable etablissement","responsable_etablissement_id"],
            ["type_paiment","type_paiment"],
            ["montant_total","montant_total"],
            ["date_commande","date_commande"],
            ["date_livraison","date_livraison"],
           ];    
export default function CommandeResponsable() {
  const initialValue = { responsable_etablissement_id:"", type_paiment:"", montant_total:"", date_commande:"", date_livraison:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/auth-responsable-etablissement/commande-responsable`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "responsable etablissement", field: "responsable_etablissement_id"},
    { headerName: "type paiment", field: "type_paiment"},
    { headerName: "montant_total", field: "montant_total"},
    { headerName: "date commande", field: "date_commande"},
    { headerName: "date livraison", field: "date_livraison"},
    { headerName: "prix total", field: "prix_total"}
  ]



var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const [tableData, setTableData] = useState(null)
const getData = () => {
fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/commande-responsable", requestOptions)
  .then(response => response.json())
  .then(result => setTableData(result))
  .catch(error => console.log('error', error));
}
  useEffect(() => {
    getData()
  }, [])

  console.log(tableData)
  var commande=[];
//   axios.interceptors.request.use(function(config){
//   if(localStorage.getItem('auth_token')){
//       			config.headers.Authorization = localStorage.getItem('auth_token') ? `Bearer ${localStorage.getItem('auth_token')}` : '' ; 
//       			console.log(config.headers.Authorization)
//     commande=(
//       <> <h2 align="center">Commande responsable</h2>
//          <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
//          <p>{localStorage.getItem('auth_token')}</p>

//       </>   )
//   }else{  commande=( <p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>) }
// });

    
  return (
    <div style={{width:"100%"}}> 
        <h2 align="center">Commande responsable</h2>        
    </div>
  );
}