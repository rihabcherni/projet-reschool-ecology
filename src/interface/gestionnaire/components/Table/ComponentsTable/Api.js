import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../../../../App.css'
import { Table} from './Table'
import {ButtonTable} from '../../../../../style'
import DialogCrudUpdate from './DialogCrudUpdate';
import DialogShow from './DialogShow';

export default function Api({initialValue, url, columnDefs, show}) {
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [openShow, setOpenShow] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const [validation, setValidation] = useState([])
  
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
    setValidation([])
    };
  const handleClickOpenShow = () => {
    setOpenShow(true);
  };
  const handleCloseShow = () => {
    setOpenShow(false);
  };
    
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetch(url).then(resp => resp.json()).then(resp => {setTableData(resp.data);}).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }
  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  
  const handleShow = (oldData) => {
    setFormData(oldData)
    handleClickOpenShow()
  }
  const handleDelete = (oldData) => {
    console.log(oldData.id)
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", oldData.id)
    if (confirm) {
      fetch(url + `/${oldData.id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())
    }
  }
  const handleFormSubmit= (e) =>  {
    if (formData.id) {
      const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne?")
      confirm && fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
      .then(resp => {
            if(resp.validation_error){
              setValidation(resp.validation_error)
            }else{
              handleClose()
              getData()      
            }
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
          console.log(validation)
      } else {
        // adding new user
        fetch(url, {
          method: "POST", 
          body: JSON.stringify(formData), 
          headers: {
            'content-type': "application/json",
            'Accept': 'application/json'
          }
        }).then(resp => resp.json())
          .then(resp => {
            if(resp.validation_error){
              setValidation(resp.validation_error)
            }else{
               handleClose()
               getData()      
            }
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
          console.log(validation)
      }
    }
    let tableColumn;
    if(columnDefs[0].field==='id'){
        tableColumn=  columnDefs.concat(
            {
                headerName: "Actions",sortable:false,filter:false,maxWidth: 180, cellRenderer: (params) => <div>
                  <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
                  <ButtonTable variant="outlined" className='tableIcon' color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"2px"}}><EditIcon/></ButtonTable>
                  <ButtonTable variant="outlined" className='tableIcon' color="error" onClick={() => handleDelete(params.data)}><DeleteIcon/></ButtonTable>
                </div>
        })
  return (
    <div style={{width:"100%"}}>
        <Table handleClickOpen={handleClickOpen} columnDefs={tableColumn} tableData={tableData}/>
        <DialogCrudUpdate open={open} handleClose={handleClose} show={show}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}  validation={validation} />
       
        <DialogShow open={openShow} handleClose={handleCloseShow}  show={show}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}/>
    </div>
  );
}  }

