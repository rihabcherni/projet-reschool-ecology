import React , {useState, useEffect} from 'react'

export default function ProfileResponsable() {
  
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const [tableData, setTableData] = useState(null)
const getData = () => {
fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/profile", requestOptions)
  .then(response => response.json())
  .then(result => setTableData(result))
  .catch(error => console.log('error', error));
}
  useEffect(() => {
    getData()
  }, [])

  console.log(tableData)
  var commande=[];
  return (
    <>ProfileResponsable</>
  )
}
