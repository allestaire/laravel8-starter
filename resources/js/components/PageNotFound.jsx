import React, {} from 'react';
// Material
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function PageNotFound({

}) {
  return (
    <Paper elevation={2} sx={{p: 5}}>
      <Typography color="error" variant="h1" align="center">404</Typography>
      <Typography color="error" variant="h6" align="center">Page not found!</Typography>
    </Paper>
  )
}