import React, { useEffect } from 'react'
// Material
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export const Invalid = ({
  open = false,
  duration = 6000,
  message = 'Invalid data!',
  onClose = () => {}
}) => {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export const Success = ({
  open = false,
  duration = 6000,
  message = 'Request success!',
  onClose = () => {}
}) => {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity="success" sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export const Critical = ({
  open = false,
  duration = 6000,
  message = 'Oops something went wrong!',
  onClose = () => {}
}) => {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export const Plain = ({
  open = false,
  duration = 6000,
  message = '',
  onClose = () => {}
}) => {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} message={(<div style={{display: 'flex', alignItems: 'center'}}><CircularProgress size={20} style={{marginRight: 10}}/> {message}</div>)}/>
  )
}

export const Loading = ({
  open = false,
  duration = null,
  message = '',
  onClose = () => {}
}) => {
  return  (
    <Snackbar open={open} onClose={onClose} message={(<div style={{display: 'flex', alignItems: 'center'}}><CircularProgress color="inherit" size={20} style={{marginRight: 10}}/> {message}</div>)}/>
  )
}