import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// Material
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

function Success({
  open,
  duration,
  message,
  onClose
}) {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity="success" sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
Success.propTypes = {
  open: PropTypes.bool,
  duration: PropTypes.number,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClose: PropTypes.func
}
Success.defaultValues = {
  open: false,
  duration: 6000,
  onClose: () => {}
}

function Failure ({
  open,
  duration,
  message,
  onClose
}) {
  return  (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert onClose={onClose} elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
Failure.propTypes = {
  open: PropTypes.bool,
  duration: PropTypes.number,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClose: PropTypes.func
}
Failure.defaultValues = {
  open: false,
  duration: 6000,
  onClose: () => {}
}

function Loading ({
  open,
  message,
  onClose
}) {
  return  (
    <Snackbar open={open} onClose={onClose} message={(<div style={{display: 'flex', alignItems: 'center'}}><CircularProgress color="inherit" size={20} style={{marginRight: 10}}/> {message}</div>)}/>
  )
}
Loading.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClose: PropTypes.func
}
Loading.defaultValues = {
  open: false,
  message: '',
  onClose: () => {}
}


export default {
  Success,
  Failure,
  Loading
}