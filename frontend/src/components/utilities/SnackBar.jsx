import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';
import { green } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../redux/reducer/reducer'
import { setLoginStatus } from "../redux/reducer/reducer";

export default function TopSnackbar(props) {
  const reduxMessage = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const message = props.message;

  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClose = () => {
    dispatch(reset(''));
    console.log('here: ', reduxMessage);
    setState({ ...state, open: false });
  };
  const { vertical, horizontal, open } = state;

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
          onClose={()=>{handleClose()}}
            autoHideDuration={2000}
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            key={vertical + horizontal}
            style={{color:green}}
          >     
            <SnackbarContent style={{ backgroundColor:'green',justifyContent:'center'}}
                message={message}
            />
      </Snackbar>
    </Box>
  );
}