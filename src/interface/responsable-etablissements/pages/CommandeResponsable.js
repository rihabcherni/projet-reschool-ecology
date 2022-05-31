import React , {useState ,useEffect} from 'react';
import '../../../App.css'
    
export default function CommandeResponsable() {
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_responsable')}`);

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
  return (
    <div style={{width:"100%"}}> 
        <h2 align="center">Commande responsable</h2>   
             
    </div>
  );
}