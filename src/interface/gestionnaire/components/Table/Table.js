import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ? '#f0f0f0' : '#f0f0f0',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  )
);
export const defaultColDef ={
  resizable: true,sortable: true, flex: 1, filter: true 
}
export const rowHeight = 50;

export const columnTypes =  {    
  numberColumn: { width: 50, filter: 'agNumberColumnFilter' },
  medalColumn: { width: 50, columnGroupShow: 'open', filter: false },
  nonEditableColumn: { editable: false },
  dateColumn: {
    filter: 'agDateColumnFilter',
    filterParams: {
      comparator: (filterLocalDateAtMidnight, cellValue) => {
        const dateParts = cellValue.split('/');
        const day = Number(dateParts[0]);
        const month = Number(dateParts[1]) - 1;
        const year = Number(dateParts[2]);
        const cellDate = new Date(year, month, day);
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        } else if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        } else {
          return 0;
        }
      },
    },
  },
}