import React, { useState, useCallback, useEffect , useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DialogContactUsShow from './DialogContactUsShow';
import {ButtonTable} from '../../../../../style'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Item , columnTypes , rowHeight, defaultColDef} from '../ComponentsTable/Table'
const initialValue = { nom:"", prenom:"", numero_telephone:"", email:"",message:"",created_at:"", updated_at:""}
export default function ContactUsable() {
  const gridRef = useRef();  
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [openShow, setOpenShow] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)

  const handleClickOpenShow = () => {
    setOpenShow(true);
  };
  const handleCloseShow = () => {
    setOpenShow(false);
  };

  const url = `http://127.0.0.1:8000/api/contact-us`
  const columnDefs = [
    { headerName: "ID", field: "id", width:100,headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true},
    { headerName: "nom", field: "nom"},
    { headerName: "prenom", field: "prenom"},
    { headerName: "numero_telephone", field: "numero_telephone" },
    { headerName: "email", field: "email" },
    { headerName: "message", field: "message"},
    { headerName: "created_at", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
    { headerName: "updated_at", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
    {
      headerName: "Actions",sortable:false,filter:false,maxWidth: 180, cellRenderer: (params) => <div>
      <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
        <Button variant="outlined" color="error" onClick={() => handleDelete(params.data)}><DeleteIcon/></Button>
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
  const handleDelete = (oldData) => {
    console.log(oldData.id)
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", oldData.id)
    if (confirm) {
      fetch(url + `/${oldData.id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getData())
    }
  }
  const handleShow = (oldData) => {
    setFormData(oldData)
    handleClickOpenShow()
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
      <h2 align="center">Contact Us</h2>
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
        </Item>
      
    </Grid>
    <div  className="ag-theme-material" style={{height:"350px"}}>
          <AgGridReact ref={gridRef} rowData={tableData} columnDefs={columnDefs}  defaultColDef={defaultColDef}
                      onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight}
                      pagination={true} paginationPageSize={5}/>
    </div>
      <DialogContactUsShow open={openShow} handleClose={handleCloseShow}
      data={formData} onChange={onChange} />
    </div>
  );
}




