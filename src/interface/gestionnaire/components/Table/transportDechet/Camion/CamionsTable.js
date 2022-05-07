import React, { useState,   useCallback, useEffect , useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DialogCamion from './DialogCamion';
import {Item , columnTypes , rowHeight , defaultColDef} from '../../ComponentsTable/Table'
const initialValue = { zone_travail_id:"",qrcode:"", matricule:"", longitude:"", latitude:"",heure_sortie:"",heure_entree:"",volume_maximale_poubelle:"",
volume_actuelle_plastique:"",volume_actuelle_papier:"",volume_actuelle_composte:"",volume_actuelle_canette:"",volume_carburant_consomme:"",Kilometrage:"",created_at:"", updated_at:""}
export default function CamionsTable() {
  const gridRef = useRef();
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = `http://127.0.0.1:8000/api/camion`
  const columnDefs = [
    { headerName: "id", field: "id" ,headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true},
    { headerName: "zone de travil", field: "zone_travail_id"},
    { headerName: "qrcode", field: "qrcode"},
    { headerName: "matricule", field: "matricule"},
    { headerName: "longitude", field: "longitude"},
    { headerName: "latitude", field: "latitude"},
    { headerName: "heure_sortie", field: "heure_sortie"},
    { headerName: "heure_entree", field: "heure_entree"},
    { headerName: "volume_maximale_poubelle", field: "volume_maximale_poubelle"},
    { headerName: "volume_actuelle_plastique", field: "volume_actuelle_plastique"},
    { headerName: "volume_actuelle_papier", field: "volume_actuelle_papier"},
    { headerName: "volume_actuelle_composte", field: "volume_actuelle_composte"},
    { headerName: "volume_actuelle_canette", field: "volume_actuelle_canette"},
    { headerName: "volume carburant consomme  (L)", field: "volume_carburant_consomme"},
    { headerName: "Kilometrage  (KM)", field: "Kilometrage"},
    { headerName: "date de creation ", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
    { headerName: "date màj", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
    {
      headerName: "Actions", field: "id" ,filter: false, cellRenderer: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"5px"}}><EditIcon/></Button>
        <Button variant="outlined" color="error" onClick={() => handleDelete(params.value)}><DeleteIcon/></Button>
      </div>
    }
  ]
 
  // calling getUsers function for first time 
  useEffect(() => {
    getData()
  }, [])
  //fetching user data from server
  const getData = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp.data))
  }
  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }
  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  //deleting a user
  const handleDelete = (id) => {
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", id)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())

    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne?")
      confirm && fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getData()

        })
    } else {
      // adding new user
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getData()
        })
    }
  }
  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);
  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('quickFilter').value
    );
  }, []);
  const onPaginationChange=(pageSize)=>{
    gridApi.api.paginationSetPageSize(Number(pageSize))
  }

  return (
    <div style={{width:"100%"}}>
    <h2 align="center">Camions</h2>

      <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
          <Item style={{marginBottom:'8px' }}>
                <ManageSearchIcon variant="contained" color="success"  style={{marginBottom:"-7px"}} />
                <input type="text"  onInput={onQuickFilterChanged}  id="quickFilter"  placeholder="recherche..."  style={{backgroundColor:'#DCDCDC', border:'none',padding:"8px" }}/>
          </Item>
          <Item>
                  <select style={{marginRight:'5px' , padding:"10px" , borderRadius:"5px",border:"none"}} onChange={(e)=>onPaginationChange(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                  </select>
                <Button variant="contained" color="primary" onClick={onBtnExport} style={{marginRight:"8px"}}><FileDownloadIcon/></Button>
                <Button variant="contained" color="success" onClick={handleClickOpen}><AddIcon/></Button>
          </Item>
         
      </Grid>
      <div className="ag-theme-material" style={{ height: '350px'}}>
        <AgGridReact
        ref={gridRef}
        rowData={tableData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        columnTypes={columnTypes}
        rowHeight={rowHeight}
        pagination={true}
        paginationPageSize={5}
        />
      </div>
      <DialogCamion open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}
