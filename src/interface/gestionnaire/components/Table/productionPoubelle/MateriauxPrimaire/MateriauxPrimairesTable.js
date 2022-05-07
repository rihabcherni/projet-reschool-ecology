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
import DialogMateriauxPrimaires from './DialogMateriauxPrimaires';
import {Item , columnTypes , rowHeight , defaultColDef} from '../../ComponentsTable/Table' 
const initialValue = { id_fournisseur: "", nom_materiel: "",prix_unitaire: "", quantite: "",prix_total:""}
export default function MateriauxPrimairesTable() {
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
  const url = `http://127.0.0.1:8000/api/materiaux-primaires`
  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "id_fournisseur", field: "id_fournisseur", },
    { headerName: "nom_materiel", field: "nom_materiel", },
    { headerName: "prix_unitaire", field: "prix_unitaire", },
    { headerName: "quantite", field: "quantite", },
    { headerName: "prix_total", field: "prix_total", },
    { headerName: "created_at", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
    { headerName: "updated_at", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
    {
      headerName: "Actions", field: "id" ,filter: false, cellRenderer: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"5px"}}><EditIcon/></Button>
        <Button variant="outlined" color="error" onClick={() => handleDelete(params.value)}><DeleteIcon/></Button>
      </div>
    }
  ]
  useEffect(() => {
    getData()
  }, [])
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
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }
  const handleDelete = (id) => {
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", id)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())

    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne ?")
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
    <h2 align="center"> Materiaux Primaires  </h2>
      <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
      <Item  style={{marginBottom:'8px'}}>
            <ManageSearchIcon variant="contained" color="success"  style={{marginBottom:"-7px"}} />
            <input type="text"  onInput={onQuickFilterChanged}  id="quickFilter"  placeholder="recherche..."  style={{backgroundColor:'#DCDCDC', border:'none',padding:"8px" }}/>
      </Item>
      <Item>
              <select style={{marginRight:'5px' , padding:"10px" , borderRadius:"5px",border:"none"}}  onChange={(e)=>onPaginationChange(e.target.value)}>
                <option value='5'>5</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            <Button variant="contained" color="primary" onClick={onBtnExport} style={{marginRight:"5px"}}><FileDownloadIcon/></Button>
            <Button variant="contained" color="success" onClick={handleClickOpen}><AddIcon/></Button>
      </Item>
     
  </Grid>
  <div className="ag-theme-material" style={{ height: '350px'}}>
        <AgGridReact ref={gridRef} rowData={tableData} columnDefs={columnDefs}  defaultColDef={defaultColDef}
                    onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight}
                    pagination={true} paginationPageSize={5}/>
  </div>
      <DialogMateriauxPrimaires open={open} handleClose={handleClose}
      data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
  </div>
  );
}
