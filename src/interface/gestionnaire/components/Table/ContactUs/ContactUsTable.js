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
import {Item , columnTypes , rowHeight, defaultColDef} from '../../../../../Global/ComponentsTable/Table'
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

  const url = `https://reschoolecology.tech/api/contact-us`
  const columnDefs = [
    { headerName: "Idetifiant", field: "id", maxWidth:150, minWidth:120, pinned: 'left',cellStyle: {color: 'gray',textAlign:"center",'background-color': '#DCDCDC'}},
    { headerName: "nom", field: "nom" , maxWidth:150, minWidth:120},
    { headerName: "prenom", field: "prenom", maxWidth:150, minWidth:120},
    { headerName: "numero_telephone", field: "numero_telephone", maxWidth:150, minWidth:120 },
    { headerName: "email", field: "email", maxWidth:250, minWidth:180 },
    { headerName: "message", field: "message"},
    { headerName: "created_at", field: "created_at", type: ['dateColumn', 'nonEditableColumn']},
    { headerName: "updated_at", field: "updated_at", type: ['dateColumn', 'nonEditableColumn']},
    {
      headerName: "Actions",sortable:false,filter:false,maxWidth: 110, pinned: 'right', cellRenderer: (params) => <div>
      <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
      <ButtonTable variant="outlined" color="error" onClick={() => handleDelete(params.data)}><DeleteIcon/></ButtonTable>
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
    <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <h2 align="center">Contact Us</h2>
        <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
        <Item  style={{margin:"20px 20px 0",backgroundColor:'#DCDCDC'}}>
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
    <div  className="ag-theme-material" style={{height:"350px", margin:"5px", border:"1px solid #DCDCDC"}}>
          <AgGridReact ref={gridRef} rowData={tableData} columnDefs={columnDefs}  defaultColDef={defaultColDef}
                      onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight}
                      pagination={true} paginationPageSize={5}/>
    </div>
      <DialogContactUsShow open={openShow} handleClose={handleCloseShow}
      data={formData} onChange={onChange} />
    </div>
  );
}




