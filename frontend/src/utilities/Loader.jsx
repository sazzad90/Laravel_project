import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
        backgroundColor:  'rgba(0, 0, 0, 0.95)', //'rgba(255, 255, 255, 0.95)'  

      }}
    >

<CircularProgress />

      
    </Box>
  );
}
