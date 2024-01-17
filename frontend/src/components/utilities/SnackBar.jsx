import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';
import { green } from '@mui/material/colors';

export default function TopSnackbar(props) {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });
  
  if(!props.message){
    setState({ ...state, open: false });  
  }
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const { vertical, horizontal, open } = state;

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
       onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
        style={{color:green}}
      >     
        <SnackbarContent style={{ backgroundColor:'green',justifyContent:'center'}}
          message={props.message}
      />
  </Snackbar>
    </Box>
  );
}